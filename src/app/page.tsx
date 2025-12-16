import CoreProblem from "@/components/ui/CoreProblem";
import Cta from "@/components/ui/Cta";
import DifferenceSection from "@/components/ui/DifferenceSection";
import Faq from "@/components/ui/Faq";
import Hero from "@/components/ui/hero/Hero";
import Pricing from "@/components/ui/Pricing";
import Sleep30 from "@/components/ui/Sleep30";
import Testimonials from "@/components/ui/Testimonials";
import TheGuy from "@/components/ui/TheGuy";
import Who from "@/components/ui/Who";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreProblem />
      <Who />
      <Sleep30 />
      <DifferenceSection />
      {/* <Tracking /> */}
      <Testimonials />
      <TheGuy />
      {/* <Ultimate4Week /> */}
      <Pricing />
      <Faq />
      <Cta />
      <section className="py-8 bg-theme">
        <div className="container">
          <p className="text-center text-body">
            © 2025 Loose Leash. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
