import React from 'react';
import { Sprout, Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onOpenDossier: (docIndex?: number) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDossier, onOpenInquiry }) => {
  return (
    <footer className="bg-[#0D281C] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#249E6B]/20 text-[#249E6B] flex items-center justify-center">
                <Sprout className="w-4 h-4" />
              </div>
              <span className="text-base font-bold tracking-tight text-white">
                NFD AGRO <span className="text-[#249E6B]">LIMITED</span>
              </span>
            </div>

            <p className="text-xs text-stone-300 leading-relaxed max-w-sm">
              Architecting Nigeria’s Agricultural Economy. A vertically integrated subsidiary of New Frontier Developments Limited operating across 10+ states.
            </p>

            <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
              <span>{COMPANY_INFO.rcNumber}</span>
              <span>·</span>
              <span>Inc. {COMPANY_INFO.incorporatedYear}</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-stone-300">
            <span className="font-bold text-white uppercase tracking-wider text-[11px] block mb-1">
              Documents
            </span>
            <ul className="space-y-1.5">
              <li>
                <button onClick={() => onOpenDossier(0)} className="hover:text-white transition-colors">
                  Corporate Profile (PDF)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenDossier(1)} className="hover:text-white transition-colors">
                  2026 Investment Memo (PDF)
                </button>
              </li>
              <li>
                <button onClick={onOpenInquiry} className="hover:text-white transition-colors">
                  Request Data Room
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-2 text-xs text-stone-300">
            <span className="font-bold text-white uppercase tracking-wider text-[11px] block mb-1">
              Headquarters
            </span>
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#249E6B] shrink-0 mt-0.5" />
              <span>14 Winnipeg Close, Maitama, Abuja</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#249E6B] shrink-0" />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#249E6B] shrink-0" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-stone-400 gap-4">
          <div>
            © {new Date().getFullYear()} NFD Agro Limited. Confidential Demo Presentation.
          </div>
          <div className="font-mono text-stone-400">
            Integrated Agri-Management Platform (IAMP)
          </div>
        </div>

      </div>
    </footer>
  );
};
