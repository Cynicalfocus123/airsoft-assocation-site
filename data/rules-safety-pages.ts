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
