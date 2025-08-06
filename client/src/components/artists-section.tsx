export default function ArtistsSection() {
  return (
    <section id="artists" className="py-20 relative">
      <div className="absolute inset-0 cosmic-stars" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-glow">
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Our Artists
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Building our roster of genre-defying artists
          </p>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <div className="glass-morphism rounded-2xl p-12 box-shadow-card">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're currently building our first roster of artists. Want to be among the first?
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('submit');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="bg-gradient-to-r from-purple-300 to-blue-300 text-black px-8 py-4 rounded-xl hover:from-purple-200 hover:to-blue-200 transition-all duration-300 box-shadow-depth font-medium"
            >
              Submit Your Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
