import { ArrowLeft, Star } from "lucide-react";
import { useLocation } from "wouter";

export default function SimpleHeader() {
  const [, setLocation] = useLocation();

  const handleBack = () => {
    setLocation("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-morphism-strong">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Back Button */}
          <button 
            onClick={handleBack}
            className="flex items-center space-x-2 text-white hover:text-purple-300 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back</span>
          </button>
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg glass-morphism flex items-center justify-center box-shadow-depth">
              <Star className="w-5 h-5 text-purple-300" fill="currentColor" />
            </div>
            <span className="text-lg font-semibold">Enigmera</span>
          </div>
        </div>
      </nav>
    </header>
  );
}