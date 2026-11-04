export interface CommodityItem {
  id: string;
  name: string;
  category: 'Grains' | 'Herbs & Spices' | 'Oil Seeds' | 'Legumes' | 'Livestock';
  sourcingStates: string[];
  status: 'Active' | 'Pilot Phase';
  description: string;
  qualityStandard: string;
  targetMarket: string;
  iconName: string;
}

export interface GrowthMilestone {
  year: number;
  revenue: string;
  revenueNum: number; // in Billions Naira
  isActual?: boolean;
  focus: string;
  description: string;
  milestones: string[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  title: string;
  experienceYears: number;
  photoUrl?: string;
  summary: string;
  keyCertifications: string[];
  expertiseAreas: string[];
  fullBio: string;
}

export interface PartnerItem {
  name: string;
  category: 'Financial' | 'Government/DFI' | 'Commercial Offtaker' | 'Insurance';
  description: string;
}

export interface SourcingState {
  state: string;
  region: 'North West' | 'North East' | 'North Central' | 'South West';
  commodities: string[];
  dacCount: number;
  farmersEngaged: number;
}
