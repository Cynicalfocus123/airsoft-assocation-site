import { FeaturedEventHero } from "@/components/events/FeaturedEventHero";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { ScrollPanel } from "@/components/sections/ScrollPanel";

export default function Home() {
  return <>
    <FeaturedEventHero />
    <UpcomingEvents />
    <section className="mission-brief"><p className="eyebrow">OUR MISSION</p><h2>BUILDING THE FUTURE<br />OF AIRSOFT &amp; PAINTBALL<br />IN THAILAND.</h2><p className="mission-copy">A national association focused on safe play, fair competition and a connected community that can represent Thailand with confidence.</p></section>
    <ScrollPanel title={<>ESTABLISH<br />NATIONAL STANDARDS</>} eyebrow="WHAT WE DO" copy="Shared standards give players, teams, fields and organizers a clear foundation for safe, consistent play." image="/images/thai-airsoft-event-hero.png" href="/what-we-do/national-standards" />
    <ScrollPanel title={<>SPORT<br />TOURISM</>} eyebrow="THAILAND, IN PLAY" copy="Supporting events that welcome international players and strengthen local communities across Thailand." image="/images/association-stamp.png" href="/sport-tourism" reverse />
  </>;
}
