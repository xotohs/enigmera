import { Star } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-purple-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-6 md:mb-0">
            <div className="w-8 h-8 rounded-lg glass-morphism flex items-center justify-center">
              <Star className="w-5 h-5 text-purple-300" fill="currentColor" />
            </div>
            <span className="text-lg font-semibold">Enigmera Records</span>
          </div>
          
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="/privacy" className="hover:text-purple-300 transition-colors">Privacy Notice</a>
            <a href="/terms" className="hover:text-purple-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-8 border-t border-purple-500/10">
          <p className="text-gray-500 text-sm mb-4">
            © 2025 Enigmera Records. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 text-xs text-gray-400">
            <a href="/privacy" className="hover:text-purple-300 transition-colors">Privacy Notice</a>
            <a href="/terms" className="hover:text-purple-300 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
