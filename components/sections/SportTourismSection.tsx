"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { sportTourismCopy } from "@/data/sport-tourism";
import { CinematicSection } from "./CinematicSection";

export function SportTourismSection() {
  const { language } = useLanguage();
  const copy = sportTourismCopy[language];

  return <CinematicSection
    eyebrow={copy.eyebrow}
    title={language === "en" ? <>SPORT<br />TOURISM</> : copy.title}
    description={copy.preview}
    desktopImage="/images/photo-1730233024781-27672ab1674e.avif"
    mobileImage="/images/photo-1730233024781-27672ab1674e.avif"
    imageAlt=""
    align="right"
    focalPointDesktop="center"
    focalPointMobile="center"
    ctaLabel={language === "th" ? "สำรวจ" : "EXPLORE"}
    ctaHref="/sport-tourism"
    overlayStrength={0.82}
  />;
}
