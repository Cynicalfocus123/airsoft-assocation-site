"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { associationPageCopy, type AssociationPageKey } from "@/data/association-pages";
import styles from "@/components/mission/MissionPageContent.module.css";

function richText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith("**") && part.endsWith("**")
    ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    : part);
}

export function AssociationPageContent({ page }: { page: AssociationPageKey }) {
  const { language } = useLanguage();
  const copy = associationPageCopy[page][language];

  return <section className={styles.page} aria-labelledby="association-page-title">
    <p className="eyebrow">{copy.eyebrow}</p>
    <h1 id="association-page-title">{copy.title}</h1>
    <div className={styles.body}>
      {copy.page.map((paragraph) => <p key={paragraph}>{richText(paragraph)}</p>)}
    </div>
    <div className={styles.closing}>
      {copy.closing.map((line) => <p key={line}>{line}</p>)}
    </div>
  </section>;
}
