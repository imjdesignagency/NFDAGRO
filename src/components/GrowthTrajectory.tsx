import React from 'react';
import { TrendingUp, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { GROWTH_TRAJECTORY } from '../data/companyData';

interface GrowthTrajectoryProps {
  onOpenDoc: (docIndex?: number) => void;
  onOpenContact: () => void;
}

export const GrowthTrajectory: React.FC<GrowthTrajectoryProps> = ({ onOpenDoc, onOpenContact }) => {
  return (
    <section id="growth" className="py-20 lg:py-28 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#1B4332] tracking-wider uppercase mb-2 block">
              Financial Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2519] tracking-tight">
              Scaling to ₦100B+ National Impact
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-[#1B4332]">
            <span className="px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100">
              Target Investor ROI: 20–27%
            </span>
            <span className="px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-100">
              Target Project ROI: 45%+
            </span>
          </div>
        </div>

        {/* Sleek Horizontal Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-14">
          {GROWTH_TRAJECTORY.map((item, idx) => (
            <div
              key={item.year}
              className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                item.year === 2026
                  ? 'bg-[#0C2519] text-white border-[#0C2519] shadow-lg ring-2 ring-[#4EBA87]/40 scale-[1.02]'
                  : 'bg-[#F8FAF8] text-slate-800 border-black/5 hover:border-black/15'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-mono font-bold ${item.year === 2026 ? 'text-[#4EBA87]' : 'text-slate-400'}`}>
                    {item.year} {item.isActual ? '(Actual)' : ''}
                  </span>
                  {item.year === 2026 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#4EBA87] bg-white/10 px-2 py-0.5 rounded">
                      Scale Year
                    </span>
                  )}
                </div>

                <div className="text-2xl font-extrabold font-mono tracking-tight mb-2">
                  {item.revenue}
                </div>

                <h4 className={`text-xs font-bold mb-2 leading-snug ${item.year === 2026 ? 'text-white' : 'text-slate-900'}`}>
                  {item.focus}
                </h4>
              </div>

              <div className={`text-[11px] leading-relaxed pt-3 border-t mt-3 ${
                item.year === 2026 ? 'border-white/10 text-white/70' : 'border-slate-200 text-slate-600'
              }`}>
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Investment Highlights Box */}
        <div className="rounded-3xl bg-[#F8FAF8] border border-black/5 p-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1B4332]">
              <ShieldCheck className="w-4 h-4 text-[#4EBA87]" />
              <span>Institutional Investment Structure</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Backed by Asset Storage, Digital Receipts & Secured Corporate Offtake
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Capital deployed into NFD Agro operations is directly collateralized by physical grain stored in monitored silos and secured through forward purchase agreements with multinational food and feed millers.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDoc(1)}
              className="px-5 py-3 text-xs font-semibold text-[#0C2519] bg-[#4EBA87] hover:bg-[#5ec493] rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>Download 2026 Memo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenContact}
              className="px-5 py-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors"
            >
              <span>Request Investor Deck</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
