'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function KintsugiBackground() {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.005,
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const path1Length = useTransform(smoothProgress, [0, 0.4], [0, 1]);
  const path2Length = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);
  const path3Length = useTransform(smoothProgress, [0.5, 0.85], [0, 1]);
  const path4Length = useTransform(smoothProgress, [0, 0.6], [0, 1]);
  const path5Length = useTransform(smoothProgress, [0.3, 0.75], [0, 1]);
  const path6Length = useTransform(smoothProgress, [0.4, 0.9], [0, 1]);

  const paths = [
    // Trunk 1
    { d: "M 100 -50 C 300 200, 400 300, 500 500 S 550 600, 600 700", width: 5, length: path1Length },
    // Branch from Trunk 1
    { d: "M 500 500 Q 700 400, 1000 350 S 1400 200, 1970 150", width: 3.5, length: path2Length },
    // Sub-branch from Branch 1
    { d: "M 1000 350 Q 1100 200, 1300 -50", width: 2, length: path3Length },
    // Trunk 2
    { d: "M -50 800 C 200 900, 400 850, 600 700 S 900 650, 1200 800 S 1600 900, 1970 850", width: 4.5, length: path4Length },
    // Branch downwards
    { d: "M 900 650 Q 1000 900, 950 1150", width: 3, length: path5Length },
    // Second Branch from Trunk 2
    { d: "M 1200 800 Q 1400 700, 1600 600 S 1800 500, 1970 450", width: 3, length: path6Length },
  ];

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 w-full h-full overflow-hidden bg-[#02040a]">
      <svg
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full opacity-85"
      >
        <defs>
          <linearGradient id="liquid-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fae4a8" />
            <stop offset="25%" stopColor="#e8bf56" />
            <stop offset="50%" stopColor="#c5a059" />
            <stop offset="75%" stopColor="#e8bf56" />
            <stop offset="100%" stopColor="#fae4a8" />
          </linearGradient>

          {/* High-performance hardware-accelerated gold glow filter */}
          <filter id="kintsugi-gold-fast" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#e8bf56" floodOpacity="0.75" />
          </filter>
        </defs>

        {/* Base dark groove/gap */}
        <g>
          {paths.map((p, i) => (
            <path
              key={`dark-path-${i}`}
              d={p.d}
              stroke="#070c18"
              strokeWidth={p.width * 2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
          ))}
        </g>

        {/* Liquid Gold Healing Veins */}
        <g filter="url(#kintsugi-gold-fast)">
          {paths.map((p, i) => (
            <motion.path
              key={`gold-path-${i}`}
              d={p.d}
              stroke="url(#liquid-gold)"
              strokeWidth={p.width}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ pathLength: p.length }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
