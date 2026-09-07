import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

export type RulesSafetyCopy = {
  title: string;
  lead: string;
  body: string[];
  closing: string;
};

export const playingRulesCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "PLAYING RULES",
    lead: "Clear and consistent rules are essential to creating a safe, fair, and professional Airsoft and Paintball environment.",
    body: [
      "The Airsoft and Paintball Association is developing standardized playing rules and official guidance to support players, teams, referees, marshals, field operators, and event organizers throughout Thailand.",
      "Our playing rules will cover key areas including game conduct, player responsibilities, hit confirmation, engagement rules, FPS and Joule limits, minimum engagement distances, protective equipment, referee decisions, penalties, sportsmanship, and field-specific safety requirements.",
      "The goal is to create a common framework that helps reduce confusion, improves fairness, strengthens safety, and ensures that players understand what is expected before entering the field.",
      "By promoting consistent rules across participating fields and competitions, we aim to create a more trusted, professional, and internationally aligned playing experience throughout Thailand.",
    ],
    closing: "Clear Rules. Fair Competition. Safer Play.",
  },
  th: {
    title: "กติกาการเล่น",
    lead: "กติกาที่ชัดเจนและเป็นมาตรฐานเดียวกัน คือพื้นฐานสำคัญของการสร้างสภาพแวดล้อมในการเล่นแอร์ซอฟต์และเพ้นท์บอลที่ ปลอดภัย ยุติธรรม และเป็นมืออาชีพ",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนากติกาการเล่นมาตรฐานและแนวทางอย่างเป็นทางการ เพื่อสนับสนุน ผู้เล่น ทีม กรรมการ มาร์แชล ผู้ประกอบการสนาม และผู้จัดการแข่งขันทั่วประเทศไทย",
      "กติกาของเราจะครอบคลุมหัวข้อสำคัญ เช่น พฤติกรรมในการเล่น หน้าที่และความรับผิดชอบของผู้เล่น การยืนยันการโดนยิง กติกาการปะทะ ข้อกำหนด FPS และ Joule ระยะการยิงขั้นต่ำ อุปกรณ์ป้องกัน การตัดสินของกรรมการ บทลงโทษ น้ำใจนักกีฬา และข้อกำหนดด้านความปลอดภัยของแต่ละสนาม",
      "เป้าหมายของเราคือการสร้างกรอบกติกากลางที่ช่วยลดความสับสน เพิ่มความยุติธรรม เสริมความปลอดภัย และทำให้ผู้เล่นทุกคนเข้าใจอย่างชัดเจนถึงสิ่งที่ต้องปฏิบัติก่อนลงสนาม",
      "ด้วยการส่งเสริมให้สนามและการแข่งขันที่เข้าร่วมใช้กติกาที่สอดคล้องกัน เรามุ่งสร้างประสบการณ์การเล่นที่ น่าเชื่อถือ เป็นมืออาชีพ และสอดคล้องกับมาตรฐานสากล ทั่วประเทศไทย",
    ],
    closing: "กติกาชัดเจน • แข่งขันยุติธรรม • เล่นอย่างปลอดภัย",
  },
};

export const safetyRequirementsCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "SAFETY REQUIREMENTS",
    lead: "Safety is the foundation of every responsible Airsoft and Paintball activity.",
    body: [
      "The Airsoft and Paintball Association is developing clear safety requirements and operating guidelines to help protect players, staff, officials, spectators, and field operators throughout Thailand.",
      "Our safety framework will cover key areas including protective equipment, eye and face protection, FPS and Joule limits, chronograph procedures, minimum engagement distances, safe zones, equipment handling, field inspections, emergency response, first-aid readiness, referee authority, and incident reporting.",
      "We aim to create consistent safety expectations across participating fields and events so that every player understands the rules before entering the game area and every organizer is prepared to manage risk responsibly.",
      "By strengthening safety standards nationwide, we can build greater confidence among Thai players, international visitors, families, sponsors, and event partners while supporting the long-term professional growth of the sport.",
    ],
    closing: "Safety First. Standards Always. Confidence Everywhere.",
  },
  th: {
    title: "ข้อกำหนดด้านความปลอดภัย",
    lead: "ความปลอดภัยคือรากฐานสำคัญของกิจกรรมแอร์ซอฟต์และเพ้นท์บอลที่มีความรับผิดชอบและได้มาตรฐาน",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนาข้อกำหนดด้านความปลอดภัยและแนวทางการปฏิบัติงานที่ชัดเจน เพื่อช่วยคุ้มครอง ผู้เล่น เจ้าหน้าที่ กรรมการ ผู้ชม และผู้ประกอบการสนามทั่วประเทศไทย",
      "กรอบมาตรฐานด้านความปลอดภัยของเราจะครอบคลุมหัวข้อสำคัญ เช่น อุปกรณ์ป้องกัน ดวงตาและใบหน้า ข้อกำหนด FPS และ Joule ขั้นตอนการตรวจ Chronograph ระยะการยิงขั้นต่ำ พื้นที่ปลอดภัย การใช้งานอุปกรณ์อย่างถูกต้อง การตรวจสอบสนาม แผนรับมือเหตุฉุกเฉิน การเตรียมความพร้อมด้านปฐมพยาบาล อำนาจหน้าที่ของกรรมการ และการรายงานอุบัติการณ์",
      "เรามุ่งสร้างมาตรฐานความปลอดภัยที่สอดคล้องกันในสนามและอีเวนต์ที่เข้าร่วมกับสมาคม เพื่อให้ผู้เล่นทุกคนเข้าใจกติกาก่อนเข้าสู่พื้นที่เล่น และให้ผู้จัดงานมีความพร้อมในการบริหารความเสี่ยงอย่างเป็นระบบและมีความรับผิดชอบ",
      "การยกระดับมาตรฐานความปลอดภัยทั่วประเทศ จะช่วยสร้างความเชื่อมั่นให้กับ ผู้เล่นชาวไทย ผู้เล่นจากต่างประเทศ ครอบครัว ผู้สนับสนุน และพันธมิตรด้านอีเวนต์ พร้อมสนับสนุนการเติบโตของกีฬาในระยะยาวอย่างมืออาชีพ",
    ],
    closing: "ความปลอดภัยต้องมาก่อน • มาตรฐานต้องชัดเจน • ความเชื่อมั่นต้องเกิดขึ้นทุกสนาม",
  },
};

export const eyeFaceProtectionCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "EYE & FACE PROTECTION",
    lead: "Proper eye and face protection is one of the most important safety requirements in Airsoft and Paintball.",
    body: [
      "The Airsoft and Paintball Association is developing clear guidelines for approved protective equipment to help ensure that players use gear that is suitable for the impact levels and conditions of the sport.",
      "Our guidance will define recommended performance specifications, impact-resistance standards, full-seal requirements, lens condition, face protection, fit, inspection, and replacement criteria for protective equipment used during games and competitions.",
      "We aim to give players, teams, fields, and event organizers a consistent reference for selecting and checking protective equipment before anyone enters the playing area.",
      "By establishing clear protection standards, we can reduce unnecessary risk, strengthen confidence, and create a safer playing environment across participating fields in Thailand.",
    ],
    closing: "Protect Your Vision. Protect Your Face. Play with Confidence.",
  },
  th: {
    title: "การป้องกันดวงตาและใบหน้า",
    lead: "การป้องกันดวงตาและใบหน้าอย่างเหมาะสม ถือเป็นหนึ่งในมาตรการด้านความปลอดภัยที่สำคัญที่สุดของกีฬาแอร์ซอฟต์และเพ้นท์บอล",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนาแนวทางที่ชัดเจนสำหรับอุปกรณ์ป้องกันที่เหมาะสม เพื่อให้ผู้เล่นเลือกใช้อุปกรณ์ที่สามารถรองรับแรงกระแทกและสภาพการเล่นของกีฬาประเภทนี้ได้อย่างปลอดภัย",
      "แนวทางของสมาคมจะกำหนดข้อแนะนำเกี่ยวกับ คุณสมบัติของอุปกรณ์ มาตรฐานการทนแรงกระแทก การปิดกระชับรอบดวงตา สภาพของเลนส์ การป้องกันใบหน้า ความพอดีในการสวมใส่ ขั้นตอนการตรวจสอบ และเกณฑ์การเปลี่ยนอุปกรณ์เมื่อเสื่อมสภาพ",
      "เรามุ่งสร้างมาตรฐานกลางที่ผู้เล่น ทีม สนาม และผู้จัดการแข่งขันสามารถใช้เป็นแนวทางเดียวกันในการเลือก ตรวจสอบ และอนุมัติอุปกรณ์ป้องกันก่อนเข้าสู่พื้นที่เล่น",
      "ด้วยการกำหนดมาตรฐานอุปกรณ์ป้องกันที่ชัดเจน เราสามารถช่วยลดความเสี่ยงที่ไม่จำเป็น สร้างความมั่นใจให้กับผู้เล่น และยกระดับความปลอดภัยของสนามแอร์ซอฟต์และเพ้นท์บอลทั่วประเทศไทย",
    ],
    closing: "ปกป้องดวงตา • ปกป้องใบหน้า • เล่นอย่างมั่นใจ",
  },
};

export const fpsJouleStandardsCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "FPS & JOULE STANDARDS",
    lead: "Consistent velocity and energy limits are essential to maintaining a safe and fair Airsoft and Paintball environment.",
    body: [
      "The Airsoft and Paintball Association is developing clear FPS and Joule guidelines to help ensure that equipment used in games and competitions operates within appropriate safety limits.",
      "Our standards will address key areas including chronograph testing, BB weight, muzzle energy, equipment classification, engagement distance, field limits, pre-game inspections, and procedures for equipment that exceeds permitted thresholds.",
      "The goal is to create a consistent national reference that players, teams, referees, marshals, field operators, and event organizers can follow before and during every game.",
      "By applying clear and measurable standards, we can reduce unnecessary risk, improve fairness, and build greater confidence in the quality and professionalism of Airsoft and Paintball throughout Thailand.",
    ],
    closing: "Measured Performance. Clear Limits. Safer Competition.",
  },
  th: {
    title: "มาตรฐาน FPS และ Joule",
    lead: "การกำหนดค่าความเร็วและพลังงานของอุปกรณ์อย่างชัดเจนและสอดคล้องกัน เป็นหัวใจสำคัญของการสร้างสภาพแวดล้อมการเล่นแอร์ซอฟต์และเพ้นท์บอลที่ ปลอดภัย ยุติธรรม และได้มาตรฐาน",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนาแนวทางมาตรฐานด้าน FPS และ Joule เพื่อให้มั่นใจว่าอุปกรณ์ที่ใช้ในการเล่นและการแข่งขันอยู่ภายในระดับที่เหมาะสมและปลอดภัย",
      "มาตรฐานของเราจะครอบคลุมหัวข้อสำคัญ เช่น การตรวจ Chronograph น้ำหนักกระสุน BB พลังงานปากกระบอก การจัดประเภทอุปกรณ์ ระยะการยิงขั้นต่ำ ข้อจำกัดของสนาม การตรวจอุปกรณ์ก่อนเริ่มเกม และขั้นตอนการจัดการกับอุปกรณ์ที่มีค่าพลังงานเกินเกณฑ์ที่กำหนด",
      "เป้าหมายของเราคือการสร้างมาตรฐานกลางระดับประเทศที่ ผู้เล่น ทีม กรรมการ มาร์แชล ผู้ประกอบการสนาม และผู้จัดการแข่งขัน สามารถยึดถือและปฏิบัติร่วมกันได้ทั้งก่อนและระหว่างการแข่งขัน",
      "ด้วยมาตรฐานที่ชัดเจนและสามารถตรวจวัดได้ เราจะช่วยลดความเสี่ยงที่ไม่จำเป็น เพิ่มความยุติธรรมในการแข่งขัน และสร้างความเชื่อมั่นในคุณภาพและความเป็นมืออาชีพของกีฬาแอร์ซอฟต์และเพ้นท์บอลทั่วประเทศไทย",
    ],
    closing: "วัดผลได้ชัดเจน • กำหนดขีดจำกัดอย่างเหมาะสม • แข่งขันอย่างปลอดภัย",
  },
};

export const engagementDistancesCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "ENGAGEMENT DISTANCES",
    lead: "Appropriate engagement distances are essential to maintaining a safe, controlled, and fair Airsoft and Paintball environment.",
    body: [
      "The Airsoft and Paintball Association is developing clear engagement-distance guidelines based on equipment type, muzzle energy, game format, and field conditions to help reduce unnecessary risk during play.",
      "Our standards will provide guidance on minimum engagement distances, close-range procedures, weapon classifications, FPS and Joule thresholds, referee enforcement, field-specific restrictions, and player responsibilities.",
      "The goal is to ensure that every participant understands when and how engagement is permitted, helping to protect players while preserving the realism, intensity, and competitiveness of the sport.",
      "By applying consistent and measurable engagement standards across participating fields and events, we aim to create a safer, more professional, and internationally aligned playing environment throughout Thailand.",
    ],
    closing: "Know the Distance. Respect the Rules. Protect Every Player.",
  },
  th: {
    title: "ระยะการยิงและการเข้าปะทะ",
    lead: "การกำหนดระยะการยิงที่เหมาะสมเป็นส่วนสำคัญในการสร้างสภาพแวดล้อมการเล่นแอร์ซอฟต์และเพ้นท์บอลที่ ปลอดภัย ควบคุมได้ และยุติธรรม",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนาแนวทางด้านระยะการยิงและการเข้าปะทะที่ชัดเจน โดยพิจารณาจากประเภทของอุปกรณ์ พลังงานปากกระบอก รูปแบบของเกม และสภาพของสนาม เพื่อช่วยลดความเสี่ยงที่ไม่จำเป็นระหว่างการเล่น",
      "มาตรฐานของเราจะครอบคลุมหัวข้อสำคัญ เช่น ระยะการยิงขั้นต่ำ ขั้นตอนการเล่นในระยะประชิด การจัดประเภทอุปกรณ์ ข้อกำหนด FPS และ Joule การบังคับใช้กติกาโดยกรรมการ ข้อจำกัดเฉพาะของแต่ละสนาม และความรับผิดชอบของผู้เล่น",
      "เป้าหมายของเราคือการทำให้ผู้เล่นทุกคนเข้าใจอย่างชัดเจนว่า สามารถเข้าปะทะได้เมื่อใดและในระยะใด เพื่อช่วยปกป้องความปลอดภัยของผู้เล่น ขณะเดียวกันยังคงรักษา ความสมจริง ความเข้มข้น และความสนุกของการแข่งขัน",
      "ด้วยการใช้มาตรฐานด้านระยะการยิงที่ชัดเจนและสามารถตรวจสอบได้ในสนามและอีเวนต์ที่เข้าร่วมกับสมาคม เรามุ่งสร้างสภาพแวดล้อมการเล่นที่ ปลอดภัย เป็นมืออาชีพ และสอดคล้องกับมาตรฐานระดับนานาชาติ",
    ],
    closing: "รู้ระยะ • เคารพกติกา • ปกป้องผู้เล่นทุกคน",
  },
};

export const playerConductCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "PLAYER CONDUCT",
    lead: "Professional conduct is essential to maintaining the integrity, safety, and reputation of Airsoft and Paintball.",
    body: [
      "The Airsoft and Paintball Association is developing clear standards of conduct for players, teams, referees, marshals, field operators, and event participants to help ensure that every game is played with respect, discipline, honesty, and responsibility.",
      "Our guidelines will address key areas including sportsmanship, respect for officials and opponents, rule compliance, responsible equipment use, hit calling, prohibited behavior, conflict resolution, penalties, and respect for field property and other participants.",
      "Our goal is to create a culture where players compete with intensity while maintaining self-control, fairness, and respect for the sport and everyone involved.",
      "By promoting strong player conduct standards, we aim to build greater trust within the community, improve the overall playing experience, and strengthen the professional image of Thai Airsoft and Paintball nationally and internationally.",
    ],
    closing: "Compete with Discipline. Play with Integrity. Respect the Game.",
  },
  th: {
    title: "การประพฤติปฏิบัติของผู้เล่น",
    lead: "การประพฤติตนอย่างเหมาะสมและเป็นมืออาชีพ คือส่วนสำคัญในการรักษา มาตรฐาน ความปลอดภัย และภาพลักษณ์ที่ดีของกีฬาแอร์ซอฟต์และเพ้นท์บอล",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนามาตรฐานด้านพฤติกรรมสำหรับผู้เล่น ทีม กรรมการ มาร์แชล ผู้ประกอบการสนาม และผู้เข้าร่วมกิจกรรม เพื่อให้ทุกการแข่งขันดำเนินไปด้วย ความเคารพ ระเบียบวินัย ความซื่อสัตย์ และความรับผิดชอบ",
      "แนวทางของเราจะครอบคลุมหัวข้อสำคัญ เช่น น้ำใจนักกีฬา การเคารพกรรมการและคู่แข่งขัน การปฏิบัติตามกติกา การใช้อุปกรณ์อย่างรับผิดชอบ การยอมรับเมื่อถูกยิง พฤติกรรมต้องห้าม การจัดการข้อขัดแย้ง บทลงโทษ และการเคารพทรัพย์สินของสนามและผู้เข้าร่วมทุกคน",
      "เป้าหมายของเราคือการสร้างวัฒนธรรมที่ผู้เล่นสามารถแข่งขันได้อย่างเต็มความสามารถ พร้อมรักษา การควบคุมตนเอง ความยุติธรรม และการให้เกียรติกีฬาและผู้ที่เกี่ยวข้องทุกฝ่าย",
      "ด้วยมาตรฐานพฤติกรรมที่ชัดเจน เรามุ่งสร้างความเชื่อมั่นภายในชุมชน ยกระดับประสบการณ์ของผู้เล่น และเสริมสร้างภาพลักษณ์ของแอร์ซอฟต์และเพ้นท์บอลไทยให้มีความเป็นมืออาชีพทั้งในประเทศและระดับนานาชาติ",
    ],
    closing: "แข่งขันด้วยวินัย • เล่นด้วยความซื่อสัตย์ • เคารพในเกม",
  },
};

export const refereeMarshalStandardsCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "REFEREE & MARSHAL STANDARDS",
    lead: "Qualified referees and marshals are essential to maintaining safety, fairness, discipline, and confidence in every Airsoft and Paintball game.",
    body: [
      "The Airsoft and Paintball Association is developing clear standards, training guidelines, and operating procedures for referees and marshals to help ensure consistent and professional game management across participating fields and events.",
      "Our standards will cover key areas including rule enforcement, player safety, game control, conflict management, communication, penalty procedures, incident response, equipment checks, field positioning, and professional conduct.",
      "Our goal is to build a trusted system where referees and marshals are properly trained, understand their responsibilities, make fair and consistent decisions, and have the authority to protect both the integrity of the game and the safety of every participant.",
      "Through stronger referee and marshal standards, we aim to improve the quality of competition, reduce disputes, strengthen player confidence, and raise the overall professionalism of Airsoft and Paintball throughout Thailand.",
    ],
    closing: "Qualified Officials. Fair Decisions. Safer Games. Higher Standards.",
  },
  th: {
    title: "มาตรฐานกรรมการและมาร์แชล",
    lead: "กรรมการและมาร์แชลที่มีคุณภาพ คือองค์ประกอบสำคัญในการรักษา ความปลอดภัย ความยุติธรรม ระเบียบวินัย และความเชื่อมั่น ในทุกการแข่งขันแอร์ซอฟต์และเพ้นท์บอล",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนามาตรฐาน แนวทางการฝึกอบรม และขั้นตอนการปฏิบัติงานสำหรับกรรมการและมาร์แชล เพื่อให้การบริหารเกมในสนามและอีเวนต์ที่เข้าร่วมกับสมาคมเป็นไปอย่างสม่ำเสมอและเป็นมืออาชีพ",
      "มาตรฐานของเราจะครอบคลุมหัวข้อสำคัญ เช่น การบังคับใช้กติกา ความปลอดภัยของผู้เล่น การควบคุมเกม การจัดการข้อขัดแย้ง การสื่อสาร ขั้นตอนการลงโทษ การรับมือเหตุการณ์ฉุกเฉิน การตรวจสอบอุปกรณ์ การวางตำแหน่งในสนาม และจรรยาบรรณในการปฏิบัติหน้าที่",
      "เป้าหมายของเราคือการสร้างระบบที่ผู้เล่นสามารถเชื่อมั่นได้ โดยกรรมการและมาร์แชลจะต้องได้รับการฝึกอบรมอย่างเหมาะสม เข้าใจบทบาทและความรับผิดชอบ ตัดสินอย่างยุติธรรมและสม่ำเสมอ และมีอำนาจในการรักษาทั้งความถูกต้องของการแข่งขันและความปลอดภัยของผู้เข้าร่วมทุกคน",
      "ด้วยการยกระดับมาตรฐานของกรรมการและมาร์แชล เรามุ่งลดข้อโต้แย้ง เพิ่มความเชื่อมั่นของผู้เล่น ยกระดับคุณภาพการแข่งขัน และเสริมสร้างความเป็นมืออาชีพของกีฬาแอร์ซอฟต์และเพ้นท์บอลทั่วประเทศไทย",
    ],
    closing: "กรรมการมีคุณภาพ • การตัดสินยุติธรรม • เกมปลอดภัย • มาตรฐานสูงขึ้น",
  },
};

export const fieldStandardsCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "FIELD STANDARDS",
    lead: "Consistent field standards are essential to creating a safe, professional, and trusted Airsoft and Paintball environment.",
    body: [
      "The Airsoft and Paintball Association is developing a national field-standard framework designed to help participating fields across Thailand align with recognized international practices.",
      "Our standards will address key areas including field layout, safety zones, staging areas, game boundaries, protective barriers, signage, emergency access, referee positioning, player facilities, equipment inspection, risk management, and overall operational procedures.",
      "Our goal is to establish a clear benchmark that helps field owners and operators continuously improve quality, safety, and player experience while preparing their facilities to host both national and international events.",
      "By raising field standards across the country, we aim to build greater confidence among Thai players, international visitors, event organizers, sponsors, and partners—and strengthen Thailand’s reputation as a leading destination for Airsoft and Paintball in Asia.",
    ],
    closing: "Stronger Fields. Consistent Standards. International Confidence.",
  },
  th: {
    title: "มาตรฐานสนาม",
    lead: "มาตรฐานสนามที่ชัดเจนและสอดคล้องกัน คือองค์ประกอบสำคัญในการสร้างสภาพแวดล้อมของกีฬาแอร์ซอฟต์และเพ้นท์บอลที่ ปลอดภัย เป็นมืออาชีพ และได้รับความเชื่อมั่น",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนากรอบมาตรฐานสนามระดับประเทศ เพื่อช่วยให้สนามที่เข้าร่วมกับสมาคมทั่วประเทศไทยสามารถยกระดับการดำเนินงานให้สอดคล้องกับแนวทางและมาตรฐานที่ได้รับการยอมรับในระดับนานาชาติ",
      "มาตรฐานของเราจะครอบคลุมหัวข้อสำคัญ เช่น การออกแบบและจัดผังสนาม พื้นที่ปลอดภัย พื้นที่เตรียมตัว ขอบเขตการเล่น แนวกั้นป้องกัน ป้ายเตือนและป้ายสื่อสาร เส้นทางฉุกเฉิน ตำแหน่งของกรรมการ สิ่งอำนวยความสะดวกสำหรับผู้เล่น การตรวจสอบอุปกรณ์ การบริหารความเสี่ยง และขั้นตอนการปฏิบัติงานภายในสนาม",
      "เป้าหมายของเราคือการสร้างเกณฑ์มาตรฐานที่ชัดเจน เพื่อช่วยให้เจ้าของและผู้ประกอบการสนามสามารถพัฒนาคุณภาพ ความปลอดภัย และประสบการณ์ของผู้เล่นได้อย่างต่อเนื่อง พร้อมยกระดับสนามให้มีความพร้อมสำหรับการจัดการแข่งขันและอีเวนต์ทั้งในระดับประเทศและระดับนานาชาติ",
      "ด้วยการยกระดับมาตรฐานสนามทั่วประเทศ เรามุ่งสร้างความเชื่อมั่นให้กับ ผู้เล่นชาวไทย ผู้เล่นจากต่างประเทศ ผู้จัดการแข่งขัน ผู้สนับสนุน และพันธมิตร พร้อมเสริมสร้างภาพลักษณ์ของประเทศไทยให้เป็นหนึ่งในจุดหมายปลายทางชั้นนำด้านกีฬาแอร์ซอฟต์และเพ้นท์บอลของเอเชีย",
    ],
    closing: "สนามแข็งแกร่งขึ้น • มาตรฐานเป็นหนึ่งเดียว • สร้างความเชื่อมั่นระดับนานาชาติ",
  },
};

export const approvedFieldsCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "APPROVED FIELDS",
    lead: "The Airsoft and Paintball Association is developing an official field approval framework to recognize facilities that meet high standards of safety, operations, player experience, professionalism, and event readiness.",
    body: [
      "Approved fields will be assessed against clear criteria designed to align with recognized international practices, including field layout, safety zones, protective barriers, emergency access, referee and marshal operations, equipment inspection, player facilities, risk management, and overall field management.",
      "Our goal is to create a trusted approval system that gives players, teams, organizers, sponsors, and international visitors greater confidence when choosing where to play or host events in Thailand.",
      "Fields that achieve Association approval will demonstrate a commitment to continuous improvement and to delivering an experience that meets the expectations of both Thai and international players.",
      "In the long term, we aim for Association-approved fields to become recognized as some of the most respected, professional, and high-quality Airsoft and Paintball venues in Asia.",
    ],
    closing: "Approved for Quality. Built for Safety. Recognized for Excellence.",
  },
  th: {
    title: "สนามที่ได้รับการรับรอง",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนาระบบการรับรองสนามอย่างเป็นทางการ เพื่อยกระดับและรับรองสนามที่ผ่านมาตรฐานด้าน ความปลอดภัย การบริหารจัดการ ประสบการณ์ของผู้เล่น ความเป็นมืออาชีพ และความพร้อมในการจัดการแข่งขันหรืออีเวนต์",
    body: [
      "สนามที่ขอรับการรับรองจะได้รับการประเมินตามเกณฑ์ที่ชัดเจนและสอดคล้องกับแนวปฏิบัติที่ได้รับการยอมรับในระดับนานาชาติ โดยครอบคลุมหัวข้อสำคัญ เช่น การออกแบบสนาม พื้นที่ปลอดภัย แนวกั้นป้องกัน เส้นทางฉุกเฉิน การปฏิบัติงานของกรรมการและมาร์แชล การตรวจสอบอุปกรณ์ สิ่งอำนวยความสะดวกสำหรับผู้เล่น การบริหารความเสี่ยง และการจัดการสนามโดยรวม",
      "เป้าหมายของเราคือการสร้างระบบรับรองที่ผู้เล่น ทีม ผู้จัดการแข่งขัน ผู้สนับสนุน และผู้เล่นจากต่างประเทศสามารถเชื่อมั่นได้ เมื่อเลือกสนามสำหรับการเล่น การแข่งขัน หรือการจัดอีเวนต์ในประเทศไทย",
      "สนามที่ได้รับการรับรองจากสมาคมจะแสดงให้เห็นถึงความมุ่งมั่นในการพัฒนาคุณภาพอย่างต่อเนื่อง และความพร้อมในการมอบประสบการณ์ที่ตอบสนองความคาดหวังของทั้งผู้เล่นชาวไทยและผู้เล่นระดับนานาชาติ",
      "ในระยะยาว เรามุ่งให้สนามที่ผ่านการรับรองของสมาคมได้รับการยอมรับว่าเป็นหนึ่งใน สนามแอร์ซอฟต์และเพ้นท์บอลที่มีคุณภาพสูง เป็นมืออาชีพ และได้รับความเคารพมากที่สุดในเอเชีย",
    ],
    closing: "รับรองด้วยคุณภาพ • สร้างด้วยความปลอดภัย • เป็นที่ยอมรับด้วยความเป็นเลิศ",
  },
};

export const safetyInspectionCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "SAFETY INSPECTION",
    lead: "The Airsoft and Paintball Association is developing a structured safety inspection program to help ensure that participating fields and events meet high standards of safety, readiness, and professional operation.",
    body: [
      "Our inspection framework will evaluate key areas including field conditions, protective barriers, safe zones, emergency access, player facilities, equipment checks, referee and marshal readiness, first-aid provisions, risk controls, signage, and operating procedures.",
      "The goal is to create a consistent inspection process that gives players, teams, families, event organizers, sponsors, and international visitors greater confidence that participating facilities are being operated responsibly and in line with recognized international practices.",
      "Fields that meet Association safety requirements will demonstrate a clear commitment to protecting players and continuously improving their standards.",
      "By strengthening safety inspection across Thailand, we aim to build greater trust in Thai Airsoft and Paintball and support Thailand’s reputation as a safe, professional, and internationally respected destination for the sport.",
    ],
    closing: "Inspect for Safety. Operate with Confidence. Earn International Trust.",
  },
  th: {
    title: "การตรวจสอบความปลอดภัย",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนาระบบการตรวจสอบความปลอดภัยอย่างเป็นระบบ เพื่อช่วยให้สนามและอีเวนต์ที่เข้าร่วมกับสมาคม มีมาตรฐานสูงในด้าน ความปลอดภัย ความพร้อม และการดำเนินงานอย่างมืออาชีพ",
    body: [
      "กรอบการตรวจสอบของเราจะครอบคลุมหัวข้อสำคัญ เช่น สภาพสนาม แนวกั้นป้องกัน พื้นที่ปลอดภัย เส้นทางฉุกเฉิน สิ่งอำนวยความสะดวกสำหรับผู้เล่น การตรวจสอบอุปกรณ์ ความพร้อมของกรรมการและมาร์แชล การเตรียมการปฐมพยาบาล การควบคุมความเสี่ยง ป้ายเตือน และขั้นตอนการปฏิบัติงาน",
      "เป้าหมายของเราคือการสร้างกระบวนการตรวจสอบที่มีมาตรฐานเดียวกัน เพื่อให้ผู้เล่น ทีม ครอบครัว ผู้จัดการแข่งขัน ผู้สนับสนุน และผู้เล่นจากต่างประเทศ มีความมั่นใจมากยิ่งขึ้นว่าสนามและสถานที่จัดกิจกรรมได้รับการบริหารอย่างมีความรับผิดชอบ และสอดคล้องกับแนวปฏิบัติที่ได้รับการยอมรับในระดับนานาชาติ",
      "สนามที่ผ่านข้อกำหนดด้านความปลอดภัยของสมาคม จะแสดงให้เห็นถึงความมุ่งมั่นในด้าน การคุ้มครองผู้เล่น การบริหารจัดการอย่างมืออาชีพ และการพัฒนามาตรฐานอย่างต่อเนื่อง",
      "ด้วยการยกระดับระบบการตรวจสอบความปลอดภัย เรามุ่งสร้างความเชื่อมั่นให้กับกีฬาแอร์ซอฟต์และเพ้นท์บอล และช่วยให้สนามที่เข้าร่วมกับสมาคมได้รับการยอมรับในฐานะ สนามที่ปลอดภัย เป็นมืออาชีพ และได้รับความเชื่อถือในระดับนานาชาติ",
    ],
    closing: "ตรวจสอบเพื่อความปลอดภัย • บริหารด้วยความมั่นใจ • สร้างความเชื่อถือระดับนานาชาติ",
  },
};

export const emergencyFirstAidCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "EMERGENCY & FIRST AID",
    lead: "Player safety requires more than prevention—it requires immediate and professional response when an incident occurs.",
    body: [
      "The Airsoft and Paintball Association is developing clear emergency-response and first-aid standards to help ensure that participating fields and events are prepared to respond quickly, effectively, and responsibly.",
      "Every participating field should maintain appropriate on-site first-aid capability, trained personnel, emergency communication procedures, clearly identified access routes, incident protocols, and coordination plans with local medical services.",
      "For major tournaments and large-scale events, the Association will promote a higher level of preparedness, including dedicated emergency-response personnel, first-aid stations, medical coordination, evacuation procedures, and rapid-response systems on site.",
      "Our goal is to ensure that players, teams, families, organizers, and international visitors can participate with greater confidence, knowing that emergency planning and medical readiness are treated as essential parts of professional event management.",
    ],
    closing: "Prepared to Respond. Ready to Protect. Safety without Compromise.",
  },
  th: {
    title: "การรับมือเหตุฉุกเฉินและการปฐมพยาบาล",
    lead: "ความปลอดภัยของผู้เล่นไม่ได้หมายถึงเพียงการป้องกันอุบัติเหตุเท่านั้น แต่ยังรวมถึง ความพร้อมในการตอบสนองอย่างรวดเร็วและเป็นมืออาชีพเมื่อเกิดเหตุฉุกเฉิน",
    body: [
      "สมาคมแอร์ซอฟต์และเพ้นท์บอล กำลังพัฒนามาตรฐานด้านการรับมือเหตุฉุกเฉินและการปฐมพยาบาลที่ชัดเจน เพื่อให้สนามและอีเวนต์ที่เข้าร่วมกับสมาคมมีความพร้อมในการดูแลผู้เล่นอย่างมีประสิทธิภาพและมีความรับผิดชอบ",
      "สนามที่เข้าร่วมควรมีความพร้อมด้าน อุปกรณ์ปฐมพยาบาลภายในสนาม บุคลากรที่ผ่านการฝึกอบรม ระบบสื่อสารในกรณีฉุกเฉิน เส้นทางเข้าออกสำหรับรถพยาบาล ขั้นตอนการจัดการเหตุการณ์ และแผนประสานงานกับหน่วยบริการทางการแพทย์ในพื้นที่",
      "สำหรับการแข่งขันขนาดใหญ่และอีเวนต์ระดับสำคัญ สมาคมจะส่งเสริมมาตรฐานความพร้อมที่สูงขึ้น โดยควรมี ทีมตอบสนองเหตุฉุกเฉินประจำพื้นที่ จุดปฐมพยาบาล การประสานงานทางการแพทย์ แผนอพยพ และระบบตอบสนองอย่างรวดเร็วภายในสถานที่จัดงาน",
      "เป้าหมายของเราคือสร้างความมั่นใจให้กับผู้เล่น ทีม ครอบครัว ผู้จัดงาน และผู้เข้าร่วมจากต่างประเทศว่า การเตรียมพร้อมด้านเหตุฉุกเฉินและการดูแลทางการแพทย์เป็นส่วนสำคัญของการบริหารสนามและอีเวนต์อย่างมืออาชีพ",
    ],
    closing: "พร้อมรับมือทุกสถานการณ์ • พร้อมปกป้องทุกชีวิต • ความปลอดภัยต้องมาก่อน",
  },
};

export const internationalStandardsCopy: Record<SiteLanguage, RulesSafetyCopy> = {
  en: {
    title: "INTERNATIONAL STANDARDS",
    lead: "The Airsoft and Paintball Association is committed to developing standards that align with recognized international practices and earn the confidence of players, teams, fields, organizers, associations, federations, and industry partners worldwide.",
    body: [
      "Our international standards framework will focus on key areas including player safety, rules of play, equipment requirements, field operations, referee and marshal procedures, event management, fair play, emergency readiness, and professional conduct.",
      "Our goal is to create a clear and credible system that can be understood, respected, and applied consistently across participating fields and events.",
      "By continuously benchmarking our standards against leading practices from around the world, we aim to strengthen quality, professionalism, and international confidence in every aspect of Airsoft and Paintball.",
      "Our long-term vision is to help establish a standard of excellence that supports stronger international cooperation, greater recognition, and a more unified future for the sport.",
    ],
    closing: "Internationally Aligned. Professionally Governed. Built to Earn Global Respect.",
  },
  th: {
    title: "มาตรฐานระดับนานาชาติ",
    lead: "สมาคมแอร์ซอฟต์และเพ้นท์บอล มุ่งมั่นพัฒนามาตรฐานที่สอดคล้องกับแนวปฏิบัติระดับสากล และสามารถสร้างความเชื่อมั่นให้กับผู้เล่น ทีม สนาม ผู้จัดการแข่งขัน สมาคม สหพันธ์ และพันธมิตรในอุตสาหกรรมจากทั่วโลก",
    body: [
      "กรอบมาตรฐานระดับนานาชาติของเราจะให้ความสำคัญกับหัวข้อหลัก ได้แก่ ความปลอดภัยของผู้เล่น กติกาการแข่งขัน ข้อกำหนดด้านอุปกรณ์ การบริหารสนาม ขั้นตอนการปฏิบัติงานของกรรมการและมาร์แชล การจัดอีเวนต์ การแข่งขันอย่างยุติธรรม ความพร้อมด้านเหตุฉุกเฉิน และการประพฤติปฏิบัติอย่างมืออาชีพ",
      "เป้าหมายของเราคือการสร้างระบบมาตรฐานที่ ชัดเจน น่าเชื่อถือ และสามารถนำไปใช้ได้อย่างสม่ำเสมอ ในสนามและอีเวนต์ที่เข้าร่วมกับสมาคม",
      "เราจะพัฒนาและทบทวนมาตรฐานอย่างต่อเนื่อง โดยเปรียบเทียบกับแนวปฏิบัติชั้นนำจากนานาประเทศ เพื่อยกระดับคุณภาพ ความเป็นมืออาชีพ และสร้างความเชื่อมั่นในระดับสากลให้กับกีฬาแอร์ซอฟต์และเพ้นท์บอลในทุกมิติ",
      "วิสัยทัศน์ระยะยาวของเราคือการสร้าง มาตรฐานแห่งความเป็นเลิศ ที่ช่วยส่งเสริมความร่วมมือระหว่างประเทศ เพิ่มการยอมรับในระดับโลก และสร้างอนาคตของกีฬานี้ให้มีความเป็นหนึ่งเดียวและแข็งแกร่งยิ่งขึ้น",
    ],
    closing: "สอดคล้องกับมาตรฐานสากล • บริหารอย่างมืออาชีพ • สร้างเพื่อการยอมรับจากทั่วโลก",
  },
};
