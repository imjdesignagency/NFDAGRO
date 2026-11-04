import React from 'react';
import { Sun, Users, ShieldCheck, Droplet, Heart, Trees } from 'lucide-react';

export const EsgImpact: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2 block">
            Responsible Agribusiness & Sustainability
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Embedded ESG as a Core Business Driver
          </h2>
          <p className="mt-3 text-slate-600 text-sm leading-relaxed">
            Sustainability is not an afterthought at NFD Agro — it is woven directly into our operational unit economics. Sustainable farming practices lead to superior crop quality, lower waste, and resilient community supply chains.
          </p>
        </div>

        {/* 3 Pillars of ESG */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Environmental */}
          <div className="bg-[#F4F7F5] border border-slate-200 rounded-3xl p-8 hover:border-[#1B4332] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#52B788] flex items-center justify-center mb-6">
              <Sun className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#1B4332] uppercase">
              Pillar 01
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              Environmental Stewardship
            </h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Sun className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Solar-Powered Processing:</strong> Clean energy micro-grids for cooling and grain drying at DAC hubs.</span>
              </li>
              <li className="flex items-start gap-2">
                <Droplet className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Water Efficiency:</strong> Drip irrigation systems deployed across Tejaswini chilli and rice plots.</span>
              </li>
              <li className="flex items-start gap-2">
                <Trees className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Climate-Smart Ag:</strong> Soil health management, organic fertilizers, and zero-deforestation sourcing.</span>
              </li>
            </ul>
          </div>

          {/* Social Impact */}
          <div className="bg-[#F4F7F5] border border-slate-200 rounded-3xl p-8 hover:border-[#1B4332] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#52B788] flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#1B4332] uppercase">
              Pillar 02
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              Social & Community Uplift
            </h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>5,000+ Farmers Targeted:</strong> Guaranteed fair pricing, agronomic extension, and timely payouts.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Gender Inclusion:</strong> Female cooperative empowerment in wild shea nut harvesting in Niger State.</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Capacity Building:</strong> Hands-on training in post-harvest handling and financial literacy.</span>
              </li>
            </ul>
          </div>

          {/* Governance */}
          <div className="bg-[#F4F7F5] border border-slate-200 rounded-3xl p-8 hover:border-[#1B4332] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#1B4332] text-[#52B788] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#1B4332] uppercase">
              Pillar 03
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
              Governance & Integrity
            </h3>
            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Transparent Contracts:</strong> Clear, enforceable out-grower terms and transparent quality grading.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Ethical Sourcing:</strong> Full supply chain traceability from farm gate to international off-taker.</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                <span><strong>Chartered Audit:</strong> Rigorous internal risk controls led by ICAN chartered financial leadership.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
