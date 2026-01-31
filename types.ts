
export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  category: 'Conference' | 'Workshop' | 'Meetup' | 'Social' | 'Corporate';
  attendees: number;
  maxCapacity: number;
  image: string;
  description: string;
  price: number;
  status: 'Published' | 'Draft' | 'Past';
}

export interface AIPlanningResponse {
  theme: string;
  suggestedSchedule: { time: string; activity: string }[];
  marketingCopy: string;
  checklist: string[];
}

export interface User {
  name: string;
  role: string;
  avatar: string;
}
