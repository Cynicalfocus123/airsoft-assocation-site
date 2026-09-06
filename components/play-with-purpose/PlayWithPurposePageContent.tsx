"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { playWithPurposeCopy } from "@/data/play-with-purpose";
import styles from "@/components/mission/MissionPageContent.module.css";

export function PlayWithPurposePageContent() {
  const { language } = useLanguage();
  const copy = playWithPurposeCopy[language];

  return <section className={styles.page} aria-labelledby="play-with-purpose-title">
    {copy.eyebrow && <p className="eyebrow">{copy.eyebrow}</p>}
    <h1 id="play-with-purpose-title">{copy.title}</h1>
    <p className={styles.lead}>{copy.lead}</p>
    <div className={styles.body}>
      {copy.page.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      {copy.closing.map((line) => <p key={line}>{line}</p>)}
    </div>
  </section>;
}
