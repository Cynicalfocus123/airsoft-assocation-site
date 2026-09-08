import type { LocalizedLabel } from "@/data/navigation";

export type ServiceSlug =
  | "field-design-engineering"
  | "business-consultant"
  | "marketing"
  | "permit-approval"
  | "training";

export type LocalizedText = { en: string; th: string };
export type FieldServiceSection = { heading: LocalizedText; description: LocalizedText };

export type ServicePageCopy = {
  title: LocalizedText;
  eyebrow: LocalizedText;
  intro?: LocalizedText[];
  sectionHeading?: LocalizedText;
  sections?: FieldServiceSection[];
  placeholder?: LocalizedText;
};

const text = (en: string, th: string): LocalizedText => ({ en, th });

export const serviceSlugs: ServiceSlug[] = [
  "field-design-engineering",
  "business-consultant",
  "marketing",
  "permit-approval",
  "training",
];

export const servicesCopy: Record<ServiceSlug, ServicePageCopy> = {
  "field-design-engineering": {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("FIELD DESIGN & DEVELOPMENT SERVICES", "บริการออกแบบและพัฒนาสนาม"),
    intro: [
      text(
        "A great Airsoft or Paintball field is more than a place to play. It is a complete experience built around safety, game flow, tactical challenge, atmosphere, accessibility, and player engagement.",
        "สนามแอร์ซอฟต์หรือเพ้นท์บอลที่ดีไม่ใช่เพียงสถานที่สำหรับการเล่นเท่านั้น แต่ควรเป็นประสบการณ์ที่สมบูรณ์ซึ่งได้รับการออกแบบโดยคำนึงถึงความปลอดภัย รูปแบบการเล่น ความท้าทายเชิงยุทธวิธี บรรยากาศ การเข้าถึง และประสบการณ์ของผู้เล่น",
      ),
      text(
        "The Association works with field owners, investors, developers, and operators to help transform ideas into professionally planned Airsoft and Paintball venues. From the initial concept and field layout to safety standards, game scenarios, customer facilities, operations, and event readiness, our goal is to help create fields that are safe, exciting, commercially sustainable, and capable of supporting both local players and international events.",
        "สมาคมทำงานร่วมกับเจ้าของสนาม นักลงทุน ผู้พัฒนาโครงการ และผู้ประกอบการ เพื่อช่วยพัฒนาแนวคิดให้กลายเป็นสนามแอร์ซอฟต์และเพ้นท์บอลที่ได้รับการวางแผนอย่างเป็นมืออาชีพ ตั้งแต่การกำหนดแนวคิดและผังสนาม มาตรฐานความปลอดภัย รูปแบบเกม สิ่งอำนวยความสะดวกสำหรับผู้เล่น ระบบการบริหาร ไปจนถึงการเตรียมความพร้อมสำหรับการจัดอีเวนต์ เป้าหมายของเราคือการช่วยพัฒนาสนามให้มีความปลอดภัย น่าสนใจ สามารถดำเนินธุรกิจได้อย่างยั่งยืน และรองรับทั้งผู้เล่นในประเทศและการแข่งขันหรือกิจกรรมระดับนานาชาติ",
      ),
    ],
    sectionHeading: text("WHAT WE CAN DO FOR YOUR FIELD", "สิ่งที่เราสามารถช่วยพัฒนาสนามของคุณ"),
    sections: [
      {
        heading: text("Field Concept & Master Planning", "การวางแนวคิดและผังสนาม"),
        description: text(
          "We help develop the overall concept, purpose, scale, layout, player capacity, activity zones, and long-term development plan for the field. The objective is to establish a clear foundation before construction or major investment begins.",
          "เราช่วยพัฒนาแนวคิดโดยรวม วัตถุประสงค์ ขนาด ผังพื้นที่ จำนวนผู้เล่น พื้นที่กิจกรรม และแผนการพัฒนาระยะยาวของสนาม เพื่อสร้างพื้นฐานที่ชัดเจนก่อนเริ่มการก่อสร้างหรือการลงทุนครั้งสำคัญ",
        ),
      },
      {
        heading: text("Theme & Experience Design", "การออกแบบธีมและประสบการณ์"),
        description: text(
          "Create a distinctive identity for the field through environments, themes, structures, visual storytelling, and immersive player experiences that make the venue memorable and different from a standard playing field.",
          "สร้างเอกลักษณ์ให้กับสนามผ่านสภาพแวดล้อม ธีม สิ่งปลูกสร้าง การเล่าเรื่องผ่านพื้นที่ และประสบการณ์ที่ช่วยให้ผู้เล่นรู้สึกมีส่วนร่วมและจดจำสนามได้แตกต่างจากสนามทั่วไป",
        ),
      },
      {
        heading: text("Game Flow & Tactical Layout", "การออกแบบเกมและเส้นทางการเล่น"),
        description: text(
          "Plan movement routes, objectives, engagement zones, cover, spawn areas, spectator considerations, and tactical pathways to create balanced gameplay while reducing unnecessary congestion and unsafe engagement areas.",
          "วางแผนเส้นทางการเคลื่อนที่ จุดภารกิจ พื้นที่ปะทะ จุดกำบัง พื้นที่เกิดของผู้เล่น พื้นที่สำหรับผู้ชม และเส้นทางเชิงยุทธวิธี เพื่อสร้างเกมที่สมดุล ลดความแออัด และลดพื้นที่ที่อาจก่อให้เกิดความไม่ปลอดภัย",
        ),
      },
      {
        heading: text("International Safety Standards", "มาตรฐานความปลอดภัยระดับสากล"),
        description: text(
          "Help establish field rules, safety zones, equipment requirements, chronograph procedures, player briefings, emergency procedures, boundaries, signage, and operational practices based on recognized Airsoft and Paintball safety principles.",
          "ช่วยกำหนดกฎของสนาม พื้นที่ปลอดภัย ข้อกำหนดด้านอุปกรณ์ ขั้นตอนการตรวจความเร็ว การชี้แจงผู้เล่น ขั้นตอนฉุกเฉิน ขอบเขตสนาม ป้ายความปลอดภัย และแนวทางการปฏิบัติงานตามหลักความปลอดภัยของแอร์ซอฟต์และเพ้นท์บอลที่ได้รับการยอมรับ",
        ),
      },
      {
        heading: text("MilSim & Scenario Development", "การพัฒนาเกม MilSim และ Scenario"),
        description: text(
          "Develop structured missions, objectives, team roles, scenario progression, command systems, event narratives, and large-scale MilSim concepts designed around the unique layout and capabilities of the field.",
          "พัฒนาภารกิจ เป้าหมาย บทบาทของทีม ลำดับเหตุการณ์ ระบบการบังคับบัญชา เนื้อเรื่องของกิจกรรม และรูปแบบ MilSim ขนาดใหญ่ให้เหมาะสมกับลักษณะและศักยภาพของสนาม",
        ),
      },
      {
        heading: text("Technology Integration", "การนำเทคโนโลยีมาใช้"),
        description: text(
          "Explore practical technology for scoring, timing, objective systems, player registration, communications, event management, digital maps, tracking, cameras, displays, and other systems that can improve operations and player engagement.",
          "ประยุกต์ใช้เทคโนโลยีที่เหมาะสมสำหรับระบบคะแนน การจับเวลา ระบบภารกิจ การลงทะเบียนผู้เล่น การสื่อสาร การบริหารกิจกรรม แผนที่ดิจิทัล ระบบติดตาม กล้อง จอแสดงผล และระบบอื่น ๆ ที่ช่วยเพิ่มประสิทธิภาพในการบริหารและประสบการณ์ของผู้เล่น",
        ),
      },
      {
        heading: text("Player Facilities & Customer Experience", "สิ่งอำนวยความสะดวกและประสบการณ์ของผู้เล่น"),
        description: text(
          "Plan practical supporting facilities such as registration areas, equipment preparation zones, staging areas, retail space, food and beverage areas, restrooms, parking, spectator areas, and other amenities that improve the overall customer experience.",
          "วางแผนสิ่งอำนวยความสะดวกที่จำเป็น เช่น พื้นที่ลงทะเบียน พื้นที่เตรียมอุปกรณ์ พื้นที่รวมตัว ร้านค้า พื้นที่อาหารและเครื่องดื่ม ห้องน้ำ ที่จอดรถ พื้นที่สำหรับผู้ชม และสิ่งอำนวยความสะดวกอื่น ๆ ที่ช่วยยกระดับประสบการณ์โดยรวมของลูกค้า",
        ),
      },
      {
        heading: text("Event-Ready Field Development", "การเตรียมสนามสำหรับอีเวนต์ขนาดใหญ่"),
        description: text(
          "Prepare fields to support tournaments, MilSim operations, international events, sponsor activations, media production, large player volumes, spectators, vendors, registration systems, logistics, and event-day operations.",
          "เตรียมสนามให้สามารถรองรับการแข่งขัน กิจกรรม MilSim งานระดับนานาชาติ กิจกรรมของผู้สนับสนุน การผลิตสื่อ ผู้เล่นจำนวนมาก ผู้ชม ผู้ค้า ระบบลงทะเบียน โลจิสติกส์ และการดำเนินงานในวันจัดกิจกรรม",
        ),
      },
      {
        heading: text("Operations & Staff Development", "การพัฒนาระบบบริหารและบุคลากร"),
        description: text(
          "Support the development of operating procedures, staff responsibilities, referee systems, player management, equipment handling, safety enforcement, incident response, customer service, and day-to-day field operations.",
          "ช่วยพัฒนาขั้นตอนการปฏิบัติงาน หน้าที่ของบุคลากร ระบบผู้ตัดสิน การดูแลผู้เล่น การจัดการอุปกรณ์ การบังคับใช้กฎความปลอดภัย การตอบสนองต่อเหตุการณ์ การบริการลูกค้า และการบริหารสนามในแต่ละวัน",
        ),
      },
      {
        heading: text("Marketing & Positioning", "การตลาดและการวางตำแหน่งทางการตลาด"),
        description: text(
          "Help define how the field should be positioned in the market, identify target player groups, develop its brand direction, improve online visibility, build partnerships, attract events, and create opportunities to reach both domestic and international players.",
          "ช่วยกำหนดตำแหน่งของสนามในตลาด ระบุกลุ่มผู้เล่นเป้าหมาย พัฒนาแนวทางของแบรนด์ เพิ่มการมองเห็นทางออนไลน์ สร้างพันธมิตร ดึงดูดการจัดกิจกรรม และสร้างโอกาสในการเข้าถึงทั้งผู้เล่นในประเทศและต่างประเทศ",
        ),
      },
    ],
  },
  "business-consultant": {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("BUSINESS CONSULTANT", "ที่ปรึกษาธุรกิจ"),
    placeholder: text("Content in development.", "เนื้อหากำลังอยู่ระหว่างการพัฒนา"),
  },
  marketing: {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("MARKETING", "การตลาด"),
    placeholder: text("Content in development.", "เนื้อหากำลังอยู่ระหว่างการพัฒนา"),
  },
  "permit-approval": {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("PERMIT APPROVAL", "การขออนุญาตและการอนุมัติ"),
    placeholder: text("Content in development.", "เนื้อหากำลังอยู่ระหว่างการพัฒนา"),
  },
  training: {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("TRAINING", "การฝึกอบรม"),
    placeholder: text("Content in development.", "เนื้อหากำลังอยู่ระหว่างการพัฒนา"),
  },
};

export function getServiceLabel(slug: ServiceSlug): LocalizedLabel {
  return servicesCopy[slug].title;
}
