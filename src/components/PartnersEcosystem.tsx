import React from 'react';
import { PARTNERS } from '../data/companyData';
import { Building2, Shield, Landmark, ShoppingBag } from 'lucide-react';

export const PartnersEcosystem: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2 block">
            Institutional Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Strategic Partners & Offtakers
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            NFD Agro operates within a trusted ecosystem of established financial, insurance, government DFI, and commercial off-take partners across Nigeria and international commodity markets.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-[#F4F7F5] border border-slate-200 hover:border-[#1B4332] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white text-[#1B4332] border border-slate-200">
                    {partner.category}
                  </span>
                  <Building2 className="w-4 h-4 text-[#52B788]" />
                </div>
                <h3 className="font-bold text-sm text-slate-900 leading-snug">
                  {partner.name}
                </h3>
                <p className="text-slate-600 text-[11px] mt-2 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
