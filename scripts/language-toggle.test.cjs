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
const sportTourism = read("data/sport-tourism.ts");
const sportTourismPages = read("data/sport-tourism-pages.ts");
const leadership = read("data/leadership.ts");
const fieldDevelopment = read("data/field-development.ts");
const rulesSafetyPages = read("data/rules-safety-pages.ts");

test("shared navigation exposes the supplied English and Thai labels without changing routes", () => {
  assert.equal(getLabel(navigation[0].label, "en"), "HOME");
  assert.equal(getLabel(navigation[0].label, "th"), "หน้าหลัก");
  assert.equal(getLabel(navigation[2].label, "th"), "กิจกรรมและอีเวนต์ที่กำลังจะมาถึง");
  assert.equal(getLabel(navigation[6].label, "th"), "กฎระเบียบและความปลอดภัย");
  assert.equal(navigation[3].children[0].href, "/association/about");
  assert.equal(getLabel(navigation[3].label, "en"), "ABOUT THE ASSOCIATION");
  assert.equal(getLabel(navigation[3].label, "th"), "เกี่ยวกับสมาคม");
  assert.equal(getLabel(navigation[3].children[1].label, "en"), "Why the Association Was Created");
  assert.equal(getLabel(navigation[3].children[1].label, "th"), "เหตุผลที่ก่อตั้งสมาคม");
});

test("about association dropdown contains the non-duplicated bilingual directory", () => {
  const association = navigation.find((item) => getLabel(item.label, "en") === "ABOUT THE ASSOCIATION");
  const english = [...association.children].map((item) => getLabel(item.label, "en"));
  const thai = [...association.children].map((item) => getLabel(item.label, "th"));
  assert.equal(english.length, 12);
  assert.deepEqual(english, [
    "About the Association",
    "Why the Association Was Created",
    "Association Background",
    "Leadership & Board of Directors",
    "Establish National Playing Standards",
    "Promote Safety & Fair Play",
    "Education & Development",
    "Field Development",
    "Teamwork & Sportsmanship",
    "International Competition",
    "Tournaments & Major Events",
    "Play With Purpose",
  ]);
  assert.deepEqual(thai, [
    "เกี่ยวกับสมาคม",
    "เหตุผลที่ก่อตั้งสมาคม",
    "ประวัติของสมาคม",
    "คณะผู้นำและคณะกรรมการบริหาร",
    "กำหนดมาตรฐานการเล่นระดับประเทศ",
    "ส่งเสริมความปลอดภัยและการแข่งขันอย่างยุติธรรม",
    "การศึกษาและการพัฒนา",
    "การพัฒนาสนาม",
    "การทำงานเป็นทีมและน้ำใจนักกีฬา",
    "การแข่งขันระดับนานาชาติ",
    "การแข่งขันและอีเวนต์ขนาดใหญ่",
    "เล่นอย่างมีเป้าหมาย",
  ]);
  assert.match(header, /styles\.longMega/);
  assert.match(header, /styles\.longMobileDetails/);
  assert.match(header, /styles\.whatWeDoMega/);
  assert.match(read("components/layout/SiteHeader.module.css"), /\.longMega a,\.whatWeDoMega a\{font-size:\.9rem\}/);
});

test("what we do dropdown contains the exact supplied English and Thai items in order", () => {
  const whatWeDo = navigation.find((item) => getLabel(item.label, "en") === "WHAT WE DO");
  const english = [...whatWeDo.children].map((item) => getLabel(item.label, "en"));
  const thai = [...whatWeDo.children].map((item) => getLabel(item.label, "th"));
  assert.deepEqual(english, [
    "Establish National Standards",
    "Promote Safety & Fair Play",
    "Educate Players, Teams & Fields",
    "Develop Players & Teams",
    "Support & Improve Airsoft and Paintball Fields",
    "Organize Professional Competitions & Events",
    "Build a Pathway to International Competition",
    "Strengthen the Airsoft & Paintball Community",
    "Promote Teamwork, Leadership & Sportsmanship",
    "Promote Thailand as the Airsoft & Paintball Hub of Asia",
    "Advance Airsoft & Paintball as Recognized Sports",
  ]);
  assert.deepEqual(thai, [
    "กำหนดมาตรฐานระดับประเทศ",
    "ส่งเสริมความปลอดภัยและการแข่งขันอย่างยุติธรรม",
    "ให้ความรู้แก่ผู้เล่น ทีม และสนาม",
    "พัฒนาผู้เล่นและทีม",
    "สนับสนุนและยกระดับสนามแอร์ซอฟต์และเพ้นท์บอล",
    "จัดการแข่งขันและอีเวนต์อย่างมืออาชีพ",
    "สร้างเส้นทางสู่การแข่งขันระดับนานาชาติ",
    "สร้างความเข้มแข็งให้กับชุมชนแอร์ซอฟต์และเพ้นท์บอล",
    "ส่งเสริมการทำงานเป็นทีม ภาวะผู้นำ และน้ำใจนักกีฬา",
    "ผลักดันประเทศไทยสู่การเป็นศูนย์กลางแอร์ซอฟต์และเพ้นท์บอลแห่งเอเชีย",
    "ผลักดันแอร์ซอฟต์และเพ้นท์บอลสู่การเป็นกีฬาที่ได้รับการยอมรับ",
  ]);
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
  for (const route of ["become-a-referee", "become-a-member", "complaint", "play-with-purpose", "sport-tourism"]) {
    assert.ok(existsSync(resolve(root, "app", route, "page.tsx")));
  }
});

test("sport tourism copy is bilingual on the homepage and dedicated page", () => {
  assert.match(sportTourism, /The Airsoft and Paintball Association is committed to positioning Thailand as a premier destination/);
  assert.match(sportTourism, /Come for the Game\. Stay for the Adventure\. Experience Thailand\./);
  assert.match(sportTourism, /การท่องเที่ยวเชิงกีฬา/);
  assert.match(sportTourism, /มาเพื่อแข่งขัน • อยู่ต่อเพื่อการผจญภัย • สัมผัสประเทศไทย/);
  assert.match(read("components/sections/SportTourismSection.tsx"), /useLanguage/);
  assert.match(read("components/sport-tourism/SportTourismPageContent.tsx"), /useLanguage/);
  assert.match(read("app/page.tsx"), /SportTourismSection/);
});

test("sport tourism detail pages use the supplied bilingual copy and routes", () => {
  assert.match(sportTourismPages, /INTERNATIONAL REPRESENTATION/);
  assert.match(sportTourismPages, /Represent Thailand\. Connect the World\. Build the Future of the Sport\./);
  assert.match(sportTourismPages, /การเป็นตัวแทนในระดับนานาชาติ/);
  assert.match(sportTourismPages, /เป็นตัวแทนประเทศไทย • เชื่อมโยงสู่โลก • ร่วมสร้างอนาคตของกีฬา/);
  assert.match(sportTourismPages, /INTERNATIONAL PARTNERSHIPS/);
  assert.match(sportTourismPages, /Strong Partnerships\. Shared Vision\. Regional Leadership\./);
  assert.match(sportTourismPages, /พันธมิตรระดับนานาชาติ/);
  assert.match(sportTourismPages, /พันธมิตรที่แข็งแกร่ง • วิสัยทัศน์ร่วมกัน • ก้าวสู่ผู้นำระดับภูมิภาค/);
  assert.match(sportTourismPages, /REGIONAL EVENTS/);
  assert.match(sportTourismPages, /Regional Reach\. International Standards\. World-Class Experience\./);
  assert.match(sportTourismPages, /อีเวนต์ระดับภูมิภาค/);
  assert.match(sportTourismPages, /ครอบคลุมระดับภูมิภาค • มาตรฐานระดับนานาชาติ • ประสบการณ์ระดับโลก/);
  assert.match(sportTourismPages, /INTERNATIONAL EVENTS/);
  assert.match(sportTourismPages, /From Thailand to the World\. Compete Globally\. Produce Globally\. Build a Global Standard\./);
  assert.match(sportTourismPages, /อีเวนต์ระดับนานาชาติ/);
  assert.match(sportTourismPages, /จากประเทศไทยสู่เวทีโลก • แข่งขันระดับโลก • จัดงานระดับโลก • สร้างมาตรฐานระดับโลก/);
  assert.match(read("components/sport-tourism/SportTourismDetailPageContent.tsx"), /useLanguage/);
  for (const route of ["events", "regional-events", "international-representation", "partnerships"]) {
    assert.ok(existsSync(resolve(root, "app", "sport-tourism", route, "page.tsx")));
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

test("leadership and board page has the supplied bilingual copy", () => {
  assert.match(leadership, /LEADERSHIP & BOARD/);
  assert.match(leadership, /Experienced Leadership\. Strong Vision\. One Mission for Thailand\./);
  assert.match(leadership, /คณะผู้นำและคณะกรรมการ/);
  assert.match(leadership, /ผู้นำมากประสบการณ์ • วิสัยทัศน์ชัดเจน • หนึ่งพันธกิจเพื่อประเทศไทย/);
  assert.match(read("components/leadership/LeadershipPageContent.tsx"), /useLanguage/);
  assert.ok(existsSync(resolve(root, "app", "association", "leadership", "page.tsx")));
});

test("field development page has the supplied bilingual copy", () => {
  assert.match(fieldDevelopment, /FIELD DEVELOPMENT/);
  assert.match(fieldDevelopment, /Better Fields\. Higher Standards\. World-Class Experiences/);
  assert.match(fieldDevelopment, /การพัฒนาสนาม/);
  assert.match(fieldDevelopment, /สนามที่ดีกว่า • มาตรฐานที่สูงกว่า • ประสบการณ์ระดับโลก/);
  assert.match(read("components/field-development/FieldDevelopmentPageContent.tsx"), /useLanguage/);
  assert.ok(existsSync(resolve(root, "app", "what-we-do", "field-development", "page.tsx")));
});

test("teamwork, international competition, and tournaments pages have bilingual programme copy", () => {
  const programmes = read("data/programmes.ts");
  assert.match(programmes, /TEAMWORK & SPORTSMANSHIP/);
  assert.match(programmes, /Play as One\. Compete with Honor\. Win with Respect\./);
  assert.match(programmes, /การทำงานเป็นทีมและน้ำใจนักกีฬา/);
  assert.match(programmes, /INTERNATIONAL COMPETITION/);
  assert.match(programmes, /Develop Thailand\. Connect Asia\. Compete with the World\./);
  assert.match(programmes, /การแข่งขันระดับนานาชาติ/);
  assert.match(programmes, /TOURNAMENTS & EVENTS/);
  assert.match(programmes, /Bigger Events\. Greater Realism\. Advanced Technology\. World-Class Competition\./);
  assert.match(programmes, /การแข่งขันและอีเวนต์/);
  assert.match(read("components/programmes/ProgrammePageContent.tsx"), /internationalCompetitionCopy/);
  for (const route of ["teamwork-sportsmanship", "international-competition", "tournaments-events"]) {
    assert.ok(existsSync(resolve(root, "app", "what-we-do", route, "page.tsx")));
  }
});

test("develop, support, and organize pages use matching bilingual routes and copy", () => {
  const programmes = read("data/programmes.ts");
  const navCode = read("data/navigation.ts");
  assert.match(programmes, /DEVELOP PLAYERS & TEAMS/);
  assert.match(programmes, /Develop Talent\. Build Champions\. Represent Thailand\./);
  assert.match(programmes, /พัฒนาผู้เล่นและทีม/);
  assert.match(programmes, /SUPPORT & IMPROVE AIRSOFT AND PAINTBALL FIELDS/);
  assert.match(programmes, /Better Fields\. Better Experiences\. Stronger Industry\./);
  assert.match(programmes, /สนับสนุนและยกระดับสนามแอร์ซอฟต์และเพ้นท์บอล/);
  assert.match(programmes, /ORGANIZE PROFESSIONAL COMPETITIONS & EVENTS/);
  assert.match(programmes, /Local Competition\. National Excellence\. Global Events\./);
  assert.match(programmes, /จัดการแข่งขันและอีเวนต์อย่างมืออาชีพ/);
  assert.match(navCode, /href: "\/what-we-do\/develop-players-teams"/);
  assert.match(navCode, /href: "\/what-we-do\/support-improve-fields"/);
  assert.match(navCode, /href: "\/what-we-do\/organize-competitions-events"/);
  for (const route of ["develop-players-teams", "support-improve-fields", "organize-competitions-events"]) {
    assert.ok(existsSync(resolve(root, "app", "what-we-do", route, "page.tsx")));
  }
});

test("international pathway, community, Thailand Hub, and recognized sports links use matching pages and copy", () => {
  const programmes = read("data/programmes.ts");
  const navCode = read("data/navigation.ts");
  assert.match(programmes, /BUILD A PATHWAY TO INTERNATIONAL COMPETITION/);
  assert.match(programmes, /From Local Fields to the World Stage\./);
  assert.match(programmes, /สร้างเส้นทางสู่การแข่งขันระดับนานาชาติ/);
  assert.match(programmes, /STRENGTHEN THE AIRSOFT & PAINTBALL COMMUNITY/);
  assert.match(programmes, /One Community\. One Direction\. One Future\./);
  assert.match(programmes, /สร้างความเข้มแข็งให้กับชุมชนแอร์ซอฟต์และเพ้นท์บอล/);
  assert.match(programmes, /PROMOTE THAILAND AS THE AIRSOFT & PAINTBALL HUB OF ASIA/);
  assert.match(programmes, /Play in Thailand\. Compete in Asia\. Connect with the World\./);
  assert.match(programmes, /ผลักดันประเทศไทยสู่การเป็นศูนย์กลางแอร์ซอฟต์และเพ้นท์บอลแห่งเอเชีย/);
  assert.match(programmes, /ADVANCE AIRSOFT & PAINTBALL AS RECOGNIZED SPORTS/);
  assert.match(programmes, /Building Today\. Competing Tomorrow\. Creating the Future\./);
  assert.match(programmes, /ผลักดันแอร์ซอฟต์และเพ้นท์บอลสู่การเป็นกีฬาที่ได้รับการยอมรับ/);
  assert.match(navCode, /href: "\/what-we-do\/build-pathway-competition"/);
  assert.match(navCode, /href: "\/what-we-do\/strengthen-community"/);
  assert.match(navCode, /href: "\/what-we-do\/promote-teamwork-leadership"/);
  assert.match(navCode, /href: "\/what-we-do\/promote-thailand-hub"/);
  assert.match(navCode, /href: "\/what-we-do\/recognized-sports"/);
  for (const route of ["build-pathway-competition", "strengthen-community", "promote-teamwork-leadership", "promote-thailand-hub", "recognized-sports"]) {
    assert.ok(existsSync(resolve(root, "app", "what-we-do", route, "page.tsx")));
  }
});

test("play with purpose has its own bilingual page and explore link", () => {
  const playWithPurpose = read("data/play-with-purpose.ts");
  const bannerSource = read("components/play-with-purpose/PlayWithPurposeBanner.tsx");
  assert.match(playWithPurpose, /PLAY WITH PURPOSE/);
  assert.match(playWithPurpose, /We are building a safe, fair, professional, and internationally connected Airsoft and Paintball community/);
  assert.match(playWithPurpose, /Play with Purpose\. Compete with Passion\. Create Memories That Last\./);
  assert.match(playWithPurpose, /เล่นอย่างมีเป้าหมาย/);
  assert.match(playWithPurpose, /เล่นอย่างมีเป้าหมาย • แข่งขันด้วยพลัง • สร้างความทรงจำที่ไม่มีวันลืม/);
  assert.match(bannerSource, /playWithPurposeCopy\[language\]/);
  assert.match(bannerSource, /href="\/play-with-purpose"/);
  assert.match(read("app/page.tsx"), /<PlayWithPurposeBanner \/>/);
  assert.doesNotMatch(read("components/layout/SiteFooter.tsx"), /playWithPurposeCopy|styles\.banner/);
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

test("safety and education pages use bilingual programme copy without related-link dividers", () => {
  const programmes = read("data/programmes.ts");
  const globalStyles = read("app/globals.css");
  assert.match(programmes, /PROMOTE SAFETY & FAIR PLAY/);
  assert.match(programmes, /เล่นเต็มที่ • เล่นอย่างปลอดภัย • เล่นอย่างยุติธรรม/);
  assert.match(programmes, /EDUCATE PLAYERS, TEAMS & FIELDS/);
  assert.match(programmes, /ความรู้ที่ดีขึ้น • ผู้เล่นที่ดีขึ้น • กีฬาที่แข็งแกร่งขึ้น/);
  assert.match(read("components/programmes/ProgrammePageContent.tsx"), /useLanguage/);
  assert.ok(existsSync(resolve(root, "app", "what-we-do", "safety-fair-play", "page.tsx")));
  assert.ok(existsSync(resolve(root, "app", "what-we-do", "education", "page.tsx")));
  assert.match(globalStyles, /\.content-list\{border-top:0\}\.content-list a\{border-bottom:0\}/);
});

test("rules and safety detail pages use the supplied bilingual copy and routes", () => {
  assert.match(rulesSafetyPages, /PLAYING RULES/);
  assert.match(rulesSafetyPages, /Clear Rules\. Fair Competition\. Safer Play\./);
  assert.match(rulesSafetyPages, /กติกาการเล่น/);
  assert.match(rulesSafetyPages, /กติกาชัดเจน • แข่งขันยุติธรรม • เล่นอย่างปลอดภัย/);
  assert.match(rulesSafetyPages, /SAFETY REQUIREMENTS/);
  assert.match(rulesSafetyPages, /Safety First\. Standards Always\. Confidence Everywhere\./);
  assert.match(rulesSafetyPages, /ข้อกำหนดด้านความปลอดภัย/);
  assert.match(rulesSafetyPages, /ความปลอดภัยต้องมาก่อน • มาตรฐานต้องชัดเจน • ความเชื่อมั่นต้องเกิดขึ้นทุกสนาม/);
  assert.match(rulesSafetyPages, /EYE & FACE PROTECTION/);
  assert.match(rulesSafetyPages, /Protect Your Vision\. Protect Your Face\. Play with Confidence\./);
  assert.match(rulesSafetyPages, /การป้องกันดวงตาและใบหน้า/);
  assert.match(rulesSafetyPages, /ปกป้องดวงตา • ปกป้องใบหน้า • เล่นอย่างมั่นใจ/);
  assert.match(rulesSafetyPages, /FPS & JOULE STANDARDS/);
  assert.match(rulesSafetyPages, /Measured Performance\. Clear Limits\. Safer Competition\./);
  assert.match(rulesSafetyPages, /มาตรฐาน FPS และ Joule/);
  assert.match(rulesSafetyPages, /วัดผลได้ชัดเจน • กำหนดขีดจำกัดอย่างเหมาะสม • แข่งขันอย่างปลอดภัย/);
  assert.match(rulesSafetyPages, /ENGAGEMENT DISTANCES/);
  assert.match(rulesSafetyPages, /Know the Distance\. Respect the Rules\. Protect Every Player\./);
  assert.match(rulesSafetyPages, /ระยะการยิงและการเข้าปะทะ/);
  assert.match(rulesSafetyPages, /รู้ระยะ • เคารพกติกา • ปกป้องผู้เล่นทุกคน/);
  assert.match(rulesSafetyPages, /PLAYER CONDUCT/);
  assert.match(rulesSafetyPages, /Compete with Discipline\. Play with Integrity\. Respect the Game\./);
  assert.match(rulesSafetyPages, /การประพฤติปฏิบัติของผู้เล่น/);
  assert.match(rulesSafetyPages, /แข่งขันด้วยวินัย • เล่นด้วยความซื่อสัตย์ • เคารพในเกม/);
  assert.match(rulesSafetyPages, /REFEREE & MARSHAL STANDARDS/);
  assert.match(rulesSafetyPages, /Qualified Officials\. Fair Decisions\. Safer Games\. Higher Standards\./);
  assert.match(rulesSafetyPages, /มาตรฐานกรรมการและมาร์แชล/);
  assert.match(rulesSafetyPages, /กรรมการมีคุณภาพ • การตัดสินยุติธรรม • เกมปลอดภัย • มาตรฐานสูงขึ้น/);
  assert.match(read("components/rules-safety/RulesSafetyPageContent.tsx"), /useLanguage/);
  for (const route of ["playing-rules", "safety-requirements", "eye-face-protection", "fps-joule-standards", "engagement-distances", "player-conduct", "referee-marshal-standards"]) {
    assert.ok(existsSync(resolve(root, "app", "rules-safety", route, "page.tsx")));
  }
});
