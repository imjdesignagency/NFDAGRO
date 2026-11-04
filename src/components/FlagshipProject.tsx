import React from 'react';
import { Flame, ArrowUpRight, Check, Sparkles } from 'lucide-react';

interface FlagshipProjectProps {
  onOpenContact: () => void;
}

export const FlagshipProject: React.FC<FlagshipProjectProps> = ({ onOpenContact }) => {
  return (
    <section id="flagship" className="py-20 lg:py-28 bg-[#0C2519] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Flagship Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold text-[#4EBA87] tracking-wider uppercase mb-3">
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Flagship Commercial Cultivation</span>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Tejaswini Hybrid Chilli Pepper: <br />
            <span className="text-[#4EBA87]">First Commercial Scale in Nigeria.</span>
          </h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Nigerian spice millers and industrial processors currently spend millions in foreign exchange importing high-pungency dried chillies. NFD Agro is proving and scaling the first domestic commercial alternative.
          </p>
        </div>

        {/* Main 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with Subtle Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#081810] relative group">
              <img
                src="/src/assets/images/nfd_chilli_project_1793818947264.jpg"
                alt="Tejaswini Hybrid Chilli Harvest in Nigeria"
                className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2519] via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#0C2519]/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">Tejaswini Hybrid Variety</span>
                  <span className="text-white/60 text-[11px]">High capsaicin (SHU) & uniform drying yield</span>
                </div>
                <span className="px-2.5 py-1 bg-[#4EBA87] text-[#0C2519] font-bold text-[10px] rounded-md">
                  4x Standard Yield
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Punchy Impact Pillars */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">
                  01. Proven Pilot to Commercial Scale
                </h3>
                <span className="text-xs font-mono text-[#4EBA87]">1 Ha → 20 Ha</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Currently operating a successful 1-hectare pilot in FCT Abuja confirming soil viability and yield benchmarks ahead of the 20-hectare commercial scale-up.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">
                  02. Direct Import Substitution
                </h3>
                <span className="text-xs font-mono text-[#4EBA87]">FX Savings</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Offers Nigerian spice processors a stable, predictable, domestic supply — saving foreign exchange, reducing shipping lead times, and avoiding port bottlenecks.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-2 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">
                  03. Pre-Agreed Offtake Contracts
                </h3>
                <span className="text-xs font-mono text-[#4EBA87]">Direct Delivery</span>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Entire production is pre-contracted with large-volume spice processing companies and FMCG conglomerates, cutting out intermediaries and locking in margins.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-5 py-3 text-xs font-semibold text-[#0C2519] bg-[#4EBA87] hover:bg-[#5ec493] rounded-xl transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Inquire for Chilli Offtake Allocation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
