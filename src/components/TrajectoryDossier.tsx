import React, { useState } from 'react';
import { ArrowUpRight, FileDown, Award, TrendingUp, ShieldCheck } from 'lucide-react';
import { GROWTH_TRAJECTORY, LEADERSHIP_TEAM, PARTNERS } from '../data/companyData';

interface TrajectoryDossierProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
}

export const TrajectoryDossier: React.FC<TrajectoryDossierProps> = ({
  onOpenDossier,
  onOpenInquiry
}) => {
  const [selectedMilestoneYear, setSelectedMilestoneYear] = useState<number>(2026);

  const activeMilestone = GROWTH_TRAJECTORY.find(m => m.year === selectedMilestoneYear) || GROWTH_TRAJECTORY[2];

  return (
    <section id="scale" className="py-24 lg:py-32 border-b border-[#E5E2D8] bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#249E6B] mb-2 block">
              Financial Progression & Impact
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B281B] tracking-tight">
              Scaling to ₦100B+ <br />
              <span className="italic font-normal text-stone-500">National Market</span> Impact.
            </h2>
          </div>
          
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="px-3.5 py-1.5 paper-card rounded-xl text-stone-800">
              Target Investor ROI: <strong className="text-[#249E6B]">20–27%</strong>
            </span>
            <span className="px-3.5 py-1.5 paper-card rounded-xl text-stone-800">
              Project Level ROI: <strong className="text-[#0B281B]">45%+</strong>
            </span>
          </div>
        </div>

        {/* Dynamic 5-Year Milestone Progress Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {GROWTH_TRAJECTORY.map((item) => {
            const isSelected = selectedMilestoneYear === item.year;
            return (
              <button
                key={item.year}
                onClick={() => setSelectedMilestoneYear(item.year)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B281B] text-white border-[#0B281B] shadow-lg ring-2 ring-[#249E6B]/30 scale-[1.02]'
                    : 'paper-card text-stone-800 hover:border-stone-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2 text-xs font-mono">
                    <span className={isSelected ? 'text-[#249E6B] font-bold' : 'text-stone-400'}>
                      {item.year} {item.isActual ? '(Actual)' : ''}
                    </span>
                    {item.year === 2026 && (
                      <span className="bg-[#249E6B]/20 text-[#249E6B] px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider uppercase">
                        Scale Year
                      </span>
                    )}
                  </div>

                  <div className="text-xl sm:text-2xl font-extrabold font-mono tracking-tight mb-1">
                    {item.revenue}
                  </div>

                  <h3 className={`text-xs font-bold leading-snug ${isSelected ? 'text-white' : 'text-[#0B281B]'}`}>
                    {item.focus}
                  </h3>
                </div>

                <div className={`mt-3 pt-2 text-[10px] font-mono border-t ${
                  isSelected ? 'border-white/10 text-stone-300' : 'border-stone-100 text-stone-400'
                }`}>
                  Click to inspect deliverables
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Milestone Detail Banner */}
        <div className="paper-card rounded-2xl p-6 sm:p-8 shadow-sm mb-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <span className="text-xs font-mono text-[#249E6B] font-bold uppercase">
              {activeMilestone.year} Strategic Deliverables
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#0B281B]">
              {activeMilestone.focus}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed pt-1">
              {activeMilestone.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2">
            {activeMilestone.milestones.map((m, idx) => (
              <div key={idx} className="bg-stone-50 border border-stone-200 px-3.5 py-2 rounded-xl text-xs font-medium text-stone-800">
                {m}
              </div>
            ))}
          </div>
        </div>

        {/* Executive Governance Trio */}
        <div id="leadership" className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#249E6B] uppercase font-bold tracking-wider">
              Governance & Oversight
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B281B] mt-1">
              Experienced Agribusiness Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.id}
                className="paper-card rounded-2xl p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B281B] text-[#249E6B] flex items-center justify-center font-mono font-bold text-sm">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-mono text-stone-500">
                      {leader.experienceYears}+ Years Experience
                    </span>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#0B281B]">
                    {leader.name}
                  </h4>
                  <div className="text-xs font-semibold text-[#249E6B] mb-2.5">
                    {leader.title}
                  </div>

                  <p className="text-xs text-stone-600 leading-relaxed mb-4">
                    {leader.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#249E6B] shrink-0" />
                  <span className="truncate">{leader.keyCertifications[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Partner Logos Strip */}
        <div className="paper-card rounded-2xl p-8 shadow-sm mb-16">
          <div className="text-center mb-6">
            <span className="text-xs font-mono uppercase font-bold tracking-wider text-stone-400">
              Trusted Institutional Ecosystem
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.slice(0, 6).map((p, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#FAF9F5] border border-stone-200 text-center flex flex-col justify-center">
                <span className="text-xs font-bold text-stone-800 leading-tight">
                  {p.name.split(' (')[0]}
                </span>
                <span className="text-[10px] text-stone-400 mt-1 uppercase">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* High-Impact Executive Dossier Download Box */}
        <div className="bg-[#0B281B] text-white rounded-3xl p-8 lg:p-14 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-mono text-[#249E6B] uppercase font-bold tracking-wider">
              Executive Dossier Access
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Download Confidential Corporate Documents
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Direct access to the official <strong>Corporate Profile (November 2025)</strong> and <strong>Investment Memorandum 2026</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDossier(1)}
              className="px-5 py-3.5 text-xs font-semibold text-[#0B281B] bg-[#249E6B] hover:bg-[#2db57b] rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-98"
            >
              <FileDown className="w-4 h-4" />
              <span>Download 2026 Memo</span>
            </button>

            <button
              onClick={onOpenInquiry}
              className="px-5 py-3.5 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors"
            >
              <span>Request Data Room Access</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
