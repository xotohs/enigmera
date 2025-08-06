import SimpleHeader from "@/components/simple-header";

export default function Privacy() {
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
                  Privacy Notice
                </span>
              </h1>
              
              <div className="prose prose-invert max-w-none">
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    We only use the information you submit to review your demo or contact you about it. We do not share your data with third parties or store it beyond what's necessary to communicate with you.
                  </p>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Information We Collect</h2>
                    <p>
                      When you submit a demo through our website, we collect:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Your artist name(s)</li>
                      <li>Your email address</li>
                      <li>Optional track description</li>
                      <li>Demo files or links you provide</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">How We Use Your Information</h2>
                    <p>
                      We use your information solely for:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                      <li>Reviewing your submitted demo</li>
                      <li>Contacting you about your submission</li>
                      <li>Responding to your inquiries</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Data Protection</h2>
                    <p>
                      Your personal information is kept secure and is not shared with third parties. We retain your data only as long as necessary to review your submission and communicate with you about it.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold text-purple-300">Contact</h2>
                    <p>
                      If you have any questions about this privacy notice, please contact us at contact@enigmera.com.
                    </p>
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