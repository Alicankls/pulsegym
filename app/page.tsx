import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ClubIntro } from "@/components/sections/ClubIntro";
import { Programs } from "@/components/sections/Programs";
import { WhyPulse } from "@/components/sections/WhyPulse";
import { Facility } from "@/components/sections/Facility";
import { Coaches } from "@/components/sections/Coaches";
import { ClassPreview } from "@/components/sections/ClassPreview";
import { Memberships } from "@/components/sections/Memberships";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Location } from "@/components/sections/Location";
import { FaqSection } from "@/components/sections/FaqSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="icerik">
        <Hero />
        <Stats />
        <ClubIntro />
        <Programs />
        <WhyPulse />
        <Facility />
        <Coaches />
        <ClassPreview />
        <Memberships />
        <Testimonials />
        <FinalCTA />
        <Location />
        <FaqSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
