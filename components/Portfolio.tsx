import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText, BarChart, Trophy, Brain, Clapperboard, MonitorPlay } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'scripts' | 'cases'>('analytics');

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Portfolio & Work Samples</h2>
          <p className="text-gray-400">
            Showcasing the impact of data-driven storytelling.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10 md:mb-12 overflow-x-auto">
          <div className="bg-white/5 p-1 rounded-xl inline-flex whitespace-nowrap">
            <TabButton 
              active={activeTab === 'analytics'} 
              onClick={() => setActiveTab('analytics')} 
              icon={<BarChart className="w-4 h-4" />}
              label="Analytics" 
            />
            <TabButton 
              active={activeTab === 'scripts'} 
              onClick={() => setActiveTab('scripts')} 
              icon={<FileText className="w-4 h-4" />}
              label="Script Samples" 
            />
            <TabButton 
              active={activeTab === 'cases'} 
              onClick={() => setActiveTab('cases')} 
              icon={<Trophy className="w-4 h-4" />}
              label="Case Studies" 
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="min-h-[400px]">
          {activeTab === 'analytics' && <AnalyticsContent />}
          {activeTab === 'scripts' && <ScriptsContent />}
          {activeTab === 'cases' && <CaseStudiesContent />}
        </div>
      </div>
    </section>
  );
};

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
      active 
        ? 'bg-cyan text-white shadow-lg shadow-cyan/20' 
        : 'text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    {label}
  </button>
);

// --- Content Components ---

const AnalyticsContent = () => {
  // Data approximating the "drop then rise" curve from the screenshot
  const data = [
    { time: '0:00', retention: 100 },
    { time: '0:15', retention: 65 },
    { time: '0:30', retention: 52 },
    { time: '1:00', retention: 48 },
    { time: '2:00', retention: 46 },
    { time: '3:00', retention: 47 },
    { time: '4:22', retention: 49 },
    { time: '5:00', retention: 50 },
    { time: '6:00', retention: 52 },
    { time: '7:00', retention: 55 },
    { time: '8:00', retention: 60 },
    { time: '8:55', retention: 62 },
  ];

  return (
    <div className="bg-charcoal border border-white/10 rounded-2xl p-6 md:p-8">
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white">Video Performance</h3>
          <p className="text-gray-400 text-sm">Typical retention structure</p>
        </div>
        <div className="flex gap-4">
          <div className="text-right">
            <p className="text-2xl font-bold text-cyan">4:22</p>
            <p className="text-xs text-gray-400 uppercase">Avg View Duration</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-400">49.0%</p>
            <p className="text-xs text-gray-400 uppercase">Avg % Viewed</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-purple-400">7.4%</p>
            <p className="text-xs text-gray-400 uppercase">CTR</p>
          </div>
        </div>
      </div>

      <div className="h-[300px] w-full bg-white/5 rounded-xl p-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRetention" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
            <XAxis dataKey="time" stroke="#666" tick={{fill: '#888', fontSize: 12}} />
            <YAxis stroke="#666" tick={{fill: '#888', fontSize: 12}} unit="%" domain={[0, 100]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#18181B', borderColor: '#333', color: '#fff' }}
              itemStyle={{ color: '#06B6D4' }}
            />
            <Area 
              type="monotone" 
              dataKey="retention" 
              stroke="#06B6D4" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRetention)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-center text-gray-500 italic text-sm">
        *Graph recreated from actual analytics data to show retention pattern.
      </p>
    </div>
  );
};

const ScriptsContent = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <ScriptCard 
      icon={<Clapperboard className="w-5 h-5 text-cyan" />}
      title="Movie Recap" 
      genre="Thriller / Sci-Fi"
      excerpt={`[STORY 1 - THE HOUSEKEEPER]
In a rich neighbourhood. A girl named Millie drives into a massive estate. She's here for a housekeeping interview. Nina, the woman who lives here, answers the door. They walk through the property together. Nina explains the position requires mill to live-in, full responsibilities, and a decent pay. Millie nods along. Near the end of the tour, Nina mentions something personal. She's pregnant-- it's her Early stages. She hasn't told her husband Andrew yet, so this stays between them. Nina shows Millie the attic room where she'd be staying. Before Millie leaves, Nina hands her cash for gas-- telling her She'll call with a decision soon.

Driving away, Millie knows the truth. Everything on her resume was fabricated. A background check would expose her instantly. So instead....

[STORY 2 - THE METEOR]
The story begins as a giant meteor crashes down on earth. Catastrophic explosions, raining fireballs and devastating Impacts-- Destroyed more than 75% of the world. 5 years since the impact and Humanity's near extinction, constant meteors in orbit kept causing destruction. Radiation levels made survival impossible-- humanity had no choice but to hide. Deep inside underground bunkers.`}
    />
    <ScriptCard 
      icon={<MonitorPlay className="w-5 h-5 text-purple-400" />}
      title="Anime Analysis" 
      genre="Jujutsu Kaisen"
      excerpt={`[HOOK]
VO: Everyone thinks Sukuna is just a generic villain who wants to destroy the world. They're wrong. Ryomen Sukuna is the perfect embodiment of "Enlightened Selfishness". While Gojo Satoru claims to be the honored one, he still cares about the weak. Sukuna doesn't.

[VISUAL: Clip of Sukuna in Shibuya looking down at Jogo]

VO: Look at his domain expansion, Malevolent Shrine. Unlike other domains that trap you inside a barrier, Sukuna's is open. It paints the air itself. This mirrors his philosophy: he isn't bound by anything, not even the laws of jujutsu sorcery.

VO: And this is why Yuji Itadori is his perfect foil. Yuji calls himself a "cog". He accepts a role given to him. Sukuna rejects all roles. In chapter 214, when Yuji walks through the dismantle slashes, it isn't just physical durability. It's the moment the cog finally jams the machine.`}
    />
    <ScriptCard 
      icon={<Brain className="w-5 h-5 text-green-400" />}
      title="Psychology Self-Help" 
      genre="Personal Development"
      excerpt={`[HOOK]
VO: You're scrolling through social media. You see someone your age who built what you're still planning. Talking about how they made their first millions. But your idea is still stuck an idea. And something tightens in your chest.

VO: That feeling has a name. Your brain just ran a threat assessment. And it decided you're losing.

[EXPLANATION]
VO: Not losing a game. Losing position. Status. Evolutionary fitness.

VO: Your amygdala doesn't care that you're building in silence. It only sees: Someone else has the outcome. You don't. And it marks that as danger.

VO: But here's what your brain isn't telling you...`}
    />
  </div>
);

const ScriptCard: React.FC<{ title: string; genre: string; excerpt: string; icon: React.ReactNode }> = ({ title, genre, excerpt, icon }) => (
  <div className="bg-charcoal border border-white/10 rounded-xl p-5 md:p-6 hover:border-cyan/30 transition-colors group flex flex-col h-full">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center gap-2 mb-1">
          {icon}
          <h4 className="text-lg font-bold text-white group-hover:text-cyan transition-colors">{title}</h4>
        </div>
        <span className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded inline-block">{genre}</span>
      </div>
    </div>
    <div className="bg-black/40 rounded-lg p-4 font-mono text-sm text-gray-300 leading-relaxed h-64 overflow-y-auto custom-scrollbar border border-white/5 flex-grow">
      <pre className="whitespace-pre-wrap font-sans text-xs md:text-sm">{excerpt}</pre>
    </div>
  </div>
);

const CaseStudiesContent = () => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    <CaseStudyCard 
      project="Movie Recap Growth"
      challenge="Low retention (35%) causing flatline views."
      solution="Implemented 'Open Loop' hook strategy and faster emotional pacing."
      result="20% Increase in Retention"
    />
    <CaseStudyCard 
      project="Anime Commentary"
      challenge="Click-through rate was high, but drop-off at 1:00 was 50%."
      solution="Restructured the intro to deliver on the thumbnail promise immediately."
      result="Doubled Avg. View Duration"
    />
    <CaseStudyCard 
      project="Psychology Self-Help"
      challenge="Complex topic needed to be accessible for a general audience."
      solution="Used storytelling metaphors to simplify technical concepts."
      result="Top 10 Video on Topic"
    />
  </div>
);

const CaseStudyCard: React.FC<{ project: string; challenge: string; solution: string; result: string }> = ({ project, challenge, solution, result }) => (
  <div className="bg-charcoal border border-white/10 rounded-xl p-5 md:p-6 flex flex-col h-full hover:border-cyan/30 transition-colors">
    <div className="mb-4">
      <h4 className="text-xl font-bold text-white mb-2">{project}</h4>
      <div className="h-1 w-12 bg-cyan rounded-full"></div>
    </div>
    
    <div className="space-y-4 flex-grow">
      <div>
        <p className="text-xs text-gray-500 uppercase font-bold">Challenge</p>
        <p className="text-sm text-gray-300">{challenge}</p>
      </div>
      <div>
        <p className="text-xs text-gray-500 uppercase font-bold">Solution</p>
        <p className="text-sm text-gray-300">{solution}</p>
      </div>
    </div>

    <div className="mt-6 pt-4 border-t border-white/10">
      <p className="text-xs text-cyan uppercase font-bold mb-1">Key Result</p>
      <div className="flex justify-between items-end">
        <p className="text-sm font-medium text-white">{result}</p>
      </div>
    </div>
  </div>
);

export default Portfolio;