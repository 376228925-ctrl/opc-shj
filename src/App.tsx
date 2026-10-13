import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { SymbioticEvolutionSection } from './components/SymbioticEvolutionSection';
import { PipelineSection } from './components/PipelineSection';
import { RealUIShowcaseSection } from './components/RealUIShowcaseSection';
import { MetricsAndRoiSection } from './components/MetricsAndRoiSection';
import { IterationAndBoundariesSection } from './components/IterationAndBoundariesSection';
import { Footer } from './components/Footer';
import { ImageModal } from './components/ImageModal';
import { PresentationMode } from './components/PresentationMode';
import { BackgroundEffects } from './components/BackgroundEffects';
import { IMAGE_EVIDENCE_LIST } from './data/imageGalleryData';
import { ImageEvidence } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [isPresentationMode, setIsPresentationMode] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageEvidence | null>(null);

  const handleOpenImageById = (id: string) => {
    const found = IMAGE_EVIDENCE_LIST.find((img) => img.id === id);
    if (found) {
      setSelectedImage(found);
    }
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-cyan-900 selection:text-cyan-100 relative">
      {/* Peaceful Starry Cosmic Universe with Flowing Meteor Streaks */}
      <BackgroundEffects />

      {/* Presentation Fullscreen 10-Minute Roadshow Mode */}
      {isPresentationMode ? (
        <PresentationMode
          onExit={() => setIsPresentationMode(false)}
          onOpenImage={handleOpenImageById}
        />
      ) : (
        <div className="relative z-10">
          {/* Main Navigation Bar */}
          <Navbar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            isPresentationMode={isPresentationMode}
            setIsPresentationMode={setIsPresentationMode}
          />

          {/* Main Body Showcase Sections (7 Clean Benchmark-Calibrated Chapters) */}
          <main>
            {/* 1. 作品档案与核心指标 (参赛信息、金句、档案卡、硬指标横幅) */}
            <HeroSection
              onStartPresentation={() => setIsPresentationMode(true)}
              onExploreSemantics={() => scrollToSection('pipeline')}
              onViewCaseStudy={() => scrollToSection('real-ui')}
              onOpenImage={handleOpenImageById}
            />

            {/* 2. 痛点与破局 (四大死结 vs 顺丰语义层答案与工作法则) */}
            <ProblemSolutionSection onOpenImage={handleOpenImageById} />

            {/* 3. 共生智能演进史 (高阶方法论溯源与人机分工) */}
            <SymbioticEvolutionSection onOpenImage={handleOpenImageById} />

            {/* 4. 六节点全链路智能流水线 (端到端装配线与闭环反哺) */}
            <PipelineSection onOpenImage={handleOpenImageById} />

            {/* 5. 落地实证：真实业务大 UI 与系统截帧 (图1~图6 生产实机大图) */}
            <RealUIShowcaseSection onOpenImage={handleOpenImageById} />

            {/* 6. 五组硬指标对比：使用前 vs 使用后 */}
            <MetricsAndRoiSection onOpenImage={handleOpenImageById} />

            {/* 7. 真实证言、赛期优化记录、创新点总结与客观边界 */}
            <IterationAndBoundariesSection onOpenImage={handleOpenImageById} />
          </main>

          {/* Footer */}
          <Footer />

          {/* High-res Image Lightbox Modal */}
          <ImageModal
            image={selectedImage}
            allImages={IMAGE_EVIDENCE_LIST}
            onClose={() => setSelectedImage(null)}
            onSelectImage={(img) => setSelectedImage(img)}
          />
        </div>
      )}
    </div>
  );
}
