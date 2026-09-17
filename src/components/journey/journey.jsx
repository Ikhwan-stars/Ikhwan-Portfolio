import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

gsap.registerPlugin(ScrollTrigger);

const journeyData = [
  {
    id: 'sekolah',
    year: 'SMAN 7',
    headline: 'Menempuh Pendidikan di SMAN 7 Kabupaten Tangerang',
    summary: 'Siswa Aktif · Belajar Dasar Ilmu Komputer',
    category: 'Education',
    period: 'Sekarang',
    description: 'Menempuh pendidikan menengah atas dan cukup menikmati pelajaran Informatika. Dari sinilah rasa penasaran terhadap dunia teknologi mulai tumbuh, sambil terus memperdalam kemampuan pemrograman web secara mandiri di luar jam sekolah.',
  },
  {
    id: 'frontend',
    year: '01',
    headline: 'Membangun Dasar Front-End Development',
    summary: 'HTML, CSS, JavaScript & Tailwind CSS',
    category: 'Experience',
    period: 'Berlangsung',
    description: 'Belajar menyusun struktur halaman web dengan HTML, mempercantik tampilan dengan CSS dan Tailwind CSS, lalu menghidupkannya dengan JavaScript. Banyak belajar lewat coba-coba, tutorial, dan membedah kode orang lain.',
  },
  {
    id: 'backend',
    year: '02',
    headline: 'Merancang REST API dengan Node.js',
    summary: 'Desain Endpoint & Integrasi Layanan',
    category: 'Experience',
    period: 'Berlangsung',
    description: 'Mulai membangun REST API sendiri dengan Node.js, mendesain struktur endpoint per kategori, dan menghubungkannya ke layanan seperti GitHub API dan Supabase. Dari sini saya makin paham alur data dari request sampai response.',
  },
  {
    id: 'proyek',
    year: '03',
    headline: 'Membangun Proyek Pribadi',
    summary: 'Portofolio & Latihan Berkelanjutan',
    category: 'Programs & Events',
    period: 'Berlangsung',
    description: 'Mulai membangun proyek nyata seperti Kyoto API, RepoHub, dan Archie sebagai bahan belajar sekaligus portofolio. Ke depannya, ingin mengasah kemampuan ini lebih jauh lewat kesempatan belajar dan berkarya yang lebih besar.',
  },
];

const catColor = {
  Experience: 'var(--color-accent)',
  Education: '#ff6b3d',
  'Programs & Events': '#7a9bff',
};

const JourneyItem = ({ period, isOpen, onToggle }) => (
  <div
    className="relative pl-12 sm:pl-16 transition-colors duration-300"
  >
    <span
      className="absolute left-[13px] sm:left-[21px] top-8 w-3 h-3 rounded-full border-2 -translate-x-1/2 transition-all duration-300"
      style={{
        borderColor: catColor[period.category] || 'var(--color-accent)',
        background: isOpen ? catColor[period.category] : 'var(--color-ink)',
      }}
    />
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      data-cursor-hover
      className="w-full text-left py-6 sm:py-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group border-b"
      style={{ borderColor: 'rgba(243,240,232,0.1)' }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 flex-wrap mb-1.5">
          <span className="font-mono text-xs sm:text-sm font-bold tracking-tight" style={{ color: catColor[period.category] }}>
            {period.year}
          </span>
          <span className="font-heading text-base sm:text-lg font-bold text-paper tracking-tight group-hover:translate-x-0.5 transition-transform">
            {period.headline}
          </span>
        </div>
        <p className="text-xs sm:text-sm text-paper/45 font-medium truncate">{period.summary}</p>
      </div>

      <div
        className="w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300"
        style={{
          background: isOpen ? 'var(--color-accent)' : 'transparent',
          borderColor: isOpen ? 'var(--color-accent)' : 'rgba(243,240,232,0.2)',
          color: isOpen ? 'var(--color-ink)' : 'var(--color-paper)',
        }}
      >
        {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
      </div>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key={`content-${period.id}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="pb-8 pr-2 sm:pr-8">
            <span
              className="inline-block text-[10px] uppercase tracking-wider px-2.5 py-1 mb-3"
              style={{ background: 'rgba(243,240,232,0.06)', color: catColor[period.category] }}
            >
              {period.category}
            </span>
            <p className="text-xs sm:text-sm md:text-base text-paper/60 leading-relaxed max-w-2xl">{period.description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Journey = () => {
  const [activeId, setActiveId] = useState(journeyData[0].id);
  const spineRef = useRef(null);
  const trackWrapRef = useRef(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  useEffect(() => {
    const wrap = trackWrapRef.current;
    const spine = spineRef.current;
    if (!wrap || !spine) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spine,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top 75%', end: 'bottom 60%', scrub: true },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-32 lg:pr-16 w-full overflow-hidden" style={{ background: 'var(--color-ink)' }}>
      <div className="max-w-4xl mx-auto lg:mx-0">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest block mb-4" style={{ color: 'var(--color-accent)' }}>05 / Growth</span>
            <SplitLineReveal as="h2" className="font-display font-medium leading-[1] text-paper" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
              Perjalanan belajar.
            </SplitLineReveal>
          </div>
          <SplitLineReveal as="p" delay={0.1} className="text-xs sm:text-sm md:text-base text-paper/50 max-w-xs font-sans leading-relaxed">
            Dari bangku sekolah sampai proyek yang membentuk kemampuan saya sebagai web developer.
          </SplitLineReveal>
        </div>

        <div ref={trackWrapRef} className="relative">
          <div className="absolute left-[13px] sm:left-[21px] top-2 bottom-2 w-px" style={{ background: 'rgba(243,240,232,0.1)' }} />
          <div
            ref={spineRef}
            className="absolute left-[13px] sm:left-[21px] top-2 bottom-2 w-px origin-top"
            style={{ background: 'var(--color-accent)', transform: 'scaleY(0)' }}
          />
          {journeyData.map((period) => (
            <JourneyItem key={period.id} period={period} isOpen={activeId === period.id} onToggle={() => toggle(period.id)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
