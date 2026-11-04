import React, { useState } from 'react';
import { CheckCircle2, Play, Pause, RotateCcw, ArrowRight, Warehouse, Coins, Truck, Users, ShieldCheck, Sparkles } from 'lucide-react';

export const ValueChainSimulator: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(1); // 0, 1, 2, 3
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const stages = [
    {
      id: 0,
      step: '01',
      title: 'Out-Grower Onboarding',
      category: 'Production Layer',
      icon: Users,
      headline: 'Digital Farmer Registration & Certified Inputs',
      description: 'Smallholders across 10+ states register via mobile app at local Designated Aggregation Centres (DACs), receiving certified seeds, climate-smart agronomy training, and weather advisory.',
      traditionalProblem: 'Fragmented, unorganized farmers with poor quality seed inputs, high pest vulnerability, and no formal contracts.',
      nfdSolution: 'Direct out-grower network with GPS field mapping, input distribution, and yield insurance underwritten by AIICO.',
      kpi1: { label: 'Smallholders Targeted', value: '5,000+' },
      kpi2: { label: 'Agronomic Compliance', value: '98%' },
      kpi3: { label: 'Average Yield Uplift', value: '+35%' },
      tag: 'Seed & Production'
    },
    {
      id: 1,
      step: '02',
      title: 'Automated DAC Grading',
      category: 'Aggregation Layer',
      icon: Warehouse,
      headline: 'Solar-Powered Silos & Automated Testing',
      description: 'At rural DAC aggregation hubs, harvest is weighed on certified weighbridges and automatically tested for moisture content (<10%) and Aflatoxin levels (<10ppb) before entering climate-sealed silos.',
      traditionalProblem: 'Open-air road dumping, 40%+ post-harvest decay, rampant insect infestation, and lack of standard quality grades.',
      nfdSolution: 'Solar-powered climate-controlled silo storage reducing losses to under 5% with certified laboratory grain grading.',
      kpi1: { label: 'Post-Harvest Loss', value: '< 5%' },
      kpi2: { label: 'Moisture Standard', value: '< 10%' },
      kpi3: { label: 'Testing Turnaround', value: '15 Mins' },
      tag: 'Storage & Quality'
    },
    {
      id: 2,
      step: '03',
      title: 'Digital Warehouse Receipt',
      category: 'Financial Layer',
      icon: Coins,
      headline: 'Asset-Backed Token & 48-Hour Farmer Liquidity',
      description: 'Deposited grain generates a tamper-proof Digital Warehouse Receipt. Farmers can liquidate their receipt immediately for cash or use it as bankable collateral for low-cost seasonal credit.',
      traditionalProblem: 'Forced distress sales at the farmgate during harvest gluts at predatory prices to local informal cartels.',
      nfdSolution: 'Transparent farmgate settlement via FCMB bank rails within 48 hours, or collateralized storage receipt financing.',
      kpi1: { label: 'Farmer Cash Settlement', value: '< 48 Hours' },
      kpi2: { label: 'Price Premium to Farmer', value: '+15–20%' },
      kpi3: { label: 'Bank Collateral Coverage', value: '100% Asset' },
      tag: 'Capital & Receipts'
    },
    {
      id: 3,
      step: '04',
      title: 'Secured Processor Offtake',
      category: 'Distribution Layer',
      icon: Truck,
      headline: 'Direct Industrial Fulfillment & Export Delivery',
      description: 'Standardized grain batches are loaded directly from silos into contracted transport fleets, delivering guaranteed volumes to major domestic food conglomerates (Olam, WACOT) and global buyers.',
      traditionalProblem: 'Interrupted processor supply, high logistics costs, port bottlenecks, and contract non-performance.',
      nfdSolution: 'Year-round guaranteed delivery under pre-agreed offtake agreements, eliminating middlemen and retaining margins.',
      kpi1: { label: 'Offtake Fulfillment', value: '100%' },
      kpi2: { label: 'Target Investor ROI', value: '20–27%' },
      kpi3: { label: 'Middlemen Markup Cut', value: '100%' },
      tag: 'FMCG Offtake'
    }
  ];

  // Auto-play interactive tour
  React.useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % stages.length);
      }, 4000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, stages.length]);

  const current = stages[activeStage];
  const CurrentIcon = current.icon;

  return (
    <section id="simulator" className="py-24 lg:py-32 border-b border-[#E5E2D8] bg-[#F6F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#249E6B] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Model Simulator</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B281B] tracking-tight">
              The IAMP Value Chain Engine in Motion
            </h2>
          </div>

          {/* Interactive Player Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-white border border-[#E5E2D8] text-[#0B281B] hover:bg-stone-50 transition-all flex items-center gap-2 shadow-2xs"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-amber-600" />
                  <span>Pause Interactive Tour</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-[#249E6B] fill-[#249E6B]" />
                  <span>Play Automated Sequence</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setActiveStage(0);
              }}
              className="p-2 rounded-xl bg-white border border-[#E5E2D8] text-stone-600 hover:text-black transition-colors"
              title="Reset Simulator"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 4 Interactive Pipeline Stage Selectors */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {stages.map((stage) => {
            const Icon = stage.icon;
            const isSelected = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setIsPlaying(false);
                  setActiveStage(stage.id);
                }}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0B281B] text-white border-[#0B281B] shadow-md ring-2 ring-[#249E6B]/40 scale-[1.01]'
                    : 'paper-card text-stone-700 hover:border-stone-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 font-mono text-xs">
                    <span className={isSelected ? 'text-[#249E6B] font-bold' : 'text-stone-400 font-medium'}>
                      {stage.step}.
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      isSelected ? 'bg-white/10 text-stone-200' : 'bg-stone-100 text-stone-500'
                    }`}>
                      {stage.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-[#249E6B]' : 'text-stone-500'}`} />
                    <h3 className="font-bold text-xs sm:text-sm leading-snug">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <div className={`mt-3 pt-2.5 text-[10px] font-mono border-t ${
                  isSelected ? 'border-white/15 text-stone-300' : 'border-stone-100 text-stone-400'
                }`}>
                  {stage.category}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Interactive Stage Deep-Dive Screen */}
        <div className="paper-card rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0B281B] text-[#249E6B] flex items-center justify-center shrink-0">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-[#249E6B] uppercase">
                    Stage {current.step} Execution
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B281B]">
                    {current.headline}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {current.description}
              </p>

              {/* Before vs After Dynamic Comparison Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-red-50/60 border border-red-100 text-xs">
                  <span className="font-bold text-red-900 block mb-1 text-[11px] uppercase tracking-wider">
                    The Traditional Bottleneck
                  </span>
                  <p className="text-red-800 leading-relaxed text-[11px]">
                    {current.traditionalProblem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-100 text-xs">
                  <span className="font-bold text-[#0B281B] block mb-1 text-[11px] uppercase tracking-wider">
                    The NFD Agro Solution
                  </span>
                  <p className="text-emerald-950 leading-relaxed text-[11px]">
                    {current.nfdSolution}
                  </p>
                </div>

              </div>

            </div>

            {/* Right Telemetry Column */}
            <div className="lg:col-span-5 bg-[#0B281B] text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono text-[#249E6B] font-bold uppercase">
                  Live Unit Economics
                </span>
                <span className="text-[10px] text-stone-400 font-mono">
                  Stage {current.step} / 04
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <span className="text-[11px] text-stone-300 block font-medium">{current.kpi1.label}</span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#249E6B] font-mono mt-1 block">
                    {current.kpi1.value}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-stone-300 block">{current.kpi2.label}</span>
                    <span className="text-lg font-bold text-white font-mono mt-0.5 block">
                      {current.kpi2.value}
                    </span>
                  </div>
                  <div className="bg-white/5 p-3.5 rounded-xl border border-white/5">
                    <span className="text-[10px] text-stone-300 block">{current.kpi3.label}</span>
                    <span className="text-lg font-bold text-white font-mono mt-0.5 block">
                      {current.kpi3.value}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-stone-300 border-t border-white/10">
                <span className="text-[11px]">Standardized Output:</span>
                <span className="text-[#249E6B] font-semibold">Asset-Backed Warehouse Receipt</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
