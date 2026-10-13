import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 sm:px-6 md:flex-row gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Cpu className="h-4 w-4" />
          </div>
          <div>
            <span className="text-sm font-bold tracking-wider text-slate-200">
              顺丰速运 · 共生智能语义层数据分析实践
            </span>
            <span className="block text-[11px] text-slate-400 font-mono mt-0.5">
              顺丰集团创新大赛 · 决赛 · 产品业务处 孙豪杰
            </span>
          </div>
        </div>

        <div className="flex flex-col md:items-end text-xs text-slate-400 font-mono gap-1 text-center md:text-right">
          <div>主创团队：顺丰速运 · 产品业务处 · 孙豪杰</div>
          <div>© 2026 顺丰速运 集团内部首创成果</div>
        </div>
      </div>
    </footer>
  );
};
