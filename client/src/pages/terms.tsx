import SimpleHeader from "@/components/simple-header";

export default function Terms() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SimpleHeader />
      <main className="pt-24 pb-12">
        <div className="absolute inset-0 cosmic-stars" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism-strong rounded-2xl p-8 md:p-12 box-shadow-card">
              <h1 className="text-4xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Terms & Conditions
                </span>
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Enigmera Records is a creative project currently in development. All site content is for informational purposes. Submissions do not guarantee a response or offer. By submitting a demo, you agree that you own the rights to the music and have permission to share it.
                  </p>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">About Enigmera Records</h2>
                    <p>
                      Enigmera Records is an independent record label project in its early development phase. The website and all associated content are provided for informational purposes only.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Demo Submissions</h2>
                    <p>
                      By submitting a demo to Enigmera Records, you acknowledge and agree that:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>You own all rights to the submitted music</li>
                      <li>You have full permission to share and distribute the music</li>
                      <li>Submission does not guarantee a response from our team</li>
                      <li>Submission does not guarantee any offer or contract</li>
                      <li>We reserve the right to decline submissions without explanation</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Intellectual Property</h2>
                    <p>
                      You retain all rights to your submitted music. By submitting, you grant us permission to review your work for potential collaboration opportunities only.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Limitation of Liability</h2>
                    <p>
                      As a developing creative project, Enigmera Records provides this platform "as is" without warranties. We are not liable for any issues arising from your use of this website or submission process.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Contact</h2>
                    <p>For questions about these terms, contact us at netluctpro@gmail.com.</p>
                  </div>
                  
                  <div className="text-sm text-gray-400 pt-6 border-t border-purple-500/20">
                    <p>Last updated: 7th August 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}