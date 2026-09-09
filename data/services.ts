import type { LocalizedLabel } from "@/data/navigation";

export type ServiceSlug =
  | "field-design-engineering"
  | "business-consultant"
  | "marketing"
  | "permit-approval"
  | "training";

export type LocalizedText = { en: string; th: string };
export type FieldServiceSection = { heading: LocalizedText; description: LocalizedText };
export type ServiceBlock =
  | { type: "heading"; text: LocalizedText }
  | { type: "paragraph"; text: LocalizedText }
  | { type: "list"; items: LocalizedText[] }
  | { type: "closing"; lines: LocalizedText[] };

export type ServicePageCopy = {
  title: LocalizedText;
  eyebrow: LocalizedText;
  intro?: LocalizedText[];
  sectionHeading?: LocalizedText;
  sections?: FieldServiceSection[];
  blocks?: ServiceBlock[];
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
    title: text("START YOUR AIRSOFT & PAINTBALL BUSINESS WITH THE RIGHT PLAN", "เริ่มต้นธุรกิจแอร์ซอฟต์และเพ้นท์บอลด้วยแผนที่ถูกต้อง"),
    blocks: [
      {
        type: "paragraph",
        text: text(
          "Starting an Airsoft or Paintball business takes more than finding a piece of land and building a field.",
          "การเริ่มต้นธุรกิจแอร์ซอฟต์หรือเพ้นท์บอล ไม่ใช่เพียงแค่การหาพื้นที่แล้วสร้างสนามขึ้นมาเท่านั้น",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "Success requires the right location, business model, field concept, customer experience, safety standards, marketing strategy, event plan, and long-term growth strategy.",
          "ความสำเร็จต้องเกิดจากการวางแผนอย่างรอบด้าน ทั้งในเรื่อง ทำเล รูปแบบธุรกิจ แนวคิดของสนาม ประสบการณ์ลูกค้า มาตรฐานความปลอดภัย กลยุทธ์การตลาด แผนอีเวนต์ และแผนการเติบโตระยะยาว",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "The Airsoft and Paintball Association provides professional business consulting to help new and existing field owners build a stronger foundation and avoid costly mistakes from the beginning.",
          "สมาคมแอร์ซอฟต์และเพ้นท์บอล ให้คำปรึกษาด้านธุรกิจอย่างมืออาชีพ เพื่อช่วยผู้ประกอบการรายใหม่และเจ้าของสนามเดิมวางรากฐานธุรกิจให้แข็งแรง และหลีกเลี่ยงความผิดพลาดที่อาจทำให้เสียเงินลงทุนโดยไม่จำเป็นตั้งแต่เริ่มต้น",
        ),
      },
      { type: "heading", text: text("WHY BUSINESS CONSULTING MATTERS", "ทำไมการให้คำปรึกษาด้านธุรกิจจึงมีความสำคัญ") },
      {
        type: "paragraph",
        text: text(
          "Many businesses fail not because there is no demand—but because the business was not planned around what players actually want.",
          "หลายธุรกิจไม่ได้ล้มเหลวเพราะไม่มีความต้องการจากตลาด แต่ล้มเหลวเพราะไม่ได้วางแผนธุรกิจให้สอดคล้องกับสิ่งที่ผู้เล่นต้องการจริง ๆ",
        ),
      },
      {
        type: "paragraph",
        text: text("Before investing, you need to know:", "ก่อนลงทุน คุณควรตอบคำถามสำคัญเหล่านี้ให้ได้:"),
      },
      {
        type: "list",
        items: [
          text("Is the location right for the target market?", "ทำเลเหมาะสมกับกลุ่มลูกค้าเป้าหมายหรือไม่?"),
          text("Is the land suitable for Airsoft, Paintball, or MilSim?", "พื้นที่เหมาะสำหรับแอร์ซอฟต์ เพ้นท์บอล หรือ MilSim หรือไม่?"),
          text("What type of players are you trying to attract?", "คุณต้องการดึงดูดผู้เล่นประเภทใด?"),
          text("What field concept will make players choose you over competitors?", "แนวคิดของสนามแบบใดที่จะทำให้ผู้เล่นเลือกสนามของคุณแทนคู่แข่ง?"),
          text("What theme will make your field memorable?", "ธีมแบบใดที่จะทำให้สนามของคุณน่าจดจำ?"),
          text("How should the field be designed for safety and game flow?", "ควรออกแบบสนามอย่างไรให้มีความปลอดภัยและมี Game Flow ที่ดี?"),
          text("What facilities and services do players expect?", "ผู้เล่นคาดหวังสิ่งอำนวยความสะดวกและบริการแบบใด?"),
          text("How much should you invest before opening?", "ควรลงทุนเท่าใดก่อนเปิดดำเนินการ?"),
          text("How will the business generate revenue beyond admission fees?", "ธุรกิจจะสร้างรายได้นอกเหนือจากค่าเข้าสนามได้อย่างไร?"),
          text("How will you build repeat customers?", "จะทำอย่างไรให้ลูกค้ากลับมาใช้บริการและเล่นซ้ำ?"),
          text("How will you attract teams, tournaments, sponsors, and international players?", "จะดึงดูดทีม การแข่งขัน ผู้สนับสนุน และผู้เล่นต่างชาติได้อย่างไร?"),
          text("How will you market the field locally and internationally?", "จะทำการตลาดสนามทั้งในประเทศและต่างประเทศอย่างไร?"),
        ],
      },
      {
        type: "paragraph",
        text: text(
          "These decisions can determine whether a field simply opens—or becomes a successful destination.",
          "การตัดสินใจเหล่านี้อาจเป็นตัวกำหนดว่าสนามของคุณจะเพียงแค่ “เปิดให้บริการได้” หรือสามารถพัฒนาเป็น จุดหมายปลายทางที่ประสบความสำเร็จ",
        ),
      },
      { type: "heading", text: text("HOW WE HELP YOU", "เราช่วยคุณได้อย่างไร") },
      { type: "heading", text: text("BUSINESS FEASIBILITY & LOCATION REVIEW", "การวิเคราะห์ความเป็นไปได้ของธุรกิจและทำเล") },
      {
        type: "paragraph",
        text: text(
          "We help evaluate whether your proposed location fits the business concept, target customers, accessibility, surrounding market, field size, expansion potential, and event opportunities.",
          "เราช่วยประเมินว่าทำเลที่คุณเลือกเหมาะสมกับแนวคิดของธุรกิจ กลุ่มลูกค้าเป้าหมาย การเดินทาง ตลาดในพื้นที่ ขนาดสนาม ศักยภาพในการขยาย และโอกาสในการจัดอีเวนต์หรือไม่",
        ),
      },
      { type: "heading", text: text("BUSINESS MODEL DEVELOPMENT", "การพัฒนาโมเดลธุรกิจ") },
      {
        type: "paragraph",
        text: text(
          "We help build a practical revenue model around admissions, memberships, rentals, equipment, food and beverage, retail, private events, tournaments, training, sponsorships, and other income opportunities.",
          "เราช่วยวางโมเดลรายได้ที่เหมาะสมจากหลายช่องทาง เช่น ค่าเข้าสนาม สมาชิก ค่าเช่าอุปกรณ์ การจำหน่ายอุปกรณ์ อาหารและเครื่องดื่ม ร้านค้า งานส่วนตัว การแข่งขัน การฝึกอบรม ผู้สนับสนุน และโอกาสในการสร้างรายได้อื่น ๆ",
        ),
      },
      { type: "heading", text: text("FIELD CONCEPT & THEME DEVELOPMENT", "การพัฒนาแนวคิดและธีมของสนาม") },
      { type: "paragraph", text: text("A field must give players a reason to visit.", "สนามต้องมีเหตุผลที่ทำให้ผู้เล่นอยากเดินทางมาใช้บริการ") },
      {
        type: "paragraph",
        text: text(
          "We help develop memorable concepts and themes that create excitement and differentiate your business from ordinary fields.",
          "เราช่วยพัฒนาแนวคิดและธีมที่น่าจดจำ สร้างความตื่นเต้น และทำให้ธุรกิจของคุณแตกต่างจากสนามทั่วไป",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "The objective is to create a field that players see online and immediately want to experience.",
          "เป้าหมายคือการสร้างสนามที่เมื่อผู้เล่น เห็นทางออนไลน์แล้วรู้สึกอยากเดินทางมาสัมผัสประสบการณ์ทันที",
        ),
      },
      { type: "heading", text: text("CUSTOMER & MARKET STRATEGY", "กลยุทธ์ด้านลูกค้าและตลาด") },
      { type: "paragraph", text: text("We help identify the customers you should target, including:", "เราช่วยวิเคราะห์และกำหนดกลุ่มลูกค้าเป้าหมายที่เหมาะสม ได้แก่:") },
      {
        type: "list",
        items: [
          text("Beginners", "ผู้เล่นใหม่"),
          text("Regular Players", "ผู้เล่นประจำ"),
          text("Teams", "ทีม"),
          text("MilSim Players", "ผู้เล่นสาย MilSim"),
          text("Corporate Groups", "กลุ่มบริษัท"),
          text("Tourists", "นักท่องเที่ยว"),
          text("International Players", "ผู้เล่นต่างชาติ"),
          text("Tournament Participants", "ผู้เข้าร่วมการแข่งขัน"),
        ],
      },
      {
        type: "paragraph",
        text: text(
          "Each customer group has different expectations. Understanding those expectations is essential to building the right business.",
          "ลูกค้าแต่ละกลุ่มมีความต้องการและความคาดหวังที่แตกต่างกัน การเข้าใจความต้องการเหล่านั้นเป็นสิ่งสำคัญในการสร้างธุรกิจที่เหมาะสม",
        ),
      },
      { type: "heading", text: text("FIELD DESIGN & PLAYER EXPERIENCE", "การออกแบบสนามและประสบการณ์ของผู้เล่น") },
      {
        type: "paragraph",
        text: text(
          "We help plan the overall player journey—from arrival and registration to staging, gameplay, rest areas, food, retail, photography, and departure.",
          "เราช่วยวางแผนประสบการณ์ของผู้เล่นตั้งแต่เดินทางมาถึง การลงทะเบียน การเตรียมตัว การเล่นเกม พื้นที่พักผ่อน อาหาร ร้านค้า การถ่ายภาพ ไปจนถึงการเดินทางกลับ",
        ),
      },
      { type: "paragraph", text: text("A successful field should create an experience that makes customers say: “I want to come back.”", "สนามที่ประสบความสำเร็จควรสร้างประสบการณ์ที่ทำให้ลูกค้ารู้สึกว่า “ฉันอยากกลับมาอีก”") },
      { type: "heading", text: text("SAFETY & INTERNATIONAL STANDARDS", "มาตรฐานความปลอดภัยและมาตรฐานสากล") },
      {
        type: "list",
        items: [
          text("Field safety", "ความปลอดภัยของสนาม"),
          text("Protective equipment", "อุปกรณ์ป้องกัน"),
          text("FPS and Joule controls", "การควบคุมค่า FPS และ Joule"),
          text("Engagement distances", "ระยะการยิงและระยะปะทะ"),
          text("Safe zones", "พื้นที่ปลอดภัย"),
          text("Referee and marshal procedures", "ขั้นตอนการปฏิบัติงานของกรรมการและมาร์แชล"),
          text("Emergency response", "การรับมือเหตุฉุกเฉิน"),
          text("First aid", "การปฐมพยาบาล"),
          text("Player conduct", "พฤติกรรมและข้อปฏิบัติของผู้เล่น"),
          text("Event operations", "การบริหารและดำเนินงานอีเวนต์"),
        ],
      },
      { type: "paragraph", text: text("Strong safety standards protect players while building trust in the business.", "มาตรฐานความปลอดภัยที่แข็งแรงช่วยปกป้องผู้เล่น พร้อมทั้งสร้างความเชื่อมั่นให้กับธุรกิจของคุณ") },
      { type: "heading", text: text("SALES & MARKETING STRATEGY", "กลยุทธ์การขายและการตลาด") },
      { type: "paragraph", text: text("Building a great field is only the beginning. Players must know that it exists.", "การสร้างสนามที่ดีเป็นเพียงจุดเริ่มต้น ผู้เล่นต้องรู้ว่าสนามของคุณมีอยู่") },
      {
        type: "list",
        items: [
          text("Social media", "โซเชียลมีเดีย"),
          text("Video marketing", "การตลาดผ่านวิดีโอ"),
          text("Team outreach", "การเข้าถึงทีมและกลุ่มผู้เล่น"),
          text("International promotion", "การประชาสัมพันธ์ในต่างประเทศ"),
          text("Influencer partnerships", "ความร่วมมือกับ Influencer"),
          text("Community development", "การพัฒนาชุมชนผู้เล่น"),
          text("Tournament marketing", "การตลาดสำหรับการแข่งขัน"),
          text("Tourism partnerships", "ความร่วมมือด้านการท่องเที่ยว"),
          text("Hotel and travel partnerships", "ความร่วมมือกับโรงแรมและบริษัทท่องเที่ยว"),
          text("Sponsorship", "ผู้สนับสนุน"),
          text("Corporate events", "อีเวนต์สำหรับองค์กร"),
          text("Promotional campaigns", "แคมเปญส่งเสริมการตลาด"),
        ],
      },
      { type: "paragraph", text: text("Our goal is to help your field become a brand, not simply another place to play.", "เป้าหมายของเราคือช่วยให้สนามของคุณกลายเป็น แบรนด์ ไม่ใช่เพียงสถานที่เล่นอีกแห่งหนึ่ง") },
      { type: "heading", text: text("INTERNATIONAL CUSTOMER DEVELOPMENT", "การพัฒนาลูกค้าต่างประเทศ") },
      {
        type: "paragraph",
        text: text(
          "For fields with the right potential, we help develop strategies to reach players outside the local market.",
          "สำหรับสนามที่มีศักยภาพ เราช่วยพัฒนากลยุทธ์เพื่อเข้าถึงผู้เล่นจากตลาดต่างประเทศ",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "This may include international tournaments, MilSim events, travel packages, overseas team outreach, sports tourism, and partnerships with international Airsoft and Paintball communities.",
          "ซึ่งอาจรวมถึงการแข่งขันระดับนานาชาติ อีเวนต์ MilSim แพ็กเกจการเดินทาง การเข้าถึงทีมจากต่างประเทศ การท่องเที่ยวเชิงกีฬา และความร่วมมือกับชุมชนแอร์ซอฟต์และเพ้นท์บอลระดับนานาชาติ",
        ),
      },
      { type: "paragraph", text: text("We want international players to see your field and think: “That is a field I need to experience.”", "เราต้องการให้ผู้เล่นต่างประเทศเห็นสนามของคุณแล้วคิดว่า “นี่คือสนามที่ฉันต้องเดินทางมาเล่นสักครั้ง”") },
      { type: "heading", text: text("EVENT & TOURNAMENT DEVELOPMENT", "การพัฒนาอีเวนต์และการแข่งขัน") },
      { type: "paragraph", text: text("Special events create excitement, publicity, and additional revenue.", "อีเวนต์พิเศษช่วยสร้างความตื่นเต้น การประชาสัมพันธ์ และรายได้เพิ่มเติม") },
      {
        type: "list",
        items: [
          text("Regional competitions", "การแข่งขันระดับภูมิภาค"),
          text("National tournaments", "การแข่งขันระดับประเทศ"),
          text("International events", "อีเวนต์ระดับนานาชาติ"),
          text("MilSim experiences", "กิจกรรมและประสบการณ์ MilSim"),
          text("Scenario games", "เกม Scenario"),
          text("Team competitions", "การแข่งขันแบบทีม"),
          text("Corporate events", "อีเวนต์สำหรับองค์กร"),
          text("Signature annual events", "อีเวนต์ประจำปีที่เป็นเอกลักษณ์"),
        ],
      },
      {
        type: "paragraph",
        text: text(
          "A strong signature event can become one of the most valuable marketing tools for the entire business.",
          "อีเวนต์หลักที่มีเอกลักษณ์และแข็งแรงสามารถกลายเป็นหนึ่งในเครื่องมือทางการตลาดที่ทรงคุณค่าที่สุดของธุรกิจ",
        ),
      },
      { type: "heading", text: text("WE HELP YOU BUILD A BUSINESS — NOT JUST A FIELD", "เราช่วยคุณสร้าง “ธุรกิจ” ไม่ใช่เพียงแค่ “สนาม”") },
      { type: "paragraph", text: text("A field can be built with structures and obstacles.", "สนามสามารถสร้างขึ้นได้ด้วยสิ่งปลูกสร้างและสิ่งกีดขวาง") },
      {
        type: "paragraph",
        text: text(
          "A successful business must be built around strategy, customers, experience, operations, marketing, safety, and profitability.",
          "แต่ธุรกิจที่ประสบความสำเร็จต้องสร้างขึ้นจาก กลยุทธ์ ลูกค้า ประสบการณ์ การบริหาร การตลาด ความปลอดภัย และความสามารถในการทำกำไร",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "Our role is to help you understand the business before you invest heavily, plan every important stage, and build a concept with the potential to grow for years.",
          "หน้าที่ของเราคือช่วยให้คุณเข้าใจธุรกิจก่อนลงทุนจำนวนมาก วางแผนทุกขั้นตอนสำคัญ และสร้างแนวคิดที่มีศักยภาพในการเติบโตในระยะยาว",
        ),
      },
      {
        type: "list",
        items: [
          text("The Right Location.", "ทำเลที่ใช่"),
          text("The Right Concept.", "แนวคิดที่ใช่"),
          text("The Right Experience.", "ประสบการณ์ที่ใช่"),
          text("The Right Business Strategy.", "กลยุทธ์ธุรกิจที่ใช่"),
        ],
      },
      { type: "paragraph", text: text("Plan It Right. Build It Right. Market It Right. Grow It Successfully.", "วางแผนให้ถูก • สร้างให้ถูก • ทำตลาดให้ถูก • เติบโตอย่างประสบความสำเร็จ") },
    ],
  },
  marketing: {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("PROFESSIONAL DIGITAL MARKETING & INTERNATIONAL PLAYER ACQUISITION", "การตลาดดิจิทัลระดับมืออาชีพ และการดึงดูดผู้เล่นจากต่างประเทศ"),
    blocks: [
      {
        type: "paragraph",
        text: text(
          "Running an Airsoft or Paintball business is highly specialized. Reaching the right audience requires more than general advertising—it requires a marketing team that understands the sport, the player culture, the international community, and how to reach the people most likely to travel, register, and participate.",
          "การดำเนินธุรกิจแอร์ซอฟต์หรือเพ้นท์บอลเป็นธุรกิจเฉพาะทาง การเข้าถึงกลุ่มเป้าหมายที่ถูกต้องจึงต้องอาศัยมากกว่าการลงโฆษณาทั่วไป แต่ต้องมีทีมการตลาดที่เข้าใจกีฬา วัฒนธรรมของผู้เล่น ชุมชนระดับนานาชาติ และวิธีเข้าถึงผู้ที่มีแนวโน้มจะเดินทาง ลงทะเบียน และเข้าร่วมกิจกรรมจริง",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "The Airsoft and Paintball Association works with experienced digital marketing teams and international networks that understand local markets, player behavior, cultural differences, and the platforms used by Airsoft and Paintball communities around the world.",
          "สมาคมแอร์ซอฟต์และเพ้นท์บอล ทำงานร่วมกับทีมการตลาดดิจิทัลที่มีประสบการณ์และเครือข่ายระดับนานาชาติ ซึ่งเข้าใจตลาดในแต่ละประเทศ พฤติกรรมของผู้เล่น ความแตกต่างทางวัฒนธรรม และแพลตฟอร์มที่ชุมชนแอร์ซอฟต์และเพ้นท์บอลทั่วโลกใช้งาน",
        ),
      },
      { type: "heading", text: text("WHO WE HELP YOU REACH", "กลุ่มเป้าหมายที่เราช่วยคุณเข้าถึง") },
      { type: "paragraph", text: text("We help connect your field or event directly with:", "เราช่วยเชื่อมต่อสนามหรืออีเวนต์ของคุณกับกลุ่มเป้าหมายสำคัญ เช่น:") },
      {
        type: "list",
        items: [
          text("Airsoft and Paintball teams", "ทีมแอร์ซอฟต์และเพ้นท์บอล"),
          text("MilSim communities", "ชุมชน MilSim"),
          text("International associations and federations", "สมาคมและสหพันธ์ระดับนานาชาติ"),
          text("Event organizers", "ผู้จัดอีเวนต์"),
          text("Influencers and content creators", "Influencer และ Content Creator"),
          text("Clubs and player groups", "ชมรมและกลุ่มผู้เล่น"),
          text("Tourism partners", "พันธมิตรด้านการท่องเที่ยว"),
          text("Sponsors and industry brands", "ผู้สนับสนุนและแบรนด์ในอุตสาหกรรม"),
        ],
      },
      { type: "heading", text: text("PROFESSIONAL PLAYER ACQUISITION", "การเข้าถึงและดึงดูดผู้เล่นอย่างมืออาชีพ") },
      {
        type: "paragraph",
        text: text(
          "Promoting an event by yourself may reach your existing followers, but professional marketing is designed to reach new players beyond your current network.",
          "การโปรโมตอีเวนต์ด้วยตัวเองอาจเข้าถึงผู้ติดตามเดิมของคุณ แต่การตลาดระดับมืออาชีพถูกออกแบบมาเพื่อเข้าถึงผู้เล่นใหม่ที่อยู่นอกเครือข่ายเดิมของคุณ",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "Our team helps develop the right message, content, advertising strategy, market targeting, social media campaigns, international outreach, and partnership network to attract players from different countries.",
          "ทีมของเราช่วยพัฒนาข้อความทางการตลาด คอนเทนต์ กลยุทธ์โฆษณา การกำหนดกลุ่มเป้าหมาย แคมเปญโซเชียลมีเดีย การประชาสัมพันธ์ในต่างประเทศ และเครือข่ายพันธมิตร เพื่อดึงดูดผู้เล่นจากประเทศต่าง ๆ",
        ),
      },
      { type: "heading", text: text("WHAT MAKES PLAYERS WANT TO PARTICIPATE", "สิ่งที่ทำให้ผู้เล่นอยากเข้าร่วม") },
      {
        type: "paragraph",
        text: text(
          "We understand what makes players interested in an event—the field, theme, realism, missions, technology, competition, experience, location, and overall value of the trip.",
          "เราเข้าใจว่าสิ่งที่ทำให้ผู้เล่นสนใจอีเวนต์ประกอบด้วย สนาม ธีม ความสมจริง ภารกิจ เทคโนโลยี รูปแบบการแข่งขัน ประสบการณ์ สถานที่ และความคุ้มค่าโดยรวมของการเดินทาง",
        ),
      },
      { type: "paragraph", text: text("We use those strengths to create campaigns that make people want to participate.", "เรานำจุดแข็งเหล่านี้มาใช้ในการสร้างแคมเปญที่ทำให้ผู้เล่นอยากเข้าร่วมกิจกรรม") },
      { type: "heading", text: text("OUR OBJECTIVE", "เป้าหมายของเรา") },
      { type: "paragraph", text: text("Our objective is not simply to generate views or likes.", "เป้าหมายของเราไม่ใช่เพียงการสร้างยอดวิวหรือยอดไลก์") },
      { type: "paragraph", text: text("Our objective is to generate registrations, team bookings, event attendance, international visitors, and long-term customers.", "เป้าหมายของเราคือการสร้างยอดลงทะเบียน การจองแบบทีม จำนวนผู้เข้าร่วม ผู้เล่นจากต่างประเทศ และลูกค้าในระยะยาว") },
      { type: "heading", text: text("INTERNATIONAL EVENT REACH", "การเข้าถึงผู้เล่นระดับนานาชาติ") },
      {
        type: "paragraph",
        text: text(
          "For major events with the right concept, venue, budget, and marketing plan, our international network and targeted campaigns can help reach thousands of potential players worldwide and build the event into a recognized destination.",
          "สำหรับอีเวนต์ขนาดใหญ่ที่มีแนวคิด สถานที่ งบประมาณ และแผนการตลาดที่เหมาะสม เครือข่ายระดับนานาชาติและแคมเปญแบบเจาะกลุ่มของเราสามารถช่วยเข้าถึงผู้เล่นเป้าหมายหลายพันคนทั่วโลก และช่วยพัฒนาให้อีเวนต์ของคุณกลายเป็นจุดหมายที่เป็นที่รู้จักและผู้เล่นต้องการเดินทางมาร่วม",
        ),
      },
      {
        type: "closing",
        lines: [
          text("You Build the Experience.", "คุณสร้างประสบการณ์"),
          text("We Bring the Players.", "เราช่วยนำผู้เล่นมา"),
          text("Together, We Build the Brand.", "และเราสร้างแบรนด์ไปด้วยกัน"),
        ],
      },
      {
        type: "closing",
        lines: [
          text("Target the Right Audience.", "เข้าถึงกลุ่มเป้าหมายที่ใช่"),
          text("Reach the World.", "เชื่อมต่อสู่ทั่วโลก"),
          text("Fill the Event.", "เติมเต็มทุกอีเวนต์"),
        ],
      },
    ],
  },
  "permit-approval": {
    eyebrow: text("SERVICES", "บริการ"),
    title: text("PERMITS, COMPLIANCE & EVENT APPROVAL SUPPORT", "การสนับสนุนด้านใบอนุญาต การปฏิบัติตามข้อกำหนด และการอนุมัติอีเวนต์"),
    blocks: [
      { type: "paragraph", text: text("Organizing an Airsoft or Paintball event requires more than a great field and strong attendance.", "การจัดอีเวนต์แอร์ซอฟต์หรือเพ้นท์บอลให้ประสบความสำเร็จ ไม่ได้ขึ้นอยู่เพียงแค่สนามที่ดีและจำนวนผู้เข้าร่วมเท่านั้น") },
      {
        type: "paragraph",
        text: text(
          "Permits, documentation, equipment approvals, local coordination, and regulatory compliance must all be handled correctly before the event can operate smoothly.",
          "ต้องมีการจัดการด้านใบอนุญาต เอกสาร การอนุมัติอุปกรณ์ การประสานงานกับหน่วยงานในพื้นที่ และการปฏิบัติตามกฎหมายหรือข้อกำหนดที่เกี่ยวข้องอย่างถูกต้อง เพื่อให้อีเวนต์สามารถดำเนินงานได้อย่างราบรื่น",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "The Airsoft and Paintball Association helps organizers navigate these requirements by providing professional guidance and coordination support throughout the approval process.",
          "สมาคมแอร์ซอฟต์และเพ้นท์บอล ช่วยผู้จัดงานดำเนินการตามข้อกำหนดเหล่านี้ ด้วยการให้คำแนะนำอย่างมืออาชีพและสนับสนุนด้านการประสานงานตลอดกระบวนการขออนุมัติ",
        ),
      },
      { type: "heading", text: text("EQUIPMENT IMPORT GUIDANCE", "คำแนะนำด้านการนำเข้าอุปกรณ์") },
      {
        type: "paragraph",
        text: text(
          "Support the preparation of documents and coordination needed when participants or organizers bring Airsoft or Paintball equipment into Thailand, subject to applicable customs, import, transport, and legal requirements.",
          "สนับสนุนการเตรียมเอกสารและการประสานงานที่จำเป็น เมื่อผู้เข้าร่วมหรือผู้จัดงานนำอุปกรณ์แอร์ซอฟต์หรือเพ้นท์บอลเข้ามาในประเทศไทย โดยขึ้นอยู่กับข้อกำหนดด้านศุลกากร การนำเข้า การขนส่ง และกฎหมายที่เกี่ยวข้อง",
        ),
      },
      { type: "heading", text: text("GOVERNMENT & LOCAL AUTHORITY COORDINATION", "การประสานงานกับภาครัฐและหน่วยงานท้องถิ่น") },
      {
        type: "paragraph",
        text: text(
          "Assist organizers in identifying and coordinating with the appropriate government agencies, provincial authorities, local administrations, venue operators, and other relevant parties required for outdoor events.",
          "ช่วยผู้จัดงานระบุและประสานงานกับหน่วยงานราชการ หน่วยงานระดับจังหวัด องค์กรปกครองส่วนท้องถิ่น ผู้ดูแลสถานที่ และหน่วยงานหรือบุคคลอื่นที่เกี่ยวข้องกับการจัดอีเวนต์กลางแจ้ง",
        ),
      },
      { type: "heading", text: text("PERMIT & DOCUMENTATION SUPPORT", "การสนับสนุนด้านใบอนุญาตและเอกสาร") },
      {
        type: "paragraph",
        text: text(
          "Help prepare and organize the documentation commonly required for event applications, venue use, safety planning, participant management, temporary activities, and related approvals.",
          "ช่วยจัดเตรียมและรวบรวมเอกสารที่โดยทั่วไปจำเป็นสำหรับการยื่นขอจัดงาน การใช้สถานที่ การวางแผนด้านความปลอดภัย การบริหารผู้เข้าร่วม กิจกรรมชั่วคราว และการอนุมัติที่เกี่ยวข้อง",
        ),
      },
      { type: "heading", text: text("EVENT COMPLIANCE PLANNING", "การวางแผนให้สอดคล้องกับมาตรฐานและข้อกำหนดของอีเวนต์") },
      {
        type: "paragraph",
        text: text(
          "Review event plans against Association standards and help organizers prepare for requirements involving safety, field operations, emergency response, first aid, referees, marshals, and player management.",
          "ช่วยตรวจสอบแผนการจัดงานให้สอดคล้องกับมาตรฐานของสมาคม และช่วยผู้จัดเตรียมความพร้อมด้านความปลอดภัย การบริหารสนาม การรับมือเหตุฉุกเฉิน การปฐมพยาบาล กรรมการ มาร์แชล และการบริหารผู้เล่น",
        ),
      },
      { type: "heading", text: text("INTERNATIONAL PARTICIPANT SUPPORT", "การสนับสนุนผู้เข้าร่วมจากต่างประเทศ") },
      {
        type: "paragraph",
        text: text(
          "Help overseas teams and organizers understand local procedures, event requirements, equipment documentation, and the steps needed to participate more smoothly.",
          "ช่วยให้ทีมและผู้จัดงานจากต่างประเทศเข้าใจขั้นตอนภายในประเทศ ข้อกำหนดของอีเวนต์ เอกสารเกี่ยวกับอุปกรณ์ และขั้นตอนที่ต้องดำเนินการเพื่อให้สามารถเข้าร่วมกิจกรรมได้อย่างราบรื่นมากขึ้น",
        ),
      },
      { type: "heading", text: text("OUR ROLE", "บทบาทของเรา") },
      {
        type: "paragraph",
        text: text(
          "Our role is to help reduce uncertainty, avoid unnecessary delays, and make the approval process more organized and professional.",
          "หน้าที่ของเราคือช่วยลดความไม่แน่นอน หลีกเลี่ยงความล่าช้าที่ไม่จำเป็น และทำให้กระบวนการขออนุมัติมีความเป็นระบบและเป็นมืออาชีพมากขึ้น",
        ),
      },
      {
        type: "paragraph",
        text: text(
          "While final permits and approvals remain subject to the relevant government authorities and applicable laws, our experience and coordination can help you prepare the right documentation and approach the process correctly from the beginning.",
          "อย่างไรก็ตาม การออกใบอนุญาตและการอนุมัติขั้นสุดท้ายยังคงขึ้นอยู่กับหน่วยงานภาครัฐที่มีอำนาจและกฎหมายที่ใช้บังคับ แต่ประสบการณ์และการประสานงานของเราสามารถช่วยให้คุณเตรียมเอกสารที่เหมาะสมและดำเนินกระบวนการได้อย่างถูกต้องตั้งแต่ต้น",
        ),
      },
      {
        type: "closing",
        lines: [
          text("You Focus on Building the Event.", "คุณโฟกัสกับการสร้างอีเวนต์"),
          text("We Help Navigate the Process.", "เราช่วยคุณจัดการเส้นทางสู่การอนุมัติ"),
        ],
      },
      {
        type: "closing",
        lines: [
          text("Prepare Correctly.", "เตรียมให้ถูกต้อง"),
          text("Coordinate Professionally.", "ประสานงานอย่างมืออาชีพ"),
          text("Operate with Confidence.", "ดำเนินงานด้วยความมั่นใจ"),
        ],
      },
    ],
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
