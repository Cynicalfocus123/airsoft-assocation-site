import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { imageSrc } from "@/data/assets";
import styles from "./CinematicSection.module.css";

type CinematicSectionProps = {
  eyebrow?: string;
  title: ReactNode;
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
  "--media-start": string;
  "--media-end": string;
};

export function CinematicSection({
  eyebrow,
  title,
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
  const hasImage = Boolean(desktopImage);
  const style: CinematicStyle = {
    "--focal-desktop": focalPointDesktop,
    "--focal-mobile": focalPointMobile,
    "--overlay-strength": overlayStrength,
    "--overlay-mid": overlayStrength * 0.46,
    "--media-start": `-${parallaxStrength}%`,
    "--media-end": `${parallaxStrength}%`,
  };

  return <section className={`${styles.section} ${align === "right" ? styles.right : styles.left} ${hasImage ? styles.withImage : styles.textOnly} ${className ?? ""}`} style={style}>
    {hasImage && <div className={styles.media} aria-hidden={imageAlt === ""}>
      <Image className={styles.desktopImage} src={imageSrc(desktopImage!)} alt={imageAlt} fill sizes="100vw" />
      {mobileImage && <Image className={styles.mobileImage} src={imageSrc(mobileImage)} alt="" fill sizes="100vw" />}
    </div>}
    {hasImage && <div className={styles.overlay} />}
    <div className={styles.content}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
      {ctaLabel && ctaHref && <Link className={styles.cta} href={ctaHref}>{ctaLabel} <span>↗</span></Link>}
    </div>
  </section>;
}
