"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { informationPageCopy, type InformationPageKey, type InformationSection } from "@/data/information-pages";
import styles from "./InformationPageContent.module.css";

function richText(text: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => part.startsWith("**") && part.endsWith("**")
    ? <strong key={`${part}-${index}`}>{part.slice(2, -2)}</strong>
    : part);
}

function Section({ section }: { section: InformationSection }) {
  return <section className={styles.section}>
    <h2>{richText(section.title)}</h2>
    {section.intro && <p className={styles.sectionIntro}>{richText(section.intro)}</p>}
    {section.paragraphs?.map((paragraph) => <p key={paragraph}>{richText(paragraph)}</p>)}
    {section.items && <div className={styles.qualificationList}>
      {section.items.map((item) => <div className={styles.qualification} key={item.title}>
        <h3>{richText(item.title)}</h3>
        <p>{richText(item.text)}</p>
      </div>)}
    </div>}
    {section.bullets && <ul className={styles.list}>
      {section.bullets.map((bullet) => <li key={bullet}>{richText(bullet)}</li>)}
    </ul>}
    {section.table && <div className={styles.tableWrap}>
      <table className={styles.table}>
        <thead><tr>{section.table.headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead>
        <tbody>{section.table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={`${row[0]}-${index}`}>{cell}</th> : <td key={`${row[0]}-${index}`}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>}
  </section>;
}

export function InformationPageContent({ page }: { page: InformationPageKey }) {
  const { language } = useLanguage();
  const copy = informationPageCopy[page][language];

  return <section className={styles.page} aria-labelledby="information-page-title">
    <p className="eyebrow">{copy.eyebrow}</p>
    <h1 id="information-page-title">{richText(copy.title)}</h1>
    <p className={styles.lead}>{richText(copy.lead)}</p>
    <div className={styles.body}>
      {copy.intro.map((paragraph) => <p key={paragraph}>{richText(paragraph)}</p>)}
      {copy.sections.map((section) => <Section key={section.title} section={section} />)}
    </div>
    <div className={styles.closing}>
      {copy.closing.map((line) => <p key={line}>{richText(line)}</p>)}
    </div>
  </section>;
}
