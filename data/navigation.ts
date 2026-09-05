export type SiteLanguage = "en" | "th";
export type LocalizedLabel = { en: string; th: string };
export type NavChild = { label: LocalizedLabel; href: string };
export type NavItem = { label: LocalizedLabel; href?: string; children?: NavChild[] };

export function getLabel(label: LocalizedLabel, language: SiteLanguage) {
  return label[language];
}

const label = (en: string, th: string): LocalizedLabel => ({ en, th });

export const navigation: NavItem[] = [
  { label: label("HOME", "หน้าหลัก"), href: "/" },
  { label: label("OUR MISSION", "พันธกิจ"), href: "/our-mission" },
  { label: label("UPCOMING EVENTS", "กิจกรรมและอีเวนต์ที่กำลังจะมาถึง"), href: "/events" },
  {
    label: label("ASSOCIATION", "สมาคม"),
    children: [
      { label: label("About the Association", "เกี่ยวกับสมาคม"), href: "/association/about" },
      { label: label("Why the Association Was Created", "เหตุผลที่ก่อตั้งสมาคม"), href: "/association/why-created" },
      { label: label("Association Background", "ประวัติของสมาคม"), href: "/association/background" },
      { label: label("Leadership & Board of Directors", "คณะผู้นำและคณะกรรมการบริหาร"), href: "/association/leadership" },
    ],
  },
  {
    label: label("WHAT WE DO", "สิ่งที่เราทำ"),
    children: [
      { label: label("Establish National Playing Standards", "กำหนดมาตรฐานการเล่นระดับประเทศ"), href: "/what-we-do/national-standards" },
      { label: label("Promote Safety & Fair Play", "ส่งเสริมความปลอดภัยและการแข่งขันอย่างยุติธรรม"), href: "/what-we-do/safety-fair-play" },
      { label: label("Education & Development", "การศึกษาและการพัฒนา"), href: "/what-we-do/education" },
      { label: label("Field Development", "การพัฒนาสนาม"), href: "/what-we-do/field-development" },
      { label: label("Teamwork & Sportsmanship", "การทำงานเป็นทีมและน้ำใจนักกีฬา"), href: "/what-we-do/teamwork-sportsmanship" },
      { label: label("International Competition", "การแข่งขันระดับนานาชาติ"), href: "/what-we-do/international-competition" },
      { label: label("Tournaments & Major Events", "การแข่งขันและอีเวนต์ขนาดใหญ่"), href: "/what-we-do/tournaments-events" },
    ],
  },
  {
    label: label("SPORT TOURISM", "การท่องเที่ยวเชิงกีฬา"),
    children: [
      { label: label("Sport Tourism in Thailand", "การท่องเที่ยวเชิงกีฬาในประเทศไทย"), href: "/sport-tourism" },
      { label: label("International Tournaments & Events", "การแข่งขันและอีเวนต์ระดับนานาชาติ"), href: "/sport-tourism/events" },
      { label: label("Regional Events", "อีเวนต์ระดับภูมิภาค"), href: "/sport-tourism/regional-events" },
      { label: label("International Representation", "การเป็นตัวแทนในระดับนานาชาติ"), href: "/sport-tourism/international-representation" },
      { label: label("International Partnerships", "พันธมิตรและความร่วมมือระดับนานาชาติ"), href: "/sport-tourism/partnerships" },
    ],
  },
  {
    label: label("RULES & SAFETY", "กฎระเบียบและความปลอดภัย"),
    children: [
      { label: label("Official Playing Rules", "กติกาการเล่น"), href: "/rules-safety/playing-rules" },
      { label: label("Safety Requirements", "ข้อกำหนดด้านความปลอดภัย"), href: "/rules-safety/safety-requirements" },
      { label: label("Eye & Face Protection", "การป้องกันดวงตาและใบหน้า"), href: "/rules-safety/eye-face-protection" },
      { label: label("FPS / Joule Standards", "มาตรฐาน FPS / Joule"), href: "/rules-safety/fps-joule-standards" },
      { label: label("Minimum Engagement Distances", "ระยะการยิงขั้นต่ำ"), href: "/rules-safety/engagement-distances" },
      { label: label("Player Conduct", "การประพฤติปฏิบัติของผู้เล่น"), href: "/rules-safety/player-conduct" },
      { label: label("Referee & Marshal Standards", "มาตรฐานกรรมการและมาร์แชล"), href: "/rules-safety/referee-marshal-standards" },
      { label: label("Field Standards", "มาตรฐานสนาม"), href: "/rules-safety/field-standards" },
      { label: label("Association-Approved Fields", "สนามที่ได้รับการรับรองจากสมาคม"), href: "/rules-safety/approved-fields" },
      { label: label("Safety Inspection", "การตรวจสอบความปลอดภัย"), href: "/rules-safety/safety-inspection" },
      { label: label("Emergency & First Aid", "การรับมือเหตุฉุกเฉินและการปฐมพยาบาล"), href: "/rules-safety/emergency-first-aid" },
      { label: label("International Standards", "มาตรฐานระดับนานาชาติ"), href: "/rules-safety/international-standards" },
    ],
  },
  { label: label("CONTACT", "ติดต่อเรา"), href: "/contact" },
];
