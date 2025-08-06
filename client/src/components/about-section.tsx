export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
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
                  Founded in the depths of cosmic inspiration, Enigmera Records emerged as a sanctuary for artists who dare to explore the infinite possibilities of electronic music.
                </p>
                <p>
                  We believe that music is the universal language that connects all beings across the galaxy. Our mission is to discover, nurture, and amplify the voices of artists who push the boundaries of sound into uncharted territories.
                </p>
                <p>
                  From ambient spacewalks to high-energy cosmic raves, Enigmera represents the full spectrum of galactic soundscapes. We're not just a record label – we're curators of the future's soundtrack.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div className="glass-morphism rounded-xl p-6 text-center box-shadow-depth">
                  <div className="text-3xl font-bold text-purple-300 mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Artists Signed</div>
                </div>
                <div className="glass-morphism rounded-xl p-6 text-center box-shadow-depth">
                  <div className="text-3xl font-bold text-blue-300 mb-2">200M+</div>
                  <div className="text-gray-400 text-sm">Streams</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Futuristic music studio with cosmic lighting"
                className="rounded-2xl box-shadow-card w-full"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 glass-morphism-strong rounded-xl p-4 box-shadow-depth">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">5</div>
                  <div className="text-gray-400 text-xs">Years</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 glass-morphism-strong rounded-xl p-4 box-shadow-depth">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300">15</div>
                  <div className="text-gray-400 text-xs">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
