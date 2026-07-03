import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import {
  Benefits,
  Contact,
  CTA,
  FAQ,
  Footer,
  Plans,
  Problems,
  Process,
  Services,
  Stats,
  Testimonials
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Benefits />
        <Process />
        <Stats />
        <Testimonials />
        <Plans />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
