export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 cosmic-stars" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-shadow-glow">
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  About Enigmera
                </span>
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Enigmera Records is an independent label focused on curating and amplifying unique, genre-defying sounds. While we are just starting out, our mission is clear: empower emerging talent and push sonic boundaries.
                </p>
                <p>
                  We're building a home for artists who dare to sound different.
                </p>
              </div>
              

            </div>
            
            <div className="relative">
              <div 
                className="rounded-2xl box-shadow-card w-full h-96 flex items-center justify-center relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(30, 58, 138, 0.2) 100%)" }}
              >
                {/* Black hole / Planet visual */}
                <div className="relative">
                  {/* Main planet/black hole */}
                  <div 
                    className="w-32 h-32 rounded-full relative"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, rgba(147, 51, 234, 0.8) 0%, rgba(30, 58, 138, 0.6) 40%, rgba(0, 0, 0, 0.9) 70%)",
                      boxShadow: "0 0 40px rgba(147, 51, 234, 0.3), inset 0 0 40px rgba(0, 0, 0, 0.8)"
                    }}
                  >
                    {/* Accretion disk / rings */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-40"
                      style={{
                        background: "conic-gradient(from 0deg, transparent, rgba(147, 51, 234, 0.3), transparent, rgba(30, 58, 138, 0.3), transparent)",
                        transform: "scale(1.8)",
                        animation: "spin 20s linear infinite"
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full opacity-20"
                      style={{
                        background: "conic-gradient(from 180deg, transparent, rgba(30, 58, 138, 0.4), transparent, rgba(147, 51, 234, 0.2), transparent)",
                        transform: "scale(2.2)",
                        animation: "spin 30s linear infinite reverse"
                      }}
                    />
                  </div>
                  
                  {/* Gravitational lensing effect */}
                  <div 
                    className="absolute inset-0 rounded-full opacity-10"
                    style={{
                      background: "radial-gradient(circle, transparent 60%, rgba(255, 255, 255, 0.1) 80%, transparent 100%)",
                      transform: "scale(3)"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
