"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { sportTourismCopy } from "@/data/sport-tourism";
import styles from "@/components/mission/MissionPageContent.module.css";

export function SportTourismPageContent() {
  const { language } = useLanguage();
  const copy = sportTourismCopy[language];

  return <section className={styles.page} aria-labelledby="sport-tourism-title">
    <p className="eyebrow">{copy.eyebrow}</p>
    <h1 id="sport-tourism-title">{copy.title}</h1>
    <p className={styles.lead}>{copy.lead}</p>
    <div className={styles.body}>
      {copy.page.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      {copy.closing.map((line) => <p key={line}>{line}</p>)}
    </div>
  </section>;
}
