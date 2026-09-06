import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type MissionCopy = {
  eyebrow: string;
  title: string;
  preview: string[];
  page: string[];
  closing: string[];
};

export const missionCopy: Record<SiteLanguage, MissionCopy> = {
  en: {
    eyebrow: "OUR MISSION",
    title: "Building the Future of Airsoft & Paintball in Thailand",
    preview: [
      "Our mission is to elevate Airsoft and Paintball in Thailand to the highest professional and international standards through safety, fair play, responsible regulation, athlete development, and a strong national community.",
      "We aim to unite players, teams, fields, organizers, and industry partners under one common standard and build Thailand into the Airsoft and Paintball Hub of Asia.",
    ],
    page: [
      "Our mission is to elevate Airsoft and Paintball in Thailand to the highest professional and international standards through safety, fair play, responsible regulation, athlete development, and a strong national community.",
      "We aim to unite players, teams, fields, organizers, and industry partners under one common standard and build Thailand into the Airsoft and Paintball Hub of Asia.",
      "Our next mission is even bigger: to make Thailand a leading destination for major international competitions, training, exhibitions, and world-class events, while developing Thai players and teams capable of competing proudly on the global stage.",
      "Our long-term vision is to help Airsoft and Paintball gain greater recognition as organized competitive sports worldwide and to support their continued development toward the highest levels of international sporting competition.",
    ],
    closing: ["Thailand to Asia. Asia to the World.", "One Standard. One Community. One Global Future."],
  },
  th: {
    eyebrow: "พันธกิจ",
    title: "สร้างอนาคตของกีฬาแอร์ซอฟต์และเพ้นท์บอลในประเทศไทย",
    preview: ["พันธกิจของเราคือ ยกระดับกีฬาแอร์ซอฟต์และเพ้นท์บอลของประเทศไทยสู่มาตรฐานวิชาชีพและมาตรฐานสากล ผ่านความปลอดภัย การแข่งขันอย่างยุติธรรม การสร้างมาตรฐานที่รับผิดชอบ การพัฒนานักกีฬา และการสร้างชุมชนที่เข้มแข็งในระดับประเทศ"],
    page: [
      "พันธกิจของเราคือ ยกระดับกีฬาแอร์ซอฟต์และเพ้นท์บอลของประเทศไทยสู่มาตรฐานวิชาชีพและมาตรฐานสากล ผ่านความปลอดภัย การแข่งขันอย่างยุติธรรม การสร้างมาตรฐานที่รับผิดชอบ การพัฒนานักกีฬา และการสร้างชุมชนที่เข้มแข็งในระดับประเทศ",
      "เรามุ่งรวมผู้เล่น ทีม สนาม ผู้จัดการแข่งขัน และพันธมิตรในอุตสาหกรรมให้ก้าวไปภายใต้มาตรฐานเดียวกัน พร้อมผลักดันประเทศไทยให้เป็น ศูนย์กลางกีฬาแอร์ซอฟต์และเพ้นท์บอลแห่งเอเชีย",
      "ก้าวต่อไปของเราคือการผลักดันประเทศไทยให้เป็นจุดหมายสำคัญสำหรับ การแข่งขันระดับนานาชาติ การฝึกอบรม งานแสดง และอีเวนต์ระดับโลก พร้อมพัฒนาผู้เล่นและทีมไทยให้มีศักยภาพในการแข่งขันและสร้างชื่อเสียงบนเวทีโลก",
      "วิสัยทัศน์ระยะยาวของเราคือการผลักดันกีฬาแอร์ซอฟต์และเพ้นท์บอลให้ได้รับการยอมรับในฐานะกีฬาที่มีระบบการแข่งขันในระดับนานาชาติมากยิ่งขึ้น และสนับสนุนการพัฒนาไปสู่ ระดับสูงสุดของการแข่งขันกีฬาสากลในอนาคต",
    ],
    closing: ["จากประเทศไทย สู่เอเชีย จากเอเชีย สู่เวทีโลก", "หนึ่งมาตรฐาน • หนึ่งชุมชน • หนึ่งอนาคตระดับโลก"],
  },
};
