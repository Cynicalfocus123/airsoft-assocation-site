import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type FieldDevelopmentCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  page: string[];
  closing: string[];
};

export const fieldDevelopmentCopy: Record<SiteLanguage, FieldDevelopmentCopy> = {
  en: {
    eyebrow: "WHAT WE DO",
    title: "FIELD DEVELOPMENT",
    lead: "The Airsoft and Paintball Association is committed to helping fields across the country improve their quality, safety, realism, and overall player experience.",
    page: [
      "We will work with field owners and operators to develop stronger concepts, better layouts, professional game environments, and operating standards that meet the expectations of both Thai and international players.",
      "By bringing proven field-development practices and operational systems from the United States and other leading international markets, we aim to help Thai fields improve areas such as theme development, field design, safety zones, game flow, referee operations, player facilities, emergency planning, and event readiness.",
      "Our goal is to help create a new generation of Airsoft and Paintball fields in Thailand that are not only exciting to play, but also safe, professionally managed, realistic, and capable of hosting major national and international events.",
      "We believe that stronger fields will create stronger players, better events, greater tourism opportunities, and a more respected industry.",
    ],
    closing: ["Better Fields. Higher Standards. World-Class Experiences"],
  },
  th: {
    eyebrow: "สิ่งที่เราทำ",
    title: "การพัฒนาสนาม",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งมั่นที่จะช่วยยกระดับสนามทั่วประเทศให้มีคุณภาพ ความปลอดภัย ความสมจริง และประสบการณ์ของผู้เล่นที่ดียิ่งขึ้น",
    page: [
      "เราจะทำงานร่วมกับเจ้าของและผู้บริหารสนาม เพื่อพัฒนาแนวคิดของสนาม รูปแบบพื้นที่เล่น การออกแบบธีม ระบบเกม และมาตรฐานการดำเนินงานให้สามารถตอบโจทย์ทั้งผู้เล่นชาวไทยและผู้เล่นจากต่างประเทศได้อย่างมืออาชีพ",
      "สมาคมจะนำแนวทางการพัฒนาสนามและระบบบริหารจัดการที่ได้รับการยอมรับจาก ประเทศสหรัฐอเมริกาและตลาดชั้นนำระดับนานาชาติ มาประยุกต์ใช้กับประเทศไทย โดยให้ความสำคัญกับ การออกแบบธีมสนาม การจัดผังพื้นที่ ความปลอดภัย พื้นที่พักผู้เล่น การบริหารกรรมการและมาร์แชล การจัดลำดับเกม สิ่งอำนวยความสะดวก แผนฉุกเฉิน และความพร้อมสำหรับการจัดอีเวนต์ขนาดใหญ่",
      "เป้าหมายของเราคือการสร้างสนามแอร์ซอฟต์และเพ้นท์บอลยุคใหม่ของประเทศไทย ที่ไม่เพียงสนุกและน่าตื่นเต้น แต่ยัง ปลอดภัย สมจริง บริหารอย่างเป็นมืออาชีพ และพร้อมรองรับการแข่งขันระดับประเทศและระดับนานาชาติ",
      "เราเชื่อว่า สนามที่มีคุณภาพจะสร้างผู้เล่นที่มีคุณภาพ การแข่งขันที่ดีขึ้น โอกาสด้านการท่องเที่ยวที่มากขึ้น และช่วยยกระดับอุตสาหกรรมแอร์ซอฟต์และเพ้นท์บอลของประเทศไทยทั้งระบบ",
    ],
    closing: ["สนามที่ดีกว่า • มาตรฐานที่สูงกว่า • ประสบการณ์ระดับโลก"],
  },
};
