"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { missionCopy } from "@/data/mission";
import styles from "./MissionPageContent.module.css";

export function MissionPageContent() {
  const { language } = useLanguage();
  const copy = missionCopy[language];

  return <section className={styles.page} aria-labelledby="mission-title">
    <h1 id="mission-title">{copy.eyebrow}</h1>
    <p className={styles.lead}>{copy.title}</p>
    <div className={styles.body}>
      {copy.page.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      {copy.closing.map((line) => <p key={line}>{line}</p>)}
    </div>
  </section>;
}
