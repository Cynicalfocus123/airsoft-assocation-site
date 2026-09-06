import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

type SportTourismCopy = {
  eyebrow: string;
  title: string;
  preview: string;
  lead: string;
  page: string[];
  closing: string[];
};

export const sportTourismCopy: Record<SiteLanguage, SportTourismCopy> = {
  en: {
    eyebrow: "THAILAND, IN PLAY",
    title: "SPORT TOURISM",
    preview: "The Airsoft and Paintball Association is committed to positioning Thailand as a premier destination for international Airsoft and Paintball tourism.",
    lead: "The Airsoft and Paintball Association is committed to positioning Thailand as a premier destination for international Airsoft and Paintball tourism.",
    page: [
      "Our vision is to use major tournaments, immersive events, and world-class playing experiences as a powerful attraction for international visitors—encouraging players, teams, families, and supporters to travel to Thailand not only to compete, but also to experience the country’s culture, hospitality, adventure, and world-renowned tourist destinations.",
      "By connecting sport with tourism, we aim to create wider economic benefits for local communities, hotels, restaurants, transportation providers, retailers, event suppliers, and tourism businesses throughout Thailand.",
      "International players who travel for Airsoft and Paintball events can extend their stay to explore Thailand’s beaches, mountains, cities, historical sites, food, entertainment, and adventure activities—turning a sporting event into a complete travel experience.",
      "Our long-term goal is to help Airsoft and Paintball become another powerful driver of sports tourism, job creation, local business growth, and international spending in Thailand.",
      "We want every event to deliver more than competition.",
    ],
    closing: ["Come for the Game. Stay for the Adventure. Experience Thailand."],
  },
  th: {
    eyebrow: "การท่องเที่ยวเชิงกีฬา",
    title: "การท่องเที่ยวเชิงกีฬา",
    preview: "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งผลักดันประเทศไทยให้เป็นหนึ่งในจุดหมายปลายทางชั้นนำของโลกสำหรับการท่องเที่ยวเชิงกีฬาแอร์ซอฟต์และเพ้นท์บอล",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งผลักดันประเทศไทยให้เป็นหนึ่งในจุดหมายปลายทางชั้นนำของโลกสำหรับการท่องเที่ยวเชิงกีฬาแอร์ซอฟต์และเพ้นท์บอล",
    page: [
      "วิสัยทัศน์ของเราคือการใช้การแข่งขันขนาดใหญ่ อีเวนต์ที่สมจริง และประสบการณ์การเล่นระดับโลก เป็นแรงดึงดูดนักท่องเที่ยวจากต่างประเทศ ทั้งผู้เล่น ทีม ครอบครัว และผู้ติดตาม ให้เดินทางมายังประเทศไทย ไม่เพียงเพื่อเข้าร่วมการแข่งขัน แต่เพื่อสัมผัส วัฒนธรรม การบริการ การผจญภัย และแหล่งท่องเที่ยวระดับโลกของไทย",
      "การเชื่อมโยงกีฬาเข้ากับการท่องเที่ยว จะช่วยสร้างประโยชน์ทางเศรษฐกิจในวงกว้างให้กับ ชุมชนท้องถิ่น โรงแรม ร้านอาหาร ผู้ให้บริการขนส่ง ร้านค้า ผู้จัดงาน และธุรกิจด้านการท่องเที่ยวทั่วประเทศ",
      "ผู้เล่นต่างชาติที่เดินทางมาเข้าร่วมการแข่งขัน สามารถต่อยอดการเดินทางด้วยการท่องเที่ยวชายหาด ภูเขา เมืองสำคัญ แหล่งประวัติศาสตร์ อาหารไทย สถานบันเทิง และกิจกรรมผจญภัยต่าง ๆ ทำให้การแข่งขันหนึ่งรายการสามารถพัฒนาไปสู่ ประสบการณ์การท่องเที่ยวที่ครบวงจร",
      "เป้าหมายระยะยาวของเราคือการผลักดันให้แอร์ซอฟต์และเพ้นท์บอลเป็นอีกหนึ่งพลังสำคัญในการขับเคลื่อน การท่องเที่ยวเชิงกีฬา การสร้างงาน การเติบโตของธุรกิจในท้องถิ่น และการสร้างรายได้จากนักท่องเที่ยวต่างชาติให้กับประเทศไทย",
      "เราอยากให้ทุกอีเวนต์สร้างคุณค่ามากกว่าการแข่งขัน",
    ],
    closing: ["มาเพื่อแข่งขัน • อยู่ต่อเพื่อการผจญภัย • สัมผัสประเทศไทย"],
  },
};
