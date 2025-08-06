import GlassHeader from "@/components/glass-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ArtistsSection from "@/components/artists-section";
import PlaylistsSection from "@/components/playlists-section";
import SubmitSection from "@/components/submit-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <GlassHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <PlaylistsSection />
        <SubmitSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
