import React, { useState } from 'react';
import { Presentation, LayoutGrid, Cpu, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isPresentationMode: boolean;
  setIsPresentationMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isPresentationMode,
  setIsPresentationMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: '作品档案' },
    { id: 'problem-solution', label: '痛点破局' },
    { id: 'evolution', label: '共生演进史' },
    { id: 'pipeline', label: '六节点流水线' },
    { id: 'real-ui', label: '真实系统截帧' },
    { id: 'metrics', label: '量化成效' },
    { id: 'iteration-boundaries', label: '迭代与边界' },
  ];

  const handleNavClick = (id: string) => {
    if (isPresentationMode) setIsPresentationMode(false);
    setActiveTab(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        {/* Brand Wordmark (Pure Chinese, SF Identity) */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.35)]">
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-sm sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
              顺丰速运
            </span>
            <span className="text-slate-500 font-light">|</span>
            <span className="text-xs sm:text-base font-semibold text-cyan-400 tracking-wide whitespace-nowrap">
              共生智能
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links (Clean 7 Chapters) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer hover:text-white ${
                activeTab === link.id && !isPresentationMode
                  ? 'text-cyan-400 font-bold border-b-2 border-cyan-400'
                  : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Action buttons & mobile hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="hidden sm:flex items-center px-3 py-1.5 rounded-full border border-white/10 text-xs font-mono text-slate-300 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2 animate-pulse" />
            <span>集团创新大赛 · 决赛</span>
          </div>

          <button
            onClick={() => setIsPresentationMode(!isPresentationMode)}
            className={`px-3.5 sm:px-5 py-2 text-xs sm:text-sm font-bold rounded-full flex items-center gap-1.5 sm:gap-2 transition-all whitespace-nowrap cursor-pointer shadow-lg ${
              isPresentationMode
                ? 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25 border border-cyan-400/50'
            }`}
          >
            {isPresentationMode ? (
              <>
                <LayoutGrid className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>全景页面</span>
              </>
            ) : (
              <>
                <Presentation className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>10分钟路演模式</span>
              </>
            )}
          </button>

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 cursor-pointer"
            aria-label="切换菜单"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (Dual-Screen friendly) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#060A16] px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="w-full text-left py-2.5 px-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
            </button>
          ))}
          <div className="pt-3 border-t border-white/10">
            <button
              onClick={() => {
                setIsPresentationMode(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm text-center flex items-center justify-center gap-2"
            >
              <Presentation className="w-4 h-4" />
              <span>启动 10分钟路演模式</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
