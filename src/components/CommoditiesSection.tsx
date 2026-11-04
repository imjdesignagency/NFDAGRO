import React, { useState } from 'react';
import { COMMODITIES, SOURCING_STATES } from '../data/companyData';
import { CommodityItem } from '../types';
import { Filter, MapPin, CheckCircle, Wheat, Flame, Sparkles, Sprout, Nut, Leaf, Beef } from 'lucide-react';

export const CommoditiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const categories = ['All', 'Grains', 'Oil Seeds', 'Herbs & Spices', 'Legumes', 'Livestock'];

  const filteredCommodities = selectedCategory === 'All'
    ? COMMODITIES
    : COMMODITIES.filter(c => c.category === selectedCategory);

  const renderIcon = (name: string) => {
    switch (name) {
      case 'Wheat': return <Wheat className="w-5 h-5 text-[#1B4332]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-600" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-yellow-600" />;
      case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
      case 'Nut': return <Nut className="w-5 h-5 text-amber-700" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-green-700" />;
      case 'Beef': return <Beef className="w-5 h-5 text-red-700" />;
      default: return <Sprout className="w-5 h-5 text-[#1B4332]" />;
    }
  };

  const selectedStateObj = selectedState ? SOURCING_STATES.find(s => s.state === selectedState) : null;

  return (
    <section id="commodities" className="py-20 bg-[#F4F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2 block">
              Diversified Agro-Commodity Portfolios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Premium Agro-Commodities Sourced, Aggregated & Delivered
            </h2>
            <p className="mt-3 text-slate-600 text-sm leading-relaxed">
              Every commodity in our portfolio is traceable, safe, and internationally compliant. We supply major domestic food processors, breweries, animal feed manufacturers, and international buyers.
            </p>
          </div>

          {/* Catalog Image Teaser */}
          <div className="w-full lg:w-72 h-36 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
            <img
              src="/src/assets/images/nfd_commodities_catalog_1793818946614.jpg"
              alt="NFD Agro Organic Commodities in Hessian Sacks"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mr-2 shrink-0">
            <Filter className="w-4 h-4" />
            <span className="font-semibold">Filter Category:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#1B4332] text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Commodities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCommodities.map((item: CommodityItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-[#F4F7F5] border border-slate-100 group-hover:scale-105 transition-transform">
                    {renderIcon(item.iconName)}
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                    item.status === 'Active'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="text-[11px] text-slate-500 font-medium">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {item.name}
                </h3>
                <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span><strong>Spec:</strong> {item.qualityStandard}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <MapPin className="w-4 h-4 text-[#1B4332] shrink-0" />
                    <span><strong>Origin:</strong> {item.sourcingStates.join(', ')}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-500 flex justify-between items-center">
                <span>Target: {item.targetMarket}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Geographic Footprint Section */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
          <div className="mb-6">
            <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider">
              10+ States Sourcing Footprint
            </span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">
              Sourcing Across Nigeria’s Most Productive Agro-Belts
            </h3>
            <p className="text-slate-600 text-xs mt-1">
              Select a state below to view its active commodity aggregation centers and farmer coverage.
            </p>
          </div>

          {/* Interactive State Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {SOURCING_STATES.map((s) => (
              <button
                key={s.state}
                onClick={() => setSelectedState(selectedState === s.state ? null : s.state)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg border transition-all flex items-center gap-2 ${
                  selectedState === s.state
                    ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-sm'
                    : 'bg-[#F4F7F5] text-slate-700 border-slate-200 hover:bg-slate-200'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${selectedState === s.state ? 'text-[#52B788]' : 'text-slate-500'}`} />
                <span>{s.state}</span>
                <span className="text-[10px] opacity-75 font-normal">({s.region})</span>
              </button>
            ))}
          </div>

          {/* Selected State Detail Box */}
          {selectedStateObj ? (
            <div className="bg-[#1B4332] text-white rounded-2xl p-6 border border-[#2D6A4F] animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono text-[#52B788] uppercase">
                    {selectedStateObj.region} Region
                  </span>
                  <h4 className="text-2xl font-bold text-white">
                    {selectedStateObj.state} State Sourcing Hub
                  </h4>
                </div>
                <div className="flex items-center gap-6 text-xs text-emerald-200">
                  <div>
                    <span className="block font-bold text-lg text-white font-mono">{selectedStateObj.dacCount}</span>
                    <span>Aggregation Centres</span>
                  </div>
                  <div>
                    <span className="block font-bold text-lg text-[#52B788] font-mono">{selectedStateObj.farmersEngaged}+</span>
                    <span>Farmers Onboarded</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#2D6A4F] pt-4">
                <span className="text-xs font-semibold text-slate-300 block mb-2">
                  Active Commodities Aggregated in {selectedStateObj.state}:
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedStateObj.commodities.map((c, i) => (
                    <span key={i} className="bg-[#2D6A4F] text-emerald-100 text-xs font-medium px-3 py-1 rounded-md border border-[#40916C]">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#F4F7F5] rounded-xl p-4 text-center text-xs text-slate-500 border border-dashed border-slate-300">
              Click any state above (e.g. Taraba, Niger, Kano, Kwara) to inspect local aggregation metrics and commodities.
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
