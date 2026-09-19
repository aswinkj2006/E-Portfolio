'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show after scrolling past the first 120px
      if (scrollY > 120) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setMobileMenuOpen(false);
      }

      // Track active section
      const sections = ['armory', 'chronicles', 'arsenal', 'honors', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Skills', href: '#armory', id: 'armory' },
    { label: 'Experience', href: '#chronicles', id: 'chronicles' },
    { label: 'Projects', href: '#arsenal', id: 'arsenal' },
    { label: 'Honors', href: '#honors', id: 'honors' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -70, opacity: 0, scale: 0.97 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: -70, opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        >
          <div className="minimal-panel pointer-events-auto w-full max-w-4xl !py-2.5 !px-5 md:!px-7 flex items-center justify-between border border-[var(--gold-primary)]/40 shadow-2xl backdrop-blur-2xl">
            {/* Brand / Logo */}
            <a
              href="#hero"
              className="interactive font-[family-name:var(--font-cormorant)] text-xl font-medium tracking-wider text-[var(--gold-light)] hover:text-white transition-colors flex items-center gap-2.5"
            >
              <span className="w-2 h-2 rounded-full bg-[var(--gold-primary)] animate-pulse" />
              <span>ASWIN K J</span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest font-light">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`interactive relative py-1 transition-colors ${
                      isActive
                        ? 'text-[var(--gold-light)] font-medium'
                        : 'text-[var(--text-muted)] hover:text-[var(--gold-light)]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[var(--gold-primary)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Contact Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="interactive inline-flex items-center gap-1.5 px-3 py-1.5 bg-[var(--gold-primary)]/15 border border-[var(--gold-primary)]/60 text-[var(--gold-light)] hover:bg-[var(--gold-primary)] hover:text-[var(--navy-bg)] text-xs tracking-widest uppercase transition-all duration-300 font-medium shadow-sm"
              >
                <Mail size={13} />
                <span>Contact</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="interactive md:hidden p-1.5 text-[var(--gold-light)] hover:text-white transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Dropdown Panel */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="minimal-panel pointer-events-auto absolute top-16 left-4 right-4 max-w-md mx-auto p-5 border border-[var(--gold-primary)]/40 shadow-2xl md:hidden flex flex-col gap-4 text-center"
              >
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="interactive text-sm uppercase tracking-widest py-2 text-[var(--text-muted)] hover:text-[var(--gold-light)] transition-colors border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="interactive text-sm uppercase tracking-widest py-2 text-[var(--gold-light)] hover:text-white transition-colors font-medium"
                >
                  Contact
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
