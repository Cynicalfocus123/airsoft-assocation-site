import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type ProgrammeCopy = {
  title: string;
  lead: string;
  body: string[];
  closing: string;
};

export const safetyFairPlayCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "PROMOTE SAFETY & FAIR PLAY",
    lead: "Safety and integrity are the foundation of every great sport.",
    body: [
      "We promote responsible gameplay, proper protective equipment, clear field rules, qualified referees, fair enforcement, and strong sportsmanship at every level of competition.",
      "Our goal is to create an environment where players can compete with intensity while always respecting the rules, their teammates, their opponents, and the spirit of the sport.",
    ],
    closing: "Play Hard. Play Safe. Play Fair.",
  },
  th: {
    title: "ส่งเสริมความปลอดภัยและการแข่งขันอย่างยุติธรรม",
    lead: "ความปลอดภัยและความซื่อสัตย์ในการแข่งขันคือรากฐานสำคัญของกีฬาที่ดี",
    body: [
      "เราส่งเสริมการเล่นอย่างรับผิดชอบ การใช้อุปกรณ์ป้องกันที่เหมาะสม กฎของสนามที่ชัดเจน การทำหน้าที่ของกรรมการอย่างเป็นธรรม และการมีน้ำใจนักกีฬาในทุกระดับการแข่งขัน",
      "เป้าหมายของเราคือการสร้างสภาพแวดล้อมที่ผู้เล่นสามารถแข่งขันได้อย่างเต็มความสามารถ พร้อมเคารพกติกา เพื่อนร่วมทีม คู่แข่งขัน และจิตวิญญาณของกีฬา",
    ],
    closing: "เล่นเต็มที่ • เล่นอย่างปลอดภัย • เล่นอย่างยุติธรรม",
  },
};

export const educationCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "EDUCATE PLAYERS, TEAMS & FIELDS",
    lead: "We believe the future of Airsoft and Paintball starts with education.",
    body: [
      "The Association will provide guidance, training, and educational programs for players, teams, field operators, referees, marshals, and event organizers.",
      "From basic safety and game rules to professional event management and international competition standards, we aim to create a more knowledgeable, responsible, and professional community throughout Thailand.",
    ],
    closing: "Better Knowledge. Better Players. Better Sport.",
  },
  th: {
    title: "ให้ความรู้แก่ผู้เล่น ทีม และสนาม",
    lead: "เราเชื่อว่าอนาคตของกีฬาแอร์ซอฟต์และเพ้นท์บอลเริ่มต้นจากการมีความรู้ที่ถูกต้อง",
    body: [
      "สมาคมมุ่งจัดทำแนวทาง การฝึกอบรม และโครงการให้ความรู้แก่ผู้เล่น ทีม ผู้บริหารสนาม กรรมการ มาร์แชล และผู้จัดการแข่งขัน",
      "ตั้งแต่เรื่องความปลอดภัยขั้นพื้นฐานและกติกาการแข่งขัน ไปจนถึงการบริหารงานอีเวนต์อย่างมืออาชีพและมาตรฐานการแข่งขันระดับนานาชาติ เราต้องการสร้างชุมชนที่มีความรู้ มีความรับผิดชอบ และมีความเป็นมืออาชีพมากยิ่งขึ้นทั่วประเทศ",
    ],
    closing: "ความรู้ที่ดีขึ้น • ผู้เล่นที่ดีขึ้น • กีฬาที่แข็งแกร่งขึ้น",
  },
};
