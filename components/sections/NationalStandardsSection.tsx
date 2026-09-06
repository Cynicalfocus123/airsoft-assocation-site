"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { nationalStandardsCopy } from "@/data/national-standards";
import { CinematicSection } from "./CinematicSection";

export function NationalStandardsSection() {
  const { language } = useLanguage();
  const copy = nationalStandardsCopy[language];

  return <CinematicSection
    eyebrow="WHAT WE DO"
    title={language === "en" ? <>ESTABLISH<br />NATIONAL STANDARDS</> : copy.title}
    description={copy.homepageDescription}
    desktopImage="/images/national-standards-training.jpg"
    mobileImage="/images/national-standards-training.jpg"
    imageAlt="Airsoft players training indoors"
    focalPointDesktop="68% 50%"
    focalPointMobile="62% 38%"
    ctaLabel="EXPLORE"
    ctaHref="/what-we-do/national-standards"
  />;
}
