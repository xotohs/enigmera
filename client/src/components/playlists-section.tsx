import { Play, Headphones, Star } from "lucide-react";

const playlists = [
  {
    id: 1,
    name: "Best Phonks of 2025",
    description: "The hardest phonk tracks defining this year",
    platform: "Spotify",
    tracks: 42,
    duration: "2h 35m",
    cover: "linear-gradient(135deg, rgba(30, 215, 96, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)"
  },
  {
    id: 2,
    name: "What we're listening to",
    description: "Our current favorites and fresh discoveries",
    platform: "Deezer",
    tracks: 28,
    duration: "1h 52m",
    cover: "linear-gradient(135deg, rgba(255, 95, 95, 0.3) 0%, rgba(30, 58, 138, 0.3) 100%)"
  }
];

export default function PlaylistsSection() {
  return (
    <section id="playlists" className="py-20 relative">
      <div className="absolute inset-0 cosmic-stars" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-glow">
            <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Cosmic Playlists
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Curated collections of galactic sounds for every cosmic journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id}
              className="glass-morphism rounded-2xl p-6 hover:bg-purple-500/5 transition-all duration-500 box-shadow-card group cursor-pointer"
            >
              <div 
                className="w-full h-48 rounded-xl mb-4 relative overflow-hidden"
                style={{ background: playlist.cover }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="glass-morphism-strong rounded-full p-4">
                    <Play className="w-8 h-8 text-purple-300" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="glass-morphism rounded-lg p-2">
                    <Headphones className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-purple-300">{playlist.name}</h3>
              <p className="text-gray-400 text-sm mb-2 font-medium">{playlist.platform}</p>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {playlist.description}
              </p>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>{playlist.tracks} tracks</span>
                </span>
                <span>{playlist.duration}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="glass-morphism-strong px-8 py-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 box-shadow-depth font-medium">
            View All Playlists
          </button>
        </div>
      </div>
    </section>
  );
}