import React from 'react';
import { CheckCircle } from 'lucide-react';

const Results: React.FC = () => {
  return (
    <section id="results" className="py-16 md:py-20 bg-black/20 backdrop-blur-sm relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
         <div className="absolute top-1/4 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-charcoal/60 rounded-2xl p-6 md:p-12 border border-white/10 backdrop-blur-md">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-gray-400">
              Numbers speak louder than words. Here is what I've achieved for my clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
            <ResultItem text="2.4M+ cumulative views generated" />
            <ResultItem text="680K+ views on single video" />
            <ResultItem text="20% improvement in average watch time" />
            <ResultItem text="3-7% CTR (above industry benchmarks)" />
            <ResultItem text="200+ scripts written" />
            <ResultItem text="Consistent channel growth optimization" />
          </div>

          <div className="mt-10 p-4 bg-cyan/10 border border-cyan/20 rounded-lg text-center">
            <p className="text-cyan text-sm md:text-base font-medium">
              Client testimonials coming soon as NDA projects conclude.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResultItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0">
      <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-cyan" />
    </div>
    <span className="text-base md:text-lg text-gray-200 font-medium">{text}</span>
  </div>
);

export default Results;