import React from 'react';
import { Cpu, PenTool, Plus } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Tools</h2>
          <p className="text-gray-400">My technical and creative arsenal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Core Skills */}
          <SkillCategory 
            title="Core Skills" 
            icon={<Cpu className="w-5 h-5 md:w-6 md:h-6 text-cyan" />}
            skills={[
              "YouTube Scriptwriting",
              "Content Strategy",
              "SEO Optimization",
              "Audience Retention",
              "Hook Engineering",
              "Research & Fact-Checking"
            ]} 
          />

          {/* Tools */}
          <SkillCategory 
            title="Tools & Platforms" 
            icon={<PenTool className="w-5 h-5 md:w-6 md:h-6 text-cyan" />}
            skills={[
              "YouTube Studio Analytics",
              "Google Docs",
              "Obsidian",
              "AI Tools (Gemini, Claude)",
              "CapCut (Video Editing)",
              "Excel/Google Sheets"
            ]} 
          />

          {/* Bonus */}
          <SkillCategory 
            title="Bonus Skills" 
            icon={<Plus className="w-5 h-5 md:w-6 md:h-6 text-cyan" />}
            skills={[
              "Video Editing (CapCut, Lightroom)",
              "Thumbnail Design (Fresco, Canva)",
              "Basic Data Analysis (SQL, Power BI)"
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

const SkillCategory: React.FC<{ title: string; icon: React.ReactNode; skills: string[] }> = ({ title, icon, skills }) => (
  <div className="bg-charcoal border border-white/5 p-6 md:p-8 rounded-xl hover:bg-white/5 transition-colors duration-300">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-cyan/10 rounded-lg">
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
    </div>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
          <div className="w-1.5 h-1.5 bg-cyan rounded-full shrink-0"></div>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Skills;