import React from 'react';
import { ArrowRight, FileText, Shield, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenDoc: (docIndex?: number) => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDoc, onOpenContact }) => {
  return (
    <section className="relative bg-[#0C2519] text-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4EBA87_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#4EBA87]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle Pre-header Text */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#4EBA87] tracking-wider uppercase mb-6">
          <span>{COMPANY_INFO.parentCompany}</span>
          <span className="text-white/30" aria-hidden="true">/</span>
          <span>Integrated Agri-Management Platform</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] text-balance">
              Architecting Nigeria’s <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#4EBA87]">
                Agricultural Economy.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/75 max-w-xl leading-relaxed font-normal">
              Moving beyond traditional trading. NFD Agro connects smallholder farmers to global processors through our proprietary <span className="text-white font-medium">Silo-Bank™ System</span> — guaranteeing quality, supply stability, and instant liquidity across Nigeria’s most productive agro-belts.
            </p>

            {/* Quick Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenDoc(1)}
                className="px-6 py-3.5 text-xs font-semibold text-[#0C2519] bg-[#4EBA87] hover:bg-[#5ec493] rounded-xl transition-all shadow-lg shadow-[#4EBA87]/20 flex items-center gap-2 group active:scale-95"
              >
                <span>Read 2026 Investment Memo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 text-xs font-semibold text-white/90 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-colors flex items-center gap-2"
              >
                <span>Request Partnership</span>
                <ArrowUpRight className="w-4 h-4 text-white/60" />
              </button>
            </div>

            {/* Quiet Trust Meta */}
            <div className="pt-4 flex items-center gap-6 text-xs text-white/50 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#4EBA87]" />
                <span>Asset-Backed Warehouse Receipts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4EBA87]"></span>
                <span>Operational Since 2022</span>
              </div>
            </div>

          </div>

          {/* Focal Image & Micro-Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#091D13] group">
              <img
                src="/images/nfd_hero_farm_1793818947350.jpg"
                alt="NFD Agro Mechanized Harvesting in Nigeria"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2519] via-transparent to-transparent opacity-80" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0C2519]/90 backdrop-blur-md border border-white/15 p-4 rounded-xl text-xs">
                <div className="flex items-center justify-between text-white font-medium mb-1">
                  <span>National Value Chain Orchestrator</span>
                  <span className="text-[#4EBA87] font-mono">10+ States</span>
                </div>
                <p className="text-white/60 text-[11px] leading-snug">
                  Transforming raw harvest potential into institutional-grade, export-compliant agricultural commodities.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Clean, Unboxed 4-Metric Strip */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                ₦4.2B
              </div>
              <div className="text-xs font-semibold text-[#4EBA87] mt-1">
                2025 Revenue (Actual)
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                Up from ₦1.2B in 2024 (250% Growth)
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                ₦100B+
              </div>
              <div className="text-xs font-semibold text-[#4EBA87] mt-1">
                2028 Revenue Target
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                Targeting national market leadership
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                20–27%
              </div>
              <div className="text-xs font-semibold text-[#4EBA87] mt-1">
                Target Investor ROI
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                Asset-backed, consistent double-digit return
              </div>
            </div>

            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight">
                &lt; 5%
              </div>
              <div className="text-xs font-semibold text-[#4EBA87] mt-1">
                Post-Harvest Loss
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                Against ~40% Nigerian industry average
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
