import type { SiteLanguage } from "@/components/i18n/LanguageProvider";

export type InformationPageKey = "referee" | "member";

export type InformationSection = {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  items?: Array<{ title: string; text: string }>;
  table?: { headers: string[]; rows: string[][] };
};

type InformationPageCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  intro: string[];
  sections: InformationSection[];
  closing: string[];
};

export const informationPageCopy: Record<InformationPageKey, Record<SiteLanguage, InformationPageCopy>> = {
  referee: {
    en: {
      eyebrow: "INFORMATION",
      title: "BECOME A REFEREE OR GAME MASTER",
      lead: "Lead the Game. Protect the Players. Create the Experience.",
      intro: [
        "Do you have extensive experience in Airsoft or Paintball and the ability to lead players with confidence, fairness, professionalism, and respect?",
        "We are looking for experienced Referees and Game Masters who are passionate about the sport and capable of supporting professional events, tournaments, training programs, and large-scale international games.",
        "Ideal candidates should have at least 5 years of practical Airsoft or Paintball experience and strong English communication skills. Additional languages are highly valued.",
      ],
      sections: [
        {
          title: "WHAT WE ARE LOOKING FOR",
          intro: "Candidates should demonstrate experience and ability in the following areas:",
          items: [
            { title: "International Rules & Regulations", text: "Strong knowledge of Airsoft and/or Paintball rules, safety standards, field procedures, tournament regulations, FPS/Joule limits, engagement distances, and internationally recognized game practices." },
            { title: "Player Safety Management", text: "Identify hazards, enforce safety procedures, manage safe zones, inspect player equipment, respond to unsafe behavior, and place player safety above all other considerations." },
            { title: "Large-Scale Player Management", text: "Manage large groups of players while maintaining organization, discipline, fairness, and control of the game environment." },
            { title: "Conflict Resolution & Leadership", text: "Handle disagreements, complaints, emotional situations, and confrontations calmly and professionally while remaining firm, fair, and respectful." },
            { title: "Game Design & Mission Development", text: "Create exciting and original game scenarios, missions, objectives, team structures, storylines, scoring systems, and special challenges that keep players engaged." },
            { title: "Game Flow & Event Control", text: "Monitor the battlefield, coordinate game stages, manage timing, communicate mission changes, control respawn systems, and keep games running smoothly." },
            { title: "Excellent Observation Skills", text: "Quickly identify rule violations, unsafe behavior, cheating, missed hits, boundary violations, or other problems during gameplay." },
            { title: "Fair and Impartial Decision-Making", text: "Remain neutral regardless of team, nationality, friendship, rank, experience, or personal relationship. Every player must be treated equally." },
            { title: "Player Motivation & Morale", text: "Motivate players, build excitement, encourage sportsmanship, strengthen teamwork, and maintain positive energy throughout challenging events." },
            { title: "Airsoft & Paintball Equipment Knowledge", text: "Understand guns, magazines, HPA systems, batteries, gas systems, protective equipment, accessories, ammunition, chronographs, and common equipment problems." },
            { title: "Chronograph & Equipment Inspection", text: "Know proper chrono procedures, FPS/Joule testing, equipment inspection, safety checks, and field-specific equipment requirements." },
            { title: "Field Setup & Game Infrastructure", text: "Assist with battlefield planning, objectives, boundaries, safe zones, spawn points, command posts, checkpoints, staging areas, signage, barriers, and player movement." },
            { title: "Field Assessment & Risk Awareness", text: "Evaluate terrain, buildings, obstacles, weather conditions, visibility, emergency access, and other risks before gameplay begins." },
            { title: "Clear Communication Skills", text: "Give player briefings, explain complicated missions simply, use radios effectively, issue warnings, and communicate clearly under pressure." },
            { title: "Radio & Command Coordination", text: "Work with referees, Game Masters, organizers, security, medical teams, and field management through a structured communication system." },
            { title: "Emergency Response Awareness", text: "Understand emergency procedures, evacuation protocols, incident reporting, and the appropriate response until qualified medical personnel take control." },
            { title: "Professional Conduct", text: "Demonstrate maturity, reliability, punctuality, responsibility, good judgment, and professional behavior both on and off the field." },
            { title: "Physical Fitness & Endurance", text: "Walk long distances, stand for extended periods, operate outdoors, and work during daytime or nighttime games." },
            { title: "Night Operations Experience", text: "Experience supervising nighttime games, low-visibility environments, lighting restrictions, special safety procedures, and night mission control is highly desirable." },
            { title: "Tournament & Competition Experience", text: "Experience supporting tournaments, scenario games, MilSim events, major Paintball competitions, or international sporting events is an advantage." },
            { title: "Training & Mentoring Ability", text: "Senior candidates should be able to train junior referees, explain procedures, demonstrate professional officiating standards, and develop future Game Masters." },
            { title: "International Player Experience", text: "Experience working with players from different countries and cultures is highly valued. Professionalism, cultural awareness, and respectful communication matter." },
            { title: "Ability to Travel", text: "Be willing and able to travel to Airsoft and Paintball fields, tournaments, training programs, and events throughout Thailand and internationally when required." },
            { title: "Integrity Above Everything", text: "Understand that the authority of a Referee or Game Master comes from integrity, consistency, fairness, and trust." },
        ],
        },
        {
          title: "GAME MASTER QUALIFICATIONS",
          intro: "Game Master candidates should have additional experience in:",
          bullets: [
            "Developing complete game concepts and event storylines",
            "Designing multi-stage missions and objectives",
            "Creating balanced teams and gameplay structures",
            "Developing scoring and victory systems",
            "Coordinating multiple referee teams and command centers",
            "Adjusting missions when unexpected situations occur",
            "Managing hundreds or thousands of players",
            "Coordinating vehicles, props, special effects, objectives, and battlefield assets",
            "Conducting pre-game briefings and after-action reviews",
            "Keeping games exciting while maintaining safety and fairness",
            "Understanding player psychology and maintaining engagement throughout long events",
          ],
        },
        {
          title: "REFEREE QUALIFICATIONS",
          intro: "Referee candidates should demonstrate:",
          bullets: [
            "Excellent eyesight and battlefield awareness",
            "Confidence making immediate decisions",
            "Strong understanding of hit-calling and elimination rules",
            "Ability to recognize cheating and unsafe conduct",
            "Consistent enforcement of rules",
            "Calmness under pressure",
            "Professional communication with players",
            "Ability to issue warnings or penalties fairly",
            "Strong teamwork with other referees",
            "Commitment to player safety and sportsmanship",
          ],
        },
        {
          title: "PREFERRED QUALIFICATIONS",
          paragraphs: ["Preference may be given to candidates with experience in: MilSim • Scenario Airsoft • Speedsoft • Woodsball • Speedball • Large-Scale Events • International Tournaments • Military or Tactical Training • Event Management • First Aid • Field Operations • Radio Communications • Safety Management"],
        },
        {
          title: "WE WANT LEADERS — NOT JUST OFFICIALS",
          paragraphs: [
            "A great Referee does more than call hits. A great Game Master does more than explain missions.",
            "You help create an environment where players feel safe, challenged, respected, excited, and proud to participate.",
            "If you have the knowledge, leadership, integrity, and passion to help raise Airsoft and Paintball to a higher professional standard, we want to hear from you.",
          ],
        },
      ],
      closing: ["JOIN OUR REFEREE & GAME MASTER TEAM", "Bring your experience. Lead with integrity. Create unforgettable games. Help us build the next generation of Airsoft and Paintball."],
    },
    th: {
      eyebrow: "ข้อมูล",
      title: "ร่วมเป็นกรรมการสนามและผู้ควบคุมเกมกับเรา",
      lead: "เป็นผู้นำเกม ดูแลความปลอดภัย และสร้างประสบการณ์ที่ผู้เล่นไม่มีวันลืม",
      intro: [
        "หากคุณมีประสบการณ์ด้านแอร์ซอฟต์และเพ้นท์บอล พร้อมกับความสามารถในการควบคุมผู้เล่นด้วยความมั่นใจ ความยุติธรรม ความเป็นมืออาชีพ และความเคารพต่อทุกฝ่าย เรากำลังมองหาคุณ",
        "เรากำลังเปิดรับผู้มีประสบการณ์เพื่อร่วมงานในตำแหน่ง กรรมการสนาม (Referee) และผู้ควบคุมเกม (Game Master) สำหรับการแข่งขัน งานกิจกรรม การฝึกอบรม และเกมขนาดใหญ่ทั้งในประเทศและระดับนานาชาติ",
        "ผู้สมัครควรมีประสบการณ์ด้านแอร์ซอฟต์และเพ้นท์บอลอย่างน้อย 5 ปี และสามารถสื่อสารภาษาอังกฤษได้ดี หากสามารถสื่อสารได้หลายภาษาจะได้รับการพิจารณาเป็นพิเศษ",
      ],
      sections: [
        {
          title: "คุณสมบัติที่เรากำลังมองหา",
          intro: "ผู้สมัครควรมีความรู้ ประสบการณ์ และความสามารถในด้านต่าง ๆ ดังต่อไปนี้",
          items: [
            { title: "ความรู้ด้านกฎและมาตรฐานระดับสากล", text: "เข้าใจกฎ Airsoft และ/หรือ Paintball มาตรฐานความปลอดภัย ขั้นตอนการดำเนินเกม กติกาการแข่งขัน ค่า FPS/Joule ระยะยิงขั้นต่ำ และแนวทางการเล่นที่เป็นมาตรฐานสากล" },
            { title: "การบริหารจัดการความปลอดภัยของผู้เล่น", text: "ตรวจสอบความเสี่ยง บังคับใช้มาตรการความปลอดภัย ควบคุม Safe Zone ตรวจสอบอุปกรณ์ และจัดการพฤติกรรมที่ไม่ปลอดภัยได้อย่างเหมาะสม" },
            { title: "ความสามารถในการควบคุมผู้เล่นจำนวนมาก", text: "ดูแลผู้เล่นจำนวนมาก พร้อมรักษาระเบียบ ความยุติธรรม และความเป็นระบบของเกมได้ตลอดเวลา" },
            { title: "ทักษะการแก้ไขความขัดแย้งและภาวะผู้นำ", text: "จัดการข้อโต้แย้ง การร้องเรียน อารมณ์ของผู้เล่น และสถานการณ์กดดันได้อย่างสงบ สุภาพ เด็ดขาด และยุติธรรม" },
            { title: "ความสามารถในการออกแบบเกมและภารกิจ", text: "สร้างเกม ภารกิจ เป้าหมาย รูปแบบทีม เนื้อเรื่อง ระบบคะแนน และกิจกรรมพิเศษที่ช่วยให้ผู้เล่นรู้สึกตื่นเต้นและมีส่วนร่วม" },
            { title: "การควบคุมรูปแบบและจังหวะของเกม", text: "ควบคุมภาพรวมของสนาม ประสานงานแต่ละช่วง จัดการเวลา ระบบ Respawn และการเปลี่ยนภารกิจให้เกมดำเนินไปอย่างราบรื่น" },
            { title: "มีสายตาและการสังเกตที่ดีเยี่ยม", text: "ตรวจพบการทำผิดกติกา พฤติกรรมที่ไม่ปลอดภัย การโกง การไม่ยอมรับ Hit การออกนอกเขต หรือปัญหาระหว่างเกมได้อย่างรวดเร็ว" },
            { title: "ตัดสินอย่างเป็นกลางและยุติธรรม", text: "ไม่มีอคติเรื่องทีม ประเทศ เพื่อน ความสัมพันธ์ส่วนตัว หรือประสบการณ์ ทุกคนต้องได้รับการปฏิบัติอย่างเท่าเทียม" },
            { title: "สามารถสร้างขวัญและกำลังใจให้ผู้เล่น", text: "กระตุ้นผู้เล่น สร้างบรรยากาศที่ดี ส่งเสริมความมีน้ำใจนักกีฬา ความสามัคคี และพลังตลอดกิจกรรม" },
            { title: "มีความรู้เกี่ยวกับอุปกรณ์แอร์ซอฟต์และเพ้นท์บอล", text: "เข้าใจปืน แม็กกาซีน HPA แบตเตอรี่ แก๊ส อุปกรณ์ป้องกัน อุปกรณ์เสริม ลูกกระสุน เครื่อง Chronograph และปัญหาอุปกรณ์ทั่วไป" },
            { title: "สามารถตรวจ Chronograph และตรวจสอบอุปกรณ์ได้", text: "มีความรู้ในการตรวจ FPS/Joule ตรวจสอบอุปกรณ์ ความปลอดภัย และบังคับใช้กฎตามมาตรฐานของแต่ละสนาม" },
            { title: "มีความรู้ด้านการจัดวางสนามและโครงสร้างของเกม", text: "ช่วยวางแผน Battlefield จุดภารกิจ เขตปลอดภัย จุดเกิด Command Post Checkpoint พื้นที่พัก ป้าย แนวกั้น และเส้นทางการเคลื่อนที่" },
            { title: "สามารถประเมินความเสี่ยงของพื้นที่ได้", text: "ประเมินภูมิประเทศ อาคาร สิ่งกีดขวาง สภาพอากาศ ทัศนวิสัย ทางเข้าออกฉุกเฉิน และอันตรายก่อนเริ่มเกม" },
            { title: "มีทักษะการสื่อสารที่ชัดเจน", text: "Brief ผู้เล่น อธิบายภารกิจซับซ้อนให้เข้าใจง่าย ใช้วิทยุ ออกคำเตือน และสั่งการได้ชัดเจนแม้อยู่ภายใต้แรงกดดัน" },
            { title: "สามารถประสานงานผ่านระบบวิทยุและ Command Center ได้", text: "ทำงานร่วมกับกรรมการ Game Master ผู้จัดงาน เจ้าหน้าที่รักษาความปลอดภัย ทีมแพทย์ และผู้บริหารสนามอย่างมีระบบ" },
            { title: "มีความรู้พื้นฐานด้านสถานการณ์ฉุกเฉิน", text: "เข้าใจขั้นตอนฉุกเฉิน การอพยพ การรายงานอุบัติเหตุ และรับมือได้อย่างถูกต้องก่อนส่งต่อเจ้าหน้าที่ทางการแพทย์" },
            { title: "มีความประพฤติและความเป็นมืออาชีพ", text: "มีวุฒิภาวะ ตรงต่อเวลา รับผิดชอบ มีวิจารณญาณ และรักษาภาพลักษณ์ที่เหมาะสมทั้งในและนอกสนาม" },
            { title: "มีความพร้อมทางร่างกายและความอดทน", text: "เดินระยะไกล ยืนทำงานเป็นเวลานาน ทำงานกลางแจ้ง และปฏิบัติงานได้ทั้งกลางวันและกลางคืน" },
            { title: "มีประสบการณ์ด้านการปฏิบัติการและควบคุมเกมในเวลากลางคืน", text: "ประสบการณ์ดูแลเกมกลางคืน ทัศนวิสัยต่ำ ระบบแสงสว่าง และมาตรการความปลอดภัยพิเศษจะได้รับการพิจารณาเป็นพิเศษ" },
            { title: "มีประสบการณ์ด้านการแข่งขันและ Tournament", text: "ประสบการณ์ Tournament, Scenario Game, MilSim, Paintball Competition หรือกิจกรรมระดับนานาชาติจะได้รับการพิจารณาเป็นพิเศษ" },
            { title: "มีความสามารถในการฝึกอบรมและพัฒนาบุคลากร", text: "ผู้สมัครระดับ Senior ควรฝึกกรรมการรุ่นใหม่ อธิบายขั้นตอน และถ่ายทอดมาตรฐานการตัดสินอย่างมืออาชีพได้" },
            { title: "มีประสบการณ์ทำงานกับผู้เล่นต่างชาติ", text: "เข้าใจความแตกต่างทางวัฒนธรรม สื่อสารอย่างสุภาพ และทำงานกับผู้เล่นจากหลายประเทศได้อย่างมีประสิทธิภาพ" },
            { title: "สามารถเดินทางได้", text: "พร้อมเดินทางไปทำงานในสนามทั่วประเทศ รวมถึง Tournament การฝึกอบรม และงานระดับนานาชาติเมื่อได้รับมอบหมาย" },
            { title: "ต้องมีความซื่อสัตย์และยึดถือจริยธรรมเป็นอันดับแรก", text: "เข้าใจว่าอำนาจของ Referee และ Game Master มาจากความซื่อสัตย์ ความสม่ำเสมอ ความยุติธรรม และความน่าเชื่อถือ" },
          ],
        },
        {
          title: "คุณสมบัติเพิ่มเติมสำหรับ Game Master",
          intro: "ผู้สมัครตำแหน่ง Game Master ควรมีประสบการณ์เพิ่มเติมในด้านต่อไปนี้",
          bullets: ["วางแนวคิดและรูปแบบเกมแบบครบวงจร", "สร้างเนื้อเรื่องและ Scenario ของกิจกรรม", "ออกแบบภารกิจหลายขั้นตอน", "วางระบบทีมและสร้างความสมดุลระหว่างฝ่าย", "ออกแบบระบบคะแนนและเงื่อนไขชัยชนะ", "บริหารทีม Referee หลายชุดและ Command Center", "ปรับภารกิจทันทีเมื่อเกิดสถานการณ์ที่ไม่คาดคิด", "ควบคุมผู้เล่นหลักร้อยหรือหลักพันคน", "ประสานงานยานพาหนะ Props Special Effects และวัตถุประสงค์", "Brief ก่อนเกมและจัด After Action Review", "ทำให้เกมสนุก ตื่นเต้น และปลอดภัยในเวลาเดียวกัน", "เข้าใจจิตวิทยาผู้เล่นและรักษาความสนใจตลอดกิจกรรม"],
        },
        {
          title: "คุณสมบัติเพิ่มเติมสำหรับ Referee",
          intro: "ผู้สมัครตำแหน่ง Referee ควรมีความสามารถดังต่อไปนี้",
          bullets: ["มีสายตาและการสังเกตสถานการณ์ที่ดี", "กล้าตัดสินใจและตัดสินได้อย่างรวดเร็ว", "เข้าใจกฎเกี่ยวกับ Hit และการ Eliminated", "ตรวจจับการโกงและพฤติกรรมที่ไม่ปลอดภัย", "ใช้กฎกับผู้เล่นทุกคนอย่างเสมอภาค", "มีความสงบเมื่อเจอสถานการณ์กดดัน", "สื่อสารกับผู้เล่นอย่างมืออาชีพ", "ออกคำเตือนและบทลงโทษอย่างเหมาะสม", "ทำงานร่วมกับ Referee คนอื่นได้เป็นอย่างดี", "ให้ความสำคัญกับความปลอดภัยและ Sportsmanship"],
        },
        {
          title: "คุณสมบัติที่ได้รับการพิจารณาเป็นพิเศษ",
          paragraphs: ["MilSim • Scenario Airsoft • Speedsoft • Woodsball • Speedball • Large-Scale Event • International Tournament • Military หรือ Tactical Training • Event Management • First Aid • Field Operation • Radio Communication • Safety Management"],
        },
        {
          title: "เรากำลังมองหาผู้นำ ไม่ใช่เพียงผู้ตัดสินเกม",
          paragraphs: ["Referee ที่ดีไม่ได้มีหน้าที่เพียงตัดสินว่าใครโดนยิง และ Game Master ที่ดีไม่ได้มีหน้าที่เพียงอธิบายภารกิจ", "คุณคือบุคคลสำคัญที่จะสร้างสภาพแวดล้อมให้ผู้เล่นรู้สึกว่า ปลอดภัย • ได้รับความยุติธรรม • ได้รับความเคารพ • สนุก • ท้าทาย • และภูมิใจที่ได้เข้าร่วม", "หากคุณมีความรู้ ประสบการณ์ ความเป็นผู้นำ ความซื่อสัตย์ และความมุ่งมั่นที่จะช่วยยกระดับกีฬา Airsoft และ Paintball เราต้องการคุณมาร่วมทีมกับเรา"],
        },
      ],
      closing: ["ร่วมเป็นส่วนหนึ่งของทีมกรรมการสนามและผู้ควบคุมเกมของเรา", "นำประสบการณ์ของคุณมาใช้ เป็นผู้นำด้วยความซื่อสัตย์ สร้างเกมที่ผู้เล่นไม่มีวันลืม และร่วมกับเราสร้างมาตรฐานใหม่ให้กับวงการแอร์ซอฟต์และเพ้นท์บอล"],
    },
  },
  member: {
    en: {
      eyebrow: "INFORMATION",
      title: "BECOME OUR MEMBER",
      lead: "Join the Community. Gain More Benefits. Be Part of the Future of Airsoft & Paintball.",
      intro: [
        "Becoming a member is more than simply registering your name. It gives you access to a growing network of Airsoft and Paintball players, teams, fields, organizers, referees, Game Masters, businesses, and international partners.",
        "Our membership program rewards active members with exclusive benefits, discounts, priority access, recognition, training opportunities, event privileges, and international networking opportunities.",
        "Whether you are a recreational player, competitive player, team leader, referee, Game Master, field operator, or industry professional, there is a membership level designed for you.",
      ],
      sections: [
        { title: "MEMBERSHIP LEVELS", paragraphs: ["We offer three membership levels: Silver Member • Gold Member • Diamond Member. The higher your membership level, the greater the privileges, benefits, access, and recognition you receive."] },
        {
          title: "SILVER MEMBER",
          intro: "Start Your Journey",
          paragraphs: ["Silver Membership is ideal for players and supporters who want to become part of the community and receive basic member privileges."],
          bullets: ["Official Member Identification", "Member profile in our membership system", "Access to selected member-only information", "Special member pricing for selected events", "Early notification of upcoming Airsoft and Paintball events", "Access to selected seminars, workshops, and training programs", "Member discounts from participating fields and partners", "Access to selected member promotions", "Priority registration ahead of the general public for selected events", "Opportunity to participate in Association-supported activities", "Access to member networking opportunities", "Eligibility to upgrade to Gold or Diamond Membership", "Membership recognition at selected events", "Periodic news, safety updates, rules, and industry information"],
        },
        {
          title: "GOLD MEMBER",
          intro: "More Access. More Recognition. More Opportunities.",
          paragraphs: ["Gold Membership is designed for active players, team leaders, referees, Game Masters, event participants, and individuals who want greater access and stronger member privileges. Gold Members receive all Silver Member benefits, plus:"],
          bullets: ["Higher discounts on selected event registration fees", "Priority booking for popular events and tournaments", "Access to selected VIP registration lanes", "Special Gold Member promotions", "Additional discounts from participating fields, stores, hotels, transportation providers, and other partners", "Priority access to training programs and referee courses", "Preferred consideration for volunteer and event staff opportunities", "Access to selected advanced workshops", "Invitations to member-only activities and networking events", "Opportunity to join special games or members-only sessions", "Priority consideration for Association-organized international activities", "Team registration privileges", "Special recognition and achievement recognition for Gold Members", "Opportunity to participate in selected Association committees or development programs", "Access to selected industry offers and equipment promotions", "Priority notification of international tournaments and major events", "Opportunity to be recommended for referee, Game Master, or event support programs where qualified"],
        },
        {
          title: "DIAMOND MEMBER",
          intro: "Our Highest Level of Membership",
          paragraphs: ["Diamond Membership is our premium level for individuals who want maximum access, recognition, priority, and exclusive privileges. Diamond Members become part of our highest-level membership community and receive all Silver and Gold benefits, plus:"],
          bullets: ["Highest priority registration for major events", "Exclusive Diamond Member pricing on selected events", "Maximum available member discounts", "Priority access to limited-capacity events", "Special Diamond Member identification or membership status", "VIP check-in privileges at selected events", "Priority access to selected VIP areas or member lounges", "Invitations to exclusive Diamond Member activities", "Priority consideration for international tournaments and overseas activities", "Early access to selected tickets before public release", "Priority access to special training programs", "Invitations to advanced referee and Game Master development programs", "Preferred networking with international teams, organizers, fields, manufacturers, and industry professionals", "Opportunity to participate in selected leadership and advisory activities", "Priority consideration for official Association delegations", "Special recognition on selected Association platforms", "Priority opportunity to represent the Association at selected events", "Exclusive promotions from participating commercial partners", "Higher discounts on selected merchandise and services", "Priority access to limited-edition Association merchandise", "Special birthday or annual membership privileges where available", "Priority consideration for event staff, referee, Game Master, and leadership opportunities based on qualifications", "Access to selected private meetings, seminars, and industry networking sessions", "Recognition for long-term contribution to the development of Airsoft and Paintball"],
        },
        {
          title: "EXCLUSIVE MEMBER INCENTIVES",
          paragraphs: ["Our membership program may also provide access to additional incentives through participating partners. Benefits may vary depending on event, location, participating partner, and membership level."],
          bullets: ["Discounted event tickets", "Team booking discounts", "Field entry discounts", "Equipment and accessory discounts", "Hotel and accommodation discounts", "Transportation discounts", "Training program discounts", "Rental equipment promotions", "Member merchandise pricing", "Early-bird access", "Special tournament packages", "International event packages", "Partner promotions", "Members-only giveaways", "Loyalty rewards", "Referral rewards", "Recognition awards", "Special privileges based on membership history", "Major discounts on Airsoft and Paintball game fees", "Discounts on equipment rental under Association events", "Major discounts on campsites", "Major discounts on food and beverage from event vendors", "Coupons and rebates on Airsoft and Paintball equipment", "Discounted VIP campsite assignment", "Fast pass access to Association events", "Local event transportation discounts with a member privilege card", "Front-row VIP access at live band and EDM stages", "Updated Airsoft news and event information"],
        },
        {
          title: "MEMBER LOYALTY REWARDS",
          paragraphs: ["We believe members who actively support the community should be rewarded. Members may receive additional recognition or privileges based on:"],
          bullets: ["Length of membership", "Event participation", "Volunteer contribution", "Referee or Game Master participation", "Team leadership", "Sportsmanship", "Community contribution", "Training completion", "International representation", "Support of Association activities", "Outstanding members may receive special awards, upgraded privileges, certificates, recognition, or invitations to exclusive programs."],
        },
        {
          title: "REFERRAL REWARDS",
          paragraphs: ["Help grow the community and receive additional benefits. Members who successfully introduce new members may qualify for membership credits, event discounts, merchandise rewards, special promotions, membership upgrades, and recognition rewards. Referral benefits may vary by campaign and membership level."],
        },
        {
          title: "WHY BECOME A MEMBER?",
          paragraphs: ["Membership gives you more than discounts. It connects you to a larger network and creates opportunities to: Play More. Learn More. Save More. Connect Globally. Compete Internationally. Develop Your Skills. Build Your Reputation.", "You become part of a community working together to raise the standard of Airsoft and Paintball through safety, fair play, professionalism, education, and international cooperation."],
        },
        {
          title: "MEMBERSHIP COMPARISON",
          table: { headers: ["Benefit", "Silver", "Gold", "Diamond"], rows: [["Official Membership", "✓", "✓", "✓"], ["Member Event Pricing", "✓", "✓✓", "✓✓✓"], ["Early Event Notification", "✓", "✓", "✓"], ["Priority Registration", "Selected", "Priority", "Highest Priority"], ["Partner Discounts", "Basic", "Enhanced", "Maximum"], ["Training Access", "Selected", "Priority", "Premium Priority"], ["Member Networking", "✓", "✓", "VIP"], ["International Event Information", "✓", "Priority", "Highest Priority"], ["Members-Only Activities", "Selected", "✓", "Exclusive"], ["Referee/Game Master Opportunities", "—", "Priority Consideration", "Highest Consideration"], ["VIP Event Privileges", "—", "Selected", "✓"], ["Leadership Opportunities", "—", "Selected", "Priority"], ["International Representation Opportunities", "—", "Selected", "Priority"], ["Special Recognition", "Member", "Gold", "Diamond"], ["Exclusive Promotions", "Selected", "✓", "Premium"], ["Limited Event Access", "—", "Priority", "First Priority"]] },
        },
        {
          title: "CHOOSE THE MEMBERSHIP THAT FITS YOU",
          items: [
            { title: "SILVER — JOIN THE COMMUNITY", text: "Perfect for players who want member benefits, discounts, information, and access to the Airsoft and Paintball community." },
            { title: "GOLD — BECOME MORE INVOLVED", text: "Designed for active members who want greater discounts, priority access, training opportunities, and stronger recognition." },
            { title: "DIAMOND — LEAD. CONNECT. REPRESENT.", text: "Our highest membership level for members who want premium privileges, VIP access, international opportunities, professional networking, and greater involvement in the future of Airsoft and Paintball." },
          ],
        },
      ],
      closing: ["BECOME A MEMBER", "Join the community, unlock your benefits, expand your network, and take your Airsoft and Paintball journey to the next level."],
    },
    th: {
      eyebrow: "ข้อมูล",
      title: "สมัครเป็นสมาชิก",
      lead: "เข้าร่วมกับเรา รับสิทธิประโยชน์มากขึ้น และเป็นส่วนหนึ่งของอนาคตวงการแอร์ซอฟต์และเพ้นท์บอล",
      intro: [
        "การเป็นสมาชิกกับเราไม่ได้หมายถึงเพียงแค่การลงทะเบียนชื่อเท่านั้น แต่หมายถึงการได้เข้าร่วมเป็นส่วนหนึ่งของเครือข่ายที่เชื่อมโยงผู้เล่น ทีม สนาม ผู้จัดงาน กรรมการ ผู้ควบคุมเกม ผู้ประกอบการ ร้านค้า และพันธมิตรระดับนานาชาติเข้าไว้ด้วยกัน",
        "ระบบสมาชิกของเราถูกออกแบบขึ้นเพื่อมอบสิทธิประโยชน์ที่มากกว่าการเข้าร่วมกิจกรรมทั่วไป ไม่ว่าจะเป็น ส่วนลดพิเศษ • สิทธิ์ลงทะเบียนก่อน • กิจกรรมเฉพาะสมาชิก • การฝึกอบรม • โอกาสระดับนานาชาติ • เครือข่าย • การยอมรับในวงการ • และสิทธิพิเศษจากพันธมิตร",
        "ไม่ว่าคุณจะเป็นผู้เล่นทั่วไป ผู้เล่นแข่งขัน หัวหน้าทีม กรรมการ ผู้ควบคุมเกม เจ้าของสนาม ผู้จัดงาน หรือผู้ประกอบการในอุตสาหกรรมแอร์ซอฟต์และเพ้นท์บอล เรามีระดับสมาชิกที่เหมาะกับคุณ",
      ],
      sections: [
        { title: "ระดับสมาชิก", paragraphs: ["สมาชิกแบ่งออกเป็น 3 ระดับ ได้แก่ Silver Member • Gold Member • Diamond Member ยิ่งระดับสมาชิกสูงขึ้น คุณจะได้รับสิทธิประโยชน์ ความสำคัญ การเข้าถึงกิจกรรม และโอกาสต่าง ๆ เพิ่มขึ้นตามระดับสมาชิก"] },
        {
          title: "ระดับซิลเวอร์",
          intro: "จุดเริ่มต้นของการเป็นส่วนหนึ่งในชุมชนแอร์ซอฟต์และเพ้นท์บอล",
          paragraphs: ["สมาชิกระดับซิลเวอร์เหมาะสำหรับผู้เล่นและผู้สนับสนุนที่ต้องการเข้าร่วมชุมชน เพื่อเริ่มต้นรับสิทธิพิเศษสำหรับสมาชิก"],
          bullets: ["ได้รับสถานะสมาชิกอย่างเป็นทางการ", "มีข้อมูลสมาชิกในระบบสมาชิก", "เข้าถึงข้อมูลเฉพาะสำหรับสมาชิกบางประเภท", "รับราคาพิเศษสำหรับกิจกรรมที่ร่วมรายการ", "รับข่าวสารกิจกรรมก่อนบุคคลทั่วไป", "เข้าร่วมสัมมนา การอบรมเชิงปฏิบัติการ และหลักสูตรฝึกอบรมที่กำหนด", "รับส่วนลดจากสนามและพันธมิตรที่ร่วมรายการ", "เข้าถึงสินค้าราคาพิเศษสำหรับสมาชิก", "ลงทะเบียนกิจกรรมบางรายการก่อนบุคคลทั่วไป", "เข้าร่วมกิจกรรมที่สนับสนุนโดยสมาคม", "เข้าร่วมเครือข่ายสมาชิกและชุมชน", "อัปเกรดระดับสมาชิกเป็นโกลด์หรือไดมอนด์ได้", "ได้รับการยอมรับในฐานะสมาชิกในกิจกรรมที่กำหนด", "รับข่าวสารกฎ ความปลอดภัย มาตรฐาน และการพัฒนาของวงการ"],
        },
        {
          title: "สมาชิกระดับโกลด์",
          intro: "เพิ่มบทบาทและการมีส่วนร่วมกับสมาคม",
          paragraphs: ["สมาชิกระดับโกลด์เหมาะสำหรับผู้เล่นที่มีความกระตือรือร้น หัวหน้าทีม กรรมการสนาม ผู้ควบคุมเกม และผู้ที่ต้องการมีบทบาทมากขึ้น โดยได้รับสิทธิประโยชน์ทั้งหมดของซิลเวอร์ พร้อมสิทธิประโยชน์เพิ่มเติม"],
          bullets: ["ส่วนลดค่าลงทะเบียนกิจกรรมในระดับที่สูงขึ้น", "สิทธิ์สำรองเข้าร่วมกิจกรรมและการแข่งขันยอดนิยมก่อนบุคคลทั่วไป", "ช่องลงทะเบียนพิเศษในกิจกรรมที่กำหนด", "โปรโมชั่นพิเศษสำหรับสมาชิกระดับโกลด์", "ส่วนลดจากสนาม ร้านค้า โรงแรม การเดินทาง และพันธมิตร", "สิทธิ์เข้าถึงการฝึกอบรมและหลักสูตร Referee ก่อน", "ได้รับการพิจารณาสำหรับงานอาสาสมัครและเจ้าหน้าที่จัดงาน", "เข้าถึงการอบรมเชิงปฏิบัติการขั้นสูง", "คำเชิญเข้าร่วมกิจกรรมเฉพาะสมาชิกและกิจกรรมสร้างเครือข่าย", "เข้าร่วมเกมพิเศษหรือช่วงเล่นเฉพาะสมาชิก", "ได้รับการพิจารณาก่อนสำหรับกิจกรรมระดับนานาชาติ", "สิทธิ์ลงทะเบียนเป็นทีม", "ได้รับการยอมรับและรางวัลความสำเร็จของสมาชิกโกลด์", "เข้าร่วมคณะทำงานหรือโครงการพัฒนาของสมาคม", "เข้าถึงข้อเสนอจากอุตสาหกรรมและอุปกรณ์", "รับข่าวการแข่งขันนานาชาติและกิจกรรมสำคัญก่อน", "ได้รับการแนะนำให้ทำหน้าที่ Referee, Game Master หรืองานสนับสนุนเมื่อมีคุณสมบัติ"],
        },
        {
          title: "สมาชิกระดับไดมอนด์",
          intro: "สมาชิกระดับสูงสุดของเรา",
          paragraphs: ["สมาชิกระดับไดมอนด์คือสมาชิกพรีเมียมสูงสุด สำหรับผู้ที่ต้องการสิทธิประโยชน์ระดับสูงสุด การเข้าถึงบริการและพื้นที่ VIP การยอมรับในระดับพิเศษ ตลอดจนโอกาสในประเทศและระดับนานาชาติ โดยได้รับสิทธิประโยชน์ทั้งหมดของซิลเวอร์และโกลด์ พร้อมสิทธิประโยชน์เพิ่มเติม"],
          bullets: ["สิทธิ์ลงทะเบียนกิจกรรมใหญ่เป็นอันดับแรก", "ราคาพิเศษระดับไดมอนด์", "ส่วนลดในระดับสูงสุด", "สิทธิ์เข้าร่วมกิจกรรมที่จำกัดจำนวนก่อนบุคคลทั่วไป", "สถานะและบัตรประจำตัวสมาชิกระดับไดมอนด์", "เช็คอินแบบ VIP", "เข้าถึงพื้นที่ VIP หรือเลานจ์สมาชิกก่อน", "คำเชิญกิจกรรมเฉพาะไดมอนด์", "ได้รับการพิจารณาก่อนสำหรับการแข่งขันต่างประเทศ", "เข้าถึงบัตรก่อนบุคคลทั่วไป", "สิทธิ์เข้าถึงการฝึกอบรมพิเศษ", "เข้าร่วมหลักสูตรพัฒนา Referee และ Game Master ขั้นสูง", "สร้างเครือข่ายกับทีม ผู้จัด สนาม ผู้ผลิต และผู้เชี่ยวชาญต่างประเทศ", "เข้าร่วมกิจกรรมผู้นำและที่ปรึกษา", "ได้รับการพิจารณาก่อนสำหรับคณะผู้แทนสมาคม", "ได้รับการยอมรับบนแพลตฟอร์มของสมาคม", "เป็นตัวแทนสมาคมในกิจกรรมที่กำหนด", "โปรโมชั่นพิเศษจากพันธมิตร", "ส่วนลดสินค้าและบริการในระดับสูง", "สิทธิ์เข้าถึงสินค้าสมาคมรุ่นพิเศษก่อน", "สิทธิพิเศษวันเกิดหรือสิทธิประจำปีเมื่อมี", "ได้รับการพิจารณาก่อนสำหรับเจ้าหน้าที่ Referee Game Master และตำแหน่งผู้นำ", "เข้าถึงการประชุมส่วนตัว สัมมนา และเครือข่ายธุรกิจ", "ได้รับการยกย่องสำหรับการสนับสนุนและการมีส่วนร่วมระยะยาว"],
        },
        { title: "สิทธิประโยชน์เพิ่มเติมสำหรับสมาชิก", paragraphs: ["สมาชิกแต่ละระดับอาจได้รับสิทธิประโยชน์เพิ่มเติมจากพันธมิตร เช่น ส่วนลดบัตรอีเวนต์ การจองเป็นทีม ค่าเข้าสนาม อุปกรณ์ โรงแรม การเดินทาง การอบรม ค่าเช่าอุปกรณ์ สินค้าสมาคม สิทธิ์ Early-bird แพ็กเกจทัวร์นาเมนต์และต่างประเทศ โปรโมชั่นพันธมิตร ของแจกเฉพาะสมาชิก รางวัลความภักดี รางวัลแนะนำสมาชิก และสิทธิพิเศษตามประวัติสมาชิก สิทธิประโยชน์อาจแตกต่างกันตามกิจกรรม สถานที่ พันธมิตร และระดับสมาชิก"] },
        { title: "รางวัลความภักดีของสมาชิก", paragraphs: ["สมาชิกที่สนับสนุนชุมชนอย่างต่อเนื่องอาจได้รับการยอมรับหรือสิทธิพิเศษเพิ่มเติมจากระยะเวลาการเป็นสมาชิก จำนวนกิจกรรมที่เข้าร่วม การเป็นอาสาสมัคร การทำหน้าที่ Referee หรือ Game Master การเป็นผู้นำทีม น้ำใจนักกีฬา การช่วยเหลือชุมชน การผ่านการอบรม การเป็นตัวแทนระดับนานาชาติ และการสนับสนุนกิจกรรมของสมาคม สมาชิกที่มีผลงานโดดเด่นอาจได้รับรางวัล ประกาศนียบัตร สิทธิ์เพิ่มเติม การอัปเกรด หรือคำเชิญกิจกรรมพิเศษ"] },
        { title: "รางวัลสำหรับการแนะนำสมาชิกใหม่", paragraphs: ["ชวนเพื่อนเข้าร่วมชุมชนแอร์ซอฟต์และเพ้นท์บอลเพื่อรับสิทธิประโยชน์เพิ่ม เช่น เครดิตสมาชิก ส่วนลดกิจกรรม รางวัลสินค้า โปรโมชั่นพิเศษ อัปเกรดสมาชิก และการยอมรับ โดยสิทธิประโยชน์อาจแตกต่างกันตามแคมเปญและระดับสมาชิก"] },
        {
          title: "ทำไมต้องเป็นสมาชิก?",
          paragraphs: ["การเป็นสมาชิกมอบมากกว่าส่วนลด เชื่อมโยงคุณกับเครือข่ายที่ใหญ่ขึ้น และสร้างโอกาสให้คุณ เล่นมากขึ้น • เรียนรู้มากขึ้น • ประหยัดมากขึ้น • เชื่อมต่อทั่วโลก • แข่งขันระดับนานาชาติ • พัฒนาทักษะ • สร้างชื่อเสียง และก้าวสู่โอกาสระดับนานาชาติ", "คุณจะเป็นส่วนหนึ่งของชุมชนที่มุ่งพัฒนาแอร์ซอฟต์และเพ้นท์บอลด้วยมาตรฐานด้านความปลอดภัย ความยุติธรรมในการเล่น ความเป็นมืออาชีพ การศึกษาและพัฒนา น้ำใจนักกีฬา และความร่วมมือระดับนานาชาติ"],
        },
        {
          title: "ตารางเปรียบเทียบสิทธิประโยชน์สมาชิก",
          table: { headers: ["สิทธิประโยชน์", "Silver", "Gold", "Diamond"], rows: [["สถานะสมาชิกอย่างเป็นทางการ", "✓", "✓", "✓"], ["ราคาพิเศษสำหรับอีเวนต์", "✓", "✓✓", "✓✓✓"], ["รับข่าวอีเวนต์ก่อน", "✓", "✓", "✓"], ["ลงทะเบียนล่วงหน้า", "บางกิจกรรม", "สิทธิ์ก่อน", "สิทธิ์สูงสุด"], ["ส่วนลดจากพันธมิตร", "ขั้นพื้นฐาน", "เพิ่มเติม", "สูงสุด"], ["สิทธิ์การฝึกอบรม", "บางหลักสูตร", "สิทธิ์ก่อน", "พรีเมียม"], ["เครือข่ายสมาชิก", "✓", "✓", "VIP"], ["ข้อมูลกิจกรรมนานาชาติ", "✓", "สิทธิ์ก่อน", "สิทธิ์สูงสุด"], ["กิจกรรมเฉพาะสมาชิก", "บางรายการ", "✓", "พิเศษ"], ["โอกาส Referee/Game Master", "—", "พิจารณาก่อน", "พิจารณาสูงสุด"], ["สิทธิ์ VIP ในกิจกรรม", "—", "บางรายการ", "✓"], ["โอกาสด้านผู้นำ", "—", "บางโอกาส", "สิทธิ์ก่อน"], ["การเป็นตัวแทนระดับนานาชาติ", "—", "บางโอกาส", "สิทธิ์ก่อน"], ["การยอมรับพิเศษ", "สมาชิก", "Gold", "Diamond"], ["โปรโมชั่นพิเศษเฉพาะสมาชิก", "บางรายการ", "✓", "ระดับพรีเมียม"], ["กิจกรรมที่จำกัดจำนวน", "—", "สิทธิ์ก่อน", "สิทธิ์พิจารณาเป็นลำดับแรก"]] },
        },
        {
          title: "เลือกระดับสมาชิกที่เหมาะกับคุณ",
          items: [
            { title: "SILVER — เข้าร่วมเป็นส่วนหนึ่งของชุมชน", text: "เหมาะสำหรับผู้ที่ต้องการเริ่มต้นรับสิทธิพิเศษ ส่วนลด ข่าวสาร และเข้าร่วมชุมชนแอร์ซอฟต์และเพ้นท์บอล" },
            { title: "GOLD — เพิ่มบทบาทและการมีส่วนร่วมกับสมาคม", text: "เหมาะสำหรับสมาชิกที่มีความกระตือรือร้นและมีส่วนร่วมอย่างต่อเนื่อง ต้องการส่วนลดที่มากขึ้น สิทธิ์เข้าถึงก่อน โอกาสฝึกอบรม และการยอมรับในระดับที่สูงขึ้น" },
            { title: "DIAMOND — นำทีม • สร้างเครือข่าย • เป็นตัวแทน", text: "ระดับสมาชิกสูงสุดสำหรับผู้ที่ต้องการสิทธิประโยชน์ระดับพรีเมียม การเข้าถึงบริการและพื้นที่ VIP โอกาสระดับนานาชาติ เครือข่ายทางวิชาชีพ และโอกาสก้าวสู่บทบาทผู้นำ" },
          ],
        },
      ],
      closing: ["สมัครเป็นสมาชิกกับเราวันนี้", "เข้าร่วมเป็นส่วนหนึ่งของชุมชน • ปลดล็อกสิทธิประโยชน์ • ขยายเครือข่าย และก้าวไปอีกขั้นในเส้นทางการเล่นของคุณ"],
    },
  },
};
