import React, { useState } from 'react';
import { History, Sparkles, Brain, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, BookOpen, Clock } from 'lucide-react';
import { SYMBIOTIC_HISTORY } from '../data/projectData';

interface SymbioticEvolutionSectionProps {
  onOpenImage?: (id: string) => void;
}

export const SymbioticEvolutionSection: React.FC<SymbioticEvolutionSectionProps> = ({ onOpenImage }) => {
  const [activeEra, setActiveEra] = useState<number>(4); // Default to current SF practice

  const currentMilestone = SYMBIOTIC_HISTORY[activeEra];

  return (
    <section id="evolution" className="py-20 sm:py-28 relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider mb-4 uppercase">
            <History className="w-4 h-4 text-cyan-400" />
            <span>方 法 论 渊 源 · 高 阶 人 机 协 同 演 进 史</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            共生智能的方法论演进：从人机共生到企业级语义层
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed font-normal">
            很多方案谈论自动化取数与对话式工具，往往将模型视作单向替代人类的黑盒算力。
            <br className="hidden sm:inline" />
            但在严肃的企业级经营分析中，真正的突破必须建立在深厚的人机协同方法论之上。
            <br className="hidden sm:inline" />
            <span className="text-cyan-300 font-medium">
              追溯 60 余年人机协同史，从 Licklider 到当代顺丰实践，共生智能是我们解决真实业务复杂性的必然路径。
            </span>
          </p>
        </div>

        {/* Timeline Horizontal Stepper (5 Eras) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-8">
          {SYMBIOTIC_HISTORY.map((item, idx) => {
            const isSelected = activeEra === idx;
            const isLatest = idx === 4;
            return (
              <button
                key={item.year}
                onClick={() => setActiveEra(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  isLatest ? 'col-span-2 sm:col-span-1' : ''
                } ${
                  isSelected
                    ? isLatest
                      ? 'bg-gradient-to-b from-cyan-950/80 to-[#0B1528] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] scale-[1.01]'
                      : 'bg-[#0E1B33] border-cyan-500/60 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                    : 'bg-[#091124]/60 border-white/5 hover:border-white/15 text-slate-400'
                }`}
              >
                {isLatest && (
                  <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-cyan-500 text-[10px] font-black text-slate-950 tracking-wider">
                    顺丰落地
                  </span>
                )}
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  {item.year} · {item.era}
                </div>
                <div
                  className={`text-sm sm:text-base font-black truncate ${
                    isSelected ? 'text-white' : 'text-slate-300'
                  }`}
                >
                  {item.theme.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Active Milestone */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 p-5 sm:p-10 shadow-[0_0_80px_rgba(6,182,212,0.16)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left Column: Era Context & Pioneer (5 Cols) */}
            <div className="lg:col-span-5 space-y-5 lg:border-r lg:border-white/10 lg:pr-8">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                  {currentMilestone.year} · {currentMilestone.era}
                </span>
                <span className="text-xs font-mono text-slate-400">里程碑 0{activeEra + 1} / 05</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight mb-2">
                  {currentMilestone.theme}
                </h3>
                <div className="text-xs sm:text-sm text-cyan-400/90 font-mono">
                  代表人物 / 驱动阵营：{currentMilestone.pioneer}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="text-xs font-mono text-slate-400 font-semibold tracking-wider">
                  核心概念剖析
                </div>
                <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-normal">
                  {currentMilestone.coreConcept}
                </p>
              </div>

              <div className="space-y-1.5">
                <div className="text-xs font-mono text-slate-400 font-semibold">
                  历史方法论启示：
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed border-l-2 border-cyan-500/50 pl-3">
                  {currentMilestone.significance}
                </div>
              </div>
            </div>

            {/* Right Column: SF Practice Mapping & Contrast (7 Cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-sky-950/20 to-[#070D1D] border border-cyan-500/40 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold tracking-wider">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>映射顺丰业务分析实践</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    实战落地验证
                  </span>
                </div>
                <p className="text-sm sm:text-lg text-white font-medium leading-relaxed">
                  {currentMilestone.sfMapping}
                </p>
              </div>

              {/* Cognitive Contrast Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="p-4 sm:p-5 rounded-2xl bg-rose-950/15 border border-rose-500/20 space-y-1.5">
                  <div className="text-xs font-mono text-rose-400 font-semibold">
                    ✕ 传统误区 / 局限认知
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {activeEra < 3
                      ? '把分析完全压在人类分析师身上，面对千万月结账户与海量明细只能人工抽样、疲于奔命。'
                      : activeEra === 3
                      ? '把大模型当全知黑盒直接用于取数，导致查错历史废表、串错关联账户主体，看得到不敢用。'
                      : '误以为做个问数对话框就是智能化，忽视了底层口径与逻辑链条的确定性规约。'}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/15 border border-emerald-500/20 space-y-1.5">
                  <div className="text-xs font-mono text-emerald-400 font-semibold">
                    ✓ 顺丰共生智能方案
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    将分析专家的隐性经验沉淀为可执行的数据、业务、分析三层语义规则，系统在规则围栏内秒级推演，实现 100% 准确与可复核。
                  </p>
                </div>
              </div>

              {/* Supporting Evidence link if available */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/10">
                <div className="text-xs text-slate-400">
                  原稿支撑：包含早期方法论探讨与人机共生模型论证原件
                </div>
                {onOpenImage && (
                  <button
                    onClick={() => onOpenImage('img-15')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-colors cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>查阅申报书认知演进原件 ↗</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
