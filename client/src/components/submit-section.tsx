import { useState } from "react";
import { Upload, Plus, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SubmitSection() {
  const [formData, setFormData] = useState({
    artistName: "",
    email: "",
    additionalArtists: [] as string[],
    description: "",
    demoLink: "",
    demoFile: null as File | null,
    submissionType: "link" as "link" | "file"
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.artistName || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (formData.submissionType === "link" && !formData.demoLink) {
      toast({
        title: "Missing Demo Link",
        description: "Please provide a SoundCloud or Google Drive link",
        variant: "destructive",
      });
      return;
    }

    if (formData.submissionType === "file" && !formData.demoFile) {
      toast({
        title: "Missing Demo File",
        description: "Please upload a demo file",
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
      additionalArtists: [],
      description: "",
      demoLink: "",
      demoFile: null,
      submissionType: "link"
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({
        ...formData,
        demoFile: file
      });
    }
  };

  const addArtist = () => {
    if (formData.additionalArtists.length < 2) {
      setFormData({
        ...formData,
        additionalArtists: [...formData.additionalArtists, ""]
      });
    }
  };

  const updateAdditionalArtist = (index: number, value: string) => {
    const updated = [...formData.additionalArtists];
    updated[index] = value;
    setFormData({
      ...formData,
      additionalArtists: updated
    });
  };

  const removeArtist = (index: number) => {
    setFormData({
      ...formData,
      additionalArtists: formData.additionalArtists.filter((_, i) => i !== index)
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
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Want to join our roster? Send us your music.</p>
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
              
              {/* Additional Artists */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-purple-300 text-sm font-medium">
                    Additional Artists
                  </label>
                  {formData.additionalArtists.length < 2 && (
                    <button 
                      type="button"
                      onClick={addArtist}
                      className="flex items-center space-x-1 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span className="text-sm">Add Artist</span>
                    </button>
                  )}
                </div>
                {formData.additionalArtists.map((artist, index) => (
                  <div key={index} className="flex items-center space-x-2 mb-2">
                    <input 
                      type="text"
                      value={artist}
                      onChange={(e) => updateAdditionalArtist(index, e.target.value)}
                      className="flex-1 bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Collaborating artist"
                    />
                    <button 
                      type="button"
                      onClick={() => removeArtist(index)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
              
              {/* Demo Submission Type */}
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-4">
                  Demo Submission *
                </label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <label className="flex items-center space-x-3 glass-morphism rounded-xl p-4 cursor-pointer hover:bg-purple-500/10 transition-colors">
                    <input
                      type="radio"
                      name="submissionType"
                      value="link"
                      checked={formData.submissionType === "link"}
                      onChange={(e) => setFormData({ ...formData, submissionType: e.target.value as "link" | "file" })}
                      className="text-purple-400"
                    />
                    <div>
                      <div className="text-white font-medium">Link</div>
                      <div className="text-gray-400 text-xs">SoundCloud/Google Drive (Preferred)</div>
                    </div>
                  </label>
                  <label className="flex items-center space-x-3 glass-morphism rounded-xl p-4 cursor-pointer hover:bg-purple-500/10 transition-colors">
                    <input
                      type="radio"
                      name="submissionType"
                      value="file"
                      checked={formData.submissionType === "file"}
                      onChange={(e) => setFormData({ ...formData, submissionType: e.target.value as "link" | "file" })}
                      className="text-purple-400"
                    />
                    <div>
                      <div className="text-white font-medium">File Upload</div>
                      <div className="text-gray-400 text-xs">MP3, WAV, FLAC</div>
                    </div>
                  </label>
                </div>

                {formData.submissionType === "link" ? (
                  <input 
                    type="url"
                    name="demoLink"
                    value={formData.demoLink}
                    onChange={handleInputChange}
                    className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="https://soundcloud.com/your-track or https://drive.google.com/..."
                    required
                  />
                ) : (
                  <div className="glass-morphism rounded-xl p-8 border-2 border-dashed border-purple-500/30 text-center hover:border-purple-400/50 transition-colors cursor-pointer">
                    <input 
                      type="file"
                      onChange={handleFileChange}
                      accept=".mp3,.wav,.flac"
                      className="hidden"
                      id="demoFile"
                    />
                    <label htmlFor="demoFile" className="cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                      <p className="text-gray-300 mb-2">
                        {formData.demoFile ? formData.demoFile.name : "Drop your demo here or click to browse"}
                      </p>
                      <p className="text-gray-500 text-sm">MP3, WAV, FLAC up to 100MB</p>
                    </label>
                  </div>
                )}
              </div>
              
              <div>
                <label className="block text-purple-300 text-sm font-medium mb-2">
                  Track Description
                </label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-black/30 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-400 focus:outline-none transition-colors h-32 resize-none"
                  placeholder="Tell us about your cosmic journey... (optional)"
                />
              </div>
              

              
              <div className="text-center mb-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  <strong>Privacy Notice:</strong> We only use the information you submit to review your demo or contact you about it. We do not share your data with third parties or store it beyond what's necessary to communicate with you.
                </p>
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
