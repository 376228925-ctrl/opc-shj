import React, { useState } from 'react';
import {
  MessageSquare,
  Sparkles,
  GitCommit,
  AlertTriangle,
  CheckCircle2,
  Quote,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  Users,
  Brain,
  Layers,
  Zap
} from 'lucide-react';

interface IterationAndBoundariesSectionProps {
  onOpenImage?: (id: string) => void;
}

export const IterationAndBoundariesSection: React.FC<IterationAndBoundariesSectionProps> = ({
  onOpenImage,
}) => {
  const testimonials = [
    {
      id: 't-1',
      role: '一线运营分析师',
      department: '区部经营分析处 · 孙同事',
      scene: '场景：日常特快异动归因 & 经营复盘',
      quote:
        '“以前面对特快收入异常回落，要在五六张月结明细表和数仓宽表里手工筛选，拉扯一两天才能拼出原因；现在领慧小可几分钟给出因果拆解，而且口径绝对统一，不用再求数仓临时加急排期。”',
      tag: '时效提效 95%',
    },
    {
      id: 't-2',
      role: '资深策略分析专员',
      department: '集团产品业务处 · 张同事',
      scene: '场景：大促跨期对比 & 关联账户划转归并',
      quote:
        '“最怕的就是大客户内部调账导致系统报警假流失。以前开会分析师和销售争论半天，现在业务语义层自动把集团关联账户与开票从属合并透视，一眼看出是内部主体划转还是真实流失，彻底消除了无谓的沟通内耗。”',
      tag: '集团关联账户透视',
    },
    {
      id: 't-3',
      role: '运力网络规划主管',
      department: '运力网络与规划处 · 李总',
      scene: '场景：干线调度干预 & 决策复核',
      quote:
        '“很多分析工具给出的推断都是黑盒猜测，不敢直接据此调整几十万辆车。这套语义层最让人放心的是‘证据边界’：有转运修路数据才认定为时效原因，没证据就老实标注待线下核实，结论经得起管理推敲。”',
      tag: '因果与证据边界收口',
    },
  ];

  const iterationLogs = [
    {
      id: 'iter-1',
      version: '优化 ① · 跨区客户开票主体迁移识别增强',
      date: '赛期实践回流',
      source: '某大型电子头部客户因财税调整，开票账户变更导致初版系统误报流失。',
      action: '在业务语义层扩展「集团多开票账户从属归并规则」，引入跨主体划转识别逻辑；先做主体合并再做收入与流失判断。',
      result: '彻底阻断虚假流失报警，避免一线销售团队盲目登门降价让利，稳住核心客群价盘与利润。',
      badge: '业务语义迭代',
    },
    {
      id: 'iter-2',
      version: '优化 ② · 分析语义证据边界强制收口',
      date: '真实复盘沉淀',
      source: '初版推导在系统生成时，存在将“天气阴雨”等微弱相关性草率断言为“件量下滑主因”的倾向。',
      action: '在分析语义中强制设定「证据边界收口围栏」：无转运中心延误打卡记录或强支撑证据时，必须主动判定为「待核实盲区」，禁止系统私自定性。',
      result: '推导结论可追溯率提升至 100%，输出的交互式诊断战报具备可核查性与可信度。',
      badge: '分析语义迭代',
    },
  ];

  const unsolvedBoundaries = [
    {
      id: 'bound-1',
      title: '突发极端非标事件的全网再平衡',
      problem: '如遇全国范围大面积极端冰雪灾害导致多省跨区交通管制，复杂多跳路由的全局最优解仍需国家级调度专家统筹。',
      currentHandling: '系统自动圈定受影响波及范围与货量规模，辅助输出第一版预案，终极调配方案必须由高级运力专家人工确认并复核。',
    },
    {
      id: 'bound-2',
      title: '客户线下商务谈判与主观心理博弈',
      problem: '大客户突发性分流发货可能源于线下隐性商务谈判或竞品账期诱惑，该类信息不沉淀在快件数据链路中。',
      currentHandling: '分析语义在证据链末端明确输出「待线下客户经理面对面拜访清单」，以数据线索驱动线下走访，人机各司其职。',
    },
    {
      id: 'bound-3',
      title: '全新未建模新产品线的首版语义冷启动',
      problem: '当集团上线全新定制化特快或冷链新品时，初始历史数据稀疏，尚无沉淀规则。',
      currentHandling: '由产品业务处业务架构师在丰景台用 3~4 小时快速完成首版原子规则定义与字典初始化，再行接入自动化管线。',
    },
  ];

  const innovations = [
    {
      id: 'inno-1',
      title: '先沉淀业务规则，再改变分析流水线',
      desc: '顺序绝不能反。必须先将业务专家的考核口径与网络常识沉淀为硬约束规则，智能系统才敢放开跑；否则速度越快，结论越偏。',
      icon: Brain,
    },
    {
      id: 'inno-2',
      title: '贡献事实与因果证据严格解耦',
      desc: '量化下降多少是数学事实，为什么下降是因果推论。证据确凿才给结论，证据不足主动亮黄灯，无据不立。',
      icon: ShieldCheck,
    },
    {
      id: 'inno-3',
      title: '沉淀为组织规则资产，不随人员变动而流失',
      desc: '规则与底层大模型彻底解耦。即便更换大模型底座或分析师轮岗，沉淀的语义字典依然长久生效，全网复用。',
      icon: Layers,
    },
  ];

  return (
    <section id="iteration-boundaries" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>赛期迭代记录与认知边界</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            真实发生、持续迭代、对工程与业务保有敬畏
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            不是脱离现实的概念演示，而是在赛期与生产环境中真实打磨的生产系统。
            <br className="hidden sm:inline" />
            真实记录一线同事的声音、赛期内的优化迭代，以及诚实承认算法的当前边界。
          </p>
        </div>

        {/* 1. User Testimonials (一线业务真实证言) */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold">真实业务证言</span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">一线业务同事怎么说</h3>
            </div>
            <span className="text-xs font-mono text-slate-400">身份已按合规要求角色化脱敏</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="p-5 sm:p-6 rounded-3xl bg-[#091124]/90 border border-cyan-500/30 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.08)] backdrop-blur-xl group hover:border-cyan-400/60 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono text-cyan-300 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 font-semibold">
                      {t.tag}
                    </span>
                    <Quote className="w-4 h-4 text-cyan-500/40 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal mb-5">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-3.5 border-t border-white/10">
                  <div className="text-sm font-bold text-white tracking-tight">{t.role}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{t.department}</div>
                  <div className="text-[11px] font-mono text-cyan-400/80 mt-1">{t.scene}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. 赛期优化记录 (复赛优化记录) */}
        <div className="mb-16 rounded-3xl bg-[#070D1D]/90 border border-cyan-500/30 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-cyan-500/20 mb-6">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">赛期优化记录</span>
              <h3 className="text-lg sm:text-2xl font-black text-white mt-1">赛期真实优化记录</h3>
            </div>
            <div className="text-xs font-mono text-slate-400">
              在使用中收集反馈、发现问题并持续优化
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {iterationLogs.map((log) => (
              <div key={log.id} className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-300 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    {log.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{log.date}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                  {log.version}
                </h4>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <div>
                    <strong className="text-slate-400 font-medium">问题来源：</strong>
                    {log.source}
                  </div>
                  <div>
                    <strong className="text-cyan-300 font-medium">调整动作：</strong>
                    {log.action}
                  </div>
                  <div>
                    <strong className="text-emerald-300 font-medium">优化结果：</strong>
                    {log.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Three Unique Innovations (三件事，之前行业没人做成) */}
        <div className="mb-16 rounded-3xl bg-[#091124]/90 border border-cyan-500/30 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(6,182,212,0.1)]">
          <div className="pb-5 border-b border-cyan-500/20 mb-6">
            <span className="text-xs font-mono text-cyan-400 font-semibold">创新点总结</span>
            <h3 className="text-lg sm:text-2xl font-black text-white mt-1">三件事，之前行业里没人这么干</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {innovations.map((inno) => {
              const Icon = inno.icon;
              return (
                <div key={inno.id} className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">{inno.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{inno.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Transparency & Boundaries (还没解决的问题 · 诚实工程边界) */}
        <div className="rounded-3xl bg-[#0F0E17]/90 border border-amber-500/30 p-5 sm:p-8 backdrop-blur-2xl shadow-[0_0_50px_rgba(245,158,11,0.08)]">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-amber-500/20 mb-6">
            <div>
              <span className="text-xs font-mono text-amber-400 font-semibold">客观边界</span>
              <h3 className="text-lg sm:text-2xl font-black text-white mt-1">还没解决的问题与当前边界</h3>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-mono font-semibold border border-amber-500/30">
              工程诚实与敬畏
            </span>
          </div>

          <div className="space-y-3.5">
            {unsolvedBoundaries.map((b, idx) => (
              <div key={b.id} className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    {b.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-7">
                  <strong className="text-slate-300">挑战现状：</strong>{b.problem}
                </p>
                <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed pl-7">
                  <strong className="text-amber-300">当前解决机制：</strong>{b.currentHandling}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
