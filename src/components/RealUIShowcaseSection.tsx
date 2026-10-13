import React, { useState } from 'react';
import { Eye, Maximize2, ShieldCheck, CheckCircle2, ChevronRight, Sparkles, Layers, FileText, Lock, MessageSquare } from 'lucide-react';

interface RealUIShowcaseSectionProps {
  onOpenImage: (id: string) => void;
}

export const RealUIShowcaseSection: React.FC<RealUIShowcaseSectionProps> = ({ onOpenImage }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const showcaseScreenshots = [
    {
      id: 'img-14',
      num: '图 1',
      title: '丰景台生产平台 · 智能分析专家首页与运行中枢',
      subtitle: '部署于顺丰丰景台数据资产平台，月活 2,000+，全网分析人员独立使用',
      tag: '资产平台实机',
      desc: '非本地演示模型，而是已正式接入顺丰丰景台数据资产平台的企业级分析专家。挂接数据语义、业务语义与分析语义三层规则，支持全网业务人员以业务语言提问，自动生成多维图表与深度经营诊断。',
      highlights: [
        '已接入顺丰正式生产环境，稳定支撑全网 2,000+ 业务月活',
        '严格遵循集团数据安全白名单通道，敏感数据物理级脱敏',
        '自然语言提问直接生成可视化看板与因果推导结论'
      ],
      src: '/images/image14.jpg',
      desensitizeNote: '已做脱敏处理：弱化组织主体名，涉及具体经营数字掩码呈现，完整保留系统结构与交互流程。'
    },
    {
      id: 'img-12',
      num: '图 2',
      title: '三层语义规则配置文件 · 机器可执行的组织公理',
      subtitle: '将业务专家经验沉淀为标准化语义字典，热插拔挂载，跨平台复用',
      tag: '规则资产配置',
      desc: '展示数据语义表范围、计算公式、收入量价拆解与集团关联账户归并字典、分析语义五步推导链的结构化配置文件。规则与底层大模型完全解耦，未来即便更换大模型底座，顺丰沉淀的业务分析资产依然长久留存。',
      highlights: [
        '数据语义：锁定数仓正式表，规范实收收入与计费票数计算公式',
        '业务语义：定义集团关联账户与开票从属关系、量价拆解逻辑、大促错位比对日历',
        '分析语义：固化五步分析链路，事实贡献与因果证据严格剥离'
      ],
      src: '/images/image12.jpg',
      desensitizeNote: '已做脱敏处理：脱敏底表绝对路径与涉及具体商户明细字段，完整保留三层规则语法框架。'
    },
    {
      id: 'img-9',
      num: '图 3',
      title: '领慧协同工作台 · 办公群内智能分析助手',
      subtitle: '在日常办公协同群内，群内提问即时输出结构化卡片与异动归因',
      tag: '办公协同实机',
      desc: '智能分析助手小可以机器人形态常驻顺丰日常办公群。业务同事在群内提问“XX产品收入下滑原因”，机器人秒级调取数仓、执行主体归并与量价拆解，并推送因果拆解卡片，无需业务人员登入多个系统查表。',
      highlights: [
        '顺丰办公群内原生集成，零门槛即问即答',
        '卡片式回复，包含收入波动幅度、核心异动客户与时效延误线索',
        '支持一键生成完整深度诊断报告链接并直接查看'
      ],
      src: '/images/image9.jpg',
      desensitizeNote: '已做脱敏处理：群成员姓名及头像打码，月结卡号采用部分掩码处理，真实展现卡片交互。'
    },
    {
      id: 'img-23',
      num: '图 4',
      title: '业务语义实战 · 收入多维拆解与集团关联账户归并',
      subtitle: '自动拆解量价结构与账户划转，阻断虚假流失误判',
      tag: '因果溯源实战',
      desc: '实战案例展示：某华东头部品牌某月结账户收入大幅下滑，系统首先进行收入量价与产品结构拆解，并调取集团关联账户映射，自动识别出该品牌仅为开票主体迁移至邻区分公司，收入在关联账号上激增，属于内部开票划转而非真实流失，精准阻断一线销售盲目打折。',
      highlights: [
        '识别集团旗下多个关联开票账户，先透视主体再计算流失风险',
        '剔除内部开票划转造成的虚假异动，保护客户真实价值与价格体系',
        '对准真正存在履约时效问题的流失客户实体，收敛一线排查范围'
      ],
      src: '/images/image23.jpg',
      desensitizeNote: '已做脱敏处理：客户真实商业名称与账号代号打码掩码，保留完整的主体从属结构。'
    },
    {
      id: 'img-24',
      num: '图 5',
      title: '交互式经营诊断报告 · 结论与证据链严格分离',
      subtitle: '30分钟端到端自动生成标准化诊断报告，无证据绝不下定论',
      tag: '成果交付实机',
      desc: '系统端到端输出的 HTML 交互式经营诊断战报。报告分为「异动幅度核验」、「贡献度量化拆解」、「因果证据链条」与「待线下走访核实项」，严格杜绝主观臆测，成为各级管理评审的高可信依据。',
      highlights: [
        '贡献度（谁引起）与因果性（为何引起）严格解耦陈列',
        '挂载干线转运时效延误证据链，线索具备高置信度支撑',
        '无据不立：数据盲区主动标注「待线下核实」，人做最终裁决'
      ],
      src: '/images/image24.jpg',
      desensitizeNote: '已做脱敏处理：经营绝对值采用百分比与指数相对值呈现，保留完整报告结构与论证链。'
    },
    {
      id: 'img-20',
      num: '图 6',
      title: '全链路双轨驱动架构 · 顺丰办公生态无缝嵌入',
      subtitle: '深度分析专家与日常协同终端结合，覆盖顺丰核心办公生态',
      tag: '工程架构实证',
      desc: '完整呈现双轨工程落地架构：上层打通钉钉群协同与丰景台专家控制台；中层加载三层语义规则与永久记忆库；底层连接授权数仓正式表并由安全权限通道把关，形成稳固严密的工程闭环。',
      highlights: [
        '双轨载体互补：丰景台承接深度下钻，领慧小可承接即时协同',
        '集团统一鉴权：严格遵循工号权限隔离，杜绝越权访问',
        '全流程日志留痕，可复核、可审计、可追溯'
      ],
      src: '/images/image20.jpg',
      desensitizeNote: '已做脱敏处理：数仓物理机房与私网接口地址掩码，保留完整的工程部署关系。'
    }
  ];

  const current = showcaseScreenshots[activeTab];

  return (
    <section id="real-ui" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>落地实证 · 真实业务系统截帧</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            不是概念演示，是已经在生产环境平稳运行的真实系统
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            所有截帧均来自顺丰丰景台与领慧协同平台的真实运行界面。
            <br className="hidden sm:inline" />
            以真实界面、真实规则配置、真实诊断报告，展现端到端可复核的数据分析闭环。
          </p>
        </div>

        {/* Tab Selection Bar (Responsive scrollable for mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {showcaseScreenshots.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all border cursor-pointer flex items-center gap-2 shrink-0 ${
                activeTab === idx
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                  : 'bg-[#080E20]/80 text-slate-400 border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                activeTab === idx ? 'bg-slate-950/20 text-slate-950' : 'bg-white/5 text-cyan-400'
              }`}>
                {item.num}
              </span>
              <span>{item.tag}</span>
            </button>
          ))}
        </div>

        {/* Big UI Showcase Card (Desktop 12 cols split / Mobile clean stack) */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.15)] backdrop-blur-2xl">
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#0A1226] border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs font-bold text-slate-300 truncate">
                顺丰生产系统实机截帧 · {current.num} · {current.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">脱敏实据 · 可审计核查</span>
              <span className="sm:hidden">脱敏实据</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left 7 cols: Giant High-Fidelity UI Image */}
            <div className="lg:col-span-7 bg-slate-950/70 p-4 sm:p-6 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-white/10 group relative">
              <div
                onClick={() => onOpenImage(current.id)}
                className="relative rounded-2xl overflow-hidden cursor-pointer w-full border border-white/10 shadow-2xl group-hover:border-cyan-400/60 transition-all bg-black/40"
              >
                <img
                  src={current.src}
                  alt={current.title}
                  className="w-full max-h-[460px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="truncate mr-2">{current.title}</span>
                  <span className="flex items-center gap-1 text-white shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" /> 点击放大全分辨率查验
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Sharp Narrative & Engineering Highlights */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-[#080E20]/90">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                      {current.num} · 关键界面解读
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                      {current.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    {current.title}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 font-normal">
                    {current.subtitle}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {current.desc}
                </p>

                {/* 3 Core Highlights */}
                <div className="space-y-2.5 pt-2">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desensitization Footnote and Zoom Action */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="text-[11px] text-slate-400 leading-relaxed font-mono">
                  {current.desensitizeNote}
                </div>
                <button
                  onClick={() => onOpenImage(current.id)}
                  className="w-full py-3 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>在光箱中查验申报材料高分辨率原件</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
