import React, { useState } from 'react';
import { MapPin, CheckCircle2, Filter, Layers, ArrowRight } from 'lucide-react';
import { SOURCING_STATES, COMMODITIES } from '../data/companyData';

export const CommodityRadar: React.FC = () => {
  const [selectedState, setSelectedState] = useState<string>('Taraba');
  const [selectedCropCategory, setSelectedCropCategory] = useState<string>('All');

  const activeStateData = SOURCING_STATES.find(s => s.state === selectedState) || SOURCING_STATES[0];

  const filteredCrops = selectedCropCategory === 'All'
    ? COMMODITIES.slice(0, 6)
    : COMMODITIES.filter(c => c.category.toLowerCase().includes(selectedCropCategory.toLowerCase()));

  return (
    <section id="sourcing" className="py-24 lg:py-32 border-b border-[#E5E2D8] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#249E6B] mb-2 block">
              Multi-State Agro Corridors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B281B] tracking-tight">
              Sourcing Hub Radar: <br />
              <span className="italic font-normal text-stone-500">10+ States</span> in Real-Time.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            NFD Agro operates across Nigeria’s primary agro-belts, coordinating staggered seasonal harvests to guarantee continuous commodity flow to processors year-round.
          </p>
        </div>

        {/* Dynamic State Selector Bar */}
        <div className="paper-card rounded-2xl p-6 sm:p-8 shadow-sm mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#249E6B]" />
              <span className="text-xs font-bold text-[#0B281B] uppercase tracking-wider">
                Select an Active State Sourcing Hub:
              </span>
            </div>
            <span className="text-xs text-stone-400 font-mono">
              Click any state to inspect local aggregation infrastructure
            </span>
          </div>

          {/* Clickable State Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SOURCING_STATES.map((s) => (
              <button
                key={s.state}
                onClick={() => setSelectedState(s.state)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl border transition-all flex items-center gap-1.5 ${
                  selectedState === s.state
                    ? 'bg-[#0B281B] text-white border-[#0B281B] shadow-2xs scale-[1.02]'
                    : 'bg-[#FAF9F5] text-stone-700 border-[#E5E2D8] hover:bg-stone-100'
                }`}
              >
                <span>{s.state}</span>
                <span className={`text-[10px] font-normal ${selectedState === s.state ? 'text-[#249E6B]' : 'text-stone-400'}`}>
                  ({s.region.split(' ')[0]})
                </span>
              </button>
            ))}
          </div>

          {/* Dynamic Active State Data Display */}
          <div className="p-6 rounded-2xl bg-[#0B281B] text-white flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#249E6B]">
                <span>{activeStateData.region} Agro-Corridor</span>
                <span>·</span>
                <span>Operational Sourcing Network</span>
              </div>
              <h3 className="font-serif text-2xl font-bold mt-1">
                {activeStateData.state} State Aggregation Hub
              </h3>
              
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="text-xs text-stone-300 self-center mr-1">Active Commodities:</span>
                {activeStateData.commodities.map((c, idx) => (
                  <span key={idx} className="bg-white/10 text-white text-xs px-2.5 py-1 rounded-md border border-white/10 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-8 text-xs shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
              <div>
                <span className="text-[10px] text-stone-300 uppercase block font-bold">DAC Storage Hubs</span>
                <span className="font-mono text-2xl font-bold text-white mt-0.5 block">{activeStateData.dacCount} Centres</span>
              </div>
              <div>
                <span className="text-[10px] text-stone-300 uppercase block font-bold">Smallholders Enrolled</span>
                <span className="font-mono text-2xl font-bold text-[#249E6B] mt-0.5 block">{activeStateData.farmersEngaged}+</span>
              </div>
            </div>
          </div>

        </div>

        {/* Commodity Portfolio Grid */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h3 className="font-serif text-2xl font-bold text-[#0B281B]">
              Standardized Commodity Specifications
            </h3>
            
            <div className="flex items-center gap-1.5 p-1 bg-white border border-[#E5E2D8] rounded-xl self-start sm:self-auto text-xs">
              {['All', 'Grains', 'Oil Seeds', 'Herbs & Spices'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCropCategory(cat)}
                  className={`px-3 py-1.5 font-semibold rounded-lg transition-all ${
                    selectedCropCategory === cat
                      ? 'bg-[#0B281B] text-white shadow-2xs'
                      : 'text-stone-600 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCrops.map((item) => (
              <div
                key={item.id}
                className="paper-card rounded-2xl p-6 shadow-sm hover:border-stone-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-mono">
                    <span className="text-[#249E6B] font-bold">{item.category}</span>
                    <span>{item.status}</span>
                  </div>

                  <h4 className="text-xl font-bold text-[#0B281B] mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-xs text-stone-700 space-y-1.5">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#249E6B] mt-0.5 shrink-0" />
                    <span><strong>Spec:</strong> {item.qualityStandard}</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400 mt-0.5 shrink-0" />
                    <span><strong>Origins:</strong> {item.sourcingStates.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
