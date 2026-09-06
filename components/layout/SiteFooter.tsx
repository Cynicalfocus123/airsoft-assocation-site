"use client";

import Image from "next/image";
import Link from "next/link";
import { getLabel, navigation } from "@/data/navigation";
import { informationLinks } from "@/data/footer";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { imageSrc } from "@/data/assets";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const { language } = useLanguage();
  const grouped = navigation.filter((item) => item.children);
  return <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <Link className={styles.footerBrand} href="/" aria-label="Thailand Airsoft Association home">
          <Image src={imageSrc("/images/association-logo.png")} alt="Thailand Airsoft Association" width={192} height={192} />
        </Link>
        <div className={styles.links}>
          {grouped.map((group) => <section key={group.label.en}><h3>{getLabel(group.label, language)}</h3>{group.children?.map((link) => <Link key={link.href} href={link.href}>{getLabel(link.label, language)}</Link>)}</section>)}
          <section><h3>{language === "th" ? "ข้อมูล" : "INFORMATION"}</h3>{informationLinks.map((link) => <Link key={link.href} href={link.href}>{getLabel(link.label, language)}</Link>)}</section>
        </div>
      </div>
      <div className={styles.bottom}><span>© 2026 Thailand Airsoft and Paintball Association</span></div>
    </footer>;
}
