import React from 'react';
import { TrendingUp, Clock, Users, ArrowUpRight, ChevronRight, BarChart3, Database, Sparkles, ShieldCheck } from 'lucide-react';
import { METRICS } from '../data/projectData';

interface MetricsAndRoiSectionProps {
  onOpenImage?: (id: string) => void;
}

export const MetricsAndRoiSection: React.FC<MetricsAndRoiSectionProps> = ({ onOpenImage }) => {
  const hardMetrics = [
    {
      id: 'm-1',
      title: '复杂分析周期',
      unit: '天 ➔ 分钟',
      traditional: '1 ~ 2 天',
      current: '30 分钟',
      change: '提效 ▼ 95%',
      isImprovement: true,
      desc: '跨表关联与归因从多天反复对账，压缩为端到端自动化推导。'
    },
    {
      id: 'm-2',
      title: '跨部门口径一致率',
      unit: '百分比',
      traditional: '68%',
      current: '100%',
      change: '提升 ▲ 32%',
      isImprovement: true,
      desc: '预置统一核心口径字典，消除财务与业务考核指标打架问题。'
    },
    {
      id: 'm-3',
      title: '复杂归因准确率',
      unit: '百分比',
      traditional: '42%',
      current: '99.2%',
      change: '提升 ▲ 136%',
      isImprovement: true,
      desc: '通过收入量价拆解与集团关联账户归并，阻断虚假流失误判，锁定真因。'
    },
    {
      id: 'm-4',
      title: '人工复核核数耗时',
      unit: '小时 ➔ 分钟',
      traditional: '4 小时',
      current: '5 分钟',
      change: '下降 ▼ 98%',
      isImprovement: true,
      desc: '白盒化证据链条直接陈列，复核人员一眼看清因果逻辑。'
    },
    {
      id: 'm-5',
      title: '证据溯源覆盖率',
      unit: '百分比',
      traditional: '无规范',
      current: '100%',
      change: '可复核 100%',
      isImprovement: true,
      desc: '严格剥离贡献事实与原因假设，无证据项一律主动标注盲区。'
    }
  ];

  return (
    <section id="metrics" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="text-xs font-mono text-cyan-400 tracking-wider mb-3 uppercase font-semibold">
            量化成效 · 真实可核验的生产提效
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            五组硬指标对比：使用前 vs 使用后
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            不谈浮夸概念，只看生产线的真实提效。
            <br className="hidden sm:inline" />
            当业务专家的隐性经验转化为确定性的语义规则，时间便成为驱动顺丰业务增长的有效杠杆。
          </p>
        </div>

        {/* 5 Hard Metric Comparison Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {hardMetrics.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 rounded-3xl bg-[#080E20]/95 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)] group hover:border-cyan-400/60 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>{item.title}</span>
                  <span className="text-[11px] text-cyan-400/80">{item.unit}</span>
                </div>

                {/* Before vs After */}
                <div className="space-y-1.5 mb-4">
                  <div className="text-xs text-slate-400 flex items-center justify-between">
                    <span>传统模式:</span>
                    <span className="line-through text-slate-500 font-mono">{item.traditional}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white flex items-center justify-between font-mono">
                    <span className="text-xs font-sans text-cyan-300 font-bold">语义层方案:</span>
                    <span className="text-cyan-300">{item.current}</span>
                  </div>
                </div>

                <div className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 text-center mb-3">
                  {item.change}
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed pt-3 border-t border-white/5">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Evidence Bar */}
        <div className="rounded-2xl bg-white/[0.02] border border-white/10 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>数据口径与出处均来自顺丰产品业务处与试点区部真实生产实测对账记录。</span>
          </div>
          {onOpenImage && (
            <button
              onClick={() => onOpenImage('img-27')}
              className="text-cyan-300 hover:text-white font-mono font-bold flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>查看官方申报成效佐证汇总 (原件 27) ↗</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
