"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { publishedEvents } from "@/data/events";
import styles from "./Events.module.css";

export function UpcomingEvents() {
  const rail = useRef<HTMLDivElement>(null);
  const gesture = useRef({ active: false, moved: false, startX: 0, startScroll: 0 });
  const move = (direction: number) => rail.current?.scrollBy({ left: direction * rail.current.clientWidth * 0.72, behavior: "smooth" });
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } };
  return <section className={styles.upcoming}><div className={styles.sectionHead}><p className="eyebrow">CALENDAR</p><h2>UPCOMING<br />EVENTS</h2><div className={styles.railControls}><button onClick={() => move(-1)} aria-label="Previous event">←</button><button onClick={() => move(1)} aria-label="Next event">→</button></div></div>
    <div ref={rail} className={styles.eventRail} tabIndex={0} aria-label="Upcoming events. Swipe, drag, or use the left and right arrow keys." onKeyDown={onKeyDown}
      onPointerDown={(event) => { const current = rail.current; if (!current) return; gesture.current = { active: true, moved: false, startX: event.clientX, startScroll: current.scrollLeft }; event.currentTarget.setPointerCapture(event.pointerId); }}
      onPointerMove={(event) => { const current = rail.current; if (!current || !gesture.current.active) return; const distance = event.clientX - gesture.current.startX; if (Math.abs(distance) > 4) gesture.current.moved = true; current.scrollLeft = gesture.current.startScroll - distance; }}
      onPointerUp={(event) => { gesture.current.active = false; event.currentTarget.releasePointerCapture(event.pointerId); }} onPointerCancel={() => { gesture.current.active = false; }}>
      {publishedEvents.map((event) => <Link className={styles.eventCard} href={`/events/${event.slug}`} key={event.id} onClick={(click) => { if (gesture.current.moved) { click.preventDefault(); gesture.current.moved = false; } }}><Image src={event.desktopImage} alt="" fill sizes="(max-width: 700px) 85vw, 46vw" /><span className={styles.cardShade} /><div><p>{event.status}</p><small>{event.startDate}<br />{event.location}</small><h3>{event.shortTitle}</h3><span className={styles.viewEvent}>VIEW EVENT ↗</span></div></Link>)}
    </div></section>;
}
