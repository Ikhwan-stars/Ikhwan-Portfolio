import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const MainContent = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (!target) return;

    // Pakai Lenis (smooth scroll) kalau tersedia, biar konsisten dengan scroll di seluruh halaman
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0 });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => scrollToSection('about');

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen px-6 md:px-8 text-center md:text-left relative overflow-hidden pt-24 md:pt-0 pb-16 md:pb-0">
      {/* Background dot-grid halus supaya hero terasa lebih berdimensi */}
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid-fade opacity-70 pointer-events-none" aria-hidden="true" />

      {/* Konten Teks */}
      <div className="mt-8 md:mt-0 md:mr-12 z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 border border-gray-800 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-widest text-gray-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Terbuka untuk kolaborasi & magang
        </motion.span>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight text-white font-display"
          >
            IKHWAN
          </motion.h1>
        </div>
        <div className="overflow-hidden mt-1">
          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide leading-tight text-white font-display"
          >
            ROMADON
          </motion.h1>
        </div>

        <div className="mt-4 flex justify-center md:justify-start">
          <motion.button
            type="button"
            onClick={scrollToAbout}
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="group inline-flex flex-col items-center md:items-start w-fit bg-transparent border-0 cursor-pointer"
            aria-label="Scroll ke bagian About"
          >
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider text-gray-200 font-sans group-hover:text-white transition-colors">
              WEB DEVELOPER &amp; PELAJAR SMAN 7 KAB. TANGERANG
            </p>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="h-[2px] bg-white mt-1 w-full block group-hover:bg-gray-300 transition-colors"
            />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-3"
        >
          <button
            type="button"
            onClick={() => scrollToSection('projects')}
            className="group inline-flex items-center gap-2 bg-white hover:bg-gray-200 text-black font-mono text-xs uppercase tracking-widest py-3 px-6 transition-all duration-300 cursor-pointer"
          >
            <span>Lihat Proyek</span>
            <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center gap-2 border border-gray-700 hover:border-white text-white font-mono text-xs uppercase tracking-widest py-3 px-6 transition-all duration-300 cursor-pointer"
          >
            <span>Hubungi Saya</span>
          </button>
        </motion.div>
      </div>

      {/* Indikator scroll ke About, muncul di bawah tengah layar */}
      <motion.button
        type="button"
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        aria-label="Scroll ke bagian About"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer bg-transparent border-0"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.button>

      {/* Foto Profil */}
      <motion.div
        initial={{ scale: 0.88, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-40 h-52 sm:w-48 sm:h-64 md:w-56 md:h-72 group cursor-pointer mb-6 md:mb-0 z-0"
      >
        {/* Ganti /images/profile.jpg dengan foto kamu */}
        <img
          src="/images/profile.jpg"
          alt=""
          aria-hidden="true"
          width="224"
          height="288"
          fetchpriority="high"
          decoding="sync"
          className="absolute top-3 left-3 opacity-20 w-full h-full object-cover transition-all duration-500 group-hover:top-0 group-hover:left-0 pointer-events-none"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="relative z-10 w-full h-full transition-all duration-500 group-hover:scale-105 bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden">
          <img
            src="/images/profile.jpg"
            alt="Ikhwan Romadon - Web Developer"
            width="224"
            height="288"
            fetchpriority="high"
            decoding="sync"
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          <span className="hidden font-display text-5xl text-white select-none">IR</span>
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
