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
const mission = read("data/mission.ts");

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

test("mission copy switches through the global language layer", () => {
  assert.match(mission, /Building the Future of Airsoft & Paintball in Thailand/);
  assert.match(mission, /Airsoft and Paintball Hub of Asia/);
  assert.match(mission, /สร้างอนาคตของกีฬาแอร์ซอฟต์และเพ้นท์บอลในประเทศไทย/);
  assert.match(mission, /หนึ่งมาตรฐาน • หนึ่งชุมชน • หนึ่งอนาคตระดับโลก/);
  assert.match(read("components/sections/OurMissionSection.tsx"), /useLanguage/);
  assert.match(read("components/mission/MissionPageContent.tsx"), /useLanguage/);
});

test("mission typography preserves the shared editorial hierarchy without divider rules", () => {
  const missionPage = read("components/mission/MissionPageContent.tsx");
  const missionStyles = read("components/mission/MissionPageContent.module.css");
  const globalStyles = read("app/globals.css");
  const missionSection = read("components/sections/OurMissionSection.tsx");
  assert.match(globalStyles, /--editorial-title-size:clamp\(2\.5rem,5vw,4rem\)/);
  assert.match(globalStyles, /--editorial-lead-size:clamp\(1\.25rem,2\.2vw,1\.75rem\)/);
  assert.match(missionPage, /<h1 id="mission-title">\{copy\.eyebrow\}<\/h1>/);
  assert.match(missionPage, /className=\{styles\.lead\}>\{copy\.title\}/);
  assert.doesNotMatch(missionStyles, /border-top/);
  assert.match(missionSection, /align="right"/);
});

test("national standards copy is bilingual on the homepage and its real route", () => {
  const standards = read("data/national-standards.ts");
  assert.match(standards, /ESTABLISH NATIONAL STANDARDS/);
  assert.match(standards, /One National Standard\. Greater Trust\. World-Class Competition\./);
  assert.match(standards, /กำหนดมาตรฐานระดับประเทศ/);
  assert.match(standards, /หนึ่งมาตรฐานระดับประเทศ • สร้างความเชื่อมั่น • ก้าวสู่การแข่งขันระดับโลก/);
  assert.match(read("components/sections/NationalStandardsSection.tsx"), /useLanguage/);
  assert.ok(existsSync(resolve(root, "app", "what-we-do", "national-standards", "page.tsx")));
});
