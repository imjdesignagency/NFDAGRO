import React, { useState } from 'react';
import { GROWTH_TRAJECTORY } from '../data/companyData';
import { TrendingUp, Award, DollarSign, Target, CheckCircle2, Calculator } from 'lucide-react';

interface GrowthTimelineProps {
  onOpenContact: (mode?: string) => void;
}

export const GrowthTimeline: React.FC<GrowthTimelineProps> = ({ onOpenContact }) => {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [investmentAmountNaira, setInvestmentAmountNaira] = useState<number>(50000000); // ₦50M default

  const activeMilestone = GROWTH_TRAJECTORY.find(m => m.year === selectedYear) || GROWTH_TRAJECTORY[2];

  // Investor ROI estimation (20% - 27% baseline target range)
  const estLowReturn = investmentAmountNaira * 1.20;
  const estHighReturn = investmentAmountNaira * 1.27;

  return (
    <section id="growth" className="py-20 bg-[#F4F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2 block">
            Financial Trajectory & Strategic Scaling
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Revenue Targets 2024 - 2028: From Foundation to National Impact
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Demonstrating rapid, capital-efficient scaling from ₦1.2B actual revenue in 2024 to ₦4.2B in 2025, NFD Agro is positioned for ₦31B in 2026 ("Scale Up Year") and a ₦100B+ national footprint by 2028.
          </p>
        </div>

        {/* Growth Bar Chart Visualizer */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#1B4332]" />
              <span>Revenue Growth trajectory (Naira Billions)</span>
            </h3>
            <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full border border-emerald-200">
              Target Project ROI: 45%+ | Target Investor ROI: 20-27%
            </span>
          </div>

          {/* Interactive Year Selector Bars */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 items-end h-64 border-b border-slate-200 pb-4 mb-6">
            {GROWTH_TRAJECTORY.map((m) => {
              const heightPercent = Math.min(100, Math.max(15, (m.revenueNum / 100) * 100));
              const isSelected = selectedYear === m.year;

              return (
                <button
                  key={m.year}
                  onClick={() => setSelectedYear(m.year)}
                  className={`flex flex-col items-center justify-end h-full w-full transition-all group ${
                    isSelected ? 'scale-102' : 'opacity-80 hover:opacity-100'
                  }`}
                >
                  <span className={`text-xs font-mono font-bold mb-2 ${isSelected ? 'text-[#1B4332]' : 'text-slate-500'}`}>
                    {m.revenue}
                  </span>
                  <div
                    style={{ height: `${heightPercent}%` }}
                    className={`w-full rounded-t-xl transition-all duration-300 ${
                      isSelected
                        ? 'bg-[#1B4332] shadow-md'
                        : m.isActual
                        ? 'bg-emerald-700/80 group-hover:bg-emerald-800'
                        : 'bg-emerald-600/50 group-hover:bg-emerald-600'
                    }`}
                  />
                  <div className={`mt-3 text-xs font-bold ${isSelected ? 'text-[#1B4332] underline' : 'text-slate-700'}`}>
                    {m.year} {m.isActual ? '(Actual)' : ''}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Year Milestone Details */}
          <div className="bg-[#1B4332] text-white rounded-2xl p-6 border border-[#2D6A4F]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-[#52B788] uppercase font-bold">
                  {activeMilestone.year} Strategic Focus
                </span>
                <h4 className="text-2xl font-bold text-white">
                  {activeMilestone.focus}
                </h4>
              </div>
              <div className="bg-[#133926] px-4 py-2 rounded-xl border border-[#2D6A4F] text-right">
                <span className="text-[10px] text-slate-300 block">Revenue Milestone</span>
                <span className="text-xl font-bold text-[#52B788] font-mono">{activeMilestone.revenue}</span>
              </div>
            </div>

            <p className="text-slate-200 text-xs leading-relaxed mb-4">
              {activeMilestone.description}
            </p>

            <div className="border-t border-[#2D6A4F] pt-4">
              <span className="text-xs font-semibold text-slate-300 block mb-3">
                Key Strategic Deliverables for {activeMilestone.year}:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeMilestone.milestones.map((item, idx) => (
                  <div key={idx} className="bg-[#133926] p-3 rounded-xl border border-[#2D6A4F] text-xs text-emerald-100 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* KPIs Grid & Investor Return Estimator Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: KPI Standards */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2">
              <Target className="w-4 h-4" />
              <span>Balanced Scorecard KPIs</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              How We Measure Performance & Impact
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-[#F4F7F5] border border-slate-200">
                <span className="text-xs font-bold text-[#1B4332] block mb-1">FINANCIAL</span>
                <p className="text-xs text-slate-700">
                  <strong>ROI &gt; 45%</strong> · EBITDA Margin · Cost per Metric Ton · Payback Period
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F7F5] border border-slate-200">
                <span className="text-xs font-bold text-[#1B4332] block mb-1">COMMERCIAL</span>
                <p className="text-xs text-slate-700">
                  Offtake Fulfilment Rate · Export Growth · Farmer Satisfaction Score
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F7F5] border border-slate-200">
                <span className="text-xs font-bold text-[#1B4332] block mb-1">OPERATIONAL</span>
                <p className="text-xs text-slate-700">
                  Hectares Under Management · Yield per Hectare · <strong>Post Harvest Loss &lt; 5%</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F4F7F5] border border-slate-200">
                <span className="text-xs font-bold text-[#1B4332] block mb-1">ESG & SUSTAINABILITY</span>
                <p className="text-xs text-slate-700">
                  5,000+ Smallholders Supported · Female Participation % · Water Efficiency Ratio
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Investor Return Estimator */}
          <div className="lg:col-span-5 bg-[#1B4332] text-white rounded-3xl p-8 shadow-xl border border-[#2D6A4F]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#52B788] uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Institutional Investor Tool</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Estimate Investor Returns (20% - 27% Target ROI)
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-medium mb-1">
                  Investment Capital (Naira):
                </label>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[#52B788] font-bold">₦</span>
                  <input
                    type="number"
                    step={5000000}
                    min={10000000}
                    max={1000000000}
                    value={investmentAmountNaira}
                    onChange={(e) => setInvestmentAmountNaira(Number(e.target.value))}
                    className="w-full bg-[#133926] border border-[#2D6A4F] text-white font-mono font-bold p-2.5 rounded-lg focus:outline-none focus:border-[#52B788]"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">
                  e.g., ₦50,000,000 (Fifty Million Naira)
                </span>
              </div>

              <div className="p-4 bg-[#133926] rounded-2xl border border-[#2D6A4F] space-y-3">
                <div className="flex justify-between items-center border-b border-[#2D6A4F] pb-2">
                  <span className="text-slate-300">Baseline Target Return (20% ROI):</span>
                  <span className="font-mono font-bold text-white text-sm">
                    ₦{estLowReturn.toLocaleString('en-NG')}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Upper Target Return (27% ROI):</span>
                  <span className="font-mono font-bold text-[#52B788] text-sm">
                    ₦{estHighReturn.toLocaleString('en-NG')}
                  </span>
                </div>
              </div>

              <p className="text-[10px] text-slate-400 leading-normal">
                Returns backed by physical commodity inventory, asset-backed warehouse receipts, and pre-agreed corporate off-take agreements.
              </p>

              <button
                onClick={() => onOpenContact('investor')}
                className="w-full py-3 text-xs font-bold text-[#1B4332] bg-[#52B788] hover:bg-[#74c69d] rounded-xl transition-colors shadow"
              >
                Request Investment Memorandum & Data Room Access
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
