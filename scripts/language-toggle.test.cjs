/* eslint-disable @typescript-eslint/no-require-imports */
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { existsSync, readFileSync } = require("node:fs");
const { resolve } = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");

const root = resolve(__dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const navigationCode = ts.transpileModule(read("data/navigation.ts"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
const navigationExports = {};
vm.runInNewContext(navigationCode, { exports: navigationExports });
const { getLabel, navigation } = navigationExports;
const header = read("components/layout/SiteHeader.tsx");
const footer = read("components/layout/SiteFooter.tsx");
const provider = read("components/i18n/LanguageProvider.tsx");
const layout = read("app/layout.tsx");

test("shared navigation exposes the supplied English and Thai labels without changing routes", () => {
  assert.equal(getLabel(navigation[0].label, "en"), "HOME");
  assert.equal(getLabel(navigation[0].label, "th"), "หน้าหลัก");
  assert.equal(getLabel(navigation[2].label, "th"), "กิจกรรมและอีเวนต์ที่กำลังจะมาถึง");
  assert.equal(getLabel(navigation[6].label, "th"), "กฎระเบียบและความปลอดภัย");
  assert.equal(navigation[3].children[0].href, "/association/about");
  assert.equal(getLabel(navigation[3].children[0].label, "th"), "เกี่ยวกับสมาคม");
});

test("language provider defaults to English and persists only after hydration", () => {
  assert.match(provider, /useState<SiteLanguage>\("en"\)/);
  assert.match(provider, /localStorage\.getItem\("taa-language"\)/);
  assert.match(provider, /if \(!hydrated\) return/);
  assert.match(provider, /document\.documentElement\.lang = language/);
  assert.match(provider, /localStorage\.setItem\("taa-language", language\)/);
});

test("header and footer share the same language state and the Thai font boundary", () => {
  assert.match(header, /const \{ language, setLanguage \} = useLanguage\(\)/);
  assert.match(header, /setLanguage\("th"\)/);
  assert.match(header, /setLanguage\("en"\)/);
  assert.match(header, /getLabel\(item\.label, language\)/);
  assert.match(footer, /const \{ language \} = useLanguage\(\)/);
  assert.match(footer, /getLabel\(group\.label, language\)/);
  assert.match(layout, /Noto_Sans_Thai/);
  assert.match(layout, /LanguageProvider/);
  assert.match(layout, /<LanguageProvider><SiteHeader \/><main>\{children\}<\/main><SiteFooter \/><\/LanguageProvider>/);
});

test("new information routes are real page shells", () => {
  for (const route of ["become-a-referee", "become-a-member", "complaint"]) {
    assert.ok(existsSync(resolve(root, "app", route, "page.tsx")));
  }
});
