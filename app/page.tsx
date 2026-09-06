import { FeaturedEventHero } from "@/components/events/FeaturedEventHero";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { CinematicSection } from "@/components/sections/CinematicSection";
import { NationalStandardsSection } from "@/components/sections/NationalStandardsSection";
import { OurMissionSection } from "@/components/sections/OurMissionSection";

export default function Home() {
  return <>
    <FeaturedEventHero />
    <UpcomingEvents />
    <OurMissionSection />
    <NationalStandardsSection />
    <CinematicSection title={<>SPORT<br />TOURISM</>} description="Supporting events that welcome international players and strengthen local communities across Thailand." desktopImage="/images/photo-1730233024781-27672ab1674e.avif" mobileImage="/images/photo-1730233024781-27672ab1674e.avif" imageAlt="" align="right" focalPointDesktop="center" focalPointMobile="center" ctaLabel="EXPLORE" ctaHref="/sport-tourism" overlayStrength={0.82} />
  </>;
}
