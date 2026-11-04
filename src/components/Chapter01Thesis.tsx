import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Warehouse, Coins, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface Chapter01ThesisProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
}

export const Chapter01Thesis: React.FC<Chapter01ThesisProps> = ({
  onOpenDossier,
  onOpenInquiry
}) => {
  const [engineLayer, setEngineLayer] = useState<'physical' | 'financial'>('physical');

  return (
    <section id="chapter-01" className="pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-[#E7E5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Kicker */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#249E6B] mb-6">
          <span className="font-mono">Chapter 01</span>
          <span className="text-stone-300">/</span>
          <span className="text-stone-600">The Thesis & Core Infrastructure</span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Bold Typography & Manifesto */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0D281C] leading-[1.06] text-balance">
              Architecting Nigeria’s <br />
              <span className="text-stone-400 font-normal">Agricultural</span> Economy.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed">
              Moving beyond traditional trading. NFD Agro connects smallholder farmers to global markets through an <strong className="text-[#0D281C] font-semibold">Integrated Agri-Management Platform (IAMP)</strong> — de-risking agricultural value chains from seed to shipment.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenDossier(1)}
                className="px-6 py-3.5 text-xs font-semibold text-white bg-[#0D281C] hover:bg-[#143527] rounded-xl transition-all shadow-sm flex items-center gap-2 group active:scale-98"
              >
                <span>Read 2026 Investment Memo</span>
                <ArrowRight className="w-4 h-4 text-[#249E6B] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-xs font-semibold text-stone-700 bg-white hover:bg-stone-50 border border-[#E7E5DC] rounded-xl transition-colors flex items-center gap-2 shadow-2xs"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400" />
              </button>
            </div>

            {/* Sub-thesis note */}
            <div className="pt-4 flex items-center gap-6 text-xs text-stone-500 border-t border-[#E7E5DC]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#249E6B]" />
                <span>Subsidiary of New Frontier Developments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#249E6B]"></span>
                <span>Operational Since 2022</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden bg-white border border-[#E7E5DC] shadow-sm p-3 group">
              <div className="relative rounded-xl overflow-hidden">
                <img
                  src="/src/assets/images/nfd_hero_farm_1793818947350.jpg"
                  alt="Mechanized Harvesting at NFD Agro Farmbelt"
                  className="w-full h-80 sm:h-96 object-cover transition-transform duration-700 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D281C]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 backdrop-blur-md bg-[#0D281C]/75 rounded-lg border border-white/10 text-xs">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Value Chain Orchestration</span>
                    <span className="text-[#249E6B] font-mono">10+ States</span>
                  </div>
                  <p className="text-stone-300 text-[11px] mt-1 leading-snug">
                    Transforming raw smallholder harvests into standardized, internationally compliant commodities.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Crisp Unboxed 4-Metric Ribbon */}
        <div className="bg-white rounded-2xl border border-[#E7E5DC] p-6 lg:p-8 shadow-2xs mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-stone-200">
            
            <div className="pt-2 sm:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0D281C] font-mono tracking-tight">
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
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0D281C] font-mono tracking-tight">
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
                High double-digit asset-backed returns
              </div>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-8">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0D281C] font-mono tracking-tight">
                &lt; 5%
              </div>
              <div className="text-xs font-semibold text-stone-800 mt-1">
                Post-Harvest Loss Target
              </div>
              <div className="text-[11px] text-stone-500 mt-0.5">
                Against ~40% Nigerian industry average
              </div>
            </div>

          </div>
        </div>

        {/* The Silo-Bank™ Dual-Layer Interactive Engine */}
        <div className="bg-white rounded-3xl border border-[#E7E5DC] p-8 lg:p-12 shadow-sm">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#E7E5DC]">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-semibold text-[#249E6B] uppercase tracking-wider block mb-1">
                Proprietary Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D281C] tracking-tight">
                The Silo-Bank™ System: Two Synchronized Layers
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-2">
                Click below to toggle between our physical aggregation hubs and the financial warehouse receipt layer.
              </p>
            </div>

            {/* Segmented Control Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#F9F9F6] border border-[#E7E5DC] rounded-xl self-start md:self-auto">
              <button
                onClick={() => setEngineLayer('physical')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  engineLayer === 'physical'
                    ? 'bg-[#0D281C] text-white shadow-2xs'
                    : 'text-stone-600 hover:text-black'
                }`}
              >
                <Warehouse className="w-3.5 h-3.5 text-[#249E6B]" />
                <span>01. Physical Storage</span>
              </button>

              <button
                onClick={() => setEngineLayer('financial')}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
                  engineLayer === 'financial'
                    ? 'bg-[#0D281C] text-white shadow-2xs'
                    : 'text-stone-600 hover:text-black'
                }`}
              >
                <Coins className="w-3.5 h-3.5 text-[#249E6B]" />
                <span>02. Financial Liquidity</span>
              </button>
            </div>
          </div>

          {/* Active Layer Content */}
          {engineLayer === 'physical' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0D281C]">
                  Designated Aggregation Centres (DACs)
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Located strategically across rural farming corridors, DACs are equipped with solar-powered moisture controllers, certified grain weighbridges, and climate-sealed steel silos.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249E6B] shrink-0 mt-0.5" />
                    <span><strong>Loss Reduction:</strong> Reduces post-harvest spoilage from 40% down to under 5%.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249E6B] shrink-0 mt-0.5" />
                    <span><strong>Quality Certification:</strong> Testing for Aflatoxin (&lt;10ppb) and moisture (&lt;10%).</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249E6B] shrink-0 mt-0.5" />
                    <span><strong>Clean Solar Power:</strong> Off-grid solar cooling ensuring zero interruption from local grid instability.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-2xl overflow-hidden border border-[#E7E5DC]">
                <img
                  src="/src/assets/images/nfd_silo_bank_1793818946998.jpg"
                  alt="NFD Agro Steel Silo Storage Bank"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-xl font-bold text-[#0D281C]">
                  Asset-Backed Digital Warehouse Receipts
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Instead of forcing farmers to dump crops during harvest gluts, deposited commodities generate secure Digital Warehouse Receipts that unlock working capital through leading partner banks.
                </p>
                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249E6B] shrink-0 mt-0.5" />
                    <span><strong>Instant Liquidity:</strong> Farmers access cash within 48 hours of grain deposit at DACs.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249E6B] shrink-0 mt-0.5" />
                    <span><strong>Collateralized Financing:</strong> Receipts act as bankable collateral supported by NIRSAL guarantees.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-[#249E6B] shrink-0 mt-0.5" />
                    <span><strong>Fixed Offtake Fulfillment:</strong> Guaranteed delivery to FMCG buyers (Olam, WACOT) at contracted rates.</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0D281C] text-white p-7 rounded-2xl border border-white/10 space-y-4">
                <span className="text-[11px] font-mono text-[#249E6B] uppercase font-bold">
                  Ecosystem De-risking
                </span>
                <h4 className="text-lg font-bold">
                  Eliminating Middlemen & Volatility
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  By controlling storage, testing, and finance, NFD Agro captures margins across every transition point, protecting farmers from predatory spot traders and guaranteeing quality to industrial processors.
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-stone-400 border-t border-white/10">
                  <span>Farmgate Deposit</span>
                  <span>→</span>
                  <span>Digital Token / Receipt</span>
                  <span>→</span>
                  <span>Direct Delivery</span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
