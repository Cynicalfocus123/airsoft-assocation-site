import { FeaturedEventHero } from "@/components/events/FeaturedEventHero";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { CinematicSection } from "@/components/sections/CinematicSection";

export default function Home() {
  return <>
    <FeaturedEventHero />
    <UpcomingEvents />
    <CinematicSection eyebrow="OUR MISSION" title={<>BUILDING THE FUTURE<br />OF AIRSOFT &amp; PAINTBALL<br />IN THAILAND.</>} description="A national association focused on safe play, fair competition and a connected community that can represent Thailand with confidence." ctaLabel="OUR MISSION" ctaHref="/our-mission" parallaxStrength={0} />
    <CinematicSection eyebrow="WHAT WE DO" title={<>ESTABLISH<br />NATIONAL STANDARDS</>} description="Shared standards give players, teams, fields and organizers a clear foundation for safe, consistent play." desktopImage="/images/thai-airsoft-event-hero.png" mobileImage="/images/thai-airsoft-event-hero.png" imageAlt="Airsoft players at an outdoor field" focalPointDesktop="68% 50%" focalPointMobile="62% 38%" ctaLabel="EXPLORE" ctaHref="/what-we-do/national-standards" />
    <CinematicSection eyebrow="THAILAND, IN PLAY" title={<>SPORT<br />TOURISM</>} description="Supporting events that welcome international players and strengthen local communities across Thailand." desktopImage="/images/association-stamp.png" mobileImage="/images/association-stamp.png" imageAlt="Thailand Airsoft Association mark" align="right" focalPointDesktop="center" focalPointMobile="center" ctaLabel="EXPLORE" ctaHref="/sport-tourism" overlayStrength={0.82} />
  </>;
}
