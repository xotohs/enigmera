import GlassHeader from "@/components/glass-header";
import HeroSection from "@/components/hero-section";
import ArtistsSection from "@/components/artists-section";
import SubmitSection from "@/components/submit-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <GlassHeader />
      <main>
        <HeroSection />
        <ArtistsSection />
        <SubmitSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
