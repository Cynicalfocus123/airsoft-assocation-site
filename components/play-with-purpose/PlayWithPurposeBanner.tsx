"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCinematicScroll } from "@/components/hooks/useCinematicScroll";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { playWithPurposeCopy } from "@/data/play-with-purpose";
import { imageSrc } from "@/data/assets";
import styles from "@/components/layout/SiteFooter.module.css";

export function PlayWithPurposeBanner() {
  const { language } = useLanguage();
  const copy = playWithPurposeCopy[language];
  const bannerRef = useRef<HTMLElement>(null);
  useCinematicScroll(bannerRef);

  return <section ref={bannerRef} className={styles.banner} aria-label={copy.title} style={{ position: "relative", isolation: "isolate" }}>
    <div aria-hidden="true" style={{ position: "absolute", inset: "-56px", zIndex: -2, transform: "translate3d(0,var(--cinematic-media-y,0px),0)" }}>
      <Image src={imageSrc("/images/michal-franczak-1ZElf0bUFWc-unsplash")} alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "center" }} />
    </div>
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: -1, background: "linear-gradient(90deg,rgba(17,26,22,.8),rgba(17,26,22,.3))" }} />
    <div className={styles.identity}>
      <h2>{copy.title}</h2>
      <p>{copy.lead}</p>
      <Link className={styles.bannerCta} href="/play-with-purpose">{language === "th" ? "สำรวจ" : "EXPLORE"} <span>↗</span></Link>
    </div>
  </section>;
}
