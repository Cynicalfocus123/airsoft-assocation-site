import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type LeadershipCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  page: string[];
  closing: string[];
};

export const leadershipCopy: Record<SiteLanguage, LeadershipCopy> = {
  en: {
    eyebrow: "ASSOCIATION",
    title: "LEADERSHIP & BOARD",
    lead: "The strength of the Association begins with experienced leadership, clear direction, and a shared commitment to the future of Airsoft and Paintball in Thailand.",
    page: [
      "Our Chairman and Founder brings a deep understanding of the Airsoft and Paintball community, supported by Board Members with more than 16 years of experience in the sport and industry. Together, the leadership team combines hands-on experience, international knowledge, community insight, and a strong network of players, fields, organizers, and industry partners.",
      "We see a major opportunity to transform Airsoft and Paintball in Thailand from a growing recreational activity into a recognized, respected, and professionally developed sport.",
      "Our leadership is committed to building stronger standards, creating better opportunities for players and teams, developing world-class events, and increasing recognition of Thai Airsoft and Paintball both nationally and internationally.",
      "Our goal is not only to follow the growth of the sport worldwide, but to help Thailand become one of the countries that leads its future in Asia.",
    ],
    closing: ["Experienced Leadership. Strong Vision. One Mission for Thailand."],
  },
  th: {
    eyebrow: "สมาคม",
    title: "คณะผู้นำและคณะกรรมการ",
    lead: "ความแข็งแกร่งของสมาคมเริ่มต้นจาก ผู้นำที่มีประสบการณ์ วิสัยทัศน์ที่ชัดเจน และความมุ่งมั่นร่วมกันในการพัฒนาอนาคตของกีฬาแอร์ซอฟต์และเพ้นท์บอลในประเทศไทย",
    page: [
      "ประธานและผู้ก่อตั้งสมาคมมีความเข้าใจอย่างลึกซึ้งเกี่ยวกับชุมชนแอร์ซอฟต์และเพ้นท์บอล และได้รับการสนับสนุนจากคณะกรรมการที่มี ประสบการณ์ในวงการมากกว่า 16 ปี ทั้งด้านการเล่น การจัดกิจกรรม การพัฒนาชุมชน และการเชื่อมโยงเครือข่ายในระดับนานาชาติ",
      "เรามองเห็นโอกาสสำคัญในการยกระดับแอร์ซอฟต์และเพ้นท์บอลในประเทศไทย จากกิจกรรมที่ได้รับความนิยมในกลุ่มผู้เล่น ให้ก้าวสู่การเป็น กีฬาที่ได้รับการยอมรับ มีมาตรฐาน และได้รับการพัฒนาอย่างเป็นมืออาชีพ",
      "คณะผู้นำของเรามุ่งมั่นที่จะสร้างมาตรฐานที่แข็งแกร่ง เพิ่มโอกาสให้กับผู้เล่นและทีม พัฒนาการแข่งขันและอีเวนต์ระดับโลก ตลอดจนผลักดันแอร์ซอฟต์และเพ้นท์บอลไทยให้เป็นที่รู้จักมากยิ่งขึ้นทั้งในประเทศและระดับนานาชาติ",
      "เป้าหมายของเราไม่ใช่เพียงแค่เติบโตตามกระแสของกีฬานี้ทั่วโลก แต่คือการช่วยผลักดันให้ประเทศไทยก้าวขึ้นเป็นหนึ่งในประเทศที่ มีบทบาทสำคัญในการกำหนดอนาคตของกีฬาแอร์ซอฟต์และเพ้นท์บอลในเอเชีย",
    ],
    closing: ["ผู้นำมากประสบการณ์ • วิสัยทัศน์ชัดเจน • หนึ่งพันธกิจเพื่อประเทศไทย"],
  },
};
