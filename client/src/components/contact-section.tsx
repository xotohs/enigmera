import { Mail, Zap } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 cosmic-stars" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-shadow-glow">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Get in touch</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">Have questions or want to connect? Drop us a message.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="glass-morphism rounded-xl p-6 hover:bg-purple-500/10 transition-all duration-300 box-shadow-depth">
              <Mail className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2 text-purple-300">Email</h3>
              <p className="text-gray-400 text-sm">contact@enigmera.com</p>
            </div>
            
            <div className="glass-morphism rounded-xl p-6 hover:bg-purple-500/10 transition-all duration-300 box-shadow-depth">
              <Zap className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2 text-purple-300">Instagram</h3>
              <p className="text-gray-400 text-sm">@enigmerarecords</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
