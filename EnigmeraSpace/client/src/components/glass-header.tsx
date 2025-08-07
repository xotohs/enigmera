import { useState, useEffect } from "react";
import { Star, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function GlassHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-morphism-strong' : 'glass-morphism'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg glass-morphism flex items-center justify-center box-shadow-depth">
              <Star className="w-6 h-6 text-purple-300" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-shadow-glow">Enigmera</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('artists')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              Artists
            </button>
            <button 
              onClick={() => handleNavClick('playlists')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              Playlists
            </button>
            <button 
              onClick={() => handleNavClick('submit')}
              className="text-white hover:text-purple-300 transition-colors duration-300 font-medium"
            >
              Submit
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden glass-morphism p-2 rounded-lg box-shadow-depth"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className="md:hidden mt-4 glass-morphism-strong rounded-lg p-4 box-shadow-depth">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('home')}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-left"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('artists')}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-left"
              >
                Artists
              </button>
              <button 
                onClick={() => handleNavClick('playlists')}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-left"
              >
                Playlists
              </button>
              <button 
                onClick={() => handleNavClick('submit')}
                className="text-white hover:text-purple-300 transition-colors duration-300 font-medium text-left"
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
