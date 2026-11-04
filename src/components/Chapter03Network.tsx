import React, { useState } from 'react';
import { MapPin, CheckCircle2, Layers } from 'lucide-react';
import { SOURCING_STATES } from '../data/companyData';

export const Chapter03Network: React.FC = () => {
  const [selectedStateName, setSelectedStateName] = useState<string>('Taraba');

  const selectedStateObj = SOURCING_STATES.find(s => s.state === selectedStateName) || SOURCING_STATES[0];

  const commodities = [
    {
      name: 'Soybeans',
      category: 'Oil Seeds & Protein',
      spec: 'Moisture < 10% · High Protein',
      states: 'Kwara, Taraba, Benue',
      market: 'Industrial animal feed mills & vegetable oil processors'
    },
    {
      name: 'Raw Cashew Nuts',
      category: 'Export Tree Crops',
      spec: 'KOR 48-52 lbs · Moisture < 8%',
      states: 'Kogi, Ogbomosho (Oyo)',
      market: 'International kernel processors & export commodity desks'
    },
    {
      name: 'Paddy Rice',
      category: 'Staple Grains',
      spec: 'Milling Yield > 68% · Long Grain',
      states: 'Taraba, Kebbi, Niger, Kano',
      market: 'Domestic integrated rice mills and food reserves'
    },
    {
      name: 'Yellow & White Maize',
      category: 'Staple Grains',
      spec: 'Aflatoxin < 10ppb · Dry Spec',
      states: 'Kaduna, Taraba, Kano, Niger',
      market: 'FMCG food conglomerates & commercial poultry feed'
    },
    {
      name: 'Natural Sesame Seeds',
      category: 'Export Seed',
      spec: 'Purity > 99% · Oil > 52%',
      states: 'Taraba, Niger, Kano, Katsina',
      market: 'Middle Eastern, European & Asian culinary markets'
    },
    {
      name: 'Wild Shea Nuts',
      category: 'Specialty Lipids',
      spec: 'FFA < 6% · Ethical Sourcing',
      states: 'Niger State (Cooperatives)',
      market: 'Cosmetic grade and confectionery specialty fat buyers'
    }
  ];

  return (
    <section id="chapter-03" className="py-24 lg:py-32 border-b border-[#E7E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#249E6B] mb-6">
          <span className="font-mono">Chapter 03</span>
          <span className="text-stone-300">/</span>
          <span className="text-stone-600">The Network & Sourcing Belt</span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D281C] tracking-tight">
              10+ Productive States. <br />
              <span className="text-stone-400 font-normal">Export-Grade</span> Crop Portfolio.
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md leading-relaxed">
            By operating directly across Nigeria’s primary ecological zones, NFD Agro secures high volumes during staggered regional harvest windows while stabilizing supply volatility.
          </p>
        </div>

        {/* Interactive State Radar Bar */}
        <div className="bg-white rounded-2xl border border-[#E7E5DC] p-6 lg:p-8 shadow-2xs mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#249E6B]" />
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                Select an Active State Sourcing Hub:
              </span>
            </div>
            <span className="text-xs text-stone-400 font-mono">
              Click to view local aggregation metrics
            </span>
          </div>

          {/* State Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SOURCING_STATES.map((s) => (
              <button
                key={s.state}
                onClick={() => setSelectedStateName(s.state)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5 ${
                  selectedStateName === s.state
                    ? 'bg-[#0D281C] text-white border-[#0D281C] shadow-2xs'
                    : 'bg-[#F9F9F6] text-stone-700 border-[#E7E5DC] hover:bg-stone-100'
                }`}
              >
                <span>{s.state}</span>
                <span className={`text-[10px] font-normal ${selectedStateName === s.state ? 'text-[#249E6B]' : 'text-stone-400'}`}>
                  ({s.region.split(' ')[0]})
                </span>
              </button>
            ))}
          </div>

          {/* Selected State Overview Card */}
          <div className="p-5 rounded-xl bg-[#F9F9F6] border border-[#E7E5DC] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#249E6B]">
                <span>{selectedStateObj.region} Region</span>
                <span>·</span>
                <span>Hub Operational</span>
              </div>
              <h3 className="text-xl font-bold text-[#0D281C] mt-0.5">
                {selectedStateObj.state} State Sourcing Operations
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {selectedStateObj.commodities.map((crop, idx) => (
                  <span key={idx} className="bg-white text-stone-700 text-xs px-2.5 py-0.5 rounded-md border border-[#E7E5DC] font-medium">
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8 shrink-0 text-xs">
              <div className="bg-white px-4 py-2 rounded-lg border border-[#E7E5DC]">
                <span className="text-stone-400 text-[10px] uppercase font-bold block">Aggregation Centres</span>
                <span className="font-mono text-base font-bold text-[#0D281C]">{selectedStateObj.dacCount} DACs</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-lg border border-[#E7E5DC]">
                <span className="text-stone-400 text-[10px] uppercase font-bold block">Smallholders Engaged</span>
                <span className="font-mono text-base font-bold text-[#249E6B]">{selectedStateObj.farmersEngaged}+</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Commodities Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commodities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E7E5DC] p-6 shadow-2xs hover:border-stone-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-mono">
                  <span className="text-[#249E6B] font-bold">0{idx + 1}.</span>
                  <span>{item.spec}</span>
                </div>

                <h3 className="text-lg font-bold text-[#0D281C] mb-1">
                  {item.name}
                </h3>
                <span className="text-xs text-stone-500 font-medium block mb-3">
                  {item.category}
                </span>

                <div className="pt-3 border-t border-stone-100 text-xs text-stone-600 space-y-1.5">
                  <div>
                    <strong className="text-stone-800">Primary Hubs:</strong> {item.states}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    <strong>Offtake Destination:</strong> {item.market}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
