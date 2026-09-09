import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require(require.resolve('sharp', { paths: [path.dirname(require.resolve('next/package.json'))] }));
const root = path.resolve(import.meta.dirname, '..'), folder = path.join(root, 'public_html');
async function walk(dir) {
  const files = [];
  for (const item of await fs.readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, item.name);
    if (item.isDirectory()) files.push(...await walk(file)); else files.push(file);
  }
  return files;
}
const files = await walk(folder), names = new Set(files.map(f => path.relative(folder, f).replaceAll('\\', '/')));
const errors = [], references = new Set(), hashes = new Map(), routes = [];
let total = 0, images = 0, imageBytes = 0, avif = 0, webp = 0;
const runtimeTokens = {};
for (const file of files) {
  const rel = path.relative(folder, file).replaceAll('\\', '/'), data = await fs.readFile(file);
  if (/__next\.[^/]+\//.test(rel)) errors.push(`Unnormalized navigation-data filename: ${rel}`);
  total += data.length;
  if ((/\.(png|jpe?g|gif|bmp|tiff?|map|zip)$/.test(rel) && rel !== 'images/optimized/association-logo-favicon-64.png') || /(^|\/)(node_modules|\.git|src|\.env)(\/|$)/.test(rel)) errors.push(`Excluded file: ${rel}`);
  if (/\.(avif|webp)$/.test(rel)) {
    const meta = await sharp(data).metadata(); await sharp(data).raw().toBuffer();
    if ((rel.endsWith('.webp') && meta.format !== 'webp') || (rel.endsWith('.avif') && meta.format !== 'heif')) errors.push(`Wrong image encoding: ${rel}`);
    if (meta.exif || meta.xmp) errors.push(`Image metadata: ${rel}`);
    if (rel.includes('association-logo') && !meta.hasAlpha) errors.push('Lost logo transparency');
    images++; imageBytes += data.length; if (rel.endsWith('.avif')) avif++; else webp++;
    const hash = crypto.createHash('sha256').update(data).digest('hex');
    if (hashes.has(hash)) errors.push(`Duplicate image: ${rel}, ${hashes.get(hash)}`); hashes.set(hash, rel);
  }
  if (!/\.(html|txt|json|css|js)$/.test(rel)) continue;
  let text;
  try { text = new TextDecoder('utf-8', { fatal: true }).decode(data); } catch { errors.push(`Invalid UTF-8: ${rel}`); continue; }
  // The framework URL decoder intentionally contains the Unicode replacement sentinel.
  if (text.includes('\ufffd') && !rel.endsWith('.js')) errors.push(`Replacement character: ${rel}`);
  // Turbopack's inert /ROOT/ source-URL helper is not a filesystem dependency.
  if (/\b[C-D]:[\\/]|file:\/\/\/(?!ROOT\/)/.test(text)) errors.push(`Local path: ${rel}`);
  for (const token of ['localhost', '127.0.0.1']) if (text.includes(token)) runtimeTokens[rel] = [...(runtimeTokens[rel] ?? []), token];
  if (rel.endsWith('.html')) {
    if (!/<meta charSet="utf-8"\s*\/?\s*>/i.test(text)) errors.push(`Missing UTF-8 charset: ${rel}`);
    if (rel.endsWith('index.html')) routes.push('/' + rel.slice(0, -10));
    for (const m of text.matchAll(/(?:href|src)="([^"<>]+)"/g)) references.add(m[1].replaceAll('&amp;', '&'));
    for (const m of text.matchAll(/srcSet="([^"<>]+)"/gi)) for (const value of m[1].split(',')) references.add(value.trim().split(/\s+/)[0]);
  }
  for (const m of (rel.endsWith('.css') ? text : '').matchAll(/url\(["']?([^\s)'";]+)["']?\)/g)) {
    const value = m[1];
    if (!value.startsWith('data:')) references.add(value.startsWith('/') ? value : '/' + path.posix.normalize(path.posix.join(path.posix.dirname(rel), value)));
  }
  for (const m of text.matchAll(/\/images\/[a-zA-Z0-9_./-]+\.(?:avif|webp|png|jpg|jpeg)/g)) references.add(m[0]);
}
for (const ref of references) {
  if (/^(https?:|mailto:|tel:|data:|#)/.test(ref)) { if (ref.startsWith('http:')) errors.push(`Insecure URL: ${ref}`); continue; }
  const clean = decodeURIComponent(ref.split(/[?#]/)[0]).replace(/^\//, '');
  if (!clean) continue;
  if (!names.has(clean) && !names.has(clean.replace(/\/$/, '') + '/index.html')) errors.push(`Missing/case-mismatched reference: ${ref}`);
}
const before = JSON.parse(await fs.readFile(path.join(root, 'reports/images.json'), 'utf8')).reduce((n, image) => n + image.before, 0);
const sourceFiles = (await Promise.all(['app', 'components', 'data'].map(dir => walk(path.join(root, dir))))).flat();
const sourceNames = new Set(sourceFiles.map(file => path.relative(root, file).replaceAll('\\', '/')));
for (const file of sourceFiles.filter(file => /\.tsx?$/.test(file))) {
  const rel = path.relative(root, file).replaceAll('\\', '/');
  const source = await fs.readFile(file, 'utf8');
  for (const match of source.matchAll(/(?:from\s+|import\s*)["']([^"']+)["']/g)) {
    const specifier = match[1];
    if (!specifier.startsWith('@/') && !specifier.startsWith('.')) continue;
    const name = specifier.startsWith('@/') ? specifier.slice(2) : path.posix.normalize(path.posix.join(path.posix.dirname(rel), specifier));
    if (![name, name + '.ts', name + '.tsx', name + '/index.ts', name + '/index.tsx'].some(candidate => sourceNames.has(candidate))) errors.push(`Source import case/missing file: ${rel}: ${specifier}`);
  }
}
const report = { files: files.length, bytes: total, routes: routes.sort(), images, avif, webp, imageBytesBefore: before, imageBytesAfter: imageBytes, imageReductionPercent: +(100 * (1 - imageBytes / before)).toFixed(1), referencesChecked: references.size, runtimeTokens, errors };
await fs.writeFile(path.join(root, 'reports/production-audit.json'), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
if (errors.length) process.exitCode = 1;
