'use client';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function KintsugiBackground() {
  const { scrollYProgress } = useScroll();
  
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.005 // Increased to allow the animation to settle faster and stop GPU repaints
  });

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const path1Length = useTransform(smoothProgress, [0, 0.4], [0, 1]);     // Trunk 1
  const path2Length = useTransform(smoothProgress, [0.3, 0.7], [0, 1]);   // Branch 1 spawns from Trunk 1
  const path3Length = useTransform(smoothProgress, [0.5, 0.85], [0, 1]);  // Sub-branch spawns from Branch 1
  const path4Length = useTransform(smoothProgress, [0, 0.6], [0, 1]);     // Trunk 2
  const path5Length = useTransform(smoothProgress, [0.3, 0.75], [0, 1]);  // New Branch spawns from Trunk 2
  const path6Length = useTransform(smoothProgress, [0.4, 0.9], [0, 1]);   // Second Branch spawns from Trunk 2

  const paths = [
    // Trunk 1 (Top left to middle, joining Trunk 2)
    { d: "M 100 -50 C 300 200, 400 300, 500 500 S 550 600, 600 700", width: 7, length: path1Length },
    // Branch from Trunk 1 (Goes top-right to avoid overlap)
    { d: "M 500 500 Q 700 400, 1000 350 S 1400 200, 1970 150", width: 4, length: path2Length },
    // Sub-branch from Branch 1
    { d: "M 1000 350 Q 1100 200, 1300 -50", width: 2, length: path3Length },
    // Trunk 2 (Bottom left to middle right)
    { d: "M -50 800 C 200 900, 400 850, 600 700 S 900 650, 1200 800 S 1600 900, 1970 850", width: 6, length: path4Length },
    // New Branch downwards to fill empty space
    { d: "M 900 650 Q 1000 900, 950 1150", width: 4, length: path5Length },
    // Second Branch from Trunk 2 (Goes middle-right to avoid overlap)
    { d: "M 1200 800 Q 1400 700, 1600 600 S 1800 500, 1970 450", width: 4, length: path6Length },
  ];

  const nodes: any[] = []; // Removed dots as requested

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 w-full h-full overflow-hidden bg-[#02040a]">
      <svg 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice" 
        className="w-full h-full opacity-90"
      >
        <defs>
          <linearGradient id="liquid-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e9cb81" />
            <stop offset="25%" stopColor="#e8bf56" />
            <stop offset="50%" stopColor="#e3b84b" />
            <stop offset="75%" stopColor="#e8bf56" />
            <stop offset="100%" stopColor="#e9cb81" />
          </linearGradient>

          <filter id="kintsugi-gold" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            {/* 1. Generate Noise (Reduced octaves for huge performance boost) */}
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" result="noise" />
            
            {/* 2. Soften the source edges */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="softGraphic" />
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="softAlpha" />
            
            {/* 3. Displace both color and alpha */}
            <feDisplacementMap in="softGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" result="displacedGraphic" />
            <feDisplacementMap in="softAlpha" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" result="displacedAlpha" />
            
            {/* 4. Create a 3D bump map from the displaced alpha */}
            <feGaussianBlur in="displacedAlpha" stdDeviation="2" result="bump" />
            
            {/* 5. Specular lighting for metallic shine */}
            <feSpecularLighting in="bump" surfaceScale="5" specularConstant="1.5" specularExponent="70" lightingColor="#fdf8ec" result="specular">
              <fePointLight x="960" y="-200" z="300" />
            </feSpecularLighting>
            
            {/* 6. Composite the lighting over the graphic */}
            <feComposite in="specular" in2="displacedAlpha" operator="in" result="specularMasked" />
            <feComposite in="specularMasked" in2="displacedGraphic" operator="arithmetic" k2="1" k3="1" result="litGraphic" />
            
            {/* 7. Bloom/Glow Effect (Reduced blur radius to save GPU) */}
            <feGaussianBlur in="litGraphic" stdDeviation="5" result="blurCombined" />
            
            <feColorMatrix type="matrix" values="
              1 0 0 0 0.1
              0 1 0 0 0.05
              0 0 1 0 0
              0 0 0 0.8 0" in="blurCombined" result="glow" />
              
            {/* 8. Final Merge */}
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="litGraphic" />
            </feMerge>
          </filter>
          
          <filter id="kintsugi-dark" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" result="noise" />
            {/* Soften dark path too so it matches exactly */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="softGraphic" />
            <feDisplacementMap in="softGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        {/* Base dark cracks */}
        <g filter="url(#kintsugi-dark)">
          {paths.map((p, i) => (
            <path key={`dark-path-${i}`} d={p.d} stroke="#010205" strokeWidth={p.width * 2.5} fill="none" strokeLinecap="round" strokeLinejoin="round" />
          ))}
          {nodes.map((n, i) => (
            <circle key={`dark-node-${i}`} cx={n.cx} cy={n.cy} r={n.r * 1.5} fill="#010205" />
          ))}
        </g>

        {/* Gold textured cracks */}
        <g filter="url(#kintsugi-gold)">
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
          {nodes.map((n, i) => (
            <motion.circle
              key={`gold-node-${i}`}
              cx={n.cx}
              cy={n.cy}
              r={n.r}
              fill="url(#liquid-gold)"
              style={{ scale: n.length, opacity: n.length }}
              transform-origin={`${n.cx}px ${n.cy}px`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
