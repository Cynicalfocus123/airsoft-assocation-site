import Link from "next/link";
import { publishedEvents } from "@/data/events";
export default function EventsPage(){return <><section className="page-intro"><p className="eyebrow">NATIONAL CALENDAR</p><h1>UPCOMING<br />EVENTS</h1><p>Association programmes, tournaments and community events. Full event information is published as it becomes available.</p></section><section className="content-list">{publishedEvents.map((event)=><Link key={event.id} href={`/events/${event.slug}`}>{event.startDate} — {event.title} ↗</Link>)}</section></>}
