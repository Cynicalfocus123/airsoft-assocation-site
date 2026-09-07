"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { educationCopy, internationalCompetitionCopy, safetyFairPlayCopy, teamworkSportsmanshipCopy, tournamentsEventsCopy } from "@/data/programmes";
import styles from "@/components/mission/MissionPageContent.module.css";

type Programme = "education" | "safety-fair-play" | "teamwork-sportsmanship" | "international-competition" | "tournaments-events";

export function ProgrammePageContent({ programme }: { programme: Programme }) {
  const { language } = useLanguage();
  const copy = ({
    education: educationCopy,
    "safety-fair-play": safetyFairPlayCopy,
    "teamwork-sportsmanship": teamworkSportsmanshipCopy,
    "international-competition": internationalCompetitionCopy,
    "tournaments-events": tournamentsEventsCopy,
  }[programme])[language];

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
