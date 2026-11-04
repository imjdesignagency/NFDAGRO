import React from 'react';
import { ArrowUpRight, FileDown, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { GROWTH_TRAJECTORY, LEADERSHIP_TEAM, PARTNERS } from '../data/companyData';

interface Chapter04ScaleProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
}

export const Chapter04Scale: React.FC<Chapter04ScaleProps> = ({
  onOpenDossier,
  onOpenInquiry
}) => {
  return (
    <section id="chapter-04" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#249E6B] mb-6">
          <span className="font-mono">Chapter 04</span>
          <span className="text-stone-300">/</span>
          <span className="text-stone-600">The Scale Horizon & Return Economics</span>
        </div>

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D281C] tracking-tight">
              A Direct Trajectory to <br />
              <span className="text-stone-400 font-normal">₦100B+ Market</span> Leadership.
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold">
            <span className="px-3.5 py-1.5 bg-white text-stone-800 rounded-lg border border-[#E7E5DC] shadow-2xs">
              Target Investor ROI: <strong className="text-[#249E6B]">20–27%</strong>
            </span>
            <span className="px-3.5 py-1.5 bg-white text-stone-800 rounded-lg border border-[#E7E5DC] shadow-2xs">
              Project Level ROI: <strong className="text-[#0D281C]">45%+</strong>
            </span>
          </div>
        </div>

        {/* 5-Milestone Progression Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-20">
          {GROWTH_TRAJECTORY.map((item) => {
            const isScaleYear = item.year === 2026;
            return (
              <div
                key={item.year}
                className={`rounded-2xl p-5 border flex flex-col justify-between transition-all ${
                  isScaleYear
                    ? 'bg-[#0D281C] text-white border-[#0D281C] shadow-md ring-2 ring-[#249E6B]/30 scale-[1.02]'
                    : 'bg-white text-stone-800 border-[#E7E5DC] shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className={isScaleYear ? 'text-[#249E6B] font-bold' : 'text-stone-400'}>
                      {item.year} {item.isActual ? '(Actual)' : ''}
                    </span>
                    {isScaleYear && (
                      <span className="bg-[#249E6B]/20 text-[#249E6B] px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">
                        Scale Year
                      </span>
                    )}
                  </div>

                  <div className="text-2xl font-extrabold font-mono tracking-tight mb-2">
                    {item.revenue}
                  </div>

                  <h3 className={`text-xs font-bold leading-snug mb-2 ${isScaleYear ? 'text-white' : 'text-[#0D281C]'}`}>
                    {item.focus}
                  </h3>
                </div>

                <p className={`text-[11px] leading-relaxed pt-3 border-t mt-4 ${
                  isScaleYear ? 'border-white/10 text-stone-300' : 'border-stone-100 text-stone-500'
                }`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Executive Leadership Trio */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-xs font-mono text-[#249E6B] uppercase font-bold tracking-wider">
              Governance & Oversight
            </span>
            <h3 className="text-2xl font-bold text-[#0D281C] mt-1">
              Executive Leadership
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP_TEAM.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl border border-[#E7E5DC] p-6 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0D281C] text-[#249E6B] flex items-center justify-center font-mono font-bold text-sm">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-[11px] font-mono text-stone-500">
                      {leader.experienceYears}+ Years Experience
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#0D281C]">
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

        {/* Strategic Ecosystem Logos */}
        <div className="bg-white rounded-2xl border border-[#E7E5DC] p-8 shadow-2xs mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-stone-400 uppercase tracking-wider">
              Trusted Banking, Insurance & Commercial Offtake Partners
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS.slice(0, 6).map((p, i) => (
              <div key={i} className="p-3.5 rounded-xl bg-[#F9F9F6] border border-stone-100 text-center flex flex-col justify-center">
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

        {/* Executive Dossier Call to Action */}
        <div className="bg-[#0D281C] text-white rounded-3xl p-8 lg:p-12 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-mono text-[#249E6B] uppercase font-bold tracking-wider">
              Confidential Documents Available
            </span>
            <h3 className="text-2xl font-bold text-white">
              Access the Complete 2026 Executive Dossier
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Download the official <strong>Corporate Profile</strong> and <strong>2026 Investment Memo</strong>, or submit a confidential partnership inquiry for data room access.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDossier(1)}
              className="px-5 py-3 text-xs font-semibold text-[#0D281C] bg-[#249E6B] hover:bg-[#2db57b] rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-98"
            >
              <FileDown className="w-4 h-4" />
              <span>Download 2026 Memo</span>
            </button>

            <button
              onClick={onOpenInquiry}
              className="px-5 py-3 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl transition-colors"
            >
              <span>Schedule Intro Call</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
