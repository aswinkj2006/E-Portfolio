'use client';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollY } = useScroll();
  // Fade out between 0 and 500px of scroll
  const opacity = useTransform(scrollY, [0, 500], [0.15, 0]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const greekLetters = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψω';
    const letters = greekLetters.split('');

    const fontSize = 14;
    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = new Array(columns).fill(1);

    let animationFrameId: number;
    let lastTime = 0;
    const interval = 60; // ~16 FPS is ideal for stylized matrix rain while saving CPU/GPU

    const draw = (time: number) => {
      // Pause completely if scrolled down to save CPU and battery
      if (window.scrollY > 600) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      if (time - lastTime > interval) {
        lastTime = time;

        // Dark background fade for the trail effect
        ctx.fillStyle = 'rgba(4, 8, 20, 0.12)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = 'rgba(197, 160, 89, 0.35)';
        ctx.font = `${fontSize}px "Cormorant Garamond", serif`;

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);

          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = new Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity,
        pointerEvents: 'none',
      }}
    />
  );
}
