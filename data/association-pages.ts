import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

export type AssociationPageKey = "about" | "why-created" | "background";

type AssociationPageCopy = {
  eyebrow: string;
  title: string;
  page: string[];
  closing: string[];
};

export const associationPageCopy: Record<AssociationPageKey, Record<SiteLanguage, AssociationPageCopy>> = {
  about: {
    en: {
      eyebrow: "ASSOCIATION",
      title: "ABOUT THE ASSOCIATION",
      page: [
        "The **Airsoft and Paintball Association of Thailand** brings together players, teams, fields, event organizers, and industry partners with one shared purpose: to build a safer, fairer, stronger, and more professional future for the sport.",
        "We work to establish trusted standards, promote responsible play, strengthen cooperation across the community, and create greater opportunities for Thai players and teams to grow from local competition to the international stage.",
      ],
      closing: ["United by Standards. Driven by Fair Play. Built for the Future."],
    },
    th: {
      eyebrow: "สมาคม",
      title: "เกี่ยวกับสมาคม",
      page: [
        "**สมาคมแอร์ซอฟต์และเพ้นท์บอลแห่งประเทศไทย** ก่อตั้งขึ้นเพื่อเชื่อมโยงผู้เล่น ทีม สนาม ผู้จัดการแข่งขัน และพันธมิตรในอุตสาหกรรม ภายใต้เป้าหมายร่วมกันในการสร้างอนาคตของกีฬาให้ **ปลอดภัย ยุติธรรม แข็งแกร่ง และเป็นมืออาชีพมากยิ่งขึ้น**",
        "เรามุ่งสร้างมาตรฐานที่ได้รับความเชื่อมั่น ส่งเสริมการเล่นอย่างมีความรับผิดชอบ สร้างความร่วมมือภายในชุมชน และเปิดโอกาสให้ผู้เล่นและทีมไทยสามารถพัฒนาจากการแข่งขันในประเทศไปสู่เวทีระดับนานาชาติ",
      ],
      closing: ["รวมพลังด้วยมาตรฐาน • ขับเคลื่อนด้วยความยุติธรรม • สร้างเพื่ออนาคต"],
    },
  },
  "why-created": {
    en: {
      eyebrow: "ASSOCIATION",
      title: "WHY WE WERE CREATED",
      page: [
        "Airsoft and Paintball in Thailand have tremendous potential—but real growth requires **leadership, trusted standards, safety, fairness, and a united national community.**",
        "The Association was created to bring players, teams, fields, and organizers together under one strong national direction. We aim to protect the integrity of the sport, raise professional standards, create opportunities for players, and build greater confidence among both Thai and international communities.",
        "Our purpose is not simply to support the sport as it exists today—but to **build what it can become tomorrow.**",
      ],
      closing: ["Unite the Community. Raise the Standard. Take Thailand to the World."],
    },
    th: {
      eyebrow: "สมาคม",
      title: "เหตุผลที่เราก่อตั้งสมาคม",
      page: [
        "กีฬาแอร์ซอฟต์และเพ้นท์บอลในประเทศไทยมีศักยภาพที่จะเติบโตได้อีกมาก แต่การเติบโตอย่างยั่งยืนต้องอาศัย **ผู้นำที่ชัดเจน มาตรฐานที่เชื่อถือได้ ความปลอดภัย ความยุติธรรม และพลังจากชุมชนที่เป็นหนึ่งเดียว**",
        "สมาคมจึงถูกก่อตั้งขึ้นเพื่อเชื่อมโยงผู้เล่น ทีม สนาม ผู้จัดการแข่งขัน และผู้ที่เกี่ยวข้อง ให้ก้าวไปในทิศทางเดียวกันภายใต้มาตรฐานระดับประเทศที่ชัดเจน เรามุ่งปกป้องคุณค่าของกีฬา ยกระดับความเป็นมืออาชีพ สร้างโอกาสใหม่ให้กับผู้เล่นและทีม และสร้างความเชื่อมั่นให้กับทั้งชุมชนในประเทศไทยและผู้เล่นจากทั่วโลก",
        "เป้าหมายของเราไม่ใช่เพียงแค่สนับสนุนกีฬาที่มีอยู่ในวันนี้ แต่คือการ **สร้างอนาคตใหม่ให้กับแอร์ซอฟต์และเพ้นท์บอลของประเทศไทย**",
      ],
      closing: ["รวมพลังชุมชน • ยกระดับมาตรฐาน • พาประเทศไทยสู่เวทีโลก"],
    },
  },
  background: {
    en: {
      eyebrow: "ASSOCIATION",
      title: "ASSOCIATION BACKGROUND",
      page: [
        "The **Airsoft and Paintball Association of Thailand** was founded from a strong belief that Thailand has the talent, passion, and potential to become a leading force in Airsoft and Paintball across Asia.",
        "The Association is guided by leadership with more than **16 years of hands-on experience in the Airsoft and Paintball industry in the United States**, including involvement in organizing and supporting large-scale events, player communities, and industry activities.",
        "That international experience has helped build a **deep global network with Airsoft and Paintball associations, teams, organizers, field operators, and industry partners around the world**.",
        "We are bringing that knowledge, experience, and international connection back to Thailand to help strengthen standards, improve fields and events, develop players and teams, and create new opportunities for international cooperation and competition.",
        "Our goal is to combine **Thai passion with international experience** and build the structure, credibility, and global connections needed to take Thai Airsoft and Paintball to the next level.",
      ],
      closing: ["Experienced in the U.S. • Connected Worldwide • Building the Future in Thailand"],
    },
    th: {
      eyebrow: "สมาคม",
      title: "ประวัติความเป็นมาของสมาคม",
      page: [
        "**สมาคมแอร์ซอฟต์และเพ้นท์บอลแห่งประเทศไทย** ก่อตั้งขึ้นจากความเชื่อที่ว่า ประเทศไทยมีทั้งศักยภาพ ความมุ่งมั่น และความพร้อมที่จะก้าวขึ้นเป็นหนึ่งในประเทศชั้นนำด้านกีฬาแอร์ซอฟต์และเพ้นท์บอลของเอเชีย",
        "สมาคมขับเคลื่อนโดยผู้ก่อตั้งและทีมบริหารที่มี **ประสบการณ์ตรงในวงการแอร์ซอฟต์และเพ้นท์บอลในประเทศสหรัฐอเมริกามากกว่า 16 ปี** รวมถึงมีส่วนร่วมในการจัดและสนับสนุนอีเวนต์ขนาดใหญ่ การพัฒนาชุมชนผู้เล่น และกิจกรรมต่าง ๆ ในอุตสาหกรรม",
        "ประสบการณ์ดังกล่าวยังช่วยสร้าง **เครือข่ายความร่วมมือที่แข็งแกร่งกับสมาคม ทีม ผู้จัดการแข่งขัน ผู้ประกอบการสนาม และพันธมิตรในอุตสาหกรรมแอร์ซอฟต์และเพ้นท์บอลจากหลายประเทศทั่วโลก**",
        "เรานำองค์ความรู้ ประสบการณ์ และเครือข่ายระดับนานาชาติเหล่านี้กลับมาพัฒนาวงการในประเทศไทย เพื่อช่วยยกระดับมาตรฐาน พัฒนาสนามและการจัดงาน ส่งเสริมผู้เล่นและทีมไทย ตลอดจนเปิดโอกาสใหม่ ๆ สำหรับความร่วมมือและการแข่งขันในระดับนานาชาติ",
        "เป้าหมายของเราคือการผสาน **พลังและความหลงใหลของคนไทย เข้ากับประสบการณ์และมาตรฐานระดับโลก** เพื่อสร้างโครงสร้าง ความน่าเชื่อถือ และโอกาสที่จะผลักดันแอร์ซอฟต์และเพ้นท์บอลไทยไปสู่ระดับที่สูงขึ้น",
      ],
      closing: ["มากด้วยประสบการณ์จากสหรัฐฯ • เชื่อมโยงเครือข่ายทั่วโลก • สร้างความยิ่งใหญ่ของแอร์ซอฟต์ในประเทศไทย"],
    },
  },
};
