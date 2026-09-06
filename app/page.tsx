import { FeaturedEventHero } from "@/components/events/FeaturedEventHero";
import { UpcomingEvents } from "@/components/events/UpcomingEvents";
import { NationalStandardsSection } from "@/components/sections/NationalStandardsSection";
import { OurMissionSection } from "@/components/sections/OurMissionSection";
import { PlayWithPurposeBanner } from "@/components/play-with-purpose/PlayWithPurposeBanner";
import { SportTourismSection } from "@/components/sections/SportTourismSection";

export default function Home() {
  return <>
    <FeaturedEventHero />
    <UpcomingEvents />
    <OurMissionSection />
    <NationalStandardsSection />
    <SportTourismSection />
    <PlayWithPurposeBanner />
  </>;
}
