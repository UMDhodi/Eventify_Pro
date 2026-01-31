
import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Loader2, 
  CheckCircle2, 
  Clock, 
  Target, 
  MessageSquare,
  ChevronLeft,
  Layout,
  Palette,
  ClipboardList,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { generateEventPlan } from '../services/geminiService';
import { AIPlanningResponse } from '../types';

const AIPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [result, setResult] = useState<AIPlanningResponse | null>(null);

  const handlePlan = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    const plan = await generateEventPlan(prompt);
    setResult(plan);
    setIsGenerating(false);
  };

  const suggestions = [
    "Futuristic Tech Gala in Tokyo",
    "Bohemian Garden Wedding",
    "80s Retro Neon Anniversary",
    "Sustainable Charity Auction"
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 space-y-16 animate-in fade-in duration-700">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-indigo-600 transition-colors mb-4">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-6xl font-serif font-bold text-slate-900 leading-tight">
              Vision <span className="gradient-text italic text-7xl">Studio</span>
            </h1>
            <p className="text-slate-500 text-xl max-w-xl">
              Collaborate with our proprietary intelligence to architect your event's DNA.
            </p>
          </div>
          <div className="flex gap-4">
             <div className="bg-slate-50 px-6 py-4 rounded-3xl border border-slate-100 flex items-center gap-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-bold text-slate-900">AI Model: Gemini 2.0 Pro</span>
             </div>
          </div>
        </header>

        {/* Studio Control Panel */}
        <section className="bg-slate-950 rounded-[3.5rem] p-8 lg:p-12 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] relative overflow-hidden">
           <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-600/10 blur-[100px]"></div>
           <div className="max-w-4xl mx-auto space-y-10 relative z-10">
              <div className="space-y-4 text-center">
                <h3 className="text-white/60 text-sm font-bold uppercase tracking-[0.3em]">Initialize Vision</h3>
                <div className="bg-white/5 border border-white/10 p-2 rounded-3xl focus-within:border-indigo-500/50 transition-all">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input 
                      type="text" 
                      placeholder="Describe your event's soul and ambition..." 
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      disabled={isGenerating}
                      className="flex-1 bg-transparent px-8 py-6 text-white text-xl focus:outline-none placeholder:text-white/20"
                    />
                    <button 
                      onClick={handlePlan}
                      disabled={isGenerating || !prompt.trim()}
                      className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-white/10 disabled:text-white/20 text-white px-12 py-6 rounded-[2rem] font-bold transition-all flex items-center justify-center gap-3 shadow-2xl shadow-indigo-600/30"
                    >
                      {isGenerating ? (
                        <Loader2 className="w-6 h-6 animate-spin" />
                      ) : (
                        <>
                          Generate Vision
                          <Sparkles className="w-6 h-6" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {suggestions.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => setPrompt(s)}
                    className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/40 text-sm hover:bg-white/10 hover:text-white transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
           </div>
        </section>

        {result && (
          <div className="space-y-12 animate-in slide-in-from-bottom-12 duration-1000">
            {/* Main Vision Board */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Theme & Mood */}
              <div className="lg:col-span-8 space-y-10">
                <div className="bg-slate-50 border border-slate-200 p-12 rounded-[3.5rem] space-y-12">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-slate-100">
                      <Palette className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-serif font-bold text-slate-900">Aesthetic Concept</h3>
                      <p className="text-slate-500 font-medium">Derived from the intelligence core</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-3xl font-serif leading-tight text-slate-800 italic">
                      "{result.theme}"
                    </p>
                    <div className="h-px bg-slate-200"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       <div className="h-16 rounded-2xl bg-slate-900 border border-white/10"></div>
                       <div className="h-16 rounded-2xl bg-indigo-600"></div>
                       <div className="h-16 rounded-2xl bg-amber-400"></div>
                       <div className="h-16 rounded-2xl bg-rose-100"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-slate-100 p-12 rounded-[3.5rem] shadow-2xl shadow-slate-100 space-y-10">
                   <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center border border-slate-100">
                      <Clock className="w-8 h-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-serif font-bold text-slate-900">Operational Timeline</h3>
                      <p className="text-slate-500 font-medium">Minute-by-minute architectural breakdown</p>
                    </div>
                  </div>

                  <div className="grid gap-8">
                    {result.suggestedSchedule.map((item, idx) => (
                      <div key={idx} className="flex gap-8 group">
                        <div className="w-24 shrink-0 text-sm font-black text-indigo-600 bg-indigo-50 px-3 py-2 rounded-xl h-fit text-center tracking-tighter">
                          {item.time}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.activity}</h4>
                          <p className="text-slate-500 text-sm">Automated logistic marker #{idx + 101}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Checklist & Copy */}
              <div className="lg:col-span-4 space-y-10">
                <div className="bg-indigo-600 p-10 rounded-[3.5rem] text-white shadow-2xl shadow-indigo-600/30 space-y-10">
                   <div className="flex items-center gap-4">
                    <ClipboardList className="w-8 h-8 text-white" />
                    <h3 className="text-2xl font-bold">Execution Steps</h3>
                  </div>
                  <ul className="space-y-6">
                    {result.checklist.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-5">
                        <div className="mt-1.5 w-5 h-5 rounded-lg border-2 border-indigo-300 shrink-0 flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white opacity-0 group-hover:opacity-100" />
                        </div>
                        <span className="text-lg font-medium text-indigo-50">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white space-y-8 relative overflow-hidden">
                   <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-3xl"></div>
                   <div className="flex items-center gap-4">
                    <MessageSquare className="w-8 h-8 text-rose-400" />
                    <h3 className="text-2xl font-bold">Concept Story</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed italic">
                    {result.marketingCopy}
                  </p>
                  <button className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    Export Concept PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!result && !isGenerating && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
             <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Layout className="w-6 h-6 text-indigo-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Blueprint Phase</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Describe the scale, location, and core feeling of your event. We handle the architectural complexity.</p>
             </div>
             <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Palette className="w-6 h-6 text-rose-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Aesthetic Synthesis</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Our AI analyzes trending palettes and classical aesthetics to suggest a visual language for your event.</p>
             </div>
             <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <Clock className="w-6 h-6 text-emerald-500" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">Logistic Mapping</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Receive a suggested minute-by-minute timeline ensuring your event flows with professional grace.</p>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPlanner;
