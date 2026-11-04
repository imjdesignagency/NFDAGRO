import React, { useState } from 'react';
import { LEADERSHIP_TEAM } from '../data/companyData';
import { LeadershipMember } from '../types';
import { UserCheck, Award, X, ChevronRight, Briefcase } from 'lucide-react';

export const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeadershipMember | null>(null);

  return (
    <section id="leadership" className="py-20 bg-[#F4F7F5] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2 block">
            Executive Governance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Leadership Team Driving Transformation
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Led by seasoned banking, agribusiness, and financial strategy experts with decades of combined experience across global corporate governance and Nigerian value chains.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LEADERSHIP_TEAM.map((leader: LeadershipMember) => (
            <div
              key={leader.id}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col justify-between hover:border-[#1B4332] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#1B4332] text-[#52B788] flex items-center justify-center font-bold text-xl font-mono shadow-sm">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-[11px] font-semibold text-[#1B4332] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {leader.experienceYears}+ Yrs Exp
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1B4332] transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-[#1B4332] mt-0.5 mb-3">
                  {leader.title}
                </div>

                <p className="text-slate-600 text-xs leading-relaxed mb-4">
                  {leader.summary}
                </p>

                {/* Certifications preview */}
                <div className="space-y-1.5 mb-6">
                  {leader.keyCertifications.slice(0, 2).map((cert, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <Award className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedLeader(leader)}
                className="w-full py-2.5 px-4 text-xs font-semibold text-[#1B4332] bg-[#F4F7F5] hover:bg-[#1B4332] hover:text-white rounded-xl transition-colors border border-slate-200 flex items-center justify-center gap-2"
              >
                <span>Read Full Biography</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Executive Bio Modal */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative border border-slate-200 animate-fadeIn max-h-[90vh] overflow-y-auto">
              
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1B4332] text-[#52B788] flex items-center justify-center font-bold text-2xl font-mono shrink-0">
                  {selectedLeader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {selectedLeader.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#1B4332]">
                    {selectedLeader.title} · {selectedLeader.experienceYears}+ Years Experience
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                    Executive Biography
                  </h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {selectedLeader.fullBio}
                  </p>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                    Key Credentials & Affiliations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.keyCertifications.map((cert, i) => (
                      <span key={i} className="bg-emerald-50 text-[#1B4332] border border-emerald-200 px-3 py-1 rounded-md font-medium">
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-2">
                    Areas of Expertise
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedLeader.expertiseAreas.map((exp, i) => (
                      <div key={i} className="flex items-center gap-2 bg-[#F4F7F5] p-2 rounded-lg text-slate-800">
                        <Briefcase className="w-3.5 h-3.5 text-[#52B788] shrink-0" />
                        <span>{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-8 pt-4 border-t border-slate-200 text-right">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#1B4332] rounded-xl hover:bg-[#143527]"
                >
                  Close Profile
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
