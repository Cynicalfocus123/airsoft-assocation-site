"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { publishedEvents } from "@/data/events";
import { imageSrc } from "@/data/assets";
import styles from "./Events.module.css";

export function FeaturedEventHero() { const featured=publishedEvents.filter((item)=>item.featured); const [index,setIndex]=useState(0); const event=featured[index]; const change=(amount:number)=>setIndex((index)=>(index+amount+featured.length)%featured.length);
  return <section className={styles.hero} aria-label="Featured event"><Image key={event.id} className={styles.heroImage} src={imageSrc(event.desktopImage)} alt={`${event.title} event artwork`} fill priority sizes="100vw" style={{objectPosition:event.focalPoint}} /><div className={styles.heroShade}/><div className={styles.heroContent}><p className={styles.status}>{event.status}</p><h1>{event.title}</h1><p className={styles.metadata}>{event.startDate} — {event.location}</p><div className={styles.heroActions}>{event.registrationUrl ? <a className={styles.primaryAction} href={event.registrationUrl}>{event.registrationLabel??"REGISTER"}</a> : <span className={styles.comingSoon}>REGISTRATION COMING SOON</span>}<Link className={styles.secondaryAction} href={`/events/${event.slug}`}>DETAILS <span>↗</span></Link></div></div><div className={styles.heroControls}><button onClick={()=>change(-1)} aria-label="Previous featured event">←</button><span>0{index+1} / 0{featured.length}</span><button onClick={()=>change(1)} aria-label="Next featured event">→</button></div></section>; }
