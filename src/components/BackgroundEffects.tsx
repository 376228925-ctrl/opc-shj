import React, { useEffect, useRef } from 'react';

export const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 1. Serene deep space stars (缓慢闪烁与轻柔飘移的深空繁星)
    const STAR_COUNT = 100;
    interface Star {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      alpha: number;
      twinkleSpeed: number;
      twinkleOffset: number;
      vx: number;
      vy: number;
      color: string;
    }

    const starColors = ['#E2E8F0', '#93C5FD', '#67E8F9', '#DDD6FE', '#BAE6FD'];
    const stars: Star[] = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      const baseAlpha = Math.random() * 0.5 + 0.2;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.4 + 0.4,
        baseAlpha,
        alpha: baseAlpha,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 0.05, // extremely slow cosmic drift
        vy: (Math.random() - 0.5) * 0.05,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // 2. Cosmic flowing streaks / Shooting stars (宇宙中偶尔划过的流向流星)
    interface Meteor {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      alpha: number;
      thickness: number;
      color: string;
      active: boolean;
      delay: number;
    }

    const METEOR_COUNT = 3;
    const meteors: Meteor[] = [];

    const spawnMeteor = (): Meteor => ({
      x: Math.random() * width * 1.2 - width * 0.1,
      y: -50,
      length: Math.random() * 160 + 120,
      speed: Math.random() * 4 + 4.5,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.15, // sweeping ~45 degrees diagonal
      alpha: 0,
      thickness: Math.random() * 1.5 + 1,
      color: Math.random() > 0.4 ? '#38BDF8' : '#06B6D4',
      active: true,
      delay: Math.floor(Math.random() * 180), // staggering appearances
    });

    for (let i = 0; i < METEOR_COUNT; i++) {
      const m = spawnMeteor();
      m.delay = i * 140; // spread apart
      meteors.push(m);
    }

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Deep space base vignette & cosmic nebula gradients
      const radialGradient = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        100,
        width * 0.5,
        height * 0.5,
        width * 0.8
      );
      radialGradient.addColorStop(0, 'rgba(8, 20, 48, 0.4)');
      radialGradient.addColorStop(0.5, 'rgba(4, 12, 30, 0.6)');
      radialGradient.addColorStop(1, 'rgba(3, 7, 18, 0.95)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, width, height);

      // Subtle cyan/indigo cosmic flow aura in background
      const nebulaGradient = ctx.createRadialGradient(
        width * 0.8,
        height * 0.2,
        50,
        width * 0.8,
        height * 0.2,
        500
      );
      nebulaGradient.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
      nebulaGradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.02)');
      nebulaGradient.addColorStop(1, 'rgba(3, 7, 18, 0)');
      ctx.fillStyle = nebulaGradient;
      ctx.fillRect(0, 0, width, height);

      // Render gentle drifting stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.x += star.vx;
        star.y += star.vy;

        // Wrap around screen edges softly
        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;

        // Twinkle calculation
        star.alpha =
          star.baseAlpha + Math.sin(tick * star.twinkleSpeed + star.twinkleOffset) * 0.25;
        if (star.alpha < 0.1) star.alpha = 0.1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius > 1 ? 4 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Render graceful shooting star flows (流向划过的效果)
      for (let i = 0; i < meteors.length; i++) {
        const m = meteors[i];

        if (m.delay > 0) {
          m.delay--;
          continue;
        }

        if (!m.active) {
          Object.assign(m, spawnMeteor());
          continue;
        }

        // Move meteor along angle
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        // Smooth fade-in and fade-out
        if (m.y < height * 0.2) {
          m.alpha = Math.min(0.85, m.alpha + 0.04);
        } else if (m.y > height * 0.6) {
          m.alpha = Math.max(0, m.alpha - 0.02);
        }

        if (m.y > height + 100 || m.x > width + 100 || m.alpha <= 0) {
          m.active = false;
          m.delay = Math.floor(Math.random() * 200 + 100); // Wait before next streak
          continue;
        }

        const tailX = m.x - Math.cos(m.angle) * m.length;
        const tailY = m.y - Math.sin(m.angle) * m.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        meteorGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
        meteorGrad.addColorStop(0.7, 'rgba(56, 189, 248, 0.3)');
        meteorGrad.addColorStop(1, 'rgba(255, 255, 255, 0.9)');

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = m.thickness;
        ctx.lineCap = 'round';
        ctx.globalAlpha = m.alpha;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#38BDF8';
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Meteor glowing head
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.thickness * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.globalAlpha = m.alpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#67E8F9';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030712]">
      {/* Dynamic Cosmic Universe Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Subtle top & bottom ambient edge overlays for ultra-clean contrast */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030712] via-[#030712]/50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent pointer-events-none" />
    </div>
  );
};
