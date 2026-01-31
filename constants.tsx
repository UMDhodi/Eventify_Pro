
import { Sparkles, Music, Heart, Briefcase, PartyPopper, Cake, Camera, Utensils, Mic2 } from 'lucide-react';
import { Event } from './types';

export const CATEGORY_COLORS: Record<string, string> = {
  Conference: 'bg-indigo-500',
  Workshop: 'bg-emerald-500',
  Meetup: 'bg-amber-500',
  Social: 'bg-rose-500',
  Corporate: 'bg-slate-500',
};

export const SERVICES = [
  {
    title: 'Weddings',
    description: 'Bespoke ceremonies crafted with timeless elegance and precision.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    icon: Heart,
    color: 'text-rose-400'
  },
  {
    title: 'Concerts & Festivals',
    description: 'High-energy production management for world-class musical experiences.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
    icon: Music,
    color: 'text-indigo-400'
  },
  {
    title: 'Business Meetings',
    description: 'Productive environments for networking and strategic planning.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    icon: Briefcase,
    color: 'text-slate-600'
  },
  {
    title: 'Birthday Parties',
    description: 'Themed celebrations tailored to individual styles and milestones.',
    image: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=800',
    icon: Cake,
    color: 'text-amber-400'
  },
  {
    title: 'Gala & Fundraisers',
    description: 'Impactful charity events that capture attention and build brand legacy.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    icon: Sparkles,
    color: 'text-cyan-400'
  },
  {
    title: 'Private Dining',
    description: 'Intimate gatherings with curated menus and exclusive atmospheres.',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
    icon: Utensils,
    color: 'text-emerald-400'
  }
];

export const PORTFOLIO = [
  {
    id: 'p1',
    title: 'The Azure Summit',
    category: 'Corporate',
    year: '2024',
    location: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p2',
    title: 'Met Gala After-Party',
    category: 'Celebrity',
    year: '2023',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'p3',
    title: 'Starlight Wedding',
    category: 'Wedding',
    year: '2024',
    location: 'Amalfi Coast, Italy',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Eleanor Vance',
    role: 'Vogue Magazine',
    content: 'The level of detail Eventify brings to the table is simply unmatched. Our annual gala was flawless.',
    avatar: 'https://i.pravatar.cc/150?u=eleanor'
  },
  {
    name: 'Marcus Thorne',
    role: 'CEO, TechNova',
    content: 'They transformed a standard product launch into a cultural moment. Exceptional vision.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Global Tech Summit 2024',
    date: '2024-11-15',
    location: 'San Francisco, CA',
    category: 'Conference',
    attendees: 450,
    maxCapacity: 500,
    image: 'https://images.unsplash.com/photo-1540575861501-7ad060e396a6?auto=format&fit=crop&q=80&w=800',
    description: 'The premier event for technology innovators.',
    price: 299,
    status: 'Published'
  }
];
