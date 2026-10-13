import React, { useState } from 'react';
import {
  MessageSquare,
  Cpu,
  Layers,
  Send,
  Lock,
  GitBranch,
  Sparkles,
  ExternalLink,
  BookOpen,
  Maximize2,
  ChevronRight,
  TrendingDown,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

interface PipelineSectionProps {
  onOpenImage: (id: string) => void;
}

export const PipelineSection: React.FC<PipelineSectionProps> = ({ onOpenImage }) => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const pipelineNodes = [
    {
      id: 0,
      title: '意图',
      sub: '业务需求门禁',
      desc: '意图识别 ➔ 拦截模糊问题',
      icon: MessageSquare,
      color: '#38BDF8',
      imageSrc: '/images/image21.jpg',
      imageId: 'img-21',
      imageLabel: '申报原件 21 · 业务问题识别与异常初筛',
      literaryAxiom: '“无规矩不成方圆。业务分析始于清晰的问题边界，而非漫无目的的随机提问。”',
      details: {
        title: '意图收敛门禁：自然语言对齐与前置澄清',
        badge: '第 1 节点 · 需求拆解与门禁',
        content:
          '用户输入模糊提问时（如“收入掉了怎么回事”），门禁拦截机制自动补齐分析要素（时间范围、产品线分类、目标地区），判定问题具备分析条件后方才放行进入下一步。',
        metric: '意图对齐率: 100%',
        tags: ['前置门禁', '反模糊反猜疑', '确定性约束'],
      },
    },
    {
      id: 1,
      title: '数据',
      sub: '明细总量二次核验',
      desc: '数仓正式表 ➔ 物理隔离',
      icon: Lock,
      color: '#06B6D4',
      imageSrc: '/images/image28.jpg',
      imageId: 'img-28',
      imageLabel: '申报原件 28 · 复杂多口径自动统一实录',
      literaryAxiom: '“数据不可信，则决策皆无根基。以数仓正式表为底座，明细与总量二次比对，实现财务级口径一致。”',
      details: {
        title: '数据语义层：数仓正式表授权与明细大盘对齐',
        badge: '第 2 节点 · 数据语义对齐',
        content:
          '严格将取数范围限定在经过数仓认证的正式主题表，杜绝非法调用历史废表与临时表。下钻月结卡明细汇总值强制与宏观大盘总额执行二次交叉核验，彻底解决传统取数工具查错表、算错数的硬伤风险。',
        metric: '口径一致率: 100% 严格一致',
        tags: ['数仓白名单', '指标公式严密对齐', '明细总量对齐核验'],
      },
    },
    {
      id: 2,
      title: '业务',
      sub: '收入拆解与关联账户',
      desc: '量价分解 ➔ 排除虚假流失',
      icon: GitBranch,
      color: '#10B981',
      imageSrc: '/images/image23.jpg',
      imageId: 'img-23',
      imageLabel: '申报原件 23 · 客户主体穿透与实体网络归并',
      literaryAxiom: '“深入拆解收入量价驱动、透视集团关联账户划转，方能还原真实经营面貌。”',
      details: {
        title: '业务语义层：收入量价拆解、关联账户归并与大促错期窗口',
        badge: '第 3 节点 · 业务语义穿透',
        content:
          '深入理解顺丰业务本质：第一，自动对收入执行「件量 × 单票收入 × 产品流向」多维量价拆解；第二，自动归并集团旗下多个开票月结账户，识别出客户 B 仅为开票主体跨区划转（非实质退网流失）；第三，锁定真正流失客户 A 并结合电商大促错位窗口对齐真实同比基线。',
        metric: '业务口径准确度: 100%',
        tags: ['收入量价拆解', '关联账户归并', '排除虚假流失', '大促跨期对齐'],
      },
    },
    {
      id: 3,
      title: '分析',
      sub: '因果推导与边界收口',
      desc: '五步闭环 ➔ 严密复核',
      icon: Cpu,
      color: '#6366F1',
      imageSrc: '/images/image18.jpg',
      imageId: 'img-18',
      imageLabel: '申报原件 18 · 分析可复核机制与证据边界',
      literaryAxiom: '“量化贡献与因果证据严密解耦，无据不言，确保分析结论具备可复核性。”',
      details: {
        title: '分析语义层：标准化五步推导链与因果隔离',
        badge: '第 4 节点 · 严密推导与证据收口',
        content:
          '严格遵循五步标准化推导链（异常确认 ➔ 贡献拆解 ➔ 对象定位 ➔ 拐点追溯 ➔ 交叉核验）。将“贡献度”与“因果假设”解耦交付，交叉核验转运修路时效延误证据；在证据不足时主动收口标注待核实盲区，绝不把相关性冒充因果。',
        metric: '推论可追溯率: 100%',
        tags: ['标准化五步分析链', '贡献度因果分离', '证据边界收口'],
      },
    },
    {
      id: 4,
      title: '交付',
      sub: '30分钟报告输出',
      desc: '高质交付 ➔ 事实因果解耦',
      icon: Send,
      color: '#F59E0B',
      imageSrc: '/images/image24.jpg',
      imageId: 'img-24',
      imageLabel: '申报原件 24 · 自动化生成 HTML 交互式诊断报告',
      literaryAxiom: '“终局成于闭环。以结构化报告交付可落地的策略建议，经验沉淀为系统能力，实现全网复用。”',
      details: {
        title: '端到端输出交互式战报与资产沉淀',
        badge: '第 5 节点 · 闭环报告交付',
        content:
          '30 分钟内自动生成结构化 HTML 交互式经营诊断战报，分为「异动幅度核验」、「贡献度量化拆解」、「因果证据链条」与「待线下走访核实项」，推送至钉钉业务群，抄送相关产品经理与业务负责人。',
        metric: '交付提效: 95% (从2天到30分)',
        tags: ['交互式诊断报告', '钉钉群秒级触达', '行动建议清单'],
      },
    },
    {
      id: 5,
      title: '反哺',
      sub: '知识沉淀与回归闭环',
      desc: '错题本演进 ➔ 全网复用',
      icon: Sparkles,
      color: '#EC4899',
      imageSrc: '/images/image5.jpg',
      imageId: 'img-5',
      imageLabel: '申报原件 05 · 语义层沉淀与反例收口流程',
      literaryAxiom: '“持续进化才是生命力。每一次错题校准与边界收口，都转化为全网可调用的规则资产。”',
      details: {
        title: '反例回归与规则持续反哺：从单点经验到组织资产',
        badge: '第 6 节点 · 经验反哺语义字典',
        content:
          '复盘结论直接回流语义层知识库。收集一线分析师与管理者的核查反馈，将特殊场景（如跨区开票划转、极端天气干线绕行例外）沉淀进回归测试错题本，更新语义规则包，使系统越用越懂顺丰业务。',
        metric: '规则留存率: 100% 组织资产化',
        tags: ['反例收口', '错题本回归', '全网飞轮自演进'],
      },
    },
  ];

  const currentNode = pipelineNodes[activeNode];

  return (
    <section id="pipeline" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-semibold tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>核心武器 · 全链路闭环</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            六个节点，一条全链路智能流水线
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            不是买一堆零碎工具再拼凑代码，而是将通用能力与顺丰生产环境深度融合。
            <br className="hidden sm:inline" />
            把“需求拆解 ➔ 语义对齐 ➔ 路径规划 ➔ 交叉校验 ➔ 报告输出 ➔ 经验反哺”连成闭环。
          </p>
        </div>

        {/* Stepper Horizontal Node Bar (6 Nodes, Responsive Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10">
          {pipelineNodes.map((node, idx) => {
            const isSelected = activeNode === idx;
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNode(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl text-left border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-950/80 to-[#0A1326] border-cyan-400 shadow-[0_0_25px_rgba(6,182,212,0.25)] scale-[1.02]'
                    : 'bg-[#080E20]/80 border-white/5 hover:border-white/20 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs"
                    style={{
                      backgroundColor: `${node.color}20`,
                      color: node.color,
                      border: `1px solid ${node.color}40`,
                    }}
                  >
                    0{idx + 1}
                  </div>
                  <Icon className="w-4 h-4" style={{ color: node.color }} />
                </div>
                <div className={`text-sm sm:text-base font-black truncate ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                  {node.title} · {node.sub}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1 truncate">
                  {node.desc}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Node Detail Card */}
        <div className="rounded-3xl bg-[#070D1D]/95 border border-cyan-500/30 overflow-hidden shadow-[0_0_70px_rgba(6,182,212,0.15)] backdrop-blur-2xl">
          {/* Top Window Bar */}
          <div className="px-5 py-3.5 bg-[#0A1226] border-b border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs font-bold text-slate-300 truncate">
                流水线节点实操截帧 · {currentNode.imageLabel}
              </span>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 font-bold">
              {currentNode.details.badge}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left 7 cols: Image Viewport */}
            <div className="lg:col-span-7 bg-slate-950/70 p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10 group relative">
              <div
                onClick={() => onOpenImage(currentNode.imageId)}
                className="relative rounded-2xl overflow-hidden cursor-pointer w-full border border-white/10 shadow-2xl group-hover:border-cyan-400/60 transition-all bg-black/40"
              >
                <img
                  src={currentNode.imageSrc}
                  alt={currentNode.title}
                  className="w-full max-h-[440px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-cyan-300 bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
                  <span className="truncate mr-2">{currentNode.imageLabel}</span>
                  <span className="flex items-center gap-1 text-white shrink-0">
                    <Maximize2 className="w-3.5 h-3.5" /> 点击放大全分辨率查验
                  </span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Node Details */}
            <div className="lg:col-span-5 p-5 sm:p-8 flex flex-col justify-between space-y-5 bg-[#080E20]/90">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                    {currentNode.details.badge}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
                    {currentNode.details.title}
                  </h3>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-cyan-300 italic font-serif">
                  {currentNode.literaryAxiom}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentNode.details.content}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {currentNode.details.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {currentNode.details.metric}
                </span>
                <button
                  onClick={() => onOpenImage(currentNode.imageId)}
                  className="text-xs font-mono text-cyan-300 hover:text-white flex items-center gap-1 cursor-pointer"
                >
                  <span>查看原稿</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
