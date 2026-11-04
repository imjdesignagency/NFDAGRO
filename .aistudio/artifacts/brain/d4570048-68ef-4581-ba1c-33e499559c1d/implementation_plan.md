# NFD Agro — Dynamic Editorial Agtech Platform

A bespoke, non-generic **dynamic website** for **NFD Agro Limited** (`RC No. 1390052`), merging **luxurious editorial serif typography** with **dynamic interactive tools** (live value-chain simulator, interactive commodity comparator, and dynamic sourcing hub explorer) set against a warm paper stone and dark emerald aesthetic.

---

### User Review & Confirmed Design Directives

> [!IMPORTANT]
> Based on your direct preferences, the platform will be rebuilt around these core pillars:
> - **Format & Feel**: **Dynamic Website** — Moving away from static stacked cards to an interactive, responsive experience with a dynamic Value Chain Simulator, interactive Commodity Yield & Margin Comparator, and live State Hub Radar.
> - **Typography**: **Elegant Editorial Serif paired with Sharp Geometric Sans** — Combining prestigious `Playfair Display` (for authoritative, high-fashion headlines) with crisp `Plus Jakarta Sans` (for clean technical data and navigation) and tabular figures.
> - **Color Contrast & Texture**: **Warm Paper Stone** (`#F6F5F0`) canvas with **Rich Dark Emerald Ink** (`#0B281B`), elevated **Crisp White Plates** (`#FFFFFF`), subtle sand borders (`#E5E2D8`), and refined leaf/gold accents.

---

## 1. Core Dynamic Modules & User Experience

```
┌──────────────────────────────────────────────────────────────────────────────┐
│ TOP BAR: Serif Wordmark · Dynamic View Modes · [Interactive Demo] · [PDFs]  │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│ HERO: LUXURY EDITORIAL SPREAD                                                │
│ Oversized Playfair Display headline: "Architecting Nigeria's Ag Economy"    │
│ Dynamic live metric ticker (₦4.2B Actual → ₦100B+ Target · 20-27% ROI)      │
│ Direct toggle: [Explore Interactive Model] or [Read 2026 Investment Memo]    │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│ 01. DYNAMIC VALUE CHAIN SIMULATOR (THE IAMP ENGINE)                          │
│ Interactive step-by-step pipeline:                                          │
│   [Seed / Outgrower] → [Silo-Bank Hub] → [Digital Receipt] → [FMCG Offtake] │
│ Clicking each step dynamically recalculates metrics, margins, and photos.   │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│ 02. FLAGSHIP BREAKTHROUGH: TEJASWINI HYBRID CHILLI                           │
│ Dynamic Yield & Import Substitution Calculator:                              │
│   Compare traditional local pepper vs. Tejaswini Hybrid (4x yield, high SHU) │
│   Toggle 1-Ha FCT Pilot vs. 20-Ha Commercial Farmland with dynamic FX stats. │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│ 03. DYNAMIC COMMODITY & STATE RADAR                                          │
│ Live crop comparator (Soybeans, Cashew, Paddy Rice, Maize, Sesame, Shea)     │
│ Interactive Nigeria Sourcing Map: select states to see active hubs & tonnage │
└──────────────────────────────────────────────────────────────────────────────┘
                                      │
                                      ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│ 04. EXECUTIVE TRAJECTORY & CONFIDENTIAL DOSSIER                              │
│ Dynamic Milestone Timeline (2024 to 2028 with interactive KPI breakdowns)    │
│ Instant PDF Dossier Viewer for Corporate Profile & 2026 Investment Memo     │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Visual & Typographic System

### 1. Typography Hierarchy
- **Primary Editorial Display**: `Playfair Display` (400, 600, 700, Italic) for magazine-grade headlines and section declarations.
- **Modern Technical Body**: `Plus Jakarta Sans` (400, 500, 600) for clean UI controls, data chips, and concise descriptions.
- **Telemetry & Numbers**: `font-mono tabular-nums` for crisp monetary and tonnage figures.

### 2. Warm Stone & Emerald Palette
- **Canvas (`--bg`)**: Warm Paper Stone `#F6F5F0` (organic, non-sterile off-white)
- **Surfaces (`--card`)**: Elevated White Paper Plates `#FFFFFF` with fine sand hairline borders `#E5E2D8`
- **Primary Ink (`--primary`)**: Rich Deep Emerald `#0B281B` / `#133E2B`
- **Vibrant Accent (`--accent`)**: Living Leaf Emerald `#1E824C` / `#229954`
- **Prestige Accent**: Warm Harvest Gold `#C49752`

---

## 3. Key Dynamic Features to Implement

1. **Interactive Value Chain Simulator**:
   - Replaces static descriptions of "The Brain, Heart, Limbs" with a live interactive simulator where the user clicks through each stage of NFD Agro's pipeline to see how smallholders get registered, crops are moisture-tested, digital warehouse receipts are minted, and guaranteed offtake is delivered to Olam, WACOT, and domestic processors.
2. **Tejaswini Hybrid Chilli Crop Comparator**:
   - Interactive comparison toggle showing Traditional Wild Varieties vs. NFD Agro's Tejaswini Hybrid (Yield: 5 MT/ha vs. 20 MT/ha, Capscaicin SHU: variable vs. uniform, Middlemen: 4 layers vs. 0 layers direct contracts).
3. **Interactive Sourcing & Commodity Explorer**:
   - Clickable crop and state radar showing real origins across Taraba, Niger, Kano, Kwara, Benue, Kogi, Oyo, Kebbi, Kaduna, Katsina, and FCT.
4. **Instant PDF Dossier & Data Room**:
   - Fast modal linking directly to the real PDFs (`Final_NFD_AGRO_CP_November_fb2d8ecf.pdf` and `NFD_agro_investment_memo-FINAL__1__4e6aee9a.pdf`).

---

## 4. Technical Architecture

```
src/
├── components/
│   ├── DynamicNavbar.tsx            # Minimalist serif wordmark, live indicators, action triggers
│   ├── EditorialHero.tsx            # Playfair Display hero, live ticker, split visual spread
│   ├── ValueChainSimulator.tsx      # Dynamic 4-stage pipeline simulator with reactive metrics
│   ├── TejaswiniComparator.tsx      # Dynamic crop comparison & FX substitution model
│   ├── CommodityRadar.tsx           # Interactive state map and crop vertical filter
│   ├── TrajectoryDossier.tsx        # 2024-2028 horizon + instant PDF document viewer
│   └── EditorialFooter.tsx          # Minimal Abuja HQ & legal credentials
├── data/
│   └── companyData.ts               # Core metrics, states, and PDF links
└── App.tsx                          # Master view coordinator with state management
```
