"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  engagementDistancesCopy,
  eyeFaceProtectionCopy,
  fpsJouleStandardsCopy,
  playerConductCopy,
  playingRulesCopy,
  refereeMarshalStandardsCopy,
  safetyRequirementsCopy,
  type RulesSafetyCopy,
} from "@/data/rules-safety-pages";
import styles from "@/components/mission/MissionPageContent.module.css";

type RulesSafetyPage =
  | "playing-rules"
  | "safety-requirements"
  | "eye-face-protection"
  | "fps-joule-standards"
  | "engagement-distances"
  | "player-conduct"
  | "referee-marshal-standards";

const copies: Record<RulesSafetyPage, Record<"en" | "th", RulesSafetyCopy>> = {
  "playing-rules": playingRulesCopy,
  "safety-requirements": safetyRequirementsCopy,
  "eye-face-protection": eyeFaceProtectionCopy,
  "fps-joule-standards": fpsJouleStandardsCopy,
  "engagement-distances": engagementDistancesCopy,
  "player-conduct": playerConductCopy,
  "referee-marshal-standards": refereeMarshalStandardsCopy,
};

export function RulesSafetyPageContent({ page }: { page: RulesSafetyPage }) {
  const { language } = useLanguage();
  const copy = copies[page][language];

  return <section className={styles.page} aria-labelledby="rules-safety-title">
    <p className="eyebrow">{language === "en" ? "RULES & SAFETY" : "กฎระเบียบและความปลอดภัย"}</p>
    <h1 id="rules-safety-title">{copy.title}</h1>
    <p className={styles.lead}>{copy.lead}</p>
    <div className={styles.body}>
      {copy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      <p>{copy.closing}</p>
    </div>
  </section>;
}
