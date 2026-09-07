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

export const developPlayersTeamsCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "DEVELOP PLAYERS & TEAMS",
    lead: "We are committed to developing Thai players from the recreational level to professional and international competition.",
    body: [
      "Through training, structured competition, team development, leadership programs, and performance standards, we aim to help players improve their skills, discipline, teamwork, communication, and strategic thinking.",
      "Our long-term goal is to build stronger Thai teams capable of competing confidently and successfully on the world stage.",
    ],
    closing: "Develop Talent. Build Champions. Represent Thailand.",
  },
  th: {
    title: "พัฒนาผู้เล่นและทีม",
    lead: "เรามุ่งมั่นพัฒนาผู้เล่นไทย ตั้งแต่ระดับสันทนาการไปจนถึงการแข่งขันระดับประเทศและระดับนานาชาติ",
    body: [
      "ผ่านการฝึกอบรม การแข่งขันที่มีระบบ การพัฒนาทีม การสร้างภาวะผู้นำ และมาตรฐานด้านสมรรถนะ เราต้องการช่วยให้ผู้เล่นพัฒนาทักษะ ระเบียบวินัย การทำงานเป็นทีม การสื่อสาร และการคิดเชิงกลยุทธ์",
      "เป้าหมายระยะยาวคือการสร้างทีมไทยที่แข็งแกร่งและมีศักยภาพในการแข่งขันบนเวทีโลกอย่างมั่นใจ",
    ],
    closing: "พัฒนาศักยภาพ • สร้างแชมป์ • เป็นตัวแทนประเทศไทย",
  },
};

export const supportImproveFieldsCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "SUPPORT & IMPROVE AIRSOFT AND PAINTBALL FIELDS",
    lead: "Great players need great places to compete.",
    body: [
      "The Association will work with field operators to improve safety, game design, referee quality, emergency readiness, customer experience, and overall field management.",
      "We want Thailand to become internationally recognized for having some of the most professional, realistic, advanced, and exciting Airsoft and Paintball fields in Asia.",
    ],
    closing: "Better Fields. Better Experiences. Stronger Industry.",
  },
  th: {
    title: "สนับสนุนและยกระดับสนามแอร์ซอฟต์และเพ้นท์บอล",
    lead: "ผู้เล่นที่ดีต้องมีสนามที่ดีสำหรับการแข่งขัน",
    body: [
      "สมาคมจะทำงานร่วมกับผู้ประกอบการสนาม เพื่อยกระดับด้านความปลอดภัย การออกแบบเกม คุณภาพของกรรมการ ความพร้อมด้านเหตุฉุกเฉิน ประสบการณ์ของผู้เล่น และการบริหารสนามโดยรวม",
      "เราต้องการให้ประเทศไทยได้รับการยอมรับในระดับนานาชาติว่าเป็นประเทศที่มี สนามแอร์ซอฟต์และเพ้นท์บอลที่มีคุณภาพ สมจริง ทันสมัย และน่าตื่นเต้นที่สุดแห่งหนึ่งในเอเชีย",
    ],
    closing: "สนามที่ดีขึ้น • ประสบการณ์ที่ดีขึ้น • อุตสาหกรรมที่แข็งแกร่งขึ้น",
  },
};

export const organizeCompetitionsEventsCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "ORGANIZE PROFESSIONAL COMPETITIONS & EVENTS",
    lead: "We aim to raise the quality of Airsoft and Paintball competitions throughout Thailand by encouraging professional planning, consistent rules, qualified officials, strong safety management, and fair competition.",
    body: [
      "The Association will support local, regional, national, and international events that bring players together and create new opportunities for teams to test their skills.",
      "Our vision is for Thailand to host major competitions that attract players from across Asia and around the world.",
    ],
    closing: "Local Competition. National Excellence. Global Events.",
  },
  th: {
    title: "จัดการแข่งขันและอีเวนต์อย่างมืออาชีพ",
    lead: "เรามุ่งยกระดับมาตรฐานการแข่งขันแอร์ซอฟต์และเพ้นท์บอลทั่วประเทศไทย ด้วยการส่งเสริมการวางแผนอย่างมืออาชีพ กติกาที่สอดคล้องกัน กรรมการที่มีคุณภาพ การบริหารความปลอดภัย และการแข่งขันที่ยุติธรรม",
    body: [
      "สมาคมจะสนับสนุนการแข่งขันในระดับท้องถิ่น ระดับภูมิภาค ระดับประเทศ และระดับนานาชาติ เพื่อสร้างโอกาสให้ผู้เล่นและทีมได้ทดสอบและพัฒนาศักยภาพของตนเอง",
      "วิสัยทัศน์ของเราคือการผลักดันให้ประเทศไทยเป็นเจ้าภาพการแข่งขันขนาดใหญ่ที่สามารถดึงดูดผู้เล่นจากทั่วเอเชียและทั่วโลก",
    ],
    closing: "จากการแข่งขันระดับท้องถิ่น • สู่ความเป็นเลิศระดับประเทศ • สู่เวทีระดับโลก",
  },
};

export const buildPathwayCompetitionCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "BUILD A PATHWAY TO INTERNATIONAL COMPETITION",
    lead: "Thai players should have a clear path from local games to the international arena.",
    body: [
      "The Association aims to create structured development opportunities, national-level competitions, rankings, training programs, and selection pathways for players and teams with the potential to represent Thailand.",
      "Our goal is to help Thai athletes compete proudly and professionally in international competitions.",
    ],
    closing: "From Local Fields to the World Stage.",
  },
  th: {
    title: "สร้างเส้นทางสู่การแข่งขันระดับนานาชาติ",
    lead: "ผู้เล่นไทยควรมีเส้นทางที่ชัดเจนจากสนามในประเทศไปสู่เวทีโลก",
    body: [
      "สมาคมมีเป้าหมายในการสร้างระบบพัฒนาผู้เล่น การแข่งขันระดับประเทศ ระบบจัดอันดับ การฝึกอบรม และแนวทางการคัดเลือกสำหรับผู้เล่นและทีมที่มีศักยภาพในการเป็นตัวแทนประเทศไทย",
      "เราต้องการช่วยให้นักกีฬาไทยสามารถแข่งขันในเวทีนานาชาติได้อย่างภาคภูมิและมีความเป็นมืออาชีพ",
    ],
    closing: "จากสนามในประเทศไทย สู่เวทีโลก",
  },
};

export const strengthenCommunityCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "STRENGTHEN THE AIRSOFT & PAINTBALL COMMUNITY",
    lead: "A strong sport begins with a strong community.",
    body: [
      "We bring together players, teams, fields, event organizers, retailers, manufacturers, sponsors, and industry partners to create greater cooperation across Thailand.",
      "By connecting the community under shared values and standards, we can help the sport grow faster, create more opportunities, and build a stronger future together.",
    ],
    closing: "One Community. One Direction. One Future.",
  },
  th: {
    title: "สร้างความเข้มแข็งให้กับชุมชนแอร์ซอฟต์และเพ้นท์บอล",
    lead: "กีฬาที่แข็งแกร่งเริ่มต้นจากชุมชนที่แข็งแกร่ง",
    body: [
      "เรามุ่งเชื่อมโยงผู้เล่น ทีม สนาม ผู้จัดการแข่งขัน ร้านค้า ผู้ผลิต ผู้สนับสนุน และพันธมิตรในอุตสาหกรรมให้เกิดความร่วมมือที่แข็งแกร่งทั่วประเทศ",
      "ด้วยการรวมชุมชนภายใต้ค่านิยมและมาตรฐานร่วมกัน เราสามารถช่วยให้กีฬานี้เติบโตเร็วขึ้น สร้างโอกาสใหม่ และสร้างอนาคตที่แข็งแกร่งไปด้วยกัน",
    ],
    closing: "หนึ่งชุมชน • หนึ่งทิศทาง • หนึ่งอนาคต",
  },
};

export const promoteThailandHubCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "PROMOTE THAILAND AS THE AIRSOFT & PAINTBALL HUB OF ASIA",
    lead: "Our vision extends beyond national growth.",
    body: [
      "We aim to position Thailand as a premier destination for Airsoft and Paintball in Asia—attracting international players, teams, tournaments, training programs, manufacturers, exhibitions, and major events.",
      "With Thailand's strong tourism infrastructure, unique terrain, hospitality, and growing player community, we believe the country has the potential to become a world-class destination for the sport.",
    ],
    closing: "Play in Thailand. Compete in Asia. Connect with the World.",
  },
  th: {
    title: "ผลักดันประเทศไทยสู่การเป็นศูนย์กลางแอร์ซอฟต์และเพ้นท์บอลแห่งเอเชีย",
    lead: "วิสัยทัศน์ของเราไม่ได้หยุดอยู่เพียงการเติบโตในประเทศ",
    body: [
      "เรามุ่งผลักดันประเทศไทยให้เป็นจุดหมายปลายทางชั้นนำด้านแอร์ซอฟต์และเพ้นท์บอลของเอเชีย ดึงดูดผู้เล่น ทีม การแข่งขัน การฝึกอบรม ผู้ผลิต งานแสดงสินค้า และอีเวนต์ขนาดใหญ่จากทั่วโลก",
      "ด้วยศักยภาพด้านการท่องเที่ยว ภูมิประเทศที่หลากหลาย การบริการ และชุมชนผู้เล่นที่เติบโตอย่างต่อเนื่อง เราเชื่อว่าประเทศไทยมีศักยภาพที่จะก้าวขึ้นเป็นจุดหมายระดับโลกของกีฬาประเภทนี้",
    ],
    closing: "เล่นที่ประเทศไทย • แข่งขันในเอเชีย • เชื่อมต่อสู่โลก",
  },
};

export const recognizedSportsCopy: Record<SiteLanguage, ProgrammeCopy> = {
  en: {
    title: "ADVANCE AIRSOFT & PAINTBALL AS RECOGNIZED SPORTS",
    lead: "Our long-term mission is to help Airsoft and Paintball develop into more structured, respected, and internationally recognized competitive sports.",
    body: [
      "By strengthening standards, athlete development, competition systems, governance, safety, and international cooperation, we aim to support the continued advancement of both sports toward the highest levels of international competition.",
    ],
    closing: "Building Today. Competing Tomorrow. Creating the Future.",
  },
  th: {
    title: "ผลักดันแอร์ซอฟต์และเพ้นท์บอลสู่การเป็นกีฬาที่ได้รับการยอมรับ",
    lead: "พันธกิจระยะยาวของเราคือการช่วยพัฒนาแอร์ซอฟต์และเพ้นท์บอลให้เป็นกีฬาที่มีระบบ มีมาตรฐาน และได้รับการยอมรับในระดับนานาชาติมากยิ่งขึ้น",
    body: [
      "ด้วยการยกระดับมาตรฐาน การพัฒนานักกีฬา ระบบการแข่งขัน การกำกับดูแล ความปลอดภัย และความร่วมมือระหว่างประเทศ เรามุ่งสนับสนุนให้กีฬาทั้งสองประเภทเติบโตไปสู่ ระดับสูงสุดของการแข่งขันกีฬาสากลในอนาคต",
    ],
    closing: "สร้างมาตรฐานวันนี้ • แข่งขันระดับโลกวันหน้า • สร้างอนาคตของกีฬาไปด้วยกัน",
  },
};
