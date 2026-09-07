import fs from 'node:fs/promises';
import path from 'node:path';
import http from 'node:http';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(import.meta.dirname, '..');
const baseline = process.argv.includes('--baseline');
const folder = path.join(root, baseline ? 'reports/baseline' : 'public_html');
const prefix = baseline ? '/airsoft-assocation-site' : '';
const types = { '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.avif': 'image/avif', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.ico': 'image/x-icon' };
const server = http.createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url, 'http://test.invalid').pathname);
    if (prefix && pathname.startsWith(prefix)) pathname = pathname.slice(prefix.length) || '/';
    let file = path.resolve(folder, '.' + pathname);
    if (!file.startsWith(folder + path.sep) && file !== folder) { res.writeHead(403); res.end(); return; }
    const stat = await fs.stat(file).catch(() => null);
    if (stat?.isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(301, { Location: prefix + pathname + '/' }); res.end(); return; }
      file = baseline && !await fs.stat(path.join(file, 'index.html')).catch(() => null) ? file + '.html' : path.join(file, 'index.html');
    } else if (!stat && baseline && !path.extname(file)) file += '.html';
    let data = await fs.readFile(file).catch(() => null);
    let status = 200;
    if (!data) { status = 404; file = path.join(folder, '404.html'); data = await fs.readFile(file); }
    res.writeHead(status, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }); res.end(data);
  } catch { res.writeHead(500); res.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ executablePath: process.env.BROWSER_EXECUTABLE, headless: true });
const errors = [], failedRequests = [], pages = [];
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
const page = await context.newPage();
page.on('pageerror', error => errors.push(error.message));
page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
page.on('response', response => { if (response.status() >= 400) failedRequests.push(`${response.status()} ${response.url()}`); });
const goto = route => page.goto(origin + prefix + route, { waitUntil: 'networkidle' });
async function language(lang) {
  await page.getByRole('button', { name: lang.toUpperCase(), exact: true }).click();
  await page.waitForFunction(value => document.documentElement.lang === value, lang);
  const text = await page.locator('body').innerText();
  assert(!/\ufffd|\[object Object\]|translation_missing|\bundefined\b|\bnull\b|\?{3,}/.test(text), 'Corrupt visible text');
  if (lang === 'th') assert((await page.locator('header').textContent()).includes('หน้าหลัก'), 'Thai navigation missing');
}
async function images() {
  await page.evaluate(async () => { for (const img of document.images) { img.loading = 'eager'; await img.decode().catch(() => {}); } });
  const broken = await page.locator('img').evaluateAll(imgs => imgs.filter(i => !i.complete || !i.naturalWidth).map(i => i.src));
  assert.deepEqual(broken, []);
}
try {
  await goto('/'); await images();
  assert.equal(await page.locator('html').getAttribute('lang'), 'en');
  await page.screenshot({ path: path.join(root, `reports/${baseline ? 'baseline' : 'production'}-desktop.png`), fullPage: true });
  if (!baseline) {
    const audit = JSON.parse(await fs.readFile(path.join(root, 'reports/production-audit.json'), 'utf8'));
    for (const route of audit.routes.filter(r => !r.startsWith('/404') && !r.startsWith('/_not-found'))) {
      const response = await goto(route); assert.equal(response.status(), 200, route);
      assert(await page.locator('main').innerText(), `Blank page ${route}`);
      await language('th'); await images();
      assert.equal((await page.reload({ waitUntil: 'networkidle' })).status(), 200);
      assert.equal(await page.locator('html').getAttribute('lang'), 'th');
      await language('en'); pages.push(route);
    }
    await goto('/');
    await page.getByRole('button', { name: 'ABOUT THE ASSOCIATION', exact: false }).click();
    await page.getByRole('link', { name: 'About the Association', exact: true }).first().click();
    await page.waitForURL('**/association/about/');
    assert.equal((await page.reload()).status(), 200);
  }
  await page.setViewportSize({ width: 390, height: 844 }); await goto('/'); await language('en'); await images();
  await page.screenshot({ path: path.join(root, `reports/${baseline ? 'baseline' : 'production'}-mobile.png`), fullPage: true });
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  assert.equal(await page.locator('#mobile-navigation').getAttribute('aria-hidden'), 'false');
  await page.locator('#mobile-navigation summary').first().click();
  await page.locator('#mobile-navigation a[href*="association/about"]').click();
  await page.waitForURL(url => /\/association\/about\/?$/.test(url.pathname));
  assert.equal(await page.locator('#mobile-navigation').getAttribute('aria-hidden'), 'true');
  await language('th');
  await page.getByRole('button', { name: 'เปิดเมนู', exact: true }).click();
  await page.locator('#mobile-navigation a').first().waitFor({ state: 'visible' });
  assert((await page.locator('#mobile-navigation').textContent()).includes('หน้าหลัก'));
  await page.screenshot({ path: path.join(root, `reports/${baseline ? 'baseline' : 'production'}-thai-menu.png`) });
  await page.keyboard.press('Escape'); await language('en');
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'Mobile overflow');
  if (!baseline) {
    const fresh = await context.newPage();
    assert.equal((await fresh.goto(origin + '/rules-safety/playing-rules')).status(), 200);
    assert.equal((await fresh.reload()).status(), 200); await fresh.close();
    assert.equal((await context.request.get(origin + '/missing-route-for-test/')).status(), 404);
    assert.equal((await context.request.get(origin + '/missing-file.js')).status(), 404);
  }
  await fs.writeFile(path.join(root, `reports/${baseline ? 'baseline' : 'browser'}-network.json`), JSON.stringify({ errors, failedRequests }, null, 2));
  assert.deepEqual(failedRequests, []); assert.deepEqual(errors, []);
  const report = { pages, desktopNavigation: true, mobileNavigation: true, languageBothDirections: true, refresh: true, imagesDecode: true, errors, failedRequests, apache: 'Static server emulation; live Hostinger not accessed' };
  await fs.writeFile(path.join(root, `reports/${baseline ? 'baseline' : 'browser'}-verification.json`), JSON.stringify(report, null, 2));
  console.log(`Browser verification passed: ${pages.length} routes, EN/TH, desktop/mobile, refresh, image decoding.`);
} finally { await browser.close(); server.close(); }
