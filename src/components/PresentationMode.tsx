import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize,
  Minimize,
  X,
  Clock,
  Eye,
  List,
  Sparkles,
  ArrowRight,
  BookOpen,
  Volume2,
  Maximize2
} from 'lucide-react';
import { SLIDES_DATA, SlideContent } from '../data/presentationData';

interface PresentationModeProps {
  onExit: () => void;
  onOpenImage: (id: string) => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onExit, onOpenImage }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showScript, setShowScript] = useState(true);
  const [showDrawer, setShowDrawer] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [selectedSubImage, setSelectedSubImage] = useState<'primary' | 'secondary'>('primary');

  const totalSlides = SLIDES_DATA.length;
  const currentSlide = SLIDES_DATA[currentSlideIndex];

  // Reset sub-image on slide change
  useEffect(() => {
    setSelectedSubImage('primary');
  }, [currentSlideIndex]);

  // Presentation Timer (10 minutes target)
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
      } else if (e.key === 'Escape') {
        if (showDrawer) {
          setShowDrawer(false);
        } else {
          onExit();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 't' || e.key === 'T') {
        setShowDrawer((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides, onExit, showDrawer]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const activeImageId =
    selectedSubImage === 'primary' || !currentSlide.secondaryImageId
      ? currentSlide.primaryImageId
      : currentSlide.secondaryImageId;

  const activeImageSrc = `/images/${activeImageId.replace('img-', 'image')}.jpg`;

  return (
    <div className="fixed inset-0 z-50 bg-[#040814] flex flex-col select-none overflow-hidden text-slate-100 font-sans">
      {/* Top HUD Presentation Bar */}
      <div className="h-14 px-3 sm:px-6 border-b border-white/10 bg-[#070D1D]/90 backdrop-blur-md flex items-center justify-between gap-2 shrink-0">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <div className="w-2.5 h-5 bg-cyan-400 rounded-sm shadow-[0_0_12px_#38BDF8] shrink-0" />
          <span className="text-xs sm:text-sm font-mono text-cyan-400 font-bold tracking-wider truncate">
            0{currentSlide.id} / 0{totalSlides}
          </span>
          <span className="text-slate-600 text-xs hidden sm:inline">|</span>
          <span className="text-xs sm:text-sm text-slate-200 font-bold truncate max-w-[150px] sm:max-w-none">
            {currentSlide.chapter} · {currentSlide.tag}
          </span>
        </div>

        {/* Center Timer & Chapter Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border transition-colors ${
              elapsedSeconds > 600
                ? 'bg-rose-950/60 border-rose-500 text-rose-300 animate-pulse'
                : 'bg-slate-900 border-white/10 text-slate-300'
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{formatTime(elapsedSeconds)}</span>
            <span className="text-slate-500 hidden md:inline">/ 10:00 (路演标准用时)</span>
          </div>

          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border flex items-center gap-1.5 transition-colors cursor-pointer ${
              showDrawer
                ? 'bg-cyan-950 border-cyan-700 text-cyan-300'
                : 'bg-slate-900 border-white/10 text-slate-300 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">幻灯片目录 (T)</span>
            <span className="sm:hidden">目录</span>
          </button>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowScript(!showScript)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors cursor-pointer flex items-center gap-1.5 ${
              showScript
                ? 'bg-slate-800 border-white/20 text-cyan-300'
                : 'bg-slate-900 border-white/10 text-slate-400'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{showScript ? '收起演讲备忘' : '展开演讲备忘'}</span>
            <span className="sm:hidden">讲稿</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="全屏切换 (F)"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          <button
            onClick={onExit}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-rose-900/40 hover:border-rose-500 transition-colors cursor-pointer"
            title="退出路演 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Presentation Stage (Desktop Split / Mobile Stack) */}
      <div className="flex-1 relative flex flex-col justify-between px-3 sm:px-8 lg:px-12 py-3 sm:py-5 overflow-y-auto">
        <div className="max-w-7xl mx-auto w-full my-auto flex flex-col gap-4 sm:gap-6">
          {/* Main Slide Grid: Left Narrative + Right Big UI Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-stretch">
            {/* Left Column (5 Cols on Desktop / Below Image on Mobile): High-impact Typography, Core Axiom & Giant Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4 order-2 lg:order-1">
              <div>
                {/* Section Tag */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold tracking-wider">
                    {currentSlide.tag}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                </div>

                {/* Big Title */}
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-2 drop-shadow-md">
                  {currentSlide.title}
                </h2>
                <div className="text-sm sm:text-base font-bold text-cyan-300/90 mb-4">
                  {currentSlide.subtitle}
                </div>

                {/* Core Thesis Pill (High-Cognition Axiom) */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#091124]/90 border border-cyan-500/30 shadow-xl backdrop-blur-md relative overflow-hidden mb-4">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-400 to-indigo-500" />
                  <div className="text-[11px] font-mono tracking-widest text-cyan-400 font-bold mb-1.5">
                    核心主张与高阶认知
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                    {currentSlide.thesis}
                  </p>
                </div>
              </div>

              {/* 3 Giant Metric Badges (Read at a glance!) */}
              <div className="space-y-2.5">
                {currentSlide.keyPoints.map((kp, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 sm:p-4 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-between gap-3 shadow-md"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                          {kp.title}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                          {kp.description}
                        </p>
                      </div>
                    </div>
                    {kp.metric && (
                      <span className="text-xs sm:text-sm font-mono font-black text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-700/60 shadow-[0_0_12px_rgba(56,189,248,0.25)] shrink-0">
                        {kp.metric}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (7 Cols on Desktop / Top on Mobile): Giant UI Canvas & Real System Media */}
            <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
              <div className="w-full flex-1 rounded-3xl border border-cyan-500/30 bg-[#070D1D]/95 shadow-[0_0_60px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col relative group">
                {/* Window Chrome Header */}
                <div className="h-10 px-4 bg-[#0A1226] border-b border-white/10 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-300 ml-2 font-bold truncate">
                      {currentSlide.imageLabel}
                    </span>
                  </div>

                  {/* Switch between Primary and Secondary Screenshots if available */}
                  <div className="flex items-center gap-2">
                    {currentSlide.secondaryImageId && (
                      <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-white/10 text-[11px] font-mono">
                        <button
                          onClick={() => setSelectedSubImage('primary')}
                          className={`px-2.5 py-0.5 rounded cursor-pointer font-bold ${
                            selectedSubImage === 'primary'
                              ? 'bg-cyan-500 text-slate-950 shadow'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          主视窗 (原件)
                        </button>
                        <button
                          onClick={() => setSelectedSubImage('secondary')}
                          className={`px-2.5 py-0.5 rounded cursor-pointer font-bold ${
                            selectedSubImage === 'secondary'
                              ? 'bg-cyan-500 text-slate-950 shadow'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          副视窗 (实机)
                        </button>
                      </div>
                    )}

                    <button
                      onClick={() => onOpenImage(activeImageId)}
                      className="flex items-center gap-1 text-xs text-cyan-300 hover:text-white cursor-pointer px-2 py-0.5 rounded bg-white/5 border border-white/10"
                      title="开启 4K 全屏光箱查验"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">全屏查验</span>
                    </button>
                  </div>
                </div>

                {/* Giant High-Fidelity UI Image */}
                <div
                  onClick={() => onOpenImage(activeImageId)}
                  className="flex-1 min-h-[200px] sm:min-h-[360px] lg:min-h-[460px] relative bg-black/50 p-2 sm:p-4 flex items-center justify-center cursor-pointer overflow-hidden"
                >
                  <img
                    src={activeImageSrc}
                    alt={currentSlide.title}
                    className="w-full h-full max-h-[480px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                    <div className="text-xs text-slate-200 bg-slate-900/90 border border-cyan-500/40 px-4 py-2 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>点击放大查验原始数仓配置、业务规则与交互诊断战报细节</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collapsible Speaker Script / Preseter Teleprompter */}
          {showScript && (
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#091124]/95 border border-cyan-500/20 shadow-lg text-xs sm:text-sm text-slate-300 flex items-start gap-3">
              <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                <Volume2 className="w-4 h-4" />
              </div>
              <div className="flex-1 leading-relaxed">
                <span className="font-bold text-cyan-300 mr-2">【10分钟路演讲稿备忘】</span>
                <span>{currentSlide.speakerScript}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Floating Navigation Dock */}
      <div className="h-16 px-4 sm:px-8 border-t border-white/10 bg-[#070D1D]/90 backdrop-blur-md flex items-center justify-between gap-4 shrink-0">
        <button
          onClick={() => setCurrentSlideIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentSlideIndex === 0}
          className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border transition-all cursor-pointer ${
            currentSlideIndex === 0
              ? 'opacity-30 border-white/5 cursor-not-allowed text-slate-600'
              : 'bg-white/5 border-white/15 hover:bg-white/10 hover:border-cyan-400 text-white'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一页</span>
        </button>

        {/* Step Indicator Dots */}
        <div className="flex items-center gap-2">
          {SLIDES_DATA.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 sm:h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlideIndex === idx
                  ? 'w-8 sm:w-10 bg-cyan-400 shadow-[0_0_10px_#38BDF8]'
                  : 'w-2 sm:w-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
              title={`第 0${s.id} 篇: ${s.title}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlideIndex((prev) => Math.min(totalSlides - 1, prev + 1))}
          disabled={currentSlideIndex === totalSlides - 1}
          className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 border transition-all cursor-pointer ${
            currentSlideIndex === totalSlides - 1
              ? 'opacity-30 border-white/5 cursor-not-allowed text-slate-600'
              : 'bg-cyan-500 border-cyan-400 text-slate-950 font-black hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
          }`}
        >
          <span>下一页</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Directory Drawer */}
      {showDrawer && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
          <div className="w-full max-w-md bg-[#080E20] border-l border-white/10 h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2 font-bold text-white text-base">
                  <List className="w-5 h-5 text-cyan-400" />
                  <span>路演篇章目录 (10分钟版)</span>
                </div>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {SLIDES_DATA.map((slide, idx) => {
                  const isCurrent = currentSlideIndex === idx;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => {
                        setCurrentSlideIndex(idx);
                        setShowDrawer(false);
                      }}
                      className={`w-full p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-cyan-950/60 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                          : 'bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className={isCurrent ? 'text-cyan-400 font-bold' : 'text-slate-400'}>
                          篇章 0{slide.id}
                        </span>
                        <span className="text-[11px] text-slate-400">{slide.tag}</span>
                      </div>
                      <h4 className="text-sm font-bold text-white tracking-tight">{slide.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">{slide.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setShowDrawer(false);
                  onExit();
                }}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-xs border border-white/10"
              >
                退出路演模式并返回全景页面
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
