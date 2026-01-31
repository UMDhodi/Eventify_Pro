
import React, { useState } from 'react';
import { SERVICES, TESTIMONIALS, PORTFOLIO } from '../constants';
import { ArrowRight, Sparkles, Star, ChevronRight, Calendar, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState('Wedding');

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-white -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">
              <Star className="w-3 h-3 fill-indigo-600" />
              Award-Winning Event Design
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-slate-900 leading-[1.05]">
              Pure <span className="gradient-text italic">Artistry.</span> <br />
              Infinite <span className="relative">Memories.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg leading-relaxed">
              We don't just host events; we architect emotional landscapes. Experience the pinnacle of event management.
            </p>

            {/* Quick Start Mini-Form */}
            <div className="bg-white p-2 rounded-2xl shadow-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-2 max-w-xl group focus-within:ring-4 focus-within:ring-indigo-500/5 transition-all">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 border-r border-slate-100">
                <Calendar className="w-5 h-5 text-slate-400" />
                <select 
                  className="bg-transparent text-slate-900 font-medium focus:outline-none w-full cursor-pointer"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option>Wedding</option>
                  <option>Business Meeting</option>
                  <option>Concert</option>
                  <option>Birthday</option>
                  <option>Corporate Gala</option>
                </select>
              </div>
              <button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-600 transition-all">
                Plan Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?u=user${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="" />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Joined by <span className="text-slate-900 font-bold">500+</span> Elite Clients
              </p>
            </div>
          </div>

          <div className="relative hero-3d-container hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="hero-card w-full aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover"
                alt="Elegant Event"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-3xl border border-white/30">
                <div className="flex justify-between items-end">
                   <div>
                      <p className="text-white font-serif text-2xl font-bold mb-1">Opera House Gala</p>
                      <p className="text-white/70 text-sm flex items-center gap-2">
                        <MapPin className="w-3 h-3" /> Sydney, Australia
                      </p>
                   </div>
                   <div className="bg-indigo-600 px-4 py-2 rounded-xl text-white text-xs font-bold">SOLD OUT</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50 animate-float">
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Users className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-slate-900 font-bold">12k+</p>
                    <p className="text-slate-500 text-xs">Attendees Managed</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div className="space-y-4 max-w-xl">
              <h2 className="text-5xl font-serif font-bold text-slate-900">Elite Services</h2>
              <p className="text-slate-500 text-lg">From personal milestones to global brand launches, we provide the architectural precision your vision deserves.</p>
            </div>
            <Link to="/ai-vision" className="group flex items-center gap-2 text-indigo-600 font-bold border-b-2 border-indigo-100 pb-1 hover:border-indigo-600 transition-all">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group bg-white p-5 rounded-[3rem] border border-slate-100 hover:border-indigo-500/20 hover:shadow-[0_40px_80px_-15px_rgba(99,102,241,0.1)] transition-all duration-500">
                <div className="relative h-72 w-full rounded-[2.5rem] overflow-hidden mb-8">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt={service.title} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-6 left-6 p-4 glass rounded-2xl border border-white/40 shadow-xl">
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Premium Service</span>
                    <button className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-5xl font-serif font-bold text-slate-900">Featured Portfolio</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">A glance into the worlds we've created across the globe.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PORTFOLIO.map((item) => (
              <div key={item.id} className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl">
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt={item.title} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity group-hover:opacity-100"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-10 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <p className="text-indigo-400 text-sm font-bold uppercase tracking-widest mb-2">{item.category}</p>
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{item.title}</h3>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {item.location}</span>
                    <span className="w-1 h-1 bg-white/40 rounded-full"></span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Vision CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto relative group">
           <div className="absolute inset-0 bg-indigo-600 rounded-[4rem] -rotate-1 scale-[1.02] -z-10 opacity-10 group-hover:rotate-0 transition-transform duration-700"></div>
           <div className="bg-slate-900 rounded-[3.5rem] p-12 lg:p-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent -z-0"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
                <div className="space-y-8">
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/20">
                    <Sparkles className="w-4 h-4" />
                    Proprietary AI Vision
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.1]">
                    The Future of <br /> Event Discovery.
                  </h2>
                  <p className="text-slate-400 text-xl leading-relaxed">
                    Instantly generate high-fidelity concepts, aesthetic palettes, and detailed schedules using our custom-tuned Gemini 2.0 interface.
                  </p>
                  <Link to="/ai-vision" className="inline-flex bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-900/50 items-center gap-3">
                    Launch AI Studio
                    <Sparkles className="w-5 h-5" />
                  </Link>
                </div>

                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="h-48 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between animate-float">
                        <div className="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center">
                          <Star className="text-indigo-400 w-5 h-5" />
                        </div>
                        <p className="text-white font-bold">Aesthetic Scoring</p>
                      </div>
                      <div className="h-64 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" />
                      </div>
                    </div>
                    <div className="space-y-4 pt-12">
                      <div className="h-64 rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" alt="" />
                      </div>
                      <div className="h-48 rounded-3xl bg-indigo-600 p-6 flex flex-col justify-between shadow-2xl shadow-indigo-600/40">
                         <Sparkles className="text-white w-8 h-8" />
                         <p className="text-white font-bold">Theme Generator v2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-50 p-12 lg:p-20 rounded-[4rem] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 text-indigo-100 italic font-serif text-[15rem] leading-none select-none opacity-20">"</div>
             <div className="relative z-10 text-center space-y-12">
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 leading-relaxed italic">
                  "Eventify redefined our brand's physical presence. They didn't just plan a meeting; they curated an atmosphere of excellence that translated directly to our bottom line."
                </h2>
                <div className="flex flex-col items-center gap-4">
                  <img src={TESTIMONIALS[1].avatar} className="w-20 h-20 rounded-full border-4 border-white shadow-xl" alt="" />
                  <div>
                    <p className="font-bold text-slate-900 text-lg">{TESTIMONIALS[1].name}</p>
                    <p className="text-indigo-600 font-medium uppercase tracking-widest text-xs">{TESTIMONIALS[1].role}</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
