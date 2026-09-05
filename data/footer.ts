import type { LocalizedLabel } from "@/data/navigation";

export type FooterLink = { label: LocalizedLabel; href: string };

export const informationLinks: FooterLink[] = [
  { label: { en: "Upcoming Events", th: "กิจกรรมและอีเวนต์ที่กำลังจะมาถึง" }, href: "/events" },
  { label: { en: "Contact", th: "ติดต่อเรา" }, href: "/contact" },
  { label: { en: "Privacy Policy", th: "นโยบายความเป็นส่วนตัว" }, href: "/privacy-policy" },
  { label: { en: "Terms of Use", th: "ข้อกำหนดการใช้งาน" }, href: "/terms-of-use" },
  { label: { en: "Become Our Referee", th: "สมัครเป็นกรรมการของเรา" }, href: "/become-a-referee" },
  { label: { en: "Become Our Member", th: "สมัครเป็นสมาชิกของเรา" }, href: "/become-a-member" },
  { label: { en: "Complaint", th: "ร้องเรียน / แจ้งข้อร้องเรียน" }, href: "/complaint" },
];
