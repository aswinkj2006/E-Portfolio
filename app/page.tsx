import MatrixRain from '@/components/MatrixRain';
import KintsugiBackground from '@/components/KintsugiBackground';
import GlassCard from '@/components/GlassCard';
import Navbar from '@/components/Navbar';
import {
  Code2,
  Database,
  BrainCircuit,
  ExternalLink,
  Mail,
  FileText,
  Award,
  GraduationCap,
  Wrench,
  Users,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Home() {
  const resumeGitHubUrl = "https://github.com/aswinkj2006/E-Portfolio/blob/master/Aswin_Resume.pdf";

  return (
    <main className="relative min-h-screen text-[var(--text-main)] selection:bg-[var(--gold-dark)] selection:text-[var(--navy-bg)] bg-transparent">
      {/* Dynamic Scroll-Triggered Navigation Bar */}
      <Navbar />

      <MatrixRain />
      <KintsugiBackground />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 py-20 z-10">
        <div className="z-10 text-center flex flex-col items-center max-w-4xl mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--gold-primary)]/40 bg-[var(--navy-light)]/80 mb-6 text-[var(--gold-primary)] tracking-[0.3em] text-xs font-medium uppercase shadow-lg">
            <BrainCircuit size={14} className="text-[var(--gold-light)]" />
            <span>AI Engineer • RAG & Agent Systems</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[9.5rem] font-[family-name:var(--font-cormorant)] font-light mb-6 text-[var(--gold-light)] leading-none tracking-tight">
            ASWIN K J
          </h1>

          <p className="max-w-3xl text-base md:text-lg text-[var(--text-muted)] mb-8 font-light leading-relaxed">
            AIML undergraduate specialising in LLMs and RAG-based agent systems, with hands-on experience designing and deploying production-ready AI apps; Azure and Oracle Cloud Certified. Grounded understanding of data structures and algorithms in Python, backed by wins at 2+ hackathons. Experienced in leading technical teams and organising large-scale events, coordinating 10+ member teams / 1000+ attendee events. Seeking an AI Engineering internship to build scalable, production-grade AI systems.
          </p>

          {/* Social & Contact Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-xs tracking-wider uppercase">
            <a
              href="https://github.com/aswinkj2006"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex items-center gap-2 px-4 py-2 bg-[var(--navy-light)]/90 border border-white/10 hover:border-[var(--gold-primary)] text-[var(--text-muted)] hover:text-[var(--gold-light)] transition-all shadow-md"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/aswinkj2006/"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex items-center gap-2 px-4 py-2 bg-[var(--navy-light)]/90 border border-white/10 hover:border-[var(--gold-primary)] text-[var(--text-muted)] hover:text-[var(--gold-light)] transition-all shadow-md"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:aswinkj2006@gmail.com"
              className="interactive inline-flex items-center gap-2 px-4 py-2 bg-[var(--navy-light)]/90 border border-white/10 hover:border-[var(--gold-primary)] text-[var(--text-muted)] hover:text-[var(--gold-light)] transition-all shadow-md"
            >
              <Mail size={15} />
              <span>aswinkj2006@gmail.com</span>
            </a>
            <a
              href={resumeGitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/60 text-[var(--gold-light)] hover:bg-[var(--gold-primary)] hover:text-[var(--navy-bg)] transition-all shadow-md font-medium"
            >
              <FileText size={15} />
              <span>Resume PDF</span>
              <ExternalLink size={12} className="opacity-70" />
            </a>
          </div>

          <a
            href="#chronicles"
            className="interactive group relative px-10 py-4 bg-transparent border border-[var(--gold-primary)] text-[var(--gold-primary)] font-[family-name:var(--font-cormorant)] text-lg overflow-hidden transition-all duration-500 hover:text-[var(--navy-bg)] tracking-widest uppercase shadow-lg"
          >
            <span className="absolute inset-0 bg-[var(--gold-primary)] transform scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-y-100"></span>
            <span className="relative z-10 flex items-center gap-3 font-medium">
              Explore My Odyssey
            </span>
          </a>
        </div>
      </section>

      {/* The Armory (Skills) */}
      <section id="armory" className="relative py-28 px-4 md:px-12 max-w-6xl mx-auto w-full">
        <div className="text-center mb-20 relative z-10">
          <div className="w-[1px] h-20 bg-[var(--gold-primary)] opacity-40 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-[var(--text-main)] mb-4">
            The Armory
          </h2>
          <p className="text-[var(--text-muted)] tracking-[0.25em] uppercase text-xs">Technical Skills & Leadership</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Card 1: Core CS */}
          <GlassCard delay={0.1} className="flex flex-col text-left !p-8 !rounded-none">
            <div className="flex items-center gap-3 mb-6">
              <Code2 size={22} strokeWidth={1.5} className="text-[var(--gold-primary)]" />
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] tracking-wide">
                Languages & Core CS
              </h3>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-light mb-4">
              Python, Java, C, SQL, Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP).
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/80">
              <span className="bg-white/5 px-2.5 py-1">Python</span>
              <span className="bg-white/5 px-2.5 py-1">Java</span>
              <span className="bg-white/5 px-2.5 py-1">C</span>
              <span className="bg-white/5 px-2.5 py-1">SQL</span>
              <span className="bg-white/5 px-2.5 py-1">DSA</span>
            </div>
          </GlassCard>

          {/* Card 2: AI & ML */}
          <GlassCard delay={0.2} className="flex flex-col text-left !p-8 !rounded-none">
            <div className="flex items-center gap-3 mb-6">
              <BrainCircuit size={22} strokeWidth={1.5} className="text-[var(--gold-primary)]" />
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] tracking-wide">
                AI/ML Frameworks
              </h3>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-light mb-4">
              TensorFlow, Scikit-Learn, MLflow, Pandas, NumPy, RAG Retrieval Systems, Large Language Models (LLMs).
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/80">
              <span className="bg-white/5 px-2.5 py-1">RAG</span>
              <span className="bg-white/5 px-2.5 py-1">LLM</span>
              <span className="bg-white/5 px-2.5 py-1">TensorFlow</span>
              <span className="bg-white/5 px-2.5 py-1">Scikit-Learn</span>
              <span className="bg-white/5 px-2.5 py-1">MLflow</span>
            </div>
          </GlassCard>

          {/* Card 3: Web & Cloud */}
          <GlassCard delay={0.3} className="flex flex-col text-left !p-8 !rounded-none">
            <div className="flex items-center gap-3 mb-6">
              <Database size={22} strokeWidth={1.5} className="text-[var(--gold-primary)]" />
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] tracking-wide">
                Web & Cloud
              </h3>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-light mb-4">
              FastAPI, Flask, Streamlit, React.js, Microsoft Azure (AI-900), Oracle Cloud Infrastructure (OCI).
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/80">
              <span className="bg-white/5 px-2.5 py-1">FastAPI</span>
              <span className="bg-white/5 px-2.5 py-1">Flask</span>
              <span className="bg-white/5 px-2.5 py-1">React.js</span>
              <span className="bg-white/5 px-2.5 py-1">Azure AI-900</span>
              <span className="bg-white/5 px-2.5 py-1">OCI</span>
            </div>
          </GlassCard>

          {/* Card 4: Tools & Platforms */}
          <GlassCard delay={0.4} className="flex flex-col text-left !p-8 !rounded-none md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Wrench size={22} strokeWidth={1.5} className="text-[var(--gold-primary)]" />
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] tracking-wide">
                Tools & Platforms
              </h3>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-light mb-4">
              Git/GitHub, Tableau, PowerBI, Ollama, Hermes, Plotly, Recharts.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/80">
              <span className="bg-white/5 px-2.5 py-1">Git/GitHub</span>
              <span className="bg-white/5 px-2.5 py-1">Ollama</span>
              <span className="bg-white/5 px-2.5 py-1">Hermes</span>
              <span className="bg-white/5 px-2.5 py-1">Tableau</span>
              <span className="bg-white/5 px-2.5 py-1">PowerBI</span>
            </div>
          </GlassCard>

          {/* Card 5: Leadership Roles */}
          <GlassCard delay={0.5} className="flex flex-col text-left !p-8 !rounded-none md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Users size={22} strokeWidth={1.5} className="text-[var(--gold-primary)]" />
              <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] tracking-wide">
                Leadership & Organization
              </h3>
            </div>
            <p className="text-[var(--text-muted)] leading-relaxed text-sm font-light mb-4">
              Experienced in leading technical teams and organizing large-scale events, coordinating 10+ member teams and 1000+ attendee events across college symposia and workshops.
            </p>
            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/80">
              <span className="bg-white/5 px-2.5 py-1">Coordinator — Texperia 2026</span>
              <span className="bg-white/5 px-2.5 py-1">Coordinator — Codexia</span>
              <span className="bg-white/5 px-2.5 py-1">Cybersecurity Workshop Lead</span>
              <span className="bg-white/5 px-2.5 py-1">Executive Member — IEEE</span>
              <span className="bg-white/5 px-2.5 py-1">Executive Member — Gennuera</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* The Chronicles (Experience) */}
      <section id="chronicles" className="relative py-28 px-4 md:px-12 max-w-6xl mx-auto w-full">
        <div className="text-center mb-20 z-10 relative">
          <div className="w-[1px] h-20 bg-[var(--gold-primary)] opacity-40 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-[var(--text-main)] mb-4">
            Professional Experience
          </h2>
          <p className="text-[var(--text-muted)] tracking-[0.25em] uppercase text-xs">The Chronicles</p>
        </div>

        <div className="flex flex-col gap-10 w-full max-w-4xl z-10 mx-auto">
          {/* Experience 1: FlyRank */}
          <GlassCard delay={0.2} className="relative !p-8 md:!p-10 !rounded-none border-l-2 border-[var(--gold-primary)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)]">
                  ML Intern
                </h3>
                <span className="text-xs uppercase tracking-wider px-2 py-0.5 border border-[var(--gold-primary)]/40 text-[var(--gold-light)] bg-[var(--navy-light)]">
                  FlyRank • Remote
                </span>
              </div>
              <span className="text-xs text-[var(--gold-primary)] tracking-widest uppercase mt-2 md:mt-0 font-medium">
                July 2026 - Present
              </span>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/15xdQBstc-XEknrzg_l0SXMDkeYwfa_Gn/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-1.5 text-xs text-[var(--gold-light)] hover:text-white underline underline-offset-4 tracking-wider transition-colors"
              >
                <ExternalLink size={13} />
                <span>Verified Offer Letter</span>
              </a>
            </div>

            <ul className="space-y-4 text-[var(--text-muted)] list-none text-sm leading-relaxed font-light mb-6">
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Engineered semantic clustering and intent-classification pipelines using embeddings and unsupervised learning (e.g., HDBSCAN, scikit-learn) to map search-query demand to content-coverage gaps.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Developed opportunity-scoring models translating raw search/analytics data into ranked, actionable recommendations, connecting model output directly to business-impact decisions.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/70">
              <span className="bg-white/5 px-2 py-0.5">HDBSCAN</span>
              <span className="bg-white/5 px-2 py-0.5">Scikit-Learn</span>
              <span className="bg-white/5 px-2 py-0.5">Semantic Clustering</span>
              <span className="bg-white/5 px-2 py-0.5">Opportunity-Scoring Models</span>
            </div>
          </GlassCard>

          {/* Experience 2: LabMentix */}
          <GlassCard delay={0.4} className="relative !p-8 md:!p-10 !rounded-none border-l-2 border-[var(--gold-primary)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-3">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)]">
                  DA Intern
                </h3>
                <span className="text-xs uppercase tracking-wider px-2 py-0.5 border border-[var(--gold-primary)]/40 text-[var(--gold-light)] bg-[var(--navy-light)]">
                  LabMentix • Remote
                </span>
              </div>
              <span className="text-xs text-[var(--gold-primary)] tracking-widest uppercase mt-2 md:mt-0 font-medium">
                July 2025 - Dec 2025
              </span>
            </div>

            <div className="mb-6 flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1AGbbWd2dt29NUGo00__uXxAd6Frb6z2M/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive inline-flex items-center gap-1.5 text-xs text-[var(--gold-light)] hover:text-white underline underline-offset-4 tracking-wider transition-colors"
              >
                <ExternalLink size={13} />
                <span>Verified Completion Letter</span>
              </a>
            </div>

            <ul className="space-y-4 text-[var(--text-muted)] list-none text-sm leading-relaxed font-light mb-6">
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Engineered deep learning pipelines using TensorFlow and EfficientNetB0 transfer learning, integrating MLflow for rigorous MLOps experiment tracking and hyperparameter versioning.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Architected and deployed real-time predictive analytics inference dashboards using Streamlit, seamlessly bridging backend machine learning logic with interactive web applications.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 text-[11px] uppercase tracking-wider text-[var(--gold-light)]/70">
              <span className="bg-white/5 px-2 py-0.5">TensorFlow</span>
              <span className="bg-white/5 px-2 py-0.5">EfficientNetB0</span>
              <span className="bg-white/5 px-2 py-0.5">MLflow MLOps</span>
              <span className="bg-white/5 px-2 py-0.5">Streamlit</span>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* The Arsenal (Projects - Strictly verified against updated resume) */}
      <section id="arsenal" className="relative py-28 px-4 md:px-12 max-w-6xl mx-auto w-full">
        <div className="text-center mb-20 z-10 relative">
          <div className="w-[1px] h-20 bg-[var(--gold-primary)] opacity-40 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-[var(--text-main)] mb-4">
            Selected Works
          </h2>
          <p className="text-[var(--text-muted)] tracking-[0.25em] uppercase text-xs">The Arsenal • Production AI Applications</p>
        </div>

        <div className="grid grid-cols-1 gap-8 z-10 relative">
          {/* Featured Project: Finassist */}
          <GlassCard delay={0.1} className="group relative overflow-hidden !p-8 md:!p-12 !rounded-none border-t-2 border-[var(--gold-primary)]">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--gold-primary)]/10 text-[var(--gold-primary)] text-xs uppercase tracking-widest mb-4 font-medium border border-[var(--gold-primary)]/30">
                  <Sparkles size={13} />
                  <span>Featured Work • Personal Finance PWA</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] group-hover:text-white transition-colors">
                  Finassist : Personal Finance PWA
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/aswinkj2006/finassist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-[var(--gold-primary)] hover:text-[var(--navy-bg)] border border-white/10 text-xs uppercase tracking-wider transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://finassist429.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive inline-flex items-center gap-2 px-4 py-2 bg-[var(--gold-primary)] text-[var(--navy-bg)] font-medium text-xs uppercase tracking-wider hover:bg-[var(--gold-light)] transition-all shadow-md"
                >
                  <ExternalLink size={14} />
                  <span>Live App</span>
                </a>
              </div>
            </div>

            <ul className="space-y-3.5 text-[var(--text-muted)] list-none text-sm md:text-base leading-relaxed font-light mb-8">
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Engineered a Google Gemini LLM agent with 8 custom tool-use/function-calling schemas and a RAG retrieval system for zero-friction conversational transaction logging and financial onboarding with strict advice guardrails.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Architected a FastAPI backend across 14 modular REST routers and 13 relational tables, implementing automatic multi-account balance reconciliation, recurring bill engines, and 2.5x threshold spending anomaly detection.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[var(--gold-primary)] font-medium">—</span>
                <span>Built a mobile-first React 19 PWA with Service Worker offline caching, background transaction queues, and dynamic Recharts data visualisations for 50/30/20 budgeting and net worth tracking.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {['FastAPI', 'Google Gemini', 'RAG Agent', 'React 19 PWA', 'Recharts', 'Service Workers', 'SQL'].map((t, idx) => (
                <span key={idx} className="text-xs tracking-wider text-[var(--gold-light)]/80 bg-white/5 px-3 py-1 uppercase">
                  {t}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Grid for V2C and Exoplanet AI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 2: V2C */}
            <GlassCard delay={0.2} className="group relative overflow-hidden h-full flex flex-col justify-between !p-8 md:!p-10 !rounded-none">
              <div className="relative z-10 mb-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] group-hover:text-[var(--gold-primary)] transition-colors">
                    V2C : Voice to Code AI
                  </h3>
                  <a
                    href="https://github.com/aswinkj2006/V2C"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View GitHub Repository"
                    className="interactive text-[var(--text-muted)] hover:text-[var(--gold-primary)] transition-colors p-1"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs uppercase tracking-widest font-normal text-[var(--gold-dark)] mb-5">
                  1st Place, Hack Hive 2025
                </p>
                <ul className="space-y-3 text-[var(--text-muted)] list-none text-sm leading-relaxed font-light">
                  <li className="flex gap-3">
                    <span className="text-[var(--gold-primary)]">—</span>
                    <span>Architected a voice-to-code translation Flask backend with the Gemini API, optimising natural language parsing for low-latency, multi-language code generation.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--gold-primary)]">—</span>
                    <span>Engineered a zero-click, voice-driven development state machine integrating the Web Speech API with custom audio heuristics for visually impaired accessibility.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--gold-primary)]">—</span>
                    <span>Automated repository provisioning and version control pipelines using the GitHub REST API for dynamic multi-file packaging.</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                {['Flask', 'Gemini API', 'Web Speech API', 'GitHub REST API', 'Python'].map((t, idx) => (
                  <span key={idx} className="text-[11px] tracking-wider text-[var(--gold-light)]/80 bg-white/5 px-2.5 py-1 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>

            {/* Project 3: Exoplanet AI */}
            <GlassCard delay={0.3} className="group relative overflow-hidden h-full flex flex-col justify-between !p-8 md:!p-10 !rounded-none">
              <div className="relative z-10 mb-8">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-3xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)] group-hover:text-[var(--gold-primary)] transition-colors">
                    Exoplanet AI
                  </h3>
                  <a
                    href="https://aswinkj2006.github.io/Exoplanet-AI/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View Live Interactive Demo"
                    className="interactive text-[var(--text-muted)] hover:text-[var(--gold-primary)] transition-colors p-1"
                  >
                    <ExternalLink size={18} strokeWidth={1.5} />
                  </a>
                </div>
                <p className="text-xs uppercase tracking-widest font-normal text-[var(--gold-dark)] mb-5">
                  NASA Space Apps Challenge
                </p>
                <ul className="space-y-3 text-[var(--text-muted)] list-none text-sm leading-relaxed font-light">
                  <li className="flex gap-3">
                    <span className="text-[var(--gold-primary)]">—</span>
                    <span>Engineered a 5-model deep learning ensemble (CNN, LSTM, Bi-Attention, RF, Hybrid) achieving 94.1% accuracy and 97.8% AUC on NASA Kepler/TESS photometry data.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--gold-primary)]">—</span>
                    <span>Built a Flask inference backend with a time-series preprocessing pipeline, delivering sub-200ms predictions using 20+ extracted spectral features.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-[var(--gold-primary)]">—</span>
                    <span>Developed a Plotly web dashboard for live light curve simulations, dynamic transit generation, and real-time model comparisons.</span>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2 pt-4 border-t border-white/5 mt-auto">
                {['TensorFlow', 'CNN & LSTM', 'Bi-Attention', 'Flask', 'Plotly'].map((t, idx) => (
                  <span key={idx} className="text-[11px] tracking-wider text-[var(--gold-light)]/80 bg-white/5 px-2.5 py-1 uppercase">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Honors & Artifacts */}
      <section id="honors" className="relative py-28 px-4 md:px-12 max-w-6xl mx-auto z-10 border-t border-[var(--gold-primary)]/20">
        <div className="text-center mb-20 z-10 relative">
          <div className="w-[1px] h-20 bg-[var(--gold-primary)] opacity-40 mx-auto mb-6"></div>
          <h2 className="text-4xl md:text-6xl font-[family-name:var(--font-cormorant)] font-light text-[var(--text-main)] mb-4">
            Honors & Artifacts
          </h2>
          <p className="text-[var(--text-muted)] tracking-[0.25em] uppercase text-xs">Education, Certifications & Achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Column 1: Education & Awards */}
          <GlassCard delay={0.2} className="!p-8 md:!p-10 !rounded-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <GraduationCap size={24} className="text-[var(--gold-primary)]" />
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)]">
                  Education & Honors
                </h3>
              </div>

              <div className="space-y-6 text-sm font-light">
                <div>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base text-[var(--text-main)] font-normal">
                      B.Tech in Artificial Intelligence & Machine Learning
                    </h4>
                    <span className="text-xs text-[var(--gold-primary)]">Present</span>
                  </div>
                  <p className="text-[var(--gold-light)] text-xs mb-1 font-medium">
                    Department 1st Rank • CGPA: 9.27 / 10
                  </p>
                  <p className="text-[var(--text-muted)] text-xs">
                    SNS College of Technology | Coimbatore, India
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-base text-[var(--text-main)] font-normal">
                      Higher Secondary Education (Xth | XIIth)
                    </h4>
                    <span className="text-xs text-[var(--gold-primary)]">2022 - 2024</span>
                  </div>
                  <p className="text-[var(--gold-light)] text-xs mb-1 font-medium">
                    Elected School Head Boy
                  </p>
                  <p className="text-[var(--text-muted)] text-xs">
                    The Oxford School | Trivandrum, India
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <h4 className="text-sm font-normal text-[var(--gold-light)] mb-3 uppercase tracking-wider text-xs">
                    Competitive Milestones
                  </h4>
                  <ul className="space-y-2.5 text-xs text-[var(--text-muted)]">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[var(--gold-primary)] shrink-0 mt-0.5" />
                      <span>
                        <a
                          href="https://leetcode.com/u/aswinkj/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="interactive text-[var(--gold-light)] hover:underline font-medium inline-flex items-center gap-1"
                        >
                          Solved 200+ DSA Problems on LeetCode <ExternalLink size={12} />
                        </a>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[var(--gold-primary)] shrink-0 mt-0.5" />
                      <span>Winner of Codexia and CodeSprint Hackathons @ SNS Institutions</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[var(--gold-primary)] shrink-0 mt-0.5" />
                      <span>2x Winner @ SPARK Robotics Competition, ACE College of Engineering, Trivandrum</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-[var(--gold-primary)] shrink-0 mt-0.5" />
                      <span>Presenter, International Conference — Sathyabama University (in collaboration with Univ. of Nottingham & ITS)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Column 2: Global Certifications */}
          <GlassCard delay={0.4} className="!p-8 md:!p-10 !rounded-none flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Award size={24} className="text-[var(--gold-primary)]" />
                <h3 className="text-2xl font-[family-name:var(--font-cormorant)] font-normal text-[var(--gold-light)]">
                  Global Certifications
                </h3>
              </div>

              <ul className="space-y-4 text-sm font-light">
                <li className="p-3 bg-white/5 border border-white/5 hover:border-[var(--gold-primary)]/40 transition-colors">
                  <a
                    href="https://www.credly.com/badges/e0ca14fb-8164-4e6c-ac1b-bcfc8f967af2/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--gold-light)] transition-colors">
                        Microsoft Azure AI Fundamentals (AI-900)
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">Microsoft Official Certification</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--gold-primary)] shrink-0 mt-1" />
                  </a>
                </li>

                <li className="p-3 bg-white/5 border border-white/5 hover:border-[var(--gold-primary)]/40 transition-colors">
                  <a
                    href="https://drive.google.com/file/d/18zFwMyrJq73zVtwSUc51hHABowClYmYT/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--gold-light)] transition-colors">
                        Oracle Certified AI Foundations Associate
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">Oracle Cloud Infrastructure (OCI)</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--gold-primary)] shrink-0 mt-1" />
                  </a>
                </li>

                <li className="p-3 bg-white/5 border border-white/5 hover:border-[var(--gold-primary)]/40 transition-colors">
                  <a
                    href="https://drive.google.com/file/d/1nJ9XI9x87zYfQ0BLqpD1VfTsFbr6M6qx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--gold-light)] transition-colors">
                        NPTEL Programming with Generative AI
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">IIT / NPTEL Verified Course</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--gold-primary)] shrink-0 mt-1" />
                  </a>
                </li>

                <li className="p-3 bg-white/5 border border-white/5 hover:border-[var(--gold-primary)]/40 transition-colors">
                  <a
                    href="https://drive.google.com/file/d/1F9F8S1UW1lMEX8Q8Xs-nta1ciSpbKiz4/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--gold-light)] transition-colors">
                        AWS Solutions Architecture Job Simulation
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">Amazon Web Services Credential</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--gold-primary)] shrink-0 mt-1" />
                  </a>
                </li>

                <li className="p-3 bg-white/5 border border-white/5 hover:border-[var(--gold-primary)]/40 transition-colors">
                  <a
                    href="https://drive.google.com/file/d/16tuQJqAD7oskLFAkM5WUGXufSsiK7XqF/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive flex items-start justify-between gap-3 group"
                  >
                    <div>
                      <h4 className="text-sm font-medium text-[var(--text-main)] group-hover:text-[var(--gold-light)] transition-colors">
                        NIT-T GenAI Workshop Certification
                      </h4>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">NIT Trichy Technical Workshop</p>
                    </div>
                    <ExternalLink size={15} className="text-[var(--gold-primary)] shrink-0 mt-1" />
                  </a>
                </li>
              </ul>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-14 border-t border-[var(--navy-border)] text-center text-xs text-[var(--text-muted)] relative z-10 bg-[var(--navy-light)]/95 shadow-inner">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-[var(--gold-primary)] text-sm">
            <a href="https://github.com/aswinkj2006" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-light)] transition-colors">GitHub</a>
            <span>•</span>
            <a href="https://www.linkedin.com/in/aswinkj2006/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-light)] transition-colors">LinkedIn</a>
            <span>•</span>
            <a href="mailto:aswinkj2006@gmail.com" className="hover:text-[var(--gold-light)] transition-colors">Email</a>
            <span>•</span>
            <a href={resumeGitHubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold-light)] transition-colors">Resume</a>
          </div>
          <p className="font-[family-name:var(--font-inter)] tracking-[0.2em] uppercase font-light text-[11px]">
            © 2026 ASWIN K J • Coimbatore, India • All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
