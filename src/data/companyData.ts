import { CommodityItem, GrowthMilestone, LeadershipMember, PartnerItem, SourcingState } from '../types';

export const COMPANY_INFO = {
  name: 'NFD AGRO LIMITED',
  tagline: 'Architecting Nigeria\'s New Agricultural Economy',
  secondaryTagline: 'Growing Nigeria\'s Agricultural Future',
  rcNumber: 'RC No. 1390052',
  incorporatedYear: 2020,
  operationalYear: 2022,
  parentCompany: 'New Frontier Developments Limited',
  modelName: 'Integrated Agri-Management Platform (IAMP)',
  address: 'No 14, Winnipeg Close, Off Panama Street / Minister\'s Hills, Maitama, Abuja, Nigeria',
  phones: ['0810 103 682', '+234(0)810 310 3682'],
  email: 'info@nfdagro.com.ng',
  documents: [
    { title: 'Corporate Profile (November 2025)', path: '/assets/aistudio/Final_NFD_AGRO_CP_November_fb2d8ecf.pdf' },
    { title: 'Investment Memo (2026)', path: '/assets/aistudio/NFD_agro_investment_memo-FINAL__1__4e6aee9a.pdf' }
  ]
};

export const KPI_METRICS = [
  { label: '2025 Revenue (Actual)', value: '₦4.2B', description: 'Proven commercial model scaling' },
  { label: '2028 Revenue Target', value: '₦100B+', description: 'National market leadership' },
  { label: 'Target Investor ROI', value: '20 - 27%', description: 'Sustainable high double-digit return' },
  { label: 'Active Sourcing States', value: '10+ States', description: 'Across Nigeria\'s key agro-belts' },
  { label: 'Smallholder Farmers', value: '5,000+', description: 'Targeted out-grower network' },
  { label: 'Post-Harvest Loss Target', value: '< 5%', description: 'vs ~40% industry average' }
];

export const COMMODITIES: CommodityItem[] = [
  {
    id: 'soya-beans',
    name: 'Soya Beans',
    category: 'Oil Seeds',
    sourcingStates: ['Kwara', 'Taraba', 'Benue'],
    status: 'Active',
    description: 'High-protein grain sourced for animal feed production and vegetable oil processors across West Africa.',
    qualityStandard: 'Moisture < 10%, Foreign Matter < 1.5%',
    targetMarket: 'Domestic feed mills & export markets',
    iconName: 'Wheat'
  },
  {
    id: 'cashew-nuts',
    name: 'Cashew Nuts',
    category: 'Oil Seeds',
    sourcingStates: ['Kogi', 'Ogbomosho (Oyo)'],
    status: 'Active',
    description: 'Raw cashew nuts aggregated at peak harvest with high kernel outturn ratio (KOR).',
    qualityStandard: 'KOR 48-52 lbs, Moisture < 8%',
    targetMarket: 'International kernel processors & exporters',
    iconName: 'Nut'
  },
  {
    id: 'paddy-rice',
    name: 'Paddy Rice',
    category: 'Grains',
    sourcingStates: ['Taraba', 'Kebbi', 'Niger', 'Kano'],
    status: 'Active',
    description: 'Premium long-grain paddy cultivated under irrigated and rain-fed out-grower programs.',
    qualityStandard: 'Milling Yield > 68%, Purity > 98%',
    targetMarket: 'Major domestic rice millers',
    iconName: 'Wheat'
  },
  {
    id: 'maize',
    name: 'Maize (Yellow & White)',
    category: 'Grains',
    sourcingStates: ['Kaduna', 'Taraba', 'Kano', 'Niger'],
    status: 'Active',
    description: 'Aflatoxin-controlled corn supply for commercial food processors and poultry feed manufacturing.',
    qualityStandard: 'Aflatoxin < 10ppb, Moisture < 12%',
    targetMarket: 'FMCG food conglomerates & poultry producers',
    iconName: 'Corn'
  },
  {
    id: 'shea-nuts',
    name: 'Shea Nuts',
    category: 'Oil Seeds',
    sourcingStates: ['Niger State'],
    status: 'Active',
    description: 'Ethically harvested wild shea nuts empowering women cooperatives in Niger State.',
    qualityStandard: 'Free Fatty Acids < 6%, Moisture < 7%',
    targetMarket: 'Cosmetic & confectionery lipid refineries',
    iconName: 'Leaf'
  },
  {
    id: 'sorghum',
    name: 'Sorghum',
    category: 'Grains',
    sourcingStates: ['Oyo State'],
    status: 'Active',
    description: 'Industrial grade red and white sorghum for beverage maltings and animal feed formulation.',
    qualityStandard: 'Germination > 95%, Moisture < 11%',
    targetMarket: 'Brewing & beverage industries',
    iconName: 'Sprout'
  },
  {
    id: 'sesame-seeds',
    name: 'Sesame Seeds',
    category: 'Oil Seeds',
    sourcingStates: ['Taraba', 'Niger', 'Kano', 'Katsina'],
    status: 'Active',
    description: 'High oil content white natural sesame seeds tailored for export specifications.',
    qualityStandard: 'Purity > 99%, Oil Content > 52%',
    targetMarket: 'Middle East & East Asia food markets',
    iconName: 'Sparkles'
  },
  {
    id: 'tejaswini-chilli',
    name: 'Tejaswini Hybrid Chilli',
    category: 'Herbs & Spices',
    sourcingStates: ['FCT (Abuja)'],
    status: 'Pilot Phase',
    description: 'FIRST commercial scale Tejaswini hybrid chilli pepper initiative in Nigeria replacing costly spice imports.',
    qualityStandard: 'High SHU pungency, Uniform color & moisture controlled',
    targetMarket: 'Domestic spice processors & food manufacturers',
    iconName: 'Flame'
  },
  {
    id: 'livestock',
    name: 'Livestock & Feed',
    category: 'Livestock',
    sourcingStates: ['Kaduna', 'Niger', 'Kano'],
    status: 'Active',
    description: 'Formulated high-conversion animal feed blends and integrated meat processing supply chain.',
    qualityStandard: 'ISO Compliant protein ratio & strict bio-security',
    targetMarket: 'Commercial livestock farms & retail meat distributors',
    iconName: 'Beef'
  }
];

export const SOURCING_STATES: SourcingState[] = [
  { state: 'Taraba', region: 'North East', commodities: ['Soya Beans', 'Paddy Rice', 'Maize', 'Sesame Seeds'], dacCount: 4, farmersEngaged: 1200 },
  { state: 'Niger', region: 'North Central', commodities: ['Paddy Rice', 'Maize', 'Shea Nuts', 'Sesame Seeds'], dacCount: 5, farmersEngaged: 1400 },
  { state: 'Kano', region: 'North West', commodities: ['Paddy Rice', 'Maize', 'Sesame Seeds'], dacCount: 3, farmersEngaged: 950 },
  { state: 'Kwara', region: 'North Central', commodities: ['Soya Beans'], dacCount: 2, farmersEngaged: 450 },
  { state: 'Benue', region: 'North Central', commodities: ['Soya Beans'], dacCount: 2, farmersEngaged: 500 },
  { state: 'Kogi', region: 'North Central', commodities: ['Cashew Nuts'], dacCount: 2, farmersEngaged: 380 },
  { state: 'Oyo (Ogbomosho)', region: 'South West', commodities: ['Cashew Nuts', 'Sorghum'], dacCount: 2, farmersEngaged: 320 },
  { state: 'Kebbi', region: 'North West', commodities: ['Paddy Rice'], dacCount: 2, farmersEngaged: 600 },
  { state: 'Kaduna', region: 'North West', commodities: ['Maize', 'Livestock Feed'], dacCount: 3, farmersEngaged: 700 },
  { state: 'Katsina', region: 'North West', commodities: ['Sesame Seeds'], dacCount: 2, farmersEngaged: 400 },
  { state: 'FCT (Abuja)', region: 'North Central', commodities: ['Tejaswini Chilli Pepper (Commercial Pilot)'], dacCount: 1, farmersEngaged: 150 }
];

export const GROWTH_TRAJECTORY: GrowthMilestone[] = [
  {
    year: 2024,
    revenue: '₦1.2B',
    revenueNum: 1.2,
    isActual: true,
    focus: 'Foundation & Pilot Operations',
    description: 'Established operational base, validated aggregation channels, and deployed initial out-grower networks.',
    milestones: ['Established core DAC infrastructure', 'Aggregated first 1,500 MT', 'Onboarded initial 800 smallholders']
  },
  {
    year: 2025,
    revenue: '₦4.2B',
    revenueNum: 4.2,
    isActual: true,
    focus: 'Model Validation & Scaling',
    description: 'Expanded Silo-Bank system across 8+ states, achieved 250% revenue growth, launched Tejaswini Chilli pilot.',
    milestones: ['Expanded to 10+ states', 'Launched Tejaswini Chilli 1-ha pilot', 'Initiated Digital Warehouse Receipt framework']
  },
  {
    year: 2026,
    revenue: '₦31B',
    revenueNum: 31,
    focus: 'Scale Aggregation & Processing (Scale-Up Year)',
    description: 'Scale aggregation operations, launch commercial processing partnerships, and expand out-grower network to 5,000+ farmers.',
    milestones: ['Expand Tejaswini Chilli to 20 hectares', 'Deploy full Digital Silo-Bank platform', 'Secure ₦15B+ fixed offtake contracts']
  },
  {
    year: 2027,
    revenue: '₦50-55B',
    revenueNum: 52.5,
    focus: 'Full Processing & Export Entry',
    description: 'Commence direct international commodity exports and commission solar-powered agro-processing facilities.',
    milestones: ['Q4 Export entry to EU/Middle East', 'Solar-powered processing hubs live', 'Direct out-grower finance integration']
  },
  {
    year: 2028,
    revenue: '₦100B+',
    revenueNum: 100,
    focus: 'National Market Leadership & Impact',
    description: 'Position NFD Agro as Nigeria\'s premier National Agricultural Value Chain Orchestrator.',
    milestones: ['10,000+ active smallholder partners', 'Multi-commodity processing leadership', 'Replication across West Africa']
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    id: 'salma-mohammed',
    name: 'Salma Mohammed',
    title: 'Managing Director',
    experienceYears: 30,
    summary: 'Senior banking and HR executive with almost 30 years experience leading strategic organizational transformations across African markets.',
    keyCertifications: ['Balanced Scorecard Specialist', 'AGMP26 Certified', 'NLP Practitioner', 'Tutu African Leadership Fellow'],
    expertiseAreas: [
      'Global Strategy Implementation',
      'Organizational Restructuring',
      'Executive Selection & Governance',
      'Due Diligence & Business Development'
    ],
    fullBio: 'Ms. Salma Mohammed brings nearly three decades of distinguished executive leadership spanning both commercial banking and strategic Human Resource Management. Her extensive career encompasses operational, tactical, and strategic execution across major financial and corporate institutions. She holds prestigious credentials in Balanced Scorecard methodology, AGMP26, and NLP, and is an active Fellow of the Tutu African Leadership Program.'
  },
  {
    id: 'khalid-ali-baba',
    name: 'Khalid Ali Baba',
    title: 'General Manager, Business Development',
    experienceYears: 15,
    summary: 'Agribusiness development leader with 15+ years managing large-scale agricultural enterprises, supply chains, and food security programs in Nigeria.',
    keyCertifications: ['Environmental Management CIWM', 'Sustainability Leadership (Oxford University)', 'UK Tech & Environment Specialist'],
    expertiseAreas: [
      'Agribusiness Enterprise Management',
      'Agricultural Value Chain Operations',
      'Farm Production Optimization',
      'Food Security Strategy & Offtake Contracts'
    ],
    fullBio: 'Mr. Khalid Ali Baba is an accomplished agribusiness leader with over 15 years of hands-on experience directing agricultural enterprises and value-chain logistics. His work bridges high-level policy with farm-floor productivity, focusing on private-sector growth, out-grower efficiency, and strategic food security initiatives. He completed the Sustainability Leadership Program at Oxford University and holds CIWM Environmental Management certification.'
  },
  {
    id: 'mukthar-garba',
    name: 'Mukthar K. Garba',
    title: 'Operations & Finance Manager',
    experienceYears: 6,
    summary: 'Qualified Chartered Accountant and fiscal strategist with extensive background in commodity trading finance, risk management, and budget control.',
    keyCertifications: ['Qualified Chartered Accountant (ICAN)', 'Master\'s in Management', 'Financial Risk Auditor'],
    expertiseAreas: [
      'Commodity Trading Operations',
      'Fiscal Risk Assessment & Management',
      'Budgeting & Long-range Forecasting',
      'Internal Controls & Audit Management'
    ],
    fullBio: 'Mr. Mukthar K. Garba is a results-driven Chartered Accountant with extensive experience managing complex financial operations within the agribusiness and commodity trading sectors. He oversees fiscal control, trade settlement, inventory risk mitigation, and audit compliance across NFD Agro\'s multi-state aggregation network.'
  }
];

export const PARTNERS: PartnerItem[] = [
  { name: 'FCMB (First City Monument Bank)', category: 'Financial', description: 'Banking and credit partner for aggregation liquidity.' },
  { name: 'AIICO Insurance', category: 'Insurance', description: 'Comprehensive agricultural risk and crop yield insurance underwriting.' },
  { name: 'NIRSAL (Nigeria Incentive-Based Risk Sharing System)', category: 'Government/DFI', description: 'Value chain de-risking and credit guarantee partner.' },
  { name: 'Olam International', category: 'Commercial Offtaker', description: 'Major international commodity buyer and industrial processor.' },
  { name: 'WACOT Limited', category: 'Commercial Offtaker', description: 'Leading agro-allied participant for grains and oil seeds.' },
  { name: 'Whitefield Agro Processing Limited', category: 'Commercial Offtaker', description: 'Industrial off-taker for oil seed processing.' },
  { name: 'Al-Raj Agro Enterprises', category: 'Commercial Offtaker', description: 'Key regional partner for grain aggregation and processing.' },
  { name: 'GIRBI Agro', category: 'Commercial Offtaker', description: 'Agricultural input and commodity trade partner.' },
  { name: 'Excellence Investment & General Merchant Nig Ltd', category: 'Commercial Offtaker', description: 'Supply chain and warehousing partner.' },
  { name: 'SIOCL', category: 'Commercial Offtaker', description: 'Industrial oil extraction and processing partner.' },
  { name: 'Omoronike Ventures', category: 'Commercial Offtaker', description: 'Regional distribution and aggregation enterprise.' }
];
