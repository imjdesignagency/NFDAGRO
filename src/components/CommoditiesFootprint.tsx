import React, { useState } from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

export const CommoditiesFootprint: React.FC = () => {
  const [activeCommodity, setActiveCommodity] = useState<string>('soya');

  const commodities = [
    {
      id: 'soya',
      name: 'Soybeans',
      category: 'Oil Seeds',
      spec: 'Moisture < 10% · High Protein',
      states: 'Kwara, Taraba, Benue',
      market: 'Industrial Feed Mills & Vegetable Oil Refineries'
    },
    {
      id: 'cashew',
      name: 'Cashew Nuts',
      category: 'Export Tree Crops',
      spec: 'KOR 48-52 lbs · Moisture < 8%',
      states: 'Kogi, Ogbomosho (Oyo)',
      market: 'International Kernel Processors & Global Buyers'
    },
    {
      id: 'rice',
      name: 'Paddy Rice',
      category: 'Staple Grains',
      spec: 'Milling Yield > 68% · Purity > 98%',
      states: 'Taraba, Kebbi, Niger, Kano',
      market: 'Domestic Integrated Rice Millers'
    },
    {
      id: 'maize',
      name: 'Yellow & White Maize',
      category: 'Staple Grains',
      spec: 'Aflatoxin < 10ppb · Low Moisture',
      states: 'Kaduna, Taraba, Kano, Niger',
      market: 'FMCG Food Conglomerates & Poultry Integrators'
    },
    {
      id: 'sesame',
      name: 'Sesame Seeds',
      category: 'Oil Seeds',
      spec: 'Purity > 99% · Oil Content > 52%',
      states: 'Taraba, Niger, Kano, Katsina',
      market: 'Middle East & Asian Export Buyers'
    },
    {
      id: 'shea',
      name: 'Wild Shea Nuts',
      category: 'Specialty Lipids',
      spec: 'FFA < 6% · Ethical Sourcing',
      states: 'Niger State (Women Cooperatives)',
      market: 'Cosmetic & Confectionery Refineries'
    }
  ];

  const statesBelt = [
    'Taraba', 'Niger', 'Kano', 'Kwara', 'Benue', 'Kogi', 'Oyo', 'Kebbi', 'Kaduna', 'Katsina', 'FCT Abuja'
  ];

  return (
    <section id="commodities" className="py-20 lg:py-28 bg-[#F8FAF8] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#1B4332] tracking-wider uppercase mb-2 block">
              Multi-Crop Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2519] tracking-tight">
              Export-Grade Agro Commodities
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Every commodity batch is standardized, tested, and traceable from farmgate aggregation centres across Nigeria to domestic conglomerates and global buyers.
          </p>
        </div>

        {/* 6 Commodities Clean Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {commodities.map((item) => {
            const isSelected = activeCommodity === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveCommodity(item.id)}
                className={`cursor-pointer rounded-2xl p-6 transition-all border ${
                  isSelected
                    ? 'bg-white border-[#1B4332] shadow-md ring-1 ring-[#1B4332]'
                    : 'bg-white border-black/5 hover:border-black/15 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-[#1B4332]">{item.category}</span>
                  <span>{item.spec}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.name}
                </h3>

                <div className="space-y-2 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#4EBA87] mt-0.5 shrink-0" />
                    <span><strong>Sourcing:</strong> {item.states}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    <strong>Offtake Target:</strong> {item.market}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 10+ States Sourcing Footprint Banner */}
        <div className="rounded-2xl bg-[#0C2519] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#4EBA87] uppercase font-bold">
              National Sourcing Footprint
            </span>
            <h4 className="text-lg font-bold text-white">
              Active Designated Aggregation Centres Across 10+ States
            </h4>
            <p className="text-xs text-white/70">
              Connecting thousands of smallholders across Nigeria’s high-yield agro-belts.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 max-w-lg justify-start md:justify-end">
            {statesBelt.map((state) => (
              <span
                key={state}
                className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/10 text-white/90 border border-white/10"
              >
                {state}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
