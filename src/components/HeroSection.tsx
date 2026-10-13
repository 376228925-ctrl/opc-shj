import React, { useState } from 'react';
import { Play, Zap, ChevronRight, Cpu, Sparkles, BookOpen, Eye, ShieldCheck, Layers, Maximize2, History } from 'lucide-react';
import { PROJECT_INFO } from '../data/projectData';

interface HeroSectionProps {
  onStartPresentation: () => void;
  onExploreSemantics: () => void;
  onViewCaseStudy: () => void;
  onOpenImage: (id: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPresentation,
  onExploreSemantics,
  onViewCaseStudy,
  onOpenImage,
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'arch' | 'genesis'>('arch');

  return (
    <section id="overview" className="relative pt-12 sm:pt-20 pb-20 sm:pb-28 overflow-hidden text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Minimalist Contest Identity Kicker */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-mono tracking-wider font-semibold">
            {PROJECT_INFO.contestName} · 决赛 · {PROJECT_INFO.organization} · {PROJECT_INFO.author}
          </span>
        </div>

        {/* Massive Radiant Gradient Title: 参赛题目 */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-5 leading-[1.12]">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_50px_rgba(56,189,248,0.4)]">
            基于共生智能下的语义层数据分析实践
          </span>
        </h1>

        {/* High-Cognition Subtitle with Professional Grounded Stance */}
        <div className="text-base sm:text-2xl md:text-3xl font-extrabold text-white mb-5 tracking-tight">
          集团内部首创：构建「数据语义 · 业务语义 · 分析语义」三层确定性规则体系
        </div>
        <p className="text-sm sm:text-lg text-slate-300 font-normal tracking-wide mb-10 max-w-4xl mx-auto leading-relaxed">
          物流数据分析最难的不是写代码，而是业务语义与底层数据脱节。
          <br className="hidden sm:inline" />
          我们把资深分析师的专业经验转化为系统可精确执行的标准化规则资产，
          从根本上解决传统取数工具查错底表、串错客户、归因断层等行业死结，实现复杂分析任务的分钟级可信交付。
        </p>

        {/* WORK PROFILE · 参赛作品基本信息档案卡 (借鉴行业高标准作品卡片) */}
        <div className="max-w-4xl mx-auto mb-10 text-left rounded-3xl bg-[#091124]/90 border border-cyan-500/30 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_0_60px_rgba(6,182,212,0.12)]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                参赛作品基本信息档案
              </span>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold">
              集团内部首创 · 生产级落地
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-slate-400 mb-1">作品名称</div>
              <div className="font-bold text-white text-sm">基于共生智能下的语义层数据分析实践</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-slate-400 mb-1">参赛人员</div>
              <div className="font-bold text-cyan-300 text-sm">产品业务处 · 孙豪杰</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-slate-400 mb-1">所属组织</div>
              <div className="font-bold text-white text-sm">顺丰速运 · 产品业务处</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 sm:col-span-2 md:col-span-1">
              <div className="text-slate-400 mb-1">作品形态</div>
              <div className="font-medium text-slate-200">丰景台与领慧小可双平台生产系统（非一次性演示模型）</div>
            </div>
            <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 sm:col-span-2">
              <div className="text-slate-400 mb-1">服务对象与核心场景</div>
              <div className="font-medium text-slate-200">各级经营分析师、运力规划专家、网点管理者；覆盖收入异动归因、大促跨期排查、客户挽留全链路</div>
            </div>
          </div>
        </div>

        {/* THE HARD NUMBERS · 核心落地硬指标横幅 (使用前 vs 使用后) */}
        <div className="max-w-4xl mx-auto mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#070D1D]/90 border border-cyan-500/20 shadow-lg">
            <div className="text-[11px] font-mono text-slate-400 mb-1">分析响应周期</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono tracking-tight">
              1-2天 <span className="text-slate-500 text-xs">➔</span> 30分
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">提效 ▼ 95%</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#070D1D]/90 border border-cyan-500/20 shadow-lg">
            <div className="text-[11px] font-mono text-slate-400 mb-1">跨表取数准确率</div>
            <div className="text-xl sm:text-2xl font-black text-cyan-300 font-mono tracking-tight">
              42% <span className="text-slate-500 text-xs">➔</span> 99.2%
            </div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1 font-semibold">提升 ▲ 136%</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#070D1D]/90 border border-cyan-500/20 shadow-lg">
            <div className="text-[11px] font-mono text-slate-400 mb-1">生产环境月活</div>
            <div className="text-xl sm:text-2xl font-black text-emerald-400 font-mono tracking-tight">
              2,000+ 人
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">双平台高频投产</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#070D1D]/90 border border-cyan-500/20 shadow-lg">
            <div className="text-[11px] font-mono text-slate-400 mb-1">专家经验沉淀</div>
            <div className="text-xl sm:text-2xl font-black text-indigo-300 font-mono tracking-tight">
              500+ 条
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1">语义字典与规则资产</div>
          </div>
        </div>

        {/* Contrast Prose Block with Clean Left Border */}
        <div className="max-w-3xl mx-auto text-left mb-10 pl-5 sm:pl-6 border-l-2 border-cyan-400 space-y-2 py-1">
          <div className="text-xs sm:text-sm text-slate-400">
            过去，通用模型缺乏顺丰业务上下文，数据问答常因找错表、对错卡而沦为不可信的玩具；
          </div>
          <div className="text-sm sm:text-lg font-bold text-white">
            今天，三层语义体系让系统真正理解顺丰业务口径，分析师一个人即可高质量闭环专家级诊断。
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          <button
            onClick={onStartPresentation}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-sm sm:text-base shadow-[0_0_35px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5 fill-slate-950" />
            <span>进入 10分钟路演模式</span>
          </button>

          <a
            href="#evolution"
            className="w-full sm:w-auto px-5 sm:px-7 py-3.5 sm:py-4 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base border border-cyan-500/40 hover:border-cyan-400 flex items-center justify-center gap-2 cursor-pointer transition-all shadow-[0_0_20px_rgba(6,182,212,0.15)]"
          >
            <History className="w-4 h-4 text-cyan-400" />
            <span>查阅共生智能演进史</span>
          </a>

          <a
            href="#real-ui"
            className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-full bg-white/5 hover:bg-white/10 text-cyan-300 font-semibold text-xs sm:text-sm border border-white/10 flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>查看生产系统实机截帧 ↗</span>
          </a>
        </div>

        {/* MONUMENTAL BLUEPRINT EXHIBITION VIEWPORT (大 UI + 申报蓝图原件) */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.18)] backdrop-blur-2xl mb-12 text-left">
          {/* Top Bar with Switcher */}
          <div className="px-5 sm:px-6 py-3.5 sm:py-4 bg-[#0A1226] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-1 sm:ml-2 font-mono text-xs sm:text-sm font-bold text-white tracking-wide">
                顺丰集团申报核心图谱 · 密级：内部公开
              </span>
            </div>

            {/* View Switcher Tabs */}
            <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-900/80 p-1 rounded-xl border border-white/10 text-xs font-mono">
              <button
                onClick={() => setActiveHeroTab('arch')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold ${
                  activeHeroTab === 'arch'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                架构蓝图
              </button>
              <button
                onClick={() => setActiveHeroTab('genesis')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer font-bold ${
                  activeHeroTab === 'genesis'
                    ? 'bg-cyan-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                共生智能模型
              </button>
            </div>
          </div>

          {/* Exhibition Image & Insights Split Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left 8 cols: Large Crisp Image */}
            <div className="lg:col-span-8 relative bg-slate-950/60 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 group">
              <div
                onClick={() => onOpenImage(activeHeroTab === 'arch' ? 'img-4' : 'img-15')}
                className="relative rounded-2xl overflow-hidden cursor-pointer w-full border border-white/10 shadow-2xl group-hover:border-cyan-400/60 transition-all bg-black/40"
              >
                <img
                  src={activeHeroTab === 'arch' ? '/images/image4.jpg' : '/images/image15.jpg'}
                  alt={activeHeroTab === 'arch' ? '三层语义架构总体设计' : '人机协同演进：共生智能'}
                  className="w-full max-h-[440px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span>{activeHeroTab === 'arch' ? '原件 04 · 三层语义架构总体设计' : '原件 15 · 人机协同演进：共生智能'}</span>
                  <span className="flex items-center gap-1 text-white">
                    <Maximize2 className="w-3.5 h-3.5" /> 点击放大全分辨率查验
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 cols: High-Cognitive Insights */}
            <div className="lg:col-span-4 p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6 bg-[#080E20]/90">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2 font-bold">
                  申报蓝图与实证解读
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight">
                  {activeHeroTab === 'arch'
                    ? '独创「数据·业务·分析」三层解耦体系'
                    : '从单点指令修补到组织级规则资产'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-4">
                  {activeHeroTab === 'arch'
                    ? '规范数仓正式表准入与明细总量严格比对校验；建立集团关联账户跨主体划转归并与量价拆解字典；规范标准化五步推导链，杜绝传统问数工具盲目取数引发的虚假归因。'
                    : '超越单次会话的提示词修补，建立以“反例错题本”驱动的持续回归优化机制。在人与模型的深度交互中，把业务专家的隐性常识沉淀为可跨平台部署的标准化规则资产。'}
                </p>
              </div>

              {/* Three Axiom Checkpoints */}
              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">跨部门口径一致率</span>
                  <span className="text-emerald-400 font-bold">100% 严格一致</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">客户主体穿透逻辑</span>
                  <span className="text-cyan-400 font-bold">集团关联账户透视</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <span className="text-slate-400">跨场景迁移时效</span>
                  <span className="text-sky-300 font-bold">半天极速装载</span>
                </div>
              </div>

              <button
                onClick={() => onOpenImage(activeHeroTab === 'arch' ? 'img-4' : 'img-15')}
                className="w-full py-2.5 sm:py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>检视申报原稿高分辨率细节</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
