import React from 'react';
import { PenTool, Target, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-black/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Offer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions to take your channel from idea to viral sensation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Scriptwriting Card */}
          <div className="bg-charcoal/60 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <PenTool className="w-24 h-24 md:w-32 md:h-32 text-cyan" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <PenTool className="w-6 h-6 md:w-7 md:h-7 text-cyan" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">YouTube Scriptwriting</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Engaging, well-researched scripts designed to maximize watch time.
              </p>
              
              <ul className="space-y-3 mb-8">
                <ServiceFeature text="Retention-optimized scripts (8-15 minutes)" />
                <ServiceFeature text="Strategic hook engineering" />
                <ServiceFeature text="Narrative pacing for maximum engagement" />
                <ServiceFeature text="Research-backed content" />
              </ul>
            </div>
          </div>

          {/* Strategy Card */}
          <div className="bg-charcoal/60 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-cyan/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-24 h-24 md:w-32 md:h-32 text-cyan" />
            </div>
            
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-cyan/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 md:w-7 md:h-7 text-cyan" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Content Strategy</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">
                Data-backed guidance to ensure your videos reach the right audience.
              </p>
              
              <ul className="space-y-3 mb-8">
                <ServiceFeature text="SEO title & description optimization" />
                <ServiceFeature text="Thumbnail concept consultation" />
                <ServiceFeature text="Audience analysis & targeting" />
                <ServiceFeature text="Performance analytics review" />
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-charcoal/80 rounded-full px-4 py-2 md:px-6 md:py-3 border border-white/10 backdrop-blur-md">
            <p className="text-gray-300 text-sm md:text-base">
              <span className="text-cyan font-bold">Pricing:</span> Starting at <span className="text-white font-bold">$30-50 per script</span> | <span className="text-white font-semibold">Open to Negotiations</span> | Packages available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceFeature: React.FC<{ text: string }> = ({ text }) => (
  <li className="flex items-start gap-3">
    <CheckCircle2 className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
    <span className="text-gray-300 text-sm">{text}</span>
  </li>
);

export default Services;