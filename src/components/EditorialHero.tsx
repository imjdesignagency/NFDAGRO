import React from 'react';
import { ArrowRight, Play, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

import heroFarmImg from '../assets/images/nfd_hero_farm_1793818947350.jpg';

interface EditorialHeroProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
  onScrollToSimulator: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({
  onOpenDossier,
  onOpenInquiry,
  onScrollToSimulator
}) => {
  return (
    <section className="pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#E5E2D8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Institutional Pre-Title */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#249E6B] mb-6">
          <span>{COMPANY_INFO.parentCompany}</span>
          <span className="text-stone-300">/</span>
          <span>Integrated Agri-Management Platform</span>
        </div>

        {/* Hero Headline & Asymmetric Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Text Column with Playfair Display */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B281B] leading-[1.08] text-balance">
              Architecting Nigeria’s <br />
              <span className="italic font-normal text-stone-500">Agricultural</span> Economy.
            </h1>

            <p className="font-sans text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Moving beyond traditional trading. NFD Agro operates an <strong className="text-[#0B281B] font-semibold">Integrated Agri-Management Platform (IAMP)</strong> — de-risking agricultural value chains from seed to shipment through proprietary <strong className="text-[#0B281B] font-semibold">Silo-Bank™</strong> storage hubs and asset-backed digital receipts.
            </p>

            {/* Dynamic Triggers */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onScrollToSimulator}
                className="px-6 py-3.5 text-xs font-semibold text-white bg-[#0B281B] hover:bg-[#133E2B] rounded-xl transition-all shadow-md flex items-center gap-2 group active:scale-98"
              >
                <Play className="w-3.5 h-3.5 text-[#249E6B] fill-[#249E6B]" />
                <span>Launch Pipeline Simulator</span>
                <ArrowRight className="w-4 h-4 text-stone-300 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenDossier(1)}
                className="px-6 py-3.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-[#E5E2D8] rounded-xl transition-colors flex items-center gap-2 shadow-2xs"
              >
                <span>Read 2026 Investment Memo</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Quick Proof Strip */}
            <div className="pt-4 flex items-center gap-6 text-xs text-stone-500 border-t border-[#E5E2D8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#249E6B]" />
                <span>Asset-Backed Warehouse Receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#249E6B]"></span>
                <span>Operational Since 2022</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Plate */}
          <div className="lg:col-span-5 relative">
            <div className="paper-card rounded-2xl p-3 shadow-md group">
              <div className="relative rounded-xl overflow-hidden bg-stone-900">
                <img
                  src={heroFarmImg}
                  alt="Mechanized Grain Harvesting in Nigeria"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B281B]/80 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 p-3.5 backdrop-blur-md bg-[#0B281B]/85 rounded-xl border border-white/10 text-white text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Value Chain Orchestration</span>
                    <span className="text-[#249E6B] font-mono">10+ States</span>
                  </div>
                  <p className="text-stone-300 text-[11px] mt-1 leading-snug">
                    Transforming raw smallholder crops into standardized, institutional-grade commodities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Live Actual Metrics Ribbon in White Plate */}
        <div className="paper-card rounded-2xl p-6 lg:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            
            <div className="pt-2 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B281B] font-mono tracking-tight">
                ₦4.2B
              </div>
              <div className="text-xs font-semibold text-stone-800 mt-1">
                2025 Revenue (Actual)
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Up from ₦1.2B in 2024 (250% Growth)
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B281B] font-mono tracking-tight">
                ₦100B+
              </div>
              <div className="text-xs font-semibold text-stone-800 mt-1">
                2028 Revenue Target
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Targeting national market leadership
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#249E6B] font-mono tracking-tight">
                20–27%
              </div>
              <div className="text-xs font-semibold text-stone-800 mt-1">
                Target Investor ROI
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Asset-backed double-digit return
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B281B] font-mono tracking-tight">
                &lt; 5%
              </div>
              <div className="text-xs font-semibold text-stone-800 mt-1">
                Post-Harvest Loss Target
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Against ~40% Nigerian average
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
