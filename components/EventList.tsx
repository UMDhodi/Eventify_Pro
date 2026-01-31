
import React, { useState } from 'react';
import { Filter, Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react';
import { MOCK_EVENTS, CATEGORY_COLORS } from '../constants';
import { Event } from '../types';

const EventList: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Conference', 'Workshop', 'Meetup', 'Social', 'Corporate'];

  const filteredEvents = MOCK_EVENTS.filter(event => {
    const matchesFilter = filter === 'All' || event.category === filter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Events</h1>
          <p className="text-slate-400 mt-1">Manage and monitor all your events in one place.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-slate-900 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 w-full md:w-64"
            />
          </div>
          <button className="p-2.5 bg-slate-900 border border-white/10 rounded-xl text-slate-400 hover:text-white transition-all">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`
              whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all
              ${filter === cat 
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                : 'bg-white/5 text-slate-400 hover:bg-white/10'
              }
            `}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="glass-card rounded-2xl overflow-hidden group flex flex-col border border-white/5 hover:border-indigo-500/30 transition-all duration-300">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4">
                <span className={`${CATEGORY_COLORS[event.category]} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest`}>
                  {event.category}
                </span>
              </div>
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="text-white text-xs font-semibold">${event.price === 0 ? 'Free' : event.price}</span>
              </div>
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                {event.title}
              </h3>
              
              <div className="space-y-3 mt-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span className="truncate">{event.location}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-slate-500" />
                  <span className="text-xs font-medium text-slate-400">{event.attendees} / {event.maxCapacity} joined</span>
                </div>
                <button className="p-2 bg-indigo-600/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-lg transition-all">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <div className="py-20 text-center">
          <Calendar className="w-16 h-16 text-slate-800 mx-auto mb-4" />
          <p className="text-slate-500 font-medium">No events found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default EventList;
