'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface KintsugiLineProps {
  pathD: string;
  width: number | string;
  height: number | string;
  className?: string;
  delay?: number;
}

export default function KintsugiLine({ pathD, width, height, className = '', delay = 0 }: KintsugiLineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className={`absolute pointer-events-none ${className}`}>
      <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d={pathD}
          className="kintsugi-path"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: delay }}
        />
        {/* Glow effect duplicate */}
        <motion.path
          d={pathD}
          stroke="rgba(255, 215, 0, 0.4)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: 'blur(4px)' }}
          initial={{ opacity: 0, pathLength: 0 }}
          animate={isInView ? { 
            opacity: [0, 1, 0.5, 1],
            pathLength: 1
          } : { opacity: 0, pathLength: 0 }}
          transition={{ 
            pathLength: { duration: 2.5, ease: "easeInOut", delay: delay },
            opacity: { duration: 3, delay: delay + 2, repeat: Infinity, repeatType: 'reverse' }
          }}
        />
      </svg>
    </div>
  );
}
