import React, { useState } from 'react';
import { Sprout, FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenDoc: (docIndex?: number) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDoc, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0C2519]/90 backdrop-blur-md text-white border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text element wordmark + clean leaf emblem */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-[#1B4332] text-[#4EBA87] flex items-center justify-center border border-[#4EBA87]/30 group-hover:border-[#4EBA87] transition-all">
              <Sprout className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white whitespace-nowrap leading-tight">
                NFD AGRO <span className="text-[#4EBA87] font-semibold">LIMITED</span>
              </span>
              <span className="text-[10px] text-white/50 tracking-wider">
                RC 1390052 · ABUJA, NIGERIA
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (single-line, concise) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/80">
            <a href="#platform" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              The Platform
            </a>
            <a href="#flagship" className="hover:text-white transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5">
              <span>Tejaswini Chilli</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4EBA87]"></span>
            </a>
            <a href="#commodities" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Commodities
            </a>
            <a href="#growth" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Growth Horizon
            </a>
            <a href="#leadership" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Leadership
            </a>
          </nav>

          {/* Zone 3: Direct PDF Memo + Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDoc(1)}
              className="px-3.5 py-2 text-xs font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 border border-white/15"
            >
              <FileDown className="w-3.5 h-3.5 text-[#4EBA87]" />
              <span>Investment Memo</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-[#0C2519] bg-[#4EBA87] hover:bg-[#5ec493] rounded-lg transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A1F15] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#platform"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
          >
            The Platform (IAMP)
          </a>
          <a
            href="#flagship"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
          >
            Tejaswini Chilli Project
          </a>
          <a
            href="#commodities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
          >
            Commodities & Sourcing
          </a>
          <a
            href="#growth"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
          >
            Growth Trajectory (2024-2028)
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-md"
          >
            Leadership & Governance
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDoc(1);
              }}
              className="w-full py-2.5 px-3 text-xs font-semibold text-white bg-white/10 rounded-lg flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4 text-[#4EBA87]" />
              <span>Download 2026 Investment Memo</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-3 text-xs font-semibold text-[#0C2519] bg-[#4EBA87] rounded-lg"
            >
              Partner With Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
