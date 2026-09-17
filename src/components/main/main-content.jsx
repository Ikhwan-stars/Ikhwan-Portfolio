import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { useMagnetic } from '../../hooks/useMagnetic';

const charVariants = {
  hidden: { yPercent: 130, rotate: 6 },
  visible: (i) => ({
    yPercent: 0,
    rotate: 0,
    transition: { duration: 0.9, delay: 0.25 + i * 0.03, ease: [0.16, 1, 0.3, 1] },
  }),
};

const KineticWord = ({ word, baseDelay = 0 }) => (
  <span className="inline-flex overflow-hidden pb-[0.08em]">
    {word.split('').map((ch, i) => (
      <motion.span
        key={i}
        custom={i + baseDelay}
        variants={charVariants}
        initial="hidden"
        animate="visible"
        className="inline-block will-change-transform"
      >
        {ch}
      </motion.span>
    ))}
  </span>
);

const MainContent = () => {
  const orbitRef = useRef(null);
  const ctaRef = useMagnetic(10);
  const ctaRef2 = useMagnetic(10);

  useEffect(() => {
    let raf;
    let angle = 0;
    const spin = () => {
      angle += 0.12;
      if (orbitRef.current) orbitRef.current.style.transform = `rotate(${angle}deg)`;
      raf = requestAnimationFrame(spin);
    };
    raf = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0, duration: 1.3 });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:pl-32 lg:pr-16 pt-28 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-fine-grid bg-fine-grid-fade opacity-80 pointer-events-none" aria-hidden="true" />

      {/* Oversized ghost numeral in background for depth */}
      <span
        className="absolute -right-10 top-1/2 -translate-y-1/2 font-display text-outline select-none pointer-events-none hidden md:block"
        style={{ fontSize: 'min(48vw, 620px)', lineHeight: 0.8 }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative z-10 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex items-center gap-3 mb-6 sm:mb-8"
        >
          <span className="relative w-3 h-3 flex items-center justify-center">
            <span className="absolute w-3 h-3 rounded-full pulse-dot" style={{ background: 'var(--color-accent)' }} />
          </span>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-paper/60">
            Aspiring Web Developer &middot; Tangerang, ID
          </span>
        </motion.div>

        <h1 className="font-display font-medium leading-[0.92] text-paper" style={{ fontSize: 'clamp(2.75rem, 9vw, 8rem)' }}>
          <div><KineticWord word="Ikhwan" /></div>
          <div className="italic" style={{ color: 'var(--color-accent)' }}>
            <KineticWord word="Romadon." baseDelay={7} />
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 max-w-lg text-sm sm:text-base md:text-lg text-paper/65 leading-relaxed font-sans"
        >
          Pelajar SMA yang membangun kemampuan Front-End &amp; Back-End dari nol —
          menyusun antarmuka, merancang REST API, dan belajar satu proyek nyata pada satu waktu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 sm:mt-11 flex flex-wrap items-center gap-4"
        >
          <button
            ref={ctaRef}
            type="button"
            data-cursor-hover
            onClick={() => scrollToSection('projects')}
            className="magnetic group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest py-3.5 px-7 transition-colors duration-300"
            style={{ background: 'var(--color-accent)', color: 'var(--color-ink)' }}
          >
            <span>Lihat Proyek</span>
            <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
          <button
            ref={ctaRef2}
            type="button"
            data-cursor-hover
            onClick={() => scrollToSection('contact')}
            className="magnetic inline-flex items-center gap-2 border font-mono text-xs uppercase tracking-widest py-3.5 px-7 transition-colors duration-300 hover:text-[var(--color-accent)]"
            style={{ borderColor: 'rgba(243,240,232,0.25)' }}
          >
            <span>Hubungi Saya</span>
          </button>
        </motion.div>
      </div>

      {/* Rotating orbit badge with framed portrait, offset lower-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 sm:right-12 md:right-16 lg:right-24 bottom-10 sm:bottom-16 md:bottom-20 z-10 hidden sm:block"
      >
        <div className="relative w-28 h-28 md:w-36 md:h-36">
          <svg ref={orbitRef} viewBox="0 0 100 100" className="absolute inset-0 w-full h-full will-change-transform">
            <defs>
              <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text fontSize="6.2" letterSpacing="1.5" fill="rgba(243,240,232,0.55)" className="font-mono uppercase">
              <textPath href="#circlePath">
                &#8226; SCROLL DOWN &#8226; OPEN TO WORK &#8226; SCROLL DOWN &#8226; OPEN TO WORK
              </textPath>
            </text>
          </svg>
          <div
            className="absolute inset-[18%] rounded-full flex items-center justify-center cursor-pointer"
            style={{ background: 'var(--color-accent)' }}
            onClick={() => scrollToSection('about')}
            data-cursor-hover
          >
            <FiArrowUpRight className="w-5 h-5 md:w-6 md:h-6 rotate-90" style={{ color: 'var(--color-ink)' }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
