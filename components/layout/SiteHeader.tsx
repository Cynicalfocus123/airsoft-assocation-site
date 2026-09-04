"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { imageSrc } from "@/data/assets";
import { navigation } from "@/data/navigation";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const [open, setOpen] = useState<string | null>(null); const [mobile, setMobile] = useState(false);
  return <header className={styles.header}><div className={styles.bar}>
    <Link className={styles.brand} href="/" aria-label="Thailand Airsoft Association home"><Image src={imageSrc("/images/association-logo.png")} alt="Thailand Airsoft Association" width={48} height={48} priority /></Link>
    <nav className={styles.desktopNav} aria-label="Main navigation">{navigation.map((item) => item.href ? <Link key={item.label} href={item.href}>{item.label}</Link> : <div key={item.label} onMouseEnter={() => setOpen(item.label)} onMouseLeave={() => setOpen(null)}><button aria-expanded={open===item.label} onClick={() => setOpen(open===item.label?null:item.label)}>{item.label} <i>↓</i></button>{open===item.label && <div className={styles.mega}>{item.children?.map((child) => <Link key={child.href} href={child.href} onClick={() => setOpen(null)}>{child.label}</Link>)}</div>}</div>)}</nav>
    <div className={styles.utility}><span>TH <b>/</b> EN</span><button className={styles.menuButton} onClick={() => setMobile(true)} aria-label="Open menu">MENU</button></div>
  </div><aside className={`${styles.mobilePanel} ${mobile?styles.mobileOpen:""}`} aria-hidden={!mobile}><div className={styles.mobileTop}><span>MENU</span><button onClick={() => setMobile(false)} aria-label="Close menu">CLOSE ×</button></div><nav>{navigation.map((item) => item.href ? <Link key={item.label} href={item.href} onClick={() => setMobile(false)}>{item.label}</Link> : <details key={item.label}><summary>{item.label}</summary>{item.children?.map((child)=><Link key={child.href} href={child.href} onClick={() => setMobile(false)}>{child.label}</Link>)}</details>)}</nav></aside>
  </header>;
}
