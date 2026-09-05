"use client";

import { useRef } from "react";
import { useCinematicScroll } from "@/components/hooks/useCinematicScroll";
import Image from "next/image";
import Link from "next/link";
import { getLabel, navigation } from "@/data/navigation";
import { informationLinks } from "@/data/footer";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { imageSrc } from "@/data/assets";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const { language } = useLanguage();
  const bannerRef = useRef<HTMLElement>(null);
  useCinematicScroll(bannerRef);
  const grouped = navigation.filter((item) => item.children);
  return <>
    <section ref={bannerRef} className={styles.banner} aria-label="Play with purpose" style={{ position: "relative", isolation: "isolate" }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: "-56px", zIndex: -2, transform: "translate3d(0,var(--cinematic-media-y,0px),0)" }}>
        <Image src={imageSrc("/images/michal-franczak-1ZElf0bUFWc-unsplash.jpg")} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
      </div>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: -1, background: "linear-gradient(90deg,rgba(17,26,22,.8),rgba(17,26,22,.3))" }} />
      <div className={styles.identity}>
        <h2>PLAY WITH<br />PURPOSE.</h2>
        <p>Building a safe, fair and internationally connected sport community.</p>
      </div>
    </section>
    <footer className={styles.footer}>
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
    </footer>
  </>;
}
