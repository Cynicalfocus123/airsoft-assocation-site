"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { buildPathwayCompetitionCopy, developPlayersTeamsCopy, educationCopy, internationalCompetitionCopy, organizeCompetitionsEventsCopy, promoteThailandHubCopy, recognizedSportsCopy, safetyFairPlayCopy, strengthenCommunityCopy, supportImproveFieldsCopy, teamworkSportsmanshipCopy, tournamentsEventsCopy } from "@/data/programmes";
import styles from "@/components/mission/MissionPageContent.module.css";

type Programme = "education" | "safety-fair-play" | "teamwork-sportsmanship" | "international-competition" | "tournaments-events" | "develop-players-teams" | "support-improve-fields" | "organize-competitions-events" | "build-pathway-competition" | "strengthen-community" | "promote-thailand-hub" | "recognized-sports";

export function ProgrammePageContent({ programme }: { programme: Programme }) {
  const { language } = useLanguage();
  const copy = ({
    education: educationCopy,
    "safety-fair-play": safetyFairPlayCopy,
    "teamwork-sportsmanship": teamworkSportsmanshipCopy,
    "international-competition": internationalCompetitionCopy,
    "tournaments-events": tournamentsEventsCopy,
    "develop-players-teams": developPlayersTeamsCopy,
    "support-improve-fields": supportImproveFieldsCopy,
    "organize-competitions-events": organizeCompetitionsEventsCopy,
    "build-pathway-competition": buildPathwayCompetitionCopy,
    "strengthen-community": strengthenCommunityCopy,
    "promote-thailand-hub": promoteThailandHubCopy,
    "recognized-sports": recognizedSportsCopy,
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
