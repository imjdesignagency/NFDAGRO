import React, { useState } from 'react';
import { X, FileDown, CheckCircle2, Send, ExternalLink, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface DocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeDocIndex?: number;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({
  isOpen,
  onClose,
  activeDocIndex = 0
}) => {
  const [selectedDoc, setSelectedDoc] = useState<number>(activeDocIndex);
  const [inquirySent, setInquirySent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setInquirySent(true);
  };

  const currentDoc = COMPANY_INFO.documents[selectedDoc] || COMPANY_INFO.documents[0];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-black/10 animate-fadeIn relative">
        
        {/* Header */}
        <div className="bg-[#0C2519] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#4EBA87] uppercase font-bold tracking-wider">
              Official Executive Documents
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              NFD Agro Executive Dossier
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Document Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPANY_INFO.documents.map((doc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDoc(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedDoc === idx
                    ? 'bg-emerald-50 border-[#1B4332] text-[#0C2519] ring-1 ring-[#1B4332]'
                    : 'bg-[#F8FAF8] border-black/5 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    PDF Document
                  </span>
                  <FileDown className={`w-4 h-4 ${selectedDoc === idx ? 'text-[#1B4332]' : 'text-slate-400'}`} />
                </div>
                <div className="font-bold text-xs leading-snug">
                  {doc.title}
                </div>
              </button>
            ))}
          </div>

          {/* Active Document Action Box */}
          <div className="bg-[#F8FAF8] rounded-2xl p-5 border border-black/5 flex items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-bold text-slate-900 block">
                {currentDoc.title}
              </span>
              <span className="text-[11px] text-slate-500">
                Official confidential briefing for stakeholders & partners.
              </span>
            </div>

            <a
              href={currentDoc.path}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-xs font-semibold text-white bg-[#0C2519] hover:bg-[#1B4332] rounded-xl transition-colors flex items-center gap-2 shrink-0"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#4EBA87]" />
            </a>
          </div>

          {/* Quick Inquiry Form */}
          <div className="border-t border-slate-100 pt-5">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Request Direct Data Room Access
            </h4>

            {inquirySent ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-xs text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-[#4EBA87] shrink-0" />
                <span>Thank you! Your request has been logged. Our business development team will follow up directly.</span>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 text-xs bg-[#F8FAF8] border border-slate-200 rounded-xl focus:outline-none focus:border-[#1B4332]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 text-xs bg-[#F8FAF8] border border-slate-200 rounded-xl focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-[#0C2519] bg-[#4EBA87] hover:bg-[#5ec493] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Partner Request</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
