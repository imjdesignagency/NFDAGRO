import React, { useState } from 'react';
import { Flame, ArrowUpRight, TrendingUp, Sliders, Check, AlertCircle } from 'lucide-react';

interface TejaswiniComparatorProps {
  onOpenInquiry: () => void;
}

export const TejaswiniComparator: React.FC<TejaswiniComparatorProps> = ({ onOpenInquiry }) => {
  const [scaleHectares, setScaleHectares] = useState<number>(20); // 1 ha (pilot) to 20 ha (Phase 1)
  const [activeVariety, setActiveVariety] = useState<'traditional' | 'tejaswini'>('tejaswini');

  const annualYield = scaleHectares * (activeVariety === 'tejaswini' ? 20 : 5);
  const importSavingsUSD = scaleHectares * (activeVariety === 'tejaswini' ? 14500 : 0);

  return (
    <section id="chilli" className="py-24 lg:py-32 border-b border-[#E5E2D8] bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#249E6B] mb-2">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Flagship Commercial Cultivation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B281B] tracking-tight">
              Tejaswini Hybrid Chilli: <br />
              <span className="italic font-normal text-stone-500">First in Nigeria</span> at Commercial Scale.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md leading-relaxed">
            NFD Agro is the first agribusiness in Nigeria cultivating Tejaswini hybrid chillies, providing domestic food and spice millers with a reliable, high-pungency substitute for costly imported peppers.
          </p>
        </div>

        {/* Dynamic Comparison Card */}
        <div className="paper-card rounded-3xl p-6 sm:p-10 shadow-lg mb-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Controls & Comparison */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Variety Toggle */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E2D8]">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Compare Cultivation Variety:
                </span>
                <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-xl">
                  <button
                    onClick={() => setActiveVariety('traditional')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeVariety === 'traditional'
                        ? 'bg-white text-stone-900 shadow-2xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    Standard Local Pepper
                  </button>
                  <button
                    onClick={() => setActiveVariety('tejaswini')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                      activeVariety === 'tejaswini'
                        ? 'bg-[#0B281B] text-white shadow-2xs'
                        : 'text-stone-500 hover:text-stone-900'
                    }`}
                  >
                    Tejaswini Hybrid (NFD)
                  </button>
                </div>
              </div>

              {/* Live Spec Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Harvest Yield</span>
                  <span className="text-xl font-bold font-mono text-[#0B281B] mt-1 block">
                    {activeVariety === 'tejaswini' ? '20 MT / Ha' : '4–5 MT / Ha'}
                  </span>
                  <span className="text-[10px] text-stone-500 block">
                    {activeVariety === 'tejaswini' ? '4x yield multiplier' : 'Low standard output'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Pungency (SHU)</span>
                  <span className="text-xl font-bold font-mono text-[#0B281B] mt-1 block">
                    {activeVariety === 'tejaswini' ? 'High & Uniform' : 'Uncontrolled'}
                  </span>
                  <span className="text-[10px] text-stone-500 block">
                    {activeVariety === 'tejaswini' ? 'Standardized capsaicin' : 'Erratic industrial grades'}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200">
                  <span className="text-[10px] uppercase font-bold text-stone-400 block">Market Chain</span>
                  <span className="text-xl font-bold font-mono text-[#0B281B] mt-1 block">
                    {activeVariety === 'tejaswini' ? 'Direct Offtake' : '4+ Middlemen'}
                  </span>
                  <span className="text-[10px] text-stone-500 block">
                    {activeVariety === 'tejaswini' ? 'Zero intermediary margin' : 'High broker spoilage'}
                  </span>
                </div>
              </div>

              {/* Dynamic Hectare Scale Slider */}
              <div className="p-5 rounded-2xl bg-white border border-[#E5E2D8] space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-stone-700">Farmland Scale Simulation:</span>
                  <span className="font-mono text-[#249E6B] font-bold text-sm">
                    {scaleHectares} Hectares {scaleHectares === 1 ? '(FCT Pilot Phase)' : '(Phase 1 Target)'}
                  </span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={scaleHectares}
                  onChange={(e) => setScaleHectares(Number(e.target.value))}
                  className="w-full accent-[#0B281B] cursor-pointer"
                />

                <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                  <span>1 Ha (Validated FCT Pilot)</span>
                  <span>10 Ha</span>
                  <span>20 Ha (Commercial Target)</span>
                  <span>30 Ha (Scale)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0B281B] text-white">
                  <span className="text-[10px] font-mono text-stone-300 uppercase block">Annual Crop Yield</span>
                  <span className="text-2xl font-extrabold font-mono text-[#249E6B] mt-1 block">
                    ~{annualYield.toLocaleString()} MT
                  </span>
                  <span className="text-[10px] text-stone-300 mt-1 block">High-grade dried hot pepper</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0B281B] text-white">
                  <span className="text-[10px] font-mono text-stone-300 uppercase block">Estimated Import FX Savings</span>
                  <span className="text-2xl font-extrabold font-mono text-[#249E6B] mt-1 block">
                    ${importSavingsUSD.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-stone-300 mt-1 block">Saved by domestic spice millers</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="px-5 py-3 text-xs font-semibold text-white bg-[#0B281B] hover:bg-[#133E2B] rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-98"
                >
                  <span>Request Pre-Agreed Offtake Contract</span>
                  <ArrowUpRight className="w-4 h-4 text-[#249E6B]" />
                </button>
              </div>

            </div>

            {/* Right Crop Photography Frame */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-[#E5E2D8] bg-stone-900 shadow-md group">
                <img
                  src="/src/assets/images/nfd_chilli_project_1793818947264.jpg"
                  alt="Tejaswini Chilli Plants in Nigeria"
                  className="w-full h-80 sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B281B]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-4 backdrop-blur-md bg-[#0B281B]/85 rounded-xl border border-white/10 text-white text-xs">
                  <span className="font-bold block text-sm">FCT Abuja Pilot Site</span>
                  <p className="text-stone-300 text-[11px] mt-1 leading-snug">
                    Proven agronomic proof of concept validating soil nutrient formulation, drip irrigation, and harvest curing.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
