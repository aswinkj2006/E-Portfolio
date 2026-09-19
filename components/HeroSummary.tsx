'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingLines = [
  "Architecting scalable AI systems, production RAG pipelines & autonomous LLM agents.",
  "Azure & Oracle Cloud Certified • Hack Hive 1st Place & NASA Space Apps Competitor.",
  "Experienced technical leader coordinating 1000+ attendee engineering symposia.",
];

export default function HeroSummary() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingLines.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center max-w-2xl mb-8">
      {/* Rotating Dynamic Highlight */}
      <div className="h-8 md:h-9 flex items-center justify-center mb-3 overflow-hidden text-center px-4">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base font-normal text-[var(--gold-light)] tracking-wide"
          >
            {rotatingLines[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Concise 2-line summary with reduced font size */}
      <p className="text-xs md:text-sm text-[var(--text-muted)] font-light leading-relaxed text-center px-4">
        AIML Undergraduate specializing in LLMs and RAG-based agent systems. Seeking an AI Engineering internship to build scalable, production-grade applications.
      </p>
    </div>
  );
}
