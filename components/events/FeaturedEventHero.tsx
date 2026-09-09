"use client";
import Image from "next/image";
import { useDragScroll } from "@/components/hooks/useDragScroll";
import { publishedEvents } from "@/data/events";
import { imageSrc } from "@/data/assets";
import styles from "./Events.module.css";

export function FeaturedEventHero() {
  const featured = publishedEvents.filter((item) => item.featured);
  const { ref, isDragging, pointerHandlers } = useDragScroll();
  const move = (direction: number) => ref.current?.scrollBy({ left: direction * ref.current.clientWidth, behavior: "smooth" });

  return <section className={styles.hero} aria-label="Featured events">
    <div ref={ref} className={`${styles.heroRail} ${isDragging ? styles.dragging : ""}`} tabIndex={0} aria-label="Featured events. Swipe or use arrow keys to browse." onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }} {...pointerHandlers}>
      {featured.map((event, index) => <article className={styles.heroSlide} key={event.id}>
        <Image className={styles.heroImage} src={imageSrc(event.desktopImage)} alt={`${event.title} event artwork`} fill priority={index === 0} sizes="100vw" style={{ objectPosition: event.focalPoint }} />
        <div className={styles.heroShade} />
        <div className={styles.heroContent}>
          <h1>
            <span className={styles.heroWelcome}>WELCOME TO THE THAILAND NATIONAL</span>
            <span className={styles.heroAssociation}>AIRSOFT AND PAINTBALL ASSOCIATION</span>
          </h1>
        </div>
      </article>)}
    </div>
  </section>;
}
