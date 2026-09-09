import Link from "next/link";
import { calendarEvents } from "@/data/events";
import styles from "./EventsPage.module.css";

export default function EventsPage() {
  return <>
    <section className="page-intro"><p className="eyebrow">NATIONAL CALENDAR</p><h1>UPCOMING<br />EVENTS</h1><p>Association programmes, tournaments and community events. Full event information is published as it becomes available.</p></section>
    <section className={styles.list} aria-label="Upcoming events">
      {calendarEvents.map((event) => event.isTba
        ? <p className={styles.row} key={event.id}>TBA</p>
        : event.externalUrl
          ? <a className={styles.row} href={event.externalUrl} key={event.id}>{event.startDate} — {event.title} ↗</a>
          : <Link className={styles.row} href={`/events/${event.slug}`} key={event.id}>{event.startDate} — {event.title} ↗</Link>)}
    </section>
  </>;
}
