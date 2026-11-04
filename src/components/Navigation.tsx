import React, { useState } from 'react';
import { Sprout, FileDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavigationProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
  activeChapter?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenDossier,
  onOpenInquiry,
  activeChapter = 'chapter-01'
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const chapters = [
    { id: 'chapter-01', num: '01', label: 'The Thesis' },
    { id: 'chapter-02', num: '02', label: 'Breakthrough' },
    { id: 'chapter-03', num: '03', label: 'The Network' },
    { id: 'chapter-04', num: '04', label: 'Scale Horizon' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#F9F9F6]/90 backdrop-blur-md border-b border-[#E7E5DC] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Single text wordmark with minimal badge */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-[#0D281C] text-[#249E6B] flex items-center justify-center transition-transform group-hover:scale-105">
              <Sprout className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-[#0D281C] leading-none">
                NFD AGRO <span className="text-[#249E6B] font-semibold">LIMITED</span>
              </span>
              <span className="text-[10px] text-stone-500 font-mono tracking-wider mt-0.5">
                {COMPANY_INFO.rcNumber} · IAMP
              </span>
            </div>
          </a>

          {/* Zone 2: Chapter Navigation Links (Clean, Unboxed, Single-Line) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-stone-600">
            {chapters.map((chap) => {
              const isActive = activeChapter === chap.id;
              return (
                <a
                  key={chap.id}
                  href={`#${chap.id}`}
                  className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 hover:text-[#0D281C] ${
                    isActive ? 'text-[#0D281C]' : 'text-stone-500'
                  }`}
                >
                  <span className={`font-mono text-[10px] ${isActive ? 'text-[#249E6B] font-bold' : 'text-stone-400'}`}>
                    {chap.num}.
                  </span>
                  <span>{chap.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#249E6B] ml-0.5" />}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1 Memo Button + 1 Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenDossier(1)}
              className="px-3.5 py-2 text-xs font-medium text-stone-700 hover:text-[#0D281C] bg-white hover:bg-stone-100 rounded-lg border border-[#E7E5DC] transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 shadow-2xs"
            >
              <FileDown className="w-3.5 h-3.5 text-[#249E6B]" />
              <span>2026 Memo</span>
            </button>

            <button
              onClick={onOpenInquiry}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0D281C] hover:bg-[#143527] rounded-lg transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap shrink-0 active:scale-98"
            >
              <span>Partner Access</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#249E6B]" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-700 hover:text-black"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F9F9F6] border-b border-[#E7E5DC] px-4 pt-3 pb-6 space-y-2">
          {chapters.map((chap) => (
            <a
              key={chap.id}
              href={`#${chap.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2.5 text-xs font-semibold text-stone-800 hover:bg-stone-100 rounded-lg"
            >
              <span className="font-mono text-stone-400">{chap.num}.</span>
              <span className="flex-1 ml-2">{chap.label}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          ))}
          <div className="pt-3 border-t border-[#E7E5DC] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDossier(1);
              }}
              className="py-2.5 px-3 text-xs font-medium text-stone-700 bg-white border border-[#E7E5DC] rounded-lg text-center"
            >
              2026 Memo PDF
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="py-2.5 px-3 text-xs font-semibold text-white bg-[#0D281C] rounded-lg text-center"
            >
              Partner Access
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
