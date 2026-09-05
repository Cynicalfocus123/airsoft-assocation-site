"use client";
import Image from "next/image";
import Link from "next/link";
import { useDragScroll } from "@/components/hooks/useDragScroll";
import { publishedEvents } from "@/data/events";
import { imageSrc } from "@/data/assets";
import styles from "./Events.module.css";

export function UpcomingEvents() {
  const { ref, isDragging, pointerHandlers } = useDragScroll();
  const move = (direction: number) => ref.current?.scrollBy({ left: direction * ref.current.clientWidth * 0.72, behavior: "smooth" });
  return <section className={styles.upcoming}><div className={styles.sectionHead}><p className="eyebrow">CALENDAR</p><h2>UPCOMING<br />EVENTS</h2></div>
    <div className={styles.railStage}><div className={styles.railControls}><button onClick={() => move(-1)} aria-label="Previous events"><span className={styles.swipeLabel}>SWIPE</span> ←</button><button onClick={() => move(1)} aria-label="Next events">→ <span className={styles.swipeLabel}>SWIPE</span></button></div>
      <div ref={ref} className={`${styles.eventRail} ${isDragging ? styles.dragging : ""}`} tabIndex={0} aria-label="Upcoming events" onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }} {...pointerHandlers}>
        {publishedEvents.filter((event)=>!event.featured).map((event) => <Link className={`${styles.eventCard} ${event.id === "force-of-conquest-2027" ? styles.darkEventCard : ""}`} href={`/events/${event.slug}`} key={event.id}><Image src={imageSrc(event.desktopImage)} alt="" fill sizes="(max-width: 700px) 85vw, 46vw" /><span className={styles.cardShade} /><div><p>{event.status}</p><small>{event.startDate}<br />{event.location}</small><h3>{event.shortTitle}</h3>{event.registrationLabel&&<strong className={styles.cardRegistration}>{event.registrationLabel}</strong>}{(event.entryFee||event.attendance)&&<span className={styles.cardFacts}>{event.entryFee&&<>ENTRY FEE: {event.entryFee}<br /></>}{event.attendance&&<>ATTENDANCE: {event.attendance}</>}</span>}<span className={styles.viewEvent}>VIEW EVENT ↗</span></div></Link>)}
      </div>
    </div></section>;
}
