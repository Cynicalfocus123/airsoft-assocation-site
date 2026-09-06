"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { educationCopy, safetyFairPlayCopy } from "@/data/programmes";
import styles from "@/components/mission/MissionPageContent.module.css";

type Programme = "education" | "safety-fair-play";

export function ProgrammePageContent({ programme }: { programme: Programme }) {
  const { language } = useLanguage();
  const copy = (programme === "education" ? educationCopy : safetyFairPlayCopy)[language];

  return <section className={styles.page} aria-labelledby="programme-title">
    <h1 id="programme-title">{copy.title}</h1>
    <p className={styles.lead}>{copy.lead}</p>
    <div className={styles.body}>
      {copy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      <p>{copy.closing}</p>
    </div>
  </section>;
}
