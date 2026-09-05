import { FeaturedEventHero } from "@/components/events/FeaturedEventHero";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { CinematicSection } from "@/components/sections/CinematicSection";

export default function Home() {
  return <>
    <FeaturedEventHero />
    <UpcomingEvents />
    <CinematicSection title="OUR MISSION" lead="Building the future of airsoft & paintball in Thailand." description="A national association focused on safe play, fair competition and a connected community that can represent Thailand with confidence." desktopImage="/images/our-mission-airsoft.avif" mobileImage="/images/our-mission-airsoft.avif" imageAlt="Airsoft players working together outdoors" ctaLabel="OUR MISSION" ctaHref="/our-mission" />
    <CinematicSection eyebrow="WHAT WE DO" title={<>ESTABLISH<br />NATIONAL STANDARDS</>} description="Shared standards give players, teams, fields and organizers a clear foundation for safe, consistent play." desktopImage="/images/national-standards-training.jpg" mobileImage="/images/national-standards-training.jpg" imageAlt="Airsoft players training indoors" focalPointDesktop="68% 50%" focalPointMobile="62% 38%" ctaLabel="EXPLORE" ctaHref="/what-we-do/national-standards" />
    <CinematicSection title={<>SPORT<br />TOURISM</>} description="Supporting events that welcome international players and strengthen local communities across Thailand." desktopImage="/images/photo-1730233024781-27672ab1674e.avif" mobileImage="/images/photo-1730233024781-27672ab1674e.avif" imageAlt="" align="right" focalPointDesktop="center" focalPointMobile="center" ctaLabel="EXPLORE" ctaHref="/sport-tourism" overlayStrength={0.82} />
  </>;
}
