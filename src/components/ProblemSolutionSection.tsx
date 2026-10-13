import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, Cpu, Database, ArrowRight, Layers, FileText, Lock, Network, Search, GitBranch } from 'lucide-react';

interface ProblemSolutionSectionProps {
  onOpenImage?: (id: string) => void;
}

export const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({ onOpenImage }) => {
  const [selectedDeathKnot, setSelectedDeathKnot] = useState<number>(0);

  const deathKnots = [
    {
      id: 'knot-1',
      index: '01',
      title: '业务术语多重歧义',
      tag: '口径冲突',
      summary: '同样叫“件量”，有接单件、揽收件、到达件、派送件、计费件，通用模型直接猜必然查错。',
      traditional: '业务同事问“上周特快件量”，传统工具随机抓取了网点揽收件数，而财务考核看的是实效计费件，两者偏差18%，引发跨部门反复对账扯皮。',
      sfSolution: '数据语义层硬约束：预置《核心业务口径字典》，输入“件量”强制要求指明阶段（揽/派/计费），或按提问角色智能默认标准考核口径，杜绝同名不同义。',
    },
    {
      id: 'knot-2',
      index: '02',
      title: '宽表穿透盲人摸象',
      tag: '底层表乱关联',
      summary: '顺丰底仓数千张物理表，通用模型缺乏约束，容易乱搭关联关系、字段错位。',
      traditional: '底层数仓存在历史归档表、临时中间表与正式表。模型看到字段名相似就盲目写关联，把已作废的历史运费模版当作有效价格，算出的单票毛利完全失真。',
      sfSolution: '数仓认证正式表制度：严格物理隔离，仅对经过数仓认证的正式主题表开放寻址；明细下钻与宏观大盘执行二次交叉核验，确保数据一致。',
    },
    {
      id: 'knot-3',
      index: '03',
      title: '经验隐性未被沉淀',
      tag: '经验在脑中',
      summary: '大型客户多开票账户内部调账、量价结构拆解、大促可比窗口全在老分析师脑子里，新人问不到，机器不知道。',
      traditional: '某大型数码品牌因内部开票主体迁移，传统工具直接报警“华东大客户断崖式流失”，销售团队慌乱登门，实为关联账户内部调账虚警；面对收入下滑，传统问数只会机械报总额，完全不懂如何按件量、单价与产品结构深入拆解。',
      sfSolution: '业务语义层立体建模：沉淀收入量价四层拆解字典、集团多账号跨主体划转归并规则与电商大促跨期日历，自动识别内部划转排除虚假流失，自动按产品线与流向拆解量价异动。',
    },
    {
      id: 'knot-4',
      index: '04',
      title: '结果无人敢背书',
      tag: '黑盒不可信',
      summary: '传统取数仅返回单个静态数字，缺乏因果证据链，一线调度不敢据此调整干线车与航班。',
      traditional: '系统告诉一线主管“7月收入降了4.2%”，却回答不了“主要由谁引起”、“责任在运力还是客群”。开会讨论时各部门相互推诿，数据沦为空谈。',
      sfSolution: '分析语义强制分层交付：将“贡献度量化”、“转运时效证据链”与“主观假设”解耦交付；遇到数据盲区主动标注「待线下核实」，杜绝伪因果推理。',
    },
  ];

  return (
    <section id="problem-solution" className="py-16 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono font-semibold tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            <span>业务痛点与破局立论</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            物流分析最难的不是“查出数字”，而是“敢不敢按数字做决策”
          </h2>
          <p className="text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            一次复杂异动排查往往需要跨部门拉扯 1~2 天，底层数仓万千张表，而业务窗口期稍纵即逝。
            <br className="hidden sm:inline" />
            顺丰不是把智能系统当作提问玩具，而是把它作为「确定性业务规则的放大器」。
          </p>
        </div>

        {/* Dual Column Problem vs Solution Arena */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-14">
          {/* Left Column: Traditional Model (4 Fatal Knots) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#0F0B15]/90 border border-rose-500/30 p-5 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(244,63,94,0.08)]">
            <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-rose-500/20 mb-5 sm:mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-rose-400 tracking-wider">传统取数模式</span>
                <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5">传统数据分析的四大死结</h3>
              </div>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-rose-500/10 text-rose-300 text-xs font-mono font-semibold border border-rose-500/30">
                盲猜硬伤
              </span>
            </div>

            <div className="space-y-3">
              {deathKnots.map((knot, idx) => {
                const isSelected = selectedDeathKnot === idx;
                return (
                  <div
                    key={knot.id}
                    onClick={() => setSelectedDeathKnot(idx)}
                    className={`p-3.5 sm:p-5 rounded-2xl cursor-pointer transition-all border ${
                      isSelected
                        ? 'bg-rose-950/40 border-rose-500/60 shadow-[0_0_20px_rgba(244,63,94,0.15)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-rose-500/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl font-mono text-xs font-black flex items-center justify-center shrink-0 mt-0.5 ${
                        isSelected ? 'bg-rose-500 text-white' : 'bg-white/10 text-rose-300'
                      }`}>
                        {knot.index}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                            {knot.title}
                          </h4>
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300 border border-rose-500/20 shrink-0">
                            {knot.tag}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                          {knot.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: SF Express Answer (Semantic Determinism) */}
          <div className="lg:col-span-6 rounded-3xl bg-[#091124]/90 border border-cyan-500/30 p-5 sm:p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(6,182,212,0.1)]">
            <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-cyan-500/20 mb-5 sm:mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">顺丰实践答案</span>
                <h3 className="text-lg sm:text-2xl font-black text-white mt-0.5">顺丰的答案：语义层确定性</h3>
              </div>
              <span className="px-2.5 sm:px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/30">
                集团内部首创
              </span>
            </div>

            <div className="space-y-4 sm:space-y-5">
              {/* Step 1 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-mono font-bold flex items-center justify-center">
                    ①
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-cyan-200">
                    先沉淀专家隐性经验
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  把资深业务分析师多年沉淀的分析规则——核心考核口径、收入量价拆解、集团关联账户归并、大促错位窗口——写进语义层字典，变成组织资产而不是个人脑海记忆。
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-300 text-xs font-mono font-bold flex items-center justify-center">
                    ②
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-sky-200">
                    系统负责严密计算与客观求证
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  在三层语义的硬约束下，系统执行多维排查与自动取数，跨表严密运算；分析周期从 1~2 天压缩至 30 分钟以内，高效支撑全网需求。
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-4 sm:p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/30">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-6 h-6 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold flex items-center justify-center">
                    ③
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-indigo-200">
                    人类专家负责把控方向与终审
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  系统将“贡献度”、“因果证据”与“主观假设”分层交付；缺乏转运时效证据时主动标注待线下核实。系统不替业务拍板，业务专家拍板后结论反哺语义层。
                </p>
              </div>

              {/* 3 Verification Badges */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="px-2.5 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[11px] text-cyan-300 font-mono font-semibold">✓ 明细总量对齐</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">跨表对数严格一致</div>
                </div>
                <div className="px-2.5 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[11px] text-emerald-300 font-mono font-semibold">✓ 关联账户归并</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">排除内部划转假流失</div>
                </div>
                <div className="px-2.5 py-2 rounded-xl bg-white/5 border border-white/10 text-center">
                  <div className="text-[11px] text-indigo-300 font-mono font-semibold">✓ 证据边界收口</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">无据不立避免伪因果</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Sentence We Live By Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/50 via-[#0C152B] to-slate-900 border border-cyan-500/40 p-5 sm:p-8 shadow-[0_0_60px_rgba(6,182,212,0.15)] flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono text-cyan-400 tracking-wider font-semibold">
              核心信条 · 顺丰共生智能工作法则
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight">
              “智能系统负责让严密计算快起来，人类专家负责把控业务方向与因果边界。”
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              底表千万张，让机器去穷尽检索；因果与权责，让人类专家来最终拍板。
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => onOpenImage?.('img-15')}
              className="px-5 py-2.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] flex items-center gap-2 cursor-pointer"
            >
              <Cpu className="w-4 h-4" />
              <span>查看共生智能申报手稿</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
