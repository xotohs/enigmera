import { useState } from "react";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SubmitSection() {
  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    genre: "",
    description: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.artistName || !formData.email || !formData.genre || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to the backend
    toast({
      title: "Demo Submitted!",
      description: "Your cosmic creation has been launched into space. We'll be in touch soon!",
    });

    // Reset form
    setFormData({
      artistName: "",
      email: "",
      genre: "",
      description: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="submit" className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-glow">
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                Submit Your Demo
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to join our galactic collective? Share your cosmic creations with us
            </p>
          </div>
          
          <div className="glass-morphism-strong rounded-2xl p-8 md:p-12 box-shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">
                    Artist Name *
                  </label>
                  <input 
                    type="text"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Your cosmic alias"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Genre *
                </label>
                <select 
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select your cosmic genre</option>
                  <option value="ambient">Ambient Techno</option>
                  <option value="psytrance">Psytrance</option>
                  <option value="synthwave">Synthwave</option>
                  <option value="space-bass">Space Bass</option>
                  <option value="cosmic-disco">Cosmic Disco</option>
                  <option value="other">Other Galactic Sounds</option>
                </select>
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Track Description *
                </label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Tell us about your cosmic journey..."
                  required
                />
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Demo File
                </label>
                <div className="glass-morphism rounded-xl p-8 border-2 border-dashed border-purple-500/30 text-center hover:border-purple-400/50 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                  <p className="text-gray-300 mb-2">Drop your demo here or click to browse</p>
                  <p className="text-gray-500 text-sm">MP3, WAV, FLAC up to 100MB</p>
                </div>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-4 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 box-shadow-depth font-medium text-lg"
              >
                Launch Your Demo Into Space
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
