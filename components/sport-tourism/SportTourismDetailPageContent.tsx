"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import {
  internationalEventsCopy,
  internationalPartnershipsCopy,
  internationalRepresentationCopy,
  regionalEventsCopy,
  type SportTourismDetailCopy,
} from "@/data/sport-tourism-pages";
import styles from "@/components/mission/MissionPageContent.module.css";

type SportTourismPage = "international-events" | "regional-events" | "international-representation" | "international-partnerships";

const copies: Record<SportTourismPage, Record<"en" | "th", SportTourismDetailCopy>> = {
  "international-events": internationalEventsCopy,
  "regional-events": regionalEventsCopy,
  "international-representation": internationalRepresentationCopy,
  "international-partnerships": internationalPartnershipsCopy,
};

export function SportTourismDetailPageContent({ page }: { page: SportTourismPage }) {
  const { language } = useLanguage();
  const copy = copies[page][language];

  return <section className={styles.page} aria-labelledby="sport-tourism-detail-title">
    <p className="eyebrow">{language === "en" ? "SPORT TOURISM" : "การท่องเที่ยวเชิงกีฬา"}</p>
    <h1 id="sport-tourism-detail-title">{copy.title}</h1>
    <p className={styles.lead}>{copy.lead}</p>
    <div className={styles.body}>
      {copy.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
    </div>
    <div className={styles.closing}>
      <p>{copy.closing}</p>
    </div>
  </section>;
}
