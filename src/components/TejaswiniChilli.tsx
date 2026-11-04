import React, { useState } from 'react';
import { Flame, CheckCircle2, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

interface TejaswiniChilliProps {
  onOpenContact: (mode?: string) => void;
}

export const TejaswiniChilli: React.FC<TejaswiniChilliProps> = ({ onOpenContact }) => {
  const [hectares, setHectares] = useState<number>(10);

  // Commercial estimates based on Tejaswini hybrid yield (~18-22 MT/ha vs traditional 4-6 MT/ha)
  const estimatedYieldMT = hectares * 20;
  const estimatedImportSavingsUSD = hectares * 14500; // Estimated savings for local processors

  return (
    <section id="chilli" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="bg-[#1B4332] rounded-3xl text-white overflow-hidden shadow-2xl border border-[#2D6A4F]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-12">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-[#2D6A4F] text-[#52B788] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#40916C]">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>Nationale Agribusiness Breakthrough</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Tejaswini Hybrid Chilli Pepper Project
              </h2>

              <div className="p-4 bg-[#133926] border border-[#2D6A4F] rounded-2xl text-emerald-100 font-semibold text-sm sm:text-base leading-snug">
                NFD Agro is the <span className="text-[#52B788] font-bold underline">FIRST company in Nigeria</span> to cultivate Tejaswini hybrid chilli pepper at commercial scale.
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Currently operating a 1-hectare pilot in FCT Abuja as proof of concept, NFD Agro is expanding to a 20-hectare commercial farmland. Tejaswini hybrid delivers ultra-high pungency (SHU) and uniform yield, providing Nigerian spice processors with a high-quality local alternative to costly foreign imports.
              </p>

              {/* Core Advantage Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 bg-[#133926] p-3 rounded-xl border border-[#2D6A4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                  <span><strong>Local Alternative:</strong> Replaces foreign spice imports</span>
                </div>
                <div className="flex items-center gap-2 bg-[#133926] p-3 rounded-xl border border-[#2D6A4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                  <span><strong>Direct Contracts:</strong> Guaranteed year-round supply</span>
                </div>
                <div className="flex items-center gap-2 bg-[#133926] p-3 rounded-xl border border-[#2D6A4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                  <span><strong>No Middlemen:</strong> Cuts cost & retains margin</span>
                </div>
                <div className="flex items-center gap-2 bg-[#133926] p-3 rounded-xl border border-[#2D6A4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                  <span><strong>Proven Pilot:</strong> Viability confirmed in FCT</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onOpenContact('offtaker')}
                  className="px-6 py-3 text-xs font-bold text-[#1B4332] bg-[#52B788] hover:bg-[#74c69d] rounded-lg transition-colors shadow flex items-center gap-2"
                >
                  <span>Request Offtake Contract</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border-2 border-[#40916C]/60 shadow-xl">
                <img
                  src="/images/nfd_chilli_project_1793818947264.jpg"
                  alt="Tejaswini Hybrid Chilli Field in Nigeria"
                  className="w-full h-72 lg:h-96 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>

          {/* Interactive Yield & Import Savings Estimator */}
          <div className="bg-[#133926] border-t border-[#2D6A4F] p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 text-xs font-bold text-[#52B788] uppercase tracking-wider mb-2">
                <TrendingUp className="w-4 h-4" />
                <span>Interactive Commercial Yield & Import Substitution Model</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-6">
                Calculate Tejaswini Cultivation Impact for Spice Processors
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#1B4332] p-6 rounded-2xl border border-[#2D6A4F]">
                <div className="md:col-span-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                      <span>Cultivation Scale:</span>
                      <span className="font-mono text-[#52B788] font-bold text-sm">{hectares} Hectares</span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={50}
                      step={1}
                      value={hectares}
                      onChange={(e) => setHectares(Number(e.target.value))}
                      className="w-full accent-[#52B788] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>1 ha (Pilot)</span>
                      <span>20 ha (Phase 1 Target)</span>
                      <span>50 ha (Full Scale)</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-normal">
                    Tejaswini hybrid chilli yields up to 4x higher harvest volume per hectare compared to standard indigenous varieties, with consistent high-capsaicin pungency.
                  </p>
                </div>

                <div className="md:col-span-6 grid grid-cols-2 gap-4">
                  <div className="bg-[#133926] p-4 rounded-xl border border-[#2D6A4F]">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase block">Est. Annual Yield</span>
                    <span className="text-2xl font-bold text-white font-mono mt-1 block">
                      ~{estimatedYieldMT.toLocaleString()} MT
                    </span>
                    <span className="text-[10px] text-[#52B788] mt-1 block">High-grade chilli produce</span>
                  </div>

                  <div className="bg-[#133926] p-4 rounded-xl border border-[#2D6A4F]">
                    <span className="text-[10px] font-semibold text-slate-400 uppercase block">Est. Import FX Savings</span>
                    <span className="text-2xl font-bold text-[#52B788] font-mono mt-1 block">
                      ${estimatedImportSavingsUSD.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-slate-300 mt-1 block">Saved by spice millers</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
