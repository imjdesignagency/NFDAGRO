import React, { useState } from 'react';
import { Brain, HeartPulse, Compass, Warehouse, ShieldAlert, Coins, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';

export const StrategicModel: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'brain' | 'heart' | 'limbs'>('heart');
  const [activeStep, setActiveStep] = useState<number>(0);

  const pillars = [
    {
      id: 'brain',
      title: 'Central Management System (The Brain)',
      tagline: 'Oversees Strategy, Finance & Governance',
      icon: Brain,
      description: 'The central intelligence engine that manages overall strategy, financial structuring, risk governance, and technology implementation across all commodity verticals.',
      features: [
        'End-to-end risk mitigation & margin retention',
        'Data-driven crop yield & weather analytics',
        'Centralized treasury and capital allocation',
        'ESG governance & international compliance standards'
      ]
    },
    {
      id: 'heart',
      title: 'Silo-Bank Engine (The Heart)',
      tagline: 'Standardized Storage & Financial Engine',
      icon: HeartPulse,
      description: 'Our proprietary standardized engine for commodity aggregation, solar-powered climate-controlled storage, quality grading, and financial innovation via Digital Warehouse Receipts.',
      features: [
        'Designated Aggregation Centres (DACs) issuing Digital Warehouse Receipts',
        'Instant liquidity & collateralized financing for smallholder farmers',
        'Standardized quality grading & moisture control (<5% post-harvest loss)',
        'Transparent pricing and fair settlement at farm gate'
      ]
    },
    {
      id: 'limbs',
      title: 'Commodity Verticals (The Limbs)',
      tagline: 'Dedicated Profit Centres for Key Crops',
      icon: Compass,
      description: 'Independent operational profit centres executing targeted production, out-grower coordination, processing, and distribution across specific commodities.',
      features: [
        'Soybean, Paddy Rice, Yellow & White Maize',
        'Cashew Nuts, Sesame Seeds & Shea Nuts',
        'Tejaswini Hybrid Chilli Pepper commercial initiative',
        'Industrial Sorghum & Livestock Feed processing'
      ]
    }
  ];

  const siloBankSteps = [
    {
      step: '01',
      title: 'Farmer Registration & Out-grower Onboarding',
      icon: CheckCircle2,
      desc: 'Smallholder farmers register via mobile app at local Designated Aggregation Centres (DACs), receiving agronomic training and climate-smart inputs.'
    },
    {
      step: '02',
      title: 'Aggregation & Automated Quality Grading',
      icon: Warehouse,
      desc: 'Produce is weighed, moisture-tested, and graded against international specifications (Aflatoxin control, purity > 98%).'
    },
    {
      step: '03',
      title: 'Digital Warehouse Receipt Issuance',
      icon: Coins,
      desc: 'DACs issue tamper-proof Digital Warehouse Receipts representing deposited commodities in secure solar-powered silos.'
    },
    {
      step: '04',
      title: 'Liquidity & Collateralized Financing',
      icon: ShieldAlert,
      desc: 'Farmers access instant cash payouts or hold digital receipts as collateral for warehouse receipt financing at lower capital costs.'
    },
    {
      step: '05',
      title: 'Guaranteed Offtake & Delivery to Processors',
      icon: RefreshCw,
      desc: 'Commodities are delivered directly to leading food processors, breweries, and export markets with full end-to-end traceability.'
    }
  ];

  return (
    <section id="model" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-[#1B4332] uppercase tracking-wider mb-2">
            Integrated Agri-Management Platform (IAMP)
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            The Three Pillars of Strategic Differentiation
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            NFD Agro operates as Nigeria’s premier <span className="font-semibold text-[#1B4332]">Value Chain Orchestrator</span>. By controlling each phase from seed to shipment, we eliminate middlemen, mitigate price volatility, and unlock maximum margin for all stakeholders.
          </p>
        </div>

        {/* Interactive Pillar Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Tab Selection Column */}
          <div className="lg:col-span-4 space-y-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isActive = activeTab === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(p.id as any)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex items-start gap-4 ${
                    isActive
                      ? 'bg-[#1B4332] text-white border-[#1B4332] shadow-md'
                      : 'bg-[#F4F7F5] text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  <div className={`p-3 rounded-lg shrink-0 ${isActive ? 'bg-[#2D6A4F] text-[#52B788]' : 'bg-white text-[#1B4332]'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-bold text-base ${isActive ? 'text-white' : 'text-slate-900'}`}>
                      {p.title.split(' (')[0]}
                    </h3>
                    <p className={`text-xs mt-1 ${isActive ? 'text-emerald-200' : 'text-slate-500'}`}>
                      {p.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="lg:col-span-8 bg-[#F4F7F5] border border-slate-200 rounded-2xl p-8 shadow-sm">
            {pillars
              .filter((p) => p.id === activeTab)
              .map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.id} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-[#1B4332] text-[#52B788] rounded-xl">
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#1B4332] uppercase tracking-wider">
                          Strategic Component
                        </span>
                        <h3 className="text-2xl font-bold text-slate-900">
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed">
                      {p.description}
                    </p>

                    <div className="border-t border-slate-200 pt-6">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                        Key Capabilities & Impact
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {p.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200 text-xs font-medium text-slate-800">
                            <CheckCircle2 className="w-4 h-4 text-[#52B788] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

        </div>

        {/* Silo-Bank System Deep Dive Container */}
        <div className="bg-[#1B4332] text-white rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold text-[#52B788] uppercase tracking-wider">
                Financial & Physical Infrastructure Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                The Proprietary Silo-Bank System
              </h3>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">
                Our Silo-Bank system transforms seasonal harvest uncertainty into a standardized, asset-backed financial system. Designated Aggregation Centres (DACs) allow smallholder farmers to store produce safely, prevent distress sales, and access immediate cash liquidity.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#40916C]/60">
              <img
                src="/images/nfd_silo_bank_1793818946998.jpg"
                alt="NFD Agro Silo Bank Storage Facility"
                className="w-full h-48 lg:h-56 object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Step-by-Step Interactive Workflow */}
          <div className="pt-6 border-t border-[#2D6A4F]">
            <h4 className="text-xs font-bold text-emerald-200 uppercase tracking-wider mb-6">
              5-Step Silo-Bank Value Creation Process
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {siloBankSteps.map((s, idx) => {
                const StepIcon = s.icon;
                const isSelected = activeStep === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#2D6A4F] text-white border-[#52B788] ring-2 ring-[#52B788]/40'
                        : 'bg-[#133926] text-slate-300 border-[#2D6A4F] hover:bg-[#1B4332]'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-[#52B788]">
                          {s.step}
                        </span>
                        <StepIcon className="w-5 h-5 text-emerald-300" />
                      </div>
                      <h5 className="font-bold text-xs text-white leading-snug">
                        {s.title}
                      </h5>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-3 line-clamp-3 leading-snug">
                      {s.desc}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Detail Panel */}
            <div className="mt-6 bg-[#133926] border border-[#2D6A4F] rounded-xl p-4 flex items-center justify-between text-xs text-slate-200">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#52B788]">Active Step Detail:</span>
                <span>{siloBankSteps[activeStep].title} — {siloBankSteps[activeStep].desc}</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-emerald-300 font-semibold shrink-0">
                <span>Step {activeStep + 1} of 5</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
