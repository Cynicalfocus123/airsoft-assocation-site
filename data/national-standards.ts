import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type NationalStandardsCopy = {
  title: string;
  homepageDescription: string;
  page: string[];
  closing: string;
};

export const nationalStandardsCopy: Record<SiteLanguage, NationalStandardsCopy> = {
  en: {
    title: "ESTABLISH NATIONAL STANDARDS",
    homepageDescription: "Shared standards give players, teams, fields and organizers a clear foundation for safe, consistent play.",
    page: [
      "We are building a clear, consistent national standard for Airsoft and Paintball in Thailand—giving players, teams, field operators, and event organizers a trusted framework for safety, fairness, and professional competition.",
      "Our goal is to bring internationally recognized rules, safety practices, field operations, and competition standards into Thailand, while helping local fields and organizers continuously improve and meet those expectations.",
      "By creating stronger standards across the country, we can give both Thai and international players greater confidence in the quality, safety, and fairness of every game.",
      "We also aim to help Thailand become known for high-quality players, professionally managed events, and some of the most realistic, advanced, and exciting Airsoft and Paintball fields in Asia.",
    ],
    closing: "One National Standard. Greater Trust. World-Class Competition.",
  },
  th: {
    title: "กำหนดมาตรฐานระดับประเทศ",
    homepageDescription: "เรามุ่งสร้าง มาตรฐานกลางระดับประเทศสำหรับกีฬาแอร์ซอฟต์และเพ้นท์บอลในประเทศไทย เพื่อให้ผู้เล่น ทีม สนาม และผู้จัดการแข่งขัน มีแนวทางเดียวกันในด้านความปลอดภัย ความยุติธรรม และการจัดการแข่งขันอย่างเป็นมืออาชีพ",
    page: [
      "เรามุ่งสร้าง มาตรฐานกลางระดับประเทศสำหรับกีฬาแอร์ซอฟต์และเพ้นท์บอลในประเทศไทย เพื่อให้ผู้เล่น ทีม สนาม และผู้จัดการแข่งขัน มีแนวทางเดียวกันในด้านความปลอดภัย ความยุติธรรม และการจัดการแข่งขันอย่างเป็นมืออาชีพ",
      "เป้าหมายของเราคือการนำ กฎ ระเบียบ มาตรฐานความปลอดภัย การบริหารสนาม และรูปแบบการแข่งขันที่เป็นที่ยอมรับในระดับสากล มาปรับใช้ในประเทศไทย พร้อมช่วยพัฒนาสนามและผู้จัดการแข่งขันให้สามารถยกระดับคุณภาพอย่างต่อเนื่อง",
      "เมื่อประเทศไทยมีมาตรฐานที่ชัดเจนและเป็นระบบ จะช่วยสร้างความมั่นใจให้กับทั้งผู้เล่นชาวไทยและผู้เล่นจากต่างประเทศ ว่าทุกการแข่งขันจะมี คุณภาพ ปลอดภัย ยุติธรรม และมีมาตรฐานเดียวกัน",
      "เรายังมุ่งผลักดันให้ประเทศไทยเป็นที่รู้จักในฐานะประเทศที่มี ผู้เล่นคุณภาพสูง การจัดการแข่งขันอย่างมืออาชีพ และสนามแอร์ซอฟต์และเพ้นท์บอลที่สมจริง ทันสมัย และน่าตื่นเต้นที่สุดแห่งหนึ่งในเอเชีย",
    ],
    closing: "หนึ่งมาตรฐานระดับประเทศ • สร้างความเชื่อมั่น • ก้าวสู่การแข่งขันระดับโลก",
  },
};
