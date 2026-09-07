"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { leadershipCopy } from "@/data/leadership";
import styles from "@/components/mission/MissionPageContent.module.css";

export function LeadershipPageContent() {
  const { language } = useLanguage();
  const copy = leadershipCopy[language];

  return <section className={styles.page} aria-labelledby="leadership-title">
    <p className="eyebrow">{copy.eyebrow}</p>
    <h1 id="leadership-title">{copy.title}</h1>
    <p className={styles.lead}>{copy.lead}</p>
    <div className={styles.body}>
      {copy.page.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      {copy.closing.map((line) => <p key={line}>{line}</p>)}
    </div>
  </section>;
}
