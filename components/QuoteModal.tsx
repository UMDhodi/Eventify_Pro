
import React, { useState } from 'react';
import { X, Send, Sparkles, Loader2, CheckCircle, Calendar, User, Mail, Briefcase, DollarSign } from 'lucide-react';
import { refineDescription } from '../services/geminiService';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isRefining, setIsRefining] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: 'Wedding',
    budget: '',
    date: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleRefine = async () => {
    if (!formData.description) return;
    setIsRefining(true);
    const refined = await refineDescription(formData.description);
    setFormData({ ...formData, description: refined });
    setIsRefining(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3); // Show success message
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-slate-50 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6 text-slate-400" />
        </button>

        <div className="flex flex-col h-full max-h-[90vh]">
          {step < 3 && (
            <div className="p-10 pb-0">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-2">Request an Estimate</h2>
              <p className="text-slate-500">Tell us about your vision, and we'll craft the perfect quote.</p>
              
              <div className="flex gap-4 mt-8">
                {[1, 2].map((i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-indigo-600' : 'bg-slate-100'}`}
                  />
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-10 custom-scrollbar">
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all"
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        required
                        type="email"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all"
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Event Type</label>
                    <div className="relative">
                      <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      <select 
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all appearance-none cursor-pointer"
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      >
                        <option>Wedding</option>
                        <option>Corporate Gala</option>
                        <option>Concert</option>
                        <option>Birthday Party</option>
                        <option>Business Meeting</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Desired Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="date"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <button 
                    type="button"
                    onClick={() => setStep(2)}
                    className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-indigo-600 transition-all"
                  >
                    Next Details
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Estimated Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all"
                      placeholder="e.g. $10,000 - $25,000"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Vision & Requirements</label>
                    <button 
                      type="button"
                      onClick={handleRefine}
                      disabled={isRefining || !formData.description}
                      className="text-[10px] font-bold text-indigo-600 flex items-center gap-1.5 hover:text-indigo-700 disabled:text-slate-300 transition-colors uppercase tracking-widest"
                    >
                      {isRefining ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                      Refine with AI
                    </button>
                  </div>
                  <textarea 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 h-40 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/30 transition-all resize-none"
                    placeholder="Describe your event's theme, guest count, and any specific needs..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="flex justify-between items-center pt-4">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-slate-400 font-bold px-6 py-4 hover:text-slate-900 transition-all"
                  >
                    Back
                  </button>
                  <button 
                    type="submit"
                    className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/20"
                  >
                    Submit Quote
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="py-20 text-center space-y-8 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-emerald-50 rounded-[2rem] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle className="w-12 h-12 text-emerald-500" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-serif font-bold text-slate-900">Vision Received</h3>
                  <p className="text-slate-500 max-w-sm mx-auto">
                    Thank you, <span className="text-indigo-600 font-bold">{formData.name}</span>. Our executive planners will review your request and contact you within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={onClose}
                  className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;

// Simple utility component for ArrowRight to avoid missing imports in local scope
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);
