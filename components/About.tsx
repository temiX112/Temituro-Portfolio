import React from 'react';
import { Film, MonitorPlay, BookOpen, User, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            {/* Abstract visual for faceless creator */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-charcoal to-black border border-white/10 p-6 md:p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-cyan/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="relative z-10 text-center">
                <User className="w-20 h-20 md:w-24 md:h-24 text-cyan mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white">David Temituro</h3>
                <p className="text-cyan">Scriptwriter</p>
              </div>
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -right-6 bg-charcoal p-4 rounded-xl border border-white/10 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Currently Available</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Hi, I'm David Temituro
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                I'm a YouTube scriptwriter specializing in entertainment content. I've spent the last 3+ years mastering the art of writing scripts that hook viewers in the first 10 seconds and keep them engaged until the end.
              </p>
              <p>
                My work has generated over <span className="text-cyan font-semibold">2.4 million views</span> across multiple channels. I understand YouTube's algorithm, audience psychology, and retention optimization.
              </p>
              <p className="border-l-4 border-cyan pl-4 italic text-white/90">
                "Every script I write is strategically designed to perform—not just be well-written."
              </p>
            </div>

            <div className="mt-8 md:mt-10">
              <h3 className="text-lg font-semibold text-white mb-4">Specializations</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <SpecialtyItem icon={<Film className="w-5 h-5" />} text="Movie recaps & reviews" />
                <SpecialtyItem icon={<MonitorPlay className="w-5 h-5" />} text="Anime commentary" />
                <SpecialtyItem icon={<Brain className="w-5 h-5" />} text="Psychology self-help" />
                <SpecialtyItem icon={<BookOpen className="w-5 h-5" />} text="Educational/Documentary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SpecialtyItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-cyan/50 transition-colors">
    <div className="text-cyan">{icon}</div>
    <span className="text-sm font-medium text-gray-200">{text}</span>
  </div>
);

export default About;