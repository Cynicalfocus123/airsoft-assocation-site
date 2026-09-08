"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { ServiceSlug } from "@/data/services";
import { servicesCopy } from "@/data/services";
import styles from "./ServicePageContent.module.css";

export function ServicePageContent({ slug }: { slug: ServiceSlug }) {
  const { language } = useLanguage();
  const copy = servicesCopy[slug];
  const localized = (value: { en: string; th: string }) => value[language];

  return <article className={styles.page} aria-labelledby="service-title">
    <p className="eyebrow">{localized(copy.eyebrow)}</p>
    <h1 id="service-title">{localized(copy.title)}</h1>
    {copy.intro && <div className={styles.intro}>{copy.intro.map((paragraph) => <p key={paragraph.en}>{localized(paragraph)}</p>)}</div>}
    {copy.sections && copy.sectionHeading && <section className={styles.services} aria-labelledby="service-list-title">
      <h2 id="service-list-title">{localized(copy.sectionHeading)}</h2>
      <ol className={styles.serviceList}>
        {copy.sections.map((section) => <li className={styles.serviceItem} key={section.heading.en}>
          <h3>{localized(section.heading)}</h3>
          <p>{localized(section.description)}</p>
        </li>)}
      </ol>
    </section>}
    {copy.placeholder && <p className={styles.placeholder}>{localized(copy.placeholder)}</p>}
  </article>;
}
