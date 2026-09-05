"use client";

import Link from "next/link";
import Image from "next/image";
import { imageSrc } from "@/data/assets";
import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
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
      <nav className={styles.desktopNav} aria-label="Main navigation">
        {navigation.map((item) => item.href ? <Link key={item.label} href={item.href}>{item.label}</Link> : <div key={item.label} onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}><button type="button" aria-expanded={open === item.label} onClick={() => setOpen(open === item.label ? null : item.label)}>{item.label} <i>↓</i></button>{open === item.label && <div className={styles.mega}>{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(null)}>{child.label}</Link>)}</div>}</div>)}
      </nav>
      <div className={styles.utility}><span>TH <b>/</b> EN</span><button className={styles.menuButton} type="button" onClick={() => setMobile(true)} aria-label="Open menu" aria-controls="mobile-navigation" aria-expanded={mobile}><i /><i /><i /></button></div>
    </div>
    <button className={`${styles.mobileBackdrop} ${mobile ? styles.backdropOpen : ""}`} type="button" aria-label="Close menu" tabIndex={mobile ? 0 : -1} onClick={closeMobile} />
    <aside id="mobile-navigation" className={`${styles.mobilePanel} ${mobile ? styles.mobileOpen : ""}`} aria-hidden={!mobile}>
      <div className={styles.mobileTop}><span>MENU</span><button type="button" onClick={closeMobile} aria-label="Close menu">CLOSE ×</button></div>
      <nav aria-label="Mobile navigation">{navigation.map((item) => item.href ? <Link key={item.label} href={item.href} onClick={closeMobile}>{item.label}</Link> : <details key={item.label}><summary>{item.label}</summary>{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={closeMobile}>{child.label}</Link>)}</details>)}</nav>
    </aside>
  </header>;
}
