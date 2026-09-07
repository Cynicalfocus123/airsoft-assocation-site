"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { legalDocuments } from "@/data/legal";
import styles from "./LegalPageContent.module.css";

type LegalPage = "privacy-policy" | "terms-of-use";
type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

function parseContent(content: string): ContentBlock[] {
  const blocks: ContentBlock[] = [];
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;
    if (/^\d+\.\s/.test(line)) {
      blocks.push({ type: "heading", text: line });
      continue;
    }
    if (line.startsWith("•")) {
      const item = line.replace(/^•\s*/, "");
      const last = blocks.at(-1);
      if (last?.type === "list") last.items.push(item);
      else blocks.push({ type: "list", items: [item] });
      continue;
    }
    blocks.push({ type: "paragraph", text: line });
  }
  return blocks;
}

export function LegalPageContent({ page }: { page: LegalPage }) {
  const { language } = useLanguage();
  const copy = legalDocuments[page][language];
  const blocks = parseContent(copy.content);

  return <article className={styles.page} aria-labelledby="legal-title">
    <p className="eyebrow">{language === "en" ? "INFORMATION" : "ข้อมูล"}</p>
    <h1 id="legal-title">{copy.title}</h1>
    <p className={styles.updated}>{copy.updated}</p>
    <div className={styles.content}>
      {blocks.map((block, index) => {
        if (block.type === "heading") return <h2 key={`${block.text}-${index}`}>{block.text}</h2>;
        if (block.type === "list") return <ul key={`list-${index}`}>{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
        return <p key={`${block.text}-${index}`}>{block.text}</p>;
      })}
    </div>
  </article>;
}
