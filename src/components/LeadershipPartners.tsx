import React from 'react';
import { Award, Building2 } from 'lucide-react';
import { LEADERSHIP_TEAM, PARTNERS } from '../data/companyData';

export const LeadershipPartners: React.FC = () => {
  return (
    <section id="leadership" className="py-20 lg:py-28 bg-[#F8FAF8] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold text-[#1B4332] tracking-wider uppercase mb-2 block">
            Executive Governance & Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2519] tracking-tight">
            Experienced Agribusiness Leadership
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Combining deep institutional banking pedigree, hands-on agricultural field operations, and rigorous chartered financial control.
          </p>
        </div>

        {/* 3 Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {LEADERSHIP_TEAM.map((leader) => (
            <div
              key={leader.id}
              className="rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:border-black/15 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0C2519] text-[#4EBA87] flex items-center justify-center font-bold text-lg font-mono">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1B4332] bg-emerald-50 px-2.5 py-1 rounded-md">
                    {leader.experienceYears}+ Yrs Experience
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-[#1B4332] mb-3">
                  {leader.title}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {leader.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                <Award className="w-3.5 h-3.5 text-[#4EBA87] shrink-0" />
                <span className="truncate">{leader.keyCertifications[0]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Ecosystem / Partners Marquee Bar */}
        <div className="rounded-2xl bg-white border border-black/5 p-8 shadow-sm">
          <div className="text-center mb-6">
            <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">
              Operating within a trusted financial & commercial ecosystem
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center text-center">
            {PARTNERS.slice(0, 6).map((partner, index) => (
              <div
                key={index}
                className="p-3 rounded-xl bg-[#F8FAF8] border border-slate-100 flex flex-col items-center justify-center min-h-[72px]"
              >
                <span className="text-xs font-bold text-slate-800 leading-tight">
                  {partner.name.split(' (')[0]}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 uppercase">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
