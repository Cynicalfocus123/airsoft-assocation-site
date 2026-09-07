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

export const teamworkSportsmanshipCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "TEAMWORK & SPORTSMANSHIP",
    lead: "Teamwork, discipline, respect, and integrity are at the heart of Airsoft and Paintball.",
    body: [
      "The Airsoft and Paintball Association is committed to promoting a strong culture of fair play through clear rules, consistent enforcement, qualified officials, and shared standards of conduct for players, teams, and event organizers.",
      "Our goal is to create an environment where every participant understands that success is not measured only by winning, but also by how the game is played—with honesty, responsibility, respect for opponents, and commitment to the team.",
      "We will encourage structured team development that strengthens communication, leadership, strategic thinking, trust, discipline, and cooperation, helping players become stronger both individually and as part of a team.",
      "By combining fair competition with strong sportsmanship, we aim to build a community that players can be proud to represent in Thailand and on the international stage.",
    ],
    closing: "Play as One. Compete with Honor. Win with Respect.",
  },
  th: {
    title: "การทำงานเป็นทีมและน้ำใจนักกีฬา",
    lead: "การทำงานเป็นทีม ระเบียบวินัย ความเคารพ และความซื่อสัตย์ คือหัวใจสำคัญของกีฬาแอร์ซอฟต์และเพ้นท์บอล",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งสร้างวัฒนธรรมการแข่งขันที่ยุติธรรม ผ่านกติกาที่ชัดเจน การบังคับใช้กฎอย่างสม่ำเสมอ กรรมการที่มีคุณภาพ และมาตรฐานพฤติกรรมที่ทุกฝ่ายยอมรับร่วมกัน",
      "เป้าหมายของเราคือการสร้างสภาพแวดล้อมที่ผู้เล่นทุกคนเข้าใจว่า ความสำเร็จไม่ได้วัดจากชัยชนะเพียงอย่างเดียว แต่ยังวัดจาก วิธีการเล่นที่มีเกียรติ ความซื่อสัตย์ ความรับผิดชอบ การเคารพคู่แข่งขัน และความทุ่มเทต่อทีม",
      "สมาคมจะส่งเสริมการพัฒนาทีมอย่างเป็นระบบ เพื่อเสริมสร้าง การสื่อสาร ภาวะผู้นำ การคิดเชิงกลยุทธ์ ความไว้วางใจ ระเบียบวินัย และความร่วมมือ ให้ผู้เล่นสามารถพัฒนาได้ทั้งในระดับบุคคลและในฐานะสมาชิกของทีม",
      "ด้วยการแข่งขันที่ยุติธรรมควบคู่กับน้ำใจนักกีฬา เรามุ่งสร้างชุมชนที่ผู้เล่นทุกคนภาคภูมิใจที่จะเป็นตัวแทนทั้งในประเทศไทยและบนเวทีนานาชาติ",
    ],
    closing: "เล่นเป็นหนึ่งเดียว • แข่งขันอย่างมีเกียรติ • ชนะด้วยความเคารพ",
  },
};

export const internationalCompetitionCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "INTERNATIONAL COMPETITION",
    lead: "The Airsoft and Paintball Association is committed to positioning Thailand as a leading destination for international Airsoft and Paintball competition.",
    body: [
      "Our mission is to raise the sport's profile throughout Thailand and Asia, develop players and teams to international standards, and create a professional platform capable of hosting major tournaments, training programs, exhibitions, and global events.",
      "We aim to build stronger relationships with international associations, federations, teams, organizers, and industry partners so that Thailand becomes increasingly connected to the global Airsoft and Paintball community.",
      "Our long-term vision is to help Thailand play a leading role in the sport's international development, strengthen regional cooperation, and support the creation of broader international structures that bring countries, players, and organizations together under shared standards.",
      "By combining world-class events, strong national standards, player development, and international partnerships, we believe Thailand has the potential to become a true Airsoft and Paintball Competition Hub of Asia.",
    ],
    closing: "Develop Thailand. Connect Asia. Compete with the World.",
  },
  th: {
    title: "การแข่งขันระดับนานาชาติ",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งผลักดันประเทศไทยให้ก้าวขึ้นเป็นหนึ่งในจุดหมายสำคัญของการแข่งขันแอร์ซอฟต์และเพ้นท์บอลระดับนานาชาติ",
    body: [
      "พันธกิจของเราคือการยกระดับความนิยมและภาพลักษณ์ของกีฬานี้ทั้งในประเทศไทยและภูมิภาคเอเชีย พัฒนาผู้เล่นและทีมให้มีมาตรฐานระดับสากล และสร้างแพลตฟอร์มที่มีความพร้อมสำหรับการจัด การแข่งขันรายการใหญ่ การฝึกอบรม งานแสดงสินค้า และอีเวนต์ระดับนานาชาติ",
      "เรามุ่งสร้างความสัมพันธ์ที่แข็งแกร่งกับ สมาคม สหพันธ์ ทีม ผู้จัดการแข่งขัน และพันธมิตรในอุตสาหกรรมจากทั่วโลก เพื่อเชื่อมโยงประเทศไทยเข้ากับเครือข่ายแอร์ซอฟต์และเพ้นท์บอลระดับนานาชาติอย่างเป็นรูปธรรม",
      "วิสัยทัศน์ระยะยาวของเราคือการผลักดันให้ประเทศไทยมีบทบาทสำคัญในการพัฒนากีฬานี้ในระดับสากล เสริมสร้างความร่วมมือระหว่างประเทศ และสนับสนุนการพัฒนาโครงสร้างความร่วมมือในระดับนานาชาติ ที่สามารถเชื่อมโยงประเทศ ผู้เล่น และองค์กรต่าง ๆ ภายใต้มาตรฐานร่วมกัน",
      "ด้วยการผสาน การแข่งขันระดับโลก มาตรฐานระดับประเทศ การพัฒนาผู้เล่น และเครือข่ายพันธมิตรระหว่างประเทศ เราเชื่อว่าประเทศไทยมีศักยภาพที่จะก้าวขึ้นเป็น ศูนย์กลางการแข่งขันแอร์ซอฟต์และเพ้นท์บอลแห่งเอเชีย",
    ],
    closing: "พัฒนาประเทศไทย • เชื่อมโยงเอเชีย • แข่งขันกับระดับโลก",
  },
};

export const tournamentsEventsCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "TOURNAMENTS & EVENTS",
    lead: "The Airsoft and Paintball Association is committed to developing a new generation of professional tournaments and large-scale events across Thailand, with the long-term goal of expanding into the international arena.",
    body: [
      "Our events will be designed to deliver more than competition. We aim to create immersive, world-class experiences that combine advanced technology, realistic game scenarios, professional event production, unique themes, and high standards of safety and organization.",
      "From regional tournaments to major international events, our vision is to position Thailand as a destination where players can experience some of the most exciting, innovative, and professionally organized Airsoft and Paintball events in the world.",
      "We will continue to introduce new concepts, technologies, and game formats that raise expectations for what an Airsoft or Paintball event can be—while creating opportunities for Thai players, international teams, sponsors, manufacturers, and spectators to come together on one global platform.",
      "Our ultimate goal is to build signature events in Thailand that become recognized internationally and help establish the country as a leading Airsoft and Paintball event destination in Asia and beyond.",
    ],
    closing: "Bigger Events. Greater Realism. Advanced Technology. World-Class Competition.",
  },
  th: {
    title: "การแข่งขันและอีเวนต์",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งพัฒนาการแข่งขันและอีเวนต์รูปแบบใหม่ทั่วประเทศไทย โดยมีเป้าหมายระยะยาวในการขยายสู่เวทีระดับนานาชาติ",
    body: [
      "กิจกรรมของเราจะไม่หยุดอยู่เพียงแค่การแข่งขัน แต่จะถูกออกแบบให้เป็น ประสบการณ์ระดับโลกที่สมจริง ตื่นเต้น และแตกต่าง ด้วยการผสานเทคโนโลยีสมัยใหม่ ฉากและสถานการณ์จำลองที่สมจริง การผลิตอีเวนต์อย่างมืออาชีพ ธีมที่โดดเด่น และมาตรฐานความปลอดภัยในระดับสูง",
      "ตั้งแต่การแข่งขันระดับภูมิภาค ไปจนถึงอีเวนต์ระดับนานาชาติ วิสัยทัศน์ของเราคือการทำให้ประเทศไทยเป็นจุดหมายปลายทางที่ผู้เล่นจากทั่วโลกสามารถมาสัมผัสกับ การแข่งขันแอร์ซอฟต์และเพ้นท์บอลที่น่าตื่นเต้น สร้างสรรค์ และมีมาตรฐานระดับโลก",
      "เราจะพัฒนาแนวคิด เทคโนโลยี และรูปแบบเกมใหม่ ๆ อย่างต่อเนื่อง เพื่อยกระดับมาตรฐานของอีเวนต์ พร้อมสร้างเวทีที่เปิดโอกาสให้ผู้เล่นไทย ทีมต่างประเทศ ผู้สนับสนุน ผู้ผลิต และผู้ชม ได้เชื่อมโยงกันในระดับสากล",
      "เป้าหมายสูงสุดของเราคือการสร้าง Signature Event ของประเทศไทย ที่ได้รับการยอมรับในระดับนานาชาติ และช่วยผลักดันให้ประเทศไทยก้าวขึ้นเป็นหนึ่งในศูนย์กลางการจัดการแข่งขันและอีเวนต์แอร์ซอฟต์และเพ้นท์บอลชั้นนำของเอเชียและระดับโลก",
    ],
    closing: "อีเวนต์ที่ยิ่งใหญ่กว่า • ความสมจริงที่เหนือกว่า • เทคโนโลยีที่ล้ำสมัย • การแข่งขันระดับโลก",
  },
};
