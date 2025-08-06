export default function HeroSection() {
  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Galactic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat gradient-mesh"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="absolute inset-0 gradient-radial" />
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-shadow-glow">
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Enigmera
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Exploring the infinite depths of galactic sound
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            A record label dedicated to discovering and nurturing artists who push the boundaries of electronic music into cosmic realms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => handleNavClick('artists')}
              className="glass-morphism-strong px-8 py-4 rounded-xl hover:bg-purple-500/20 transition-all duration-300 box-shadow-depth font-medium"
            >
              Discover Artists
            </button>
            <button 
              onClick={() => handleNavClick('submit')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 box-shadow-depth font-medium"
            >
              Submit Demo
            </button>
          </div>
        </div>
      </div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse" />
        <div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-300 rounded-full opacity-50 animate-pulse" 
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  );
}
