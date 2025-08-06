const artists = [
  {
    id: 1,
    name: "Stellar Nexus",
    genre: "Ambient Techno • Deep Space",
    description: "Crafting ethereal soundscapes that transport listeners across galaxies",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 2,
    name: "Cosmic Echo",
    genre: "Psytrance • Cosmic Bass",
    description: "Blending hypnotic rhythms with interstellar frequency modulations",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  },
  {
    id: 3,
    name: "Void Walker",
    genre: "Dark Synthwave • Space Opera",
    description: "Epic cinematic compositions for interplanetary voyages",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400"
  }
];

export default function ArtistsSection() {
  return (
    <section id="artists" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-glow">
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Our Artists
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Talented creators shaping the future of galactic soundscapes
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div 
              key={artist.id}
              className="glass-morphism rounded-2xl p-6 hover:bg-purple-500/10 transition-all duration-500 box-shadow-card group"
            >
              <img 
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform duration-500"
              />
              <h3 className="text-xl font-semibold mb-2 text-purple-300">{artist.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{artist.genre}</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                {artist.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="glass-morphism-strong px-8 py-4 rounded-xl hover:bg-purple-500/20 transition-all duration-300 box-shadow-depth font-medium">
            View All Artists
          </button>
        </div>
      </div>
    </section>
  );
}
