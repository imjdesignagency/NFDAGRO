import React, { useState } from 'react';
import { X, FileDown, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface DocumentDossierProps {
  isOpen: boolean;
  onClose: () => void;
  initialDocIndex?: number;
}

export const DocumentDossier: React.FC<DocumentDossierProps> = ({
  isOpen,
  onClose,
  initialDocIndex = 1
}) => {
  const [selectedDoc, setSelectedDoc] = useState<number>(initialDocIndex);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Institutional Investor');

  if (!isOpen) return null;

  const activeDoc = COMPANY_INFO.documents[selectedDoc] || COMPANY_INFO.documents[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setInquirySubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-[#E7E5DC] relative animate-fadeIn">
        
        {/* Header */}
        <div className="bg-[#0D281C] text-white p-6 sm:p-7 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#249E6B] uppercase font-bold tracking-wider">
              NFD Agro Executive Dossier
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Official Corporate Briefings
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-300 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Document Picker */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {COMPANY_INFO.documents.map((doc, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedDoc(idx)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  selectedDoc === idx
                    ? 'bg-stone-50 border-[#0D281C] text-[#0D281C] ring-1 ring-[#0D281C]'
                    : 'bg-[#F9F9F6] border-[#E7E5DC] text-stone-600 hover:bg-stone-100'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase font-bold text-stone-400">
                    PDF Memo
                  </span>
                  <FileDown className={`w-4 h-4 ${selectedDoc === idx ? 'text-[#249E6B]' : 'text-stone-400'}`} />
                </div>
                <div className="text-xs font-bold leading-snug">
                  {doc.title}
                </div>
              </button>
            ))}
          </div>

          {/* Download Action Card */}
          <div className="p-4 rounded-xl bg-[#F9F9F6] border border-[#E7E5DC] flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#0D281C] block">
                {activeDoc.title}
              </span>
              <span className="text-[11px] text-stone-500">
                Official confidential briefing for stakeholders & partners.
              </span>
            </div>

            <a
              href={activeDoc.path}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0D281C] hover:bg-[#143527] rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
            >
              <span>Open PDF</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#249E6B]" />
            </a>
          </div>

          {/* Quick Inquiry / Data Room Request */}
          <div className="pt-4 border-t border-stone-200">
            <h4 className="text-xs font-bold text-[#0D281C] uppercase tracking-wider mb-3">
              Request Full Data Room Access
            </h4>

            {inquirySubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-xs text-emerald-900">
                <CheckCircle2 className="w-5 h-5 text-[#249E6B] shrink-0" />
                <span>Thank you, {name}! Your inquiry has been sent to NFD Agro Business Development.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-3 text-xs bg-[#F9F9F6] border border-[#E7E5DC] rounded-xl focus:outline-none focus:border-[#0D281C]"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Corporate Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 text-xs bg-[#F9F9F6] border border-[#E7E5DC] rounded-xl focus:outline-none focus:border-[#0D281C]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {['Institutional Investor', 'Commercial Offtaker', 'DFI / Government'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2 px-2 text-[11px] font-semibold rounded-lg border text-center transition-all ${
                        role === r
                          ? 'bg-[#0D281C] text-white border-[#0D281C]'
                          : 'bg-white text-stone-600 border-[#E7E5DC] hover:bg-stone-50'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-[#0D281C] hover:bg-[#143527] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <span>Submit Data Room Request</span>
                  <Send className="w-3.5 h-3.5 text-[#249E6B]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
