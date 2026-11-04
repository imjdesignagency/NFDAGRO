import React, { useState } from 'react';
import { DynamicNavbar } from './components/DynamicNavbar';
import { EditorialHero } from './components/EditorialHero';
import { ValueChainSimulator } from './components/ValueChainSimulator';
import { TejaswiniComparator } from './components/TejaswiniComparator';
import { CommodityRadar } from './components/CommodityRadar';
import { TrajectoryDossier } from './components/TrajectoryDossier';
import { EditorialFooter } from './components/EditorialFooter';
import { DocumentDossier } from './components/DocumentDossier';

export default function App() {
  const [dossierOpen, setDossierOpen] = useState(false);
  const [activeDocIndex, setActiveDocIndex] = useState(1); // Default to 2026 Investment Memo

  const handleOpenDossier = (docIndex: number = 1) => {
    setActiveDocIndex(docIndex);
    setDossierOpen(true);
  };

  const handleOpenInquiry = () => {
    setActiveDocIndex(1);
    setDossierOpen(true);
  };

  const handleScrollToSimulator = () => {
    const el = document.getElementById('simulator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F5F0] text-[#0B281B] flex flex-col font-sans selection:bg-[#0B281B] selection:text-[#F6F5F0] antialiased">
      {/* Dynamic Navbar */}
      <DynamicNavbar
        onOpenDossier={handleOpenDossier}
        onOpenInquiry={handleOpenInquiry}
        onScrollToSimulator={handleScrollToSimulator}
      />

      {/* Main Dynamic Spread */}
      <main className="flex-grow">
        
        {/* Editorial Hero with Playfair Display & Live Numbers */}
        <EditorialHero
          onOpenDossier={handleOpenDossier}
          onOpenInquiry={handleOpenInquiry}
          onScrollToSimulator={handleScrollToSimulator}
        />

        {/* 1. Dynamic Value Chain Simulator (The IAMP Engine) */}
        <ValueChainSimulator />

        {/* 2. Flagship Tejaswini Hybrid Chilli Crop & FX Substitution Comparator */}
        <TejaswiniComparator
          onOpenInquiry={handleOpenInquiry}
        />

        {/* 3. Commodity Sourcing Radar (10+ States Real-Time Hubs) */}
        <CommodityRadar />

        {/* 4. Trajectory Horizon, Governance & Executive Dossier */}
        <TrajectoryDossier
          onOpenDossier={handleOpenDossier}
          onOpenInquiry={handleOpenInquiry}
        />

      </main>

      {/* Editorial Footer */}
      <EditorialFooter
        onOpenDossier={handleOpenDossier}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* PDF Dossier & Data Room Inquiry Dialog */}
      <DocumentDossier
        isOpen={dossierOpen}
        onClose={() => setDossierOpen(false)}
        initialDocIndex={activeDocIndex}
      />
    </div>
  );
}
