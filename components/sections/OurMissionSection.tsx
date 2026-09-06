"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { missionCopy } from "@/data/mission";
import { CinematicSection } from "./CinematicSection";

export function OurMissionSection() {
  const { language } = useLanguage();
  const copy = missionCopy[language];

  return <CinematicSection
    title={copy.eyebrow}
    lead={copy.title}
    description={<>{copy.preview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</>}
    desktopImage="/images/our-mission-airsoft.avif"
    mobileImage="/images/our-mission-airsoft.avif"
    imageAlt="Airsoft players working together outdoors"
    ctaLabel={copy.eyebrow}
    ctaHref="/our-mission"
  />;
}
