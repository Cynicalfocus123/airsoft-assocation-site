"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { nationalStandardsCopy } from "@/data/national-standards";
import styles from "@/components/mission/MissionPageContent.module.css";

export function NationalStandardsPageContent() {
  const { language } = useLanguage();
  const copy = nationalStandardsCopy[language];

  return <section className={styles.page} aria-labelledby="standards-title">
    <h1 id="standards-title">{copy.title}</h1>
    <div className={styles.body}>
      {copy.page.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      <p>{copy.closing}</p>
    </div>
  </section>;
}
