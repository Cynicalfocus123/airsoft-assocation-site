"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { imageSrc } from "@/data/assets";
import { useCinematicScroll } from "@/components/hooks/useCinematicScroll";
import styles from "./CinematicSection.module.css";

type CinematicSectionProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  description?: string;
  desktopImage?: string;
  mobileImage?: string;
  imageAlt?: string;
  align?: "left" | "right";
  focalPointDesktop?: string;
  focalPointMobile?: string;
  ctaLabel?: string;
  ctaHref?: string;
  overlayStrength?: number;
  parallaxStrength?: number;
  className?: string;
};

type CinematicStyle = CSSProperties & {
  "--focal-desktop": string;
  "--focal-mobile": string;
  "--overlay-strength": number;
  "--overlay-mid": number;
};

export function CinematicSection({
  eyebrow,
  title,
  lead,
  description,
  desktopImage,
  mobileImage,
  imageAlt = "",
  align = "left",
  focalPointDesktop = "center",
  focalPointMobile = "center",
  ctaLabel,
  ctaHref,
  overlayStrength = 0.74,
  parallaxStrength = 4,
  className,
}: CinematicSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  useCinematicScroll(sectionRef, {
    desktopMediaTravel: 56 * parallaxStrength / 4,
    tabletMediaTravel: 64 * parallaxStrength / 4,
    mobileMediaTravel: 48 * parallaxStrength / 4,
  });
  const hasImage = Boolean(desktopImage);
  const style: CinematicStyle = {
    "--focal-desktop": focalPointDesktop,
    "--focal-mobile": focalPointMobile,
    "--overlay-strength": overlayStrength,
    "--overlay-mid": overlayStrength * 0.46,
  };

  return <section ref={sectionRef} className={`${styles.section} ${align === "right" ? styles.right : styles.left} ${hasImage ? styles.withImage : styles.textOnly} ${className ?? ""}`} style={style}>
    {hasImage && <div className={styles.media} aria-hidden={imageAlt === ""}>
      <Image className={styles.desktopImage} src={imageSrc(desktopImage!)} alt={imageAlt} fill sizes="100vw" />
      {mobileImage && <Image className={styles.mobileImage} src={imageSrc(mobileImage)} alt="" fill sizes="100vw" />}
    </div>}
    {hasImage && <div className={styles.overlay} />}
    <div className={styles.content}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2>{title}</h2>
      {lead && <p className={styles.lead}>{lead}</p>}
      {description && <p className={styles.description}>{description}</p>}
      {ctaLabel && ctaHref && <Link className={styles.cta} href={ctaHref}>{ctaLabel} <span>↗</span></Link>}
    </div>
  </section>;
}
