import React, { useState } from 'react';
import { X, Send, FileText, CheckCircle2, Phone, Mail, MapPin, Download, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, initialMode = 'partnership' }) => {
  const [partnerType, setPartnerType] = useState<string>(
    initialMode === 'investor' ? 'Institutional Investor / DFI' :
    initialMode === 'offtaker' ? 'Commodity Offtaker / Processor' : 'Strategic Partner / Government'
  );
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    phone: '',
    commodityInterest: 'Soya Beans',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden relative border border-slate-200 animate-fadeIn max-h-[92vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#1B4332] text-white p-6 sm:p-8 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-mono text-[#52B788] uppercase font-bold">
              NFD Agro Engagement
            </span>
            <h2 className="text-2xl font-bold text-white mt-0.5">
              Let's Build Together
            </h2>
            <p className="text-slate-300 text-xs mt-1">
              Open to partnerships with investors, DFIs, commodity off-take buyers, and government agencies.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-2 rounded-full hover:bg-[#2D6A4F]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body Scroll Container */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Document Access Quick Cards */}
          <div className="bg-[#F4F7F5] border border-slate-200 rounded-2xl p-5">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#1B4332]" />
              <span>Official Executive Documentation</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COMPANY_INFO.documents.map((doc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between gap-3">
                  <div className="overflow-hidden">
                    <span className="font-bold text-xs text-slate-900 block truncate">{doc.title}</span>
                    <span className="text-[10px] text-slate-500">Official PDF Briefing</span>
                  </div>
                  <a
                    href={doc.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#1B4332] text-white hover:bg-[#143527] transition-colors shrink-0 flex items-center gap-1 text-[11px] font-semibold"
                  >
                    <span>View</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Form / Submitted Message */}
          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#1B4332] text-[#52B788] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Inquiry Submitted Successfully
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for reaching out to NFD Agro Limited. Our Business Development team will review your message and contact you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 text-xs font-bold text-[#1B4332] bg-[#52B788] rounded-xl hover:bg-[#74c69d]"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-xs font-bold text-slate-900 uppercase mb-2">
                  Partnership Category
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Institutional Investor / DFI',
                    'Commodity Offtaker / Processor',
                    'Strategic Partner / Government'
                  ].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setPartnerType(cat)}
                      className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all ${
                        partnerType === cat
                          ? 'bg-[#1B4332] text-white border-[#1B4332]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Salma Ibrahim"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. info@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Global Spice Processing Ltd"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +234 810 103 682"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F4F7F5] border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Commodity or Project Focus
                </label>
                <select
                  value={formData.commodityInterest}
                  onChange={(e) => setFormData({ ...formData, commodityInterest: e.target.value })}
                  className="w-full bg-[#F4F7F5] border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                >
                  <option value="Soya Beans">Soya Beans</option>
                  <option value="Paddy Rice">Paddy Rice</option>
                  <option value="Yellow & White Maize">Yellow & White Maize</option>
                  <option value="Cashew Nuts">Cashew Nuts</option>
                  <option value="Shea Nuts">Shea Nuts</option>
                  <option value="Sesame Seeds">Sesame Seeds</option>
                  <option value="Tejaswini Hybrid Chilli Pepper">Tejaswini Hybrid Chilli Pepper</option>
                  <option value="Livestock & Animal Feed">Livestock & Animal Feed</option>
                  <option value="General Investment / DFI Capital">General Investment / DFI Capital</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Inquiry Message / Offtake Requirements
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide volume specifications, target delivery dates, or investment scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#F4F7F5] border border-slate-200 rounded-xl p-3 text-xs text-slate-900 focus:outline-none focus:border-[#1B4332]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-bold text-white bg-[#1B4332] hover:bg-[#143527] rounded-xl transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>Submit Engagement Request</span>
                <Send className="w-4 h-4 text-[#52B788]" />
              </button>

            </form>
          )}

          {/* Direct Address & Contact Info Footer Bar */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#1B4332] shrink-0" />
              <span>{COMPANY_INFO.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#1B4332] shrink-0" />
              <span>{COMPANY_INFO.phones[0]}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
