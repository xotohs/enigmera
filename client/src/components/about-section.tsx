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
                className="rounded-2xl box-shadow-card w-full h-96 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(30, 58, 138, 0.2) 100%)" }}
              >
                <div className="text-8xl font-bold text-white/10">E</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
