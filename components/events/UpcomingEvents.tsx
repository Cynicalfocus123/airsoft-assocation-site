"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { publishedEvents } from "@/data/events";
import styles from "./Events.module.css";

export function UpcomingEvents() { const rail=useRef<HTMLDivElement>(null); const move=(direction:number)=>rail.current?.scrollBy({left:direction*rail.current.clientWidth*.72,behavior:"smooth"}); return <section className={styles.upcoming}><div className={styles.sectionHead}><p className="eyebrow">CALENDAR</p><h2>UPCOMING<br />EVENTS</h2><div className={styles.railControls}><button onClick={()=>move(-1)} aria-label="Previous event">←</button><button onClick={()=>move(1)} aria-label="Next event">→</button></div></div><div ref={rail} className={styles.eventRail} tabIndex={0} aria-label="Upcoming events">{publishedEvents.map((event)=><Link className={styles.eventCard} href={`/events/${event.slug}`} key={event.id}><Image src={event.desktopImage} alt="" fill sizes="(max-width: 700px) 85vw, 46vw" /><span className={styles.cardShade}/><div><p>{event.status}</p><small>{event.startDate}<br />{event.location}</small><h3>{event.shortTitle}</h3><span className={styles.viewEvent}>VIEW EVENT ↗</span></div></Link>)}</div></section>; }
