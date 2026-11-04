import React, { useState } from 'react';
import { Brain, HeartPulse, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

export const PlatformOverview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1); // Default to Silo-Bank

  const pillars = [
    {
      id: 0,
      code: '01',
      title: 'Central Management System',
      label: 'The Brain',
      icon: Brain,
      summary: 'Oversees capital allocation, risk governance, agronomic data intelligence, and international compliance across every commodity vertical.',
      highlights: [
        'Centralized treasury and capital allocation',
        'Data-driven crop yield & climate-smart analytics',
        'Traceability & ESG governance standards'
      ]
    },
    {
      id: 1,
      code: '02',
      title: 'Proprietary Silo-Bank™ Engine',
      label: 'The Heart',
      icon: HeartPulse,
      summary: 'Standardized Designated Aggregation Centres (DACs) issuing Digital Warehouse Receipts. Farmers receive immediate liquidity while crops are safely stored in solar-powered silos.',
      highlights: [
        'Digital Warehouse Receipts for instant liquidity',
        'Automated quality grading (<5% post-harvest loss)',
        'Direct connection between smallholders & corporate buyers'
      ]
    },
    {
      id: 2,
      code: '03',
      title: 'Dedicated Commodity Verticals',
      label: 'The Limbs',
      icon: Layers,
      summary: 'Independent commercial operational units managing out-grower production, processing, and distribution across grains, oil seeds, and specialty crops.',
      highlights: [
        'Active in Soybeans, Paddy Rice, Maize & Sesame',
        'Flagship Tejaswini Hybrid Chilli commercial scale-up',
        'Multi-state aggregation across 10+ states'
      ]
    }
  ];

  return (
    <section id="platform" className="py-20 lg:py-28 bg-[#F8FAF8] border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-xs font-semibold text-[#1B4332] tracking-wider uppercase mb-2 block">
              Strategic Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C2519] tracking-tight">
              Integrated Agri-Management Platform (IAMP)
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Rather than acting as a simple middleman trader, NFD Agro orchestrates the complete agricultural value chain through three synchronized institutional components.
          </p>
        </div>

        {/* 3 Pillars Bento / Clean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activeTab === pillar.id;

            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`cursor-pointer rounded-2xl p-7 transition-all flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-[#0C2519] text-white border-[#0C2519] shadow-xl ring-2 ring-[#4EBA87]/40 scale-[1.01]'
                    : 'bg-white text-slate-800 border-black/5 hover:border-black/15 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#4EBA87]' : 'text-slate-400'}`}>
                      {pillar.code}
                    </span>
                    <span className={`text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-md ${
                      isSelected ? 'bg-white/10 text-emerald-200' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {pillar.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#1B4332] text-[#4EBA87]' : 'bg-emerald-50 text-[#1B4332]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold leading-snug">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className={`text-xs leading-relaxed mb-6 ${isSelected ? 'text-white/70' : 'text-slate-600'}`}>
                    {pillar.summary}
                  </p>
                </div>

                <div className={`pt-4 border-t space-y-2 text-xs ${isSelected ? 'border-white/10' : 'border-slate-100'}`}>
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isSelected ? 'text-[#4EBA87]' : 'text-[#1B4332]'}`} />
                      <span className={isSelected ? 'text-white/90 font-normal' : 'text-slate-700'}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Silo-Bank Visual Feature Strip */}
        <div className="rounded-3xl bg-white border border-black/5 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-black/5 shrink-0">
            <img
              src="/images/nfd_silo_bank_1793818946998.jpg"
              alt="NFD Agro Silo-Bank Grain Storage & Logistics"
              className="w-full h-52 sm:h-64 object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-[11px] font-semibold text-[#1B4332] uppercase tracking-wider block">
              The Silo-Bank Difference
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0C2519]">
              How Digital Warehouse Receipts Unlock Liquidity
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In traditional Nigerian agriculture, smallholders suffer from post-harvest losses (~40%) and are forced into distress selling at rock-bottom prices. The Silo-Bank system allows farmers to deposit crops into modern solar-powered silos, receive an immediate digital receipt, and borrow against it or sell at peak market values.
            </p>
            <div className="pt-2 flex items-center gap-6 text-xs font-semibold text-[#1B4332]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4EBA87]"></span>
                Zero Distress Selling
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4EBA87]"></span>
                Fair Farmgate Pricing
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
