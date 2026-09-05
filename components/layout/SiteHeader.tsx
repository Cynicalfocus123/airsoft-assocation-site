"use client";

import Link from "next/link";
import Image from "next/image";
import { imageSrc } from "@/data/assets";
import { useEffect, useState } from "react";
import { getLabel, navigation } from "@/data/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const closeMobile = () => setMobile(false);
  useEffect(() => {
    if (!mobile) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobile(false);
    };
    const desktop = window.matchMedia("(min-width: 1161px)");
    const onDesktop = () => { if (desktop.matches) setMobile(false); };
    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [mobile]);

  return <header className={styles.header}>
    <div className={styles.bar}>
      <Link className={styles.brand} href="/" aria-label="Thailand Airsoft Association home">
        <Image src={imageSrc("/images/association-logo.png")} alt="Thailand Airsoft Association" width={192} height={192} priority />
      </Link>
      <nav className={styles.desktopNav} aria-label={language === "th" ? "เมนูหลัก" : "Main navigation"}>
        {navigation.map((item) => item.href ? <Link key={item.href} href={item.href}>{getLabel(item.label, language)}</Link> : <div key={item.label.en} onMouseEnter={() => setOpen(item.label.en)} onMouseLeave={() => setOpen(null)}><button type="button" aria-expanded={open === item.label.en} onClick={() => setOpen(open === item.label.en ? null : item.label.en)}>{getLabel(item.label, language)} <i>↓</i></button>{open === item.label.en && <div className={styles.mega}>{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(null)}>{getLabel(child.label, language)}</Link>)}</div>}</div>)}
      </nav>
      <div className={styles.utility}><div className={styles.languageSelector} aria-label={language === "th" ? "ภาษา" : "Language"}><button type="button" onClick={() => setLanguage("th")} aria-pressed={language === "th"}>TH</button><span aria-hidden="true">/</span><button type="button" onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button></div><button className={styles.menuButton} type="button" onClick={() => setMobile(true)} aria-label={language === "th" ? "เปิดเมนู" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={mobile}><i /><i /><i /></button></div>
    </div>
    <button className={`${styles.mobileBackdrop} ${mobile ? styles.backdropOpen : ""}`} type="button" aria-label={language === "th" ? "ปิดเมนู" : "Close menu"} tabIndex={mobile ? 0 : -1} onClick={closeMobile} />
    <aside id="mobile-navigation" className={`${styles.mobilePanel} ${mobile ? styles.mobileOpen : ""}`} aria-hidden={!mobile}>
      <div className={styles.mobileTop}><span>{language === "th" ? "เมนู" : "MENU"}</span><button type="button" onClick={closeMobile} aria-label={language === "th" ? "ปิดเมนู" : "Close menu"}>{language === "th" ? "ปิด" : "CLOSE"} ×</button></div>
      <nav aria-label={language === "th" ? "เมนูสำหรับมือถือ" : "Mobile navigation"}>{navigation.map((item) => item.href ? <Link key={item.href} href={item.href} onClick={closeMobile}>{getLabel(item.label, language)}</Link> : <details key={item.label.en}><summary>{getLabel(item.label, language)}</summary>{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={closeMobile}>{getLabel(child.label, language)}</Link>)}</details>)}</nav>
    </aside>
  </header>;
}
