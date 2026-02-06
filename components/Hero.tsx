import React from 'react';
import { ArrowRight, Eye, TrendingUp, Clock, BarChart2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan/10 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase">Open for Freelance Projects</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            YouTube Scriptwriter & <span className="text-cyan">Content Strategist</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            I write retention-optimized scripts that have generated <span className="text-white font-bold">2.4M+ views</span> and helped channels grow through data-driven storytelling.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a 
              href="#portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-cyan hover:bg-cyan-600 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-cyan/25 flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-12">
          <StatItem 
            icon={<Eye className="w-6 h-6 text-cyan" />} 
            value="2.4M+" 
            label="Total Views" 
          />
          <StatItem 
            icon={<TrendingUp className="w-6 h-6 text-cyan" />} 
            value="680K+" 
            label="Single Video" 
          />
          <StatItem 
            icon={<Clock className="w-6 h-6 text-cyan" />} 
            value="3+ Years" 
            label="Experience" 
          />
          <StatItem 
            icon={<BarChart2 className="w-6 h-6 text-cyan" />} 
            value="30-40%" 
            label="Avg Retention" 
          />
        </div>
      </div>
    </section>
  );
};

const StatItem: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
  <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-cyan/30 transition-colors group">
    <div className="mb-2 p-3 rounded-full bg-charcoal group-hover:bg-cyan/10 transition-colors">
      {icon}
    </div>
    <span className="text-2xl md:text-3xl font-bold text-white mb-1">{value}</span>
    <span className="text-sm text-gray-400 uppercase tracking-wider">{label}</span>
  </div>
);

export default Hero;