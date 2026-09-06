import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type PlayWithPurposeCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  page: string[];
  closing: string[];
};

export const playWithPurposeCopy: Record<SiteLanguage, PlayWithPurposeCopy> = {
  en: {
    eyebrow: "",
    title: "PLAY WITH PURPOSE",
    lead: "We are building a safe, fair, professional, and internationally connected Airsoft and Paintball community where every game delivers more than competition.",
    page: [
      "Our goal is to create meaningful experiences that combine teamwork, strategy, discipline, sportsmanship, adventure, and unforgettable moments.",
      "For international players who travel to participate in Airsoft and MilSim events, we want every visit to become more than just a game. We aim to deliver a complete experience—combining world-class events, immersive gameplay, strong community connections, and memorable adventures throughout their journey.",
      "Every event should leave players with a story worth remembering and a reason to return.",
    ],
    closing: ["Play with Purpose. Compete with Passion. Create Memories That Last."],
  },
  th: {
    eyebrow: "สอดคล้องกับมาตรฐานสากล • บริหารอย่างมืออาชีพ • สร้างเพื่อการยอมรับจากทั่วโลก",
    title: "เล่นอย่างมีเป้าหมาย",
    lead: "เรากำลังสร้างชุมชนแอร์ซอฟต์และเพ้นท์บอลที่ ปลอดภัย ยุติธรรม เป็นมืออาชีพ และเชื่อมโยงในระดับนานาชาติ โดยมุ่งให้ทุกเกมมีคุณค่ามากกว่าการแข่งขัน",
    page: [
      "เป้าหมายของเราคือการสร้างประสบการณ์ที่มีความหมาย ผ่าน การทำงานเป็นทีม กลยุทธ์ ระเบียบวินัย น้ำใจนักกีฬา การผจญภัย และความทรงจำที่ยากจะลืม",
      "สำหรับผู้เล่นจากต่างประเทศที่เดินทางมาเข้าร่วมอีเวนต์แอร์ซอฟต์และ MilSim เราต้องการให้ทุกการเดินทางเป็นมากกว่าการมาเล่นเกม แต่เป็นประสบการณ์ที่ครบถ้วน ทั้งการแข่งขันระดับโลก เกมที่สมจริง การเชื่อมโยงกับชุมชน และการผจญภัยตลอดช่วงเวลาที่เข้าร่วมกิจกรรม",
      "เราต้องการให้ทุกอีเวนต์สร้างเรื่องราวที่ผู้เล่นจดจำ และเป็นเหตุผลให้พวกเขาอยากกลับมาอีกครั้ง",
    ],
    closing: ["เล่นอย่างมีเป้าหมาย • แข่งขันด้วยพลัง • สร้างความทรงจำที่ไม่มีวันลืม"],
  },
};
