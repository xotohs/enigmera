import { useState } from "react";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SubmitSection() {
  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    artist2: "",
    artist3: "",
    description: "",
    demoLink: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.artistName || !formData.email || !formData.description || !formData.demoLink) {
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
      artist2: "",
      artist3: "",
      description: "",
      demoLink: ""
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
      <div className="absolute inset-0 cosmic-stars" />
      
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
                    Main Artist *
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
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">
                    Collaborating Artist 2
                  </label>
                  <input 
                    type="text"
                    name="artist2"
                    value={formData.artist2}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Optional collaborator"
                  />
                </div>
                <div>
                  <label className="block text-purple-300 text-sm font-medium mb-2">
                    Collaborating Artist 3
                  </label>
                  <input 
                    type="text"
                    name="artist3"
                    value={formData.artist3}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="Optional collaborator"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Demo Link (SoundCloud/Google Drive) *
                </label>
                <input 
                  type="url"
                  name="demoLink"
                  value={formData.demoLink}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                  placeholder="https://soundcloud.com/your-track or https://drive.google.com/..."
                  required
                />
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
