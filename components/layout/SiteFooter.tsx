import Image from "next/image";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { imageSrc } from "@/data/assets";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const grouped = navigation.filter((item) => item.children);
  return <footer className={styles.footer}><div className={styles.identity}><Link className={styles.footerBrand} href="/" aria-label="Thailand Airsoft Association home"><Image src={imageSrc("/images/association-logo.png")} alt="Thailand Airsoft Association" width={96} height={96} /></Link><h2>PLAY WITH<br />PURPOSE.</h2><p>Building a safe, fair and internationally connected sport community.</p></div><div className={styles.links}>{grouped.map((group) => <section key={group.label}><h3>{group.label}</h3>{group.children?.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}</section>)}<section><h3>INFORMATION</h3><Link href="/events">Upcoming Events</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy Policy</Link><Link href="/terms-of-use">Terms of Use</Link></section></div><div className={styles.bottom}><span>© 2026</span><span>ไทย / English</span></div></footer>;
}
