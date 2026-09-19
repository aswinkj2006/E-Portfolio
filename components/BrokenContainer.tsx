'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BrokenContainerProps {
  children: React.ReactNode;
  className?: string;
  side?: 'left' | 'right' | 'both';
  id?: string;
}

export default function BrokenContainer({ children, className = '', side = 'both', id }: BrokenContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });

  // A jagged path simulating a broken edge
  const jaggedPath = "M 0 0 L 10 50 L -5 100 L 15 150 L 0 200 L 20 300 L -10 350 L 10 400 L 0 500 L 15 600 L -5 700 L 20 800 L 0 900 L 10 1000";

  return (
    <section id={id} ref={containerRef} className={`relative py-32 px-4 md:px-12 max-w-6xl mx-auto w-full ${className}`}>
      
      {/* Left Broken Edge */}
      {(side === 'left' || side === 'both') && (
        <div className="absolute left-0 top-0 bottom-0 w-[40px] pointer-events-none hidden md:block" style={{ height: '100%' }}>
          <svg preserveAspectRatio="none" viewBox="0 0 20 1000" className="w-full h-full opacity-60">
            {/* The gap/shadow */}
            <path d={jaggedPath} stroke="rgba(10, 15, 26, 0.8)" strokeWidth="8" fill="none" />
            {/* The gold filling in */}
            <motion.path
              d={jaggedPath}
              stroke="var(--gold-primary)"
              strokeWidth="2"
              fill="none"
              className="kintsugi-fill-path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </div>
      )}

      {/* Right Broken Edge */}
      {(side === 'right' || side === 'both') && (
        <div className="absolute right-0 top-0 bottom-0 w-[40px] pointer-events-none hidden md:block" style={{ height: '100%', transform: 'scaleX(-1)' }}>
          <svg preserveAspectRatio="none" viewBox="0 0 20 1000" className="w-full h-full opacity-60">
            {/* The gap/shadow */}
            <path d={jaggedPath} stroke="rgba(10, 15, 26, 0.8)" strokeWidth="8" fill="none" />
            {/* The gold filling in */}
            <motion.path
              d={jaggedPath}
              stroke="var(--gold-primary)"
              strokeWidth="2"
              fill="none"
              className="kintsugi-fill-path"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
        </div>
      )}

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
