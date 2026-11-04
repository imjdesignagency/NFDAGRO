import React from 'react';
import { Flame, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface Chapter02ChilliProps {
  onOpenInquiry: () => void;
}

export const Chapter02Chilli: React.FC<Chapter02ChilliProps> = ({ onOpenInquiry }) => {
  return (
    <section id="chapter-02" className="py-24 lg:py-32 border-b border-[#E7E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#249E6B] mb-6">
          <span className="font-mono">Chapter 02</span>
          <span className="text-stone-300">/</span>
          <span className="text-stone-600">The High-Margin Breakthrough</span>
        </div>

        {/* Feature Split Container */}
        <div className="bg-[#0D281C] text-white rounded-3xl overflow-hidden shadow-sm border border-[#E7E5DC]/20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 lg:p-14">
            
            {/* Left Column: Story & Breakthrough */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white/10 text-[#249E6B] px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold border border-white/10">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>FIRST IN NIGERIA AT COMMERCIAL SCALE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Tejaswini Hybrid Chilli: <br />
                <span className="text-stone-300 font-light">Domestic Import</span> Substitution.
              </h2>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-xl">
                Nigerian food conglomerates and spice processing companies import tens of millions of dollars of dried hot peppers annually due to poor domestic yields and inconsistent capsaicin pungency.
              </p>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-xl">
                NFD Agro successfully validated Nigeria’s first commercial cultivation of <strong className="text-white">Tejaswini Hybrid Chilli</strong> in FCT Abuja. Delivering up to <strong className="text-[#249E6B]">4x standard harvest yields</strong> and certified SHU heat levels, we are expanding from a 1-hectare pilot to a 20-hectare commercial farmland.
              </p>

              {/* 3 Impact Proof Points */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <span className="font-mono text-xs text-[#249E6B] font-bold block">1 Ha → 20 Ha</span>
                  <span className="text-xs font-semibold text-white block mt-0.5">Proven Pilot</span>
                  <span className="text-[10px] text-stone-400 mt-0.5 block">Viability confirmed in FCT</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <span className="font-mono text-xs text-[#249E6B] font-bold block">Direct FMCG</span>
                  <span className="text-xs font-semibold text-white block mt-0.5">Offtake Secured</span>
                  <span className="text-[10px] text-stone-400 mt-0.5 block">Zero broker margins</span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <span className="font-mono text-xs text-[#249E6B] font-bold block">Foreign FX</span>
                  <span className="text-xs font-semibold text-white block mt-0.5">Import Savings</span>
                  <span className="text-[10px] text-stone-400 mt-0.5 block">Domestic price stability</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="px-5 py-3 text-xs font-semibold text-[#0D281C] bg-[#249E6B] hover:bg-[#2db57b] rounded-xl transition-all shadow-sm flex items-center gap-1.5 active:scale-98"
                >
                  <span>Request Chilli Supply Allocation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Column: High Quality Crop Imagery */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-xl group">
                <img
                  src="/src/assets/images/nfd_chilli_project_1793818947264.jpg"
                  alt="Tejaswini Hybrid Chilli Harvest in Nigeria"
                  className="w-full h-80 sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D281C] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#0D281C]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-xs">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>High Capsaicin (SHU) Benchmark</span>
                    <span className="text-[#249E6B]">FCT Pilot Hub</span>
                  </div>
                  <p className="text-stone-300 text-[11px] mt-1">
                    Cultivated under precision drip irrigation for standardized color, moisture, and intense flavor.
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
