
import React from 'react';
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  DollarSign, 
  MoreVertical,
  ExternalLink
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_EVENTS, CATEGORY_COLORS } from '../constants';

const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 700 },
  { name: 'Jun', value: 1100 },
  { name: 'Jul', value: 1400 },
];

const StatCard: React.FC<{ title: string; value: string; trend: string; icon: any; color: string }> = ({ 
  title, value, trend, icon: Icon, color 
}) => (
  <div className="glass-card p-6 rounded-2xl flex items-center justify-between">
    <div>
      <p className="text-slate-400 text-sm font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
      <p className={`text-xs mt-2 flex items-center gap-1 ${trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
        <TrendingUp className="w-3 h-3" />
        {trend} from last month
      </p>
    </div>
    <div className={`p-4 rounded-xl ${color}`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back, Alex</h1>
          <p className="text-slate-400 mt-1">Here's what's happening with your events today.</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
          <Calendar className="w-4 h-4" />
          <span>October 24, 2024</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Events" 
          value="42" 
          trend="+12%" 
          icon={Calendar} 
          color="bg-indigo-600"
        />
        <StatCard 
          title="Total Attendees" 
          value="15,240" 
          trend="+18%" 
          icon={Users} 
          color="bg-violet-600"
        />
        <StatCard 
          title="Avg. Ticket Sale" 
          value="$124" 
          trend="+4%" 
          icon={DollarSign} 
          color="bg-emerald-600"
        />
        <StatCard 
          title="Growth" 
          value="24%" 
          trend="+2%" 
          icon={TrendingUp} 
          color="bg-amber-600"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white">Attendee Growth</h3>
            <select className="bg-slate-900 border border-white/10 rounded-lg text-sm px-3 py-1.5 text-slate-400 focus:outline-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 12 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#6366f1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Upcoming Events</h3>
          <div className="space-y-5">
            {MOCK_EVENTS.filter(e => e.status !== 'Past').slice(0, 3).map(event => (
              <div key={event.id} className="flex gap-4 group">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800">
                  <img src={event.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-semibold text-white truncate">{event.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">{new Date(event.date).toLocaleDateString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`w-2 h-2 rounded-full ${CATEGORY_COLORS[event.category]}`} />
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{event.category}</span>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-white self-start">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-white text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2">
            View All Events
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
