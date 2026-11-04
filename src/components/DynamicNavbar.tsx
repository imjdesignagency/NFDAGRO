import React, { useState } from 'react';
import { Sprout, FileDown, ArrowUpRight, Menu, X, Play } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface DynamicNavbarProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
  onScrollToSimulator: () => void;
}

export const DynamicNavbar: React.FC<DynamicNavbarProps> = ({
  onOpenDossier,
  onOpenInquiry,
  onScrollToSimulator
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#F6F5F0]/90 backdrop-blur-md border-b border-[#E5E2D8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Brand Wordmark with Serif Flair */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-[#0B281B] text-[#249E6B] flex items-center justify-center transition-transform group-hover:scale-105">
              <Sprout className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#0B281B] leading-none">
                NFD AGRO <span className="font-sans font-semibold text-[#249E6B] text-xs">LIMITED</span>
              </span>
              <span className="font-sans text-[10px] text-stone-500 font-mono tracking-wider mt-0.5">
                {COMPANY_INFO.rcNumber} · ABUJA
              </span>
            </div>
          </a>

          {/* Navigation Links with Action Focus */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-stone-600">
            <button
              onClick={onScrollToSimulator}
              className="hover:text-[#0B281B] transition-colors flex items-center gap-1.5 whitespace-nowrap text-[#0B281B]"
            >
              <Play className="w-3 h-3 text-[#249E6B] fill-[#249E6B]" />
              <span>Pipeline Simulator</span>
            </button>
            <a href="#chilli" className="hover:text-[#0B281B] transition-colors whitespace-nowrap">
              Chilli Project
            </a>
            <a href="#sourcing" className="hover:text-[#0B281B] transition-colors whitespace-nowrap">
              Sourcing Radar
            </a>
            <a href="#scale" className="hover:text-[#0B281B] transition-colors whitespace-nowrap">
              Scale Horizon
            </a>
            <a href="#leadership" className="hover:text-[#0B281B] transition-colors whitespace-nowrap">
              Governance
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDossier(1)}
              className="px-3.5 py-2 text-xs font-semibold text-stone-700 hover:text-[#0B281B] bg-white hover:bg-stone-50 rounded-lg border border-[#E5E2D8] transition-all flex items-center gap-1.5 whitespace-nowrap shadow-2xs"
            >
              <FileDown className="w-3.5 h-3.5 text-[#249E6B]" />
              <span>Investment Memo</span>
            </button>

            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0B281B] hover:bg-[#133E2B] rounded-lg transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap active:scale-98"
            >
              <span>Data Room Access</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#249E6B]" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-black"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F5F0] border-b border-[#E5E2D8] px-4 pt-3 pb-6 space-y-2">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onScrollToSimulator();
            }}
            className="w-full text-left px-3 py-2.5 text-xs font-semibold text-[#0B281B] bg-white rounded-lg border border-[#E5E2D8] flex items-center gap-2"
          >
            <Play className="w-3 h-3 text-[#249E6B] fill-[#249E6B]" />
            <span>Interactive Pipeline Simulator</span>
          </button>
          <a
            href="#chilli"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-semibold text-stone-700 hover:text-[#0B281B]"
          >
            Tejaswini Chilli Project
          </a>
          <a
            href="#sourcing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-semibold text-stone-700 hover:text-[#0B281B]"
          >
            Sourcing Hub Radar (10+ States)
          </a>
          <a
            href="#scale"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-xs font-semibold text-stone-700 hover:text-[#0B281B]"
          >
            Scaling Trajectory & Returns
          </a>
          <div className="pt-3 border-t border-[#E5E2D8] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier(1);
              }}
              className="py-2.5 px-3 text-xs font-semibold text-stone-700 bg-white border border-[#E5E2D8] rounded-lg text-center"
            >
              2026 Memo PDF
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="py-2.5 px-3 text-xs font-semibold text-white bg-[#0B281B] rounded-lg text-center"
            >
              Data Room
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
