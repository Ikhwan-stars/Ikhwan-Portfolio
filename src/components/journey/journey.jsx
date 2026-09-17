import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUpRight, FiMinus, FiPlus } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

const journeyData = [
  {
    id: 'sekolah',
    year: 'SMAN 7',
    periodLabel: 'Pendidikan',
    headline: 'Menempuh Pendidikan di SMAN 7 Kabupaten Tangerang',
    summary: 'Siswa Aktif • Belajar Dasar Ilmu Komputer',
    items: [
      {
        category: 'Education',
        role: 'Siswa',
        organization: 'SMAN 7 Kabupaten Tangerang',
        period: 'Sekarang',
        description:
          'Menempuh pendidikan menengah atas dan cukup menikmati pelajaran Informatika. Dari sinilah rasa penasaran terhadap dunia teknologi mulai tumbuh, sambil terus memperdalam kemampuan pemrograman web secara mandiri di luar jam sekolah.',
      },
    ],
  },
  {
    id: 'frontend',
    year: '01',
    periodLabel: 'Belajar Mandiri',
    headline: 'Membangun Dasar Front-End Development',
    summary: 'HTML, CSS, JavaScript & Tailwind CSS',
    items: [
      {
        category: 'Experience',
        role: 'Self-Taught Front-End Developer',
        organization: 'Belajar Mandiri',
        period: 'Berlangsung',
        description:
          'Belajar menyusun struktur halaman web dengan HTML, mempercantik tampilan dengan CSS dan Tailwind CSS, lalu menghidupkannya dengan JavaScript agar terasa interaktif. Banyak belajar lewat coba-coba, nonton tutorial, dan membedah kode orang lain untuk memahami cara kerjanya.',
      },
    ],
  },
  {
    id: 'backend',
    year: '02',
    periodLabel: 'Belajar Mandiri',
    headline: 'Merancang REST API dengan Node.js',
    summary: 'Desain Endpoint & Integrasi Layanan Pihak Ketiga',
    items: [
      {
        category: 'Experience',
        role: 'Self-Taught Back-End Developer',
        organization: 'Belajar Mandiri',
        period: 'Berlangsung',
        description:
          'Mulai membangun REST API sendiri dengan Node.js, mendesain struktur endpoint per kategori, dan menghubungkannya ke layanan lain seperti GitHub API dan Supabase. Dari sini saya makin paham alur data dari request sampai response, dan cara menjaga API tetap rapi saat jumlah fiturnya bertambah.',
      },
    ],
  },
  {
    id: 'proyek',
    year: '03',
    periodLabel: 'Sekarang',
    headline: 'Membangun Proyek Pribadi',
    summary: 'Portofolio & Latihan Berkelanjutan',
    items: [
      {
        category: 'Programs & Events',
        role: 'Personal Project Builder',
        organization: 'Proyek Pribadi',
        period: 'Berlangsung',
        description:
          'Mulai membangun proyek nyata seperti Kyoto API (REST API dengan 30+ endpoint), RepoHub (dashboard untuk mengelola repository GitHub), dan Archie (arsip pribadi berbasis Astro & Supabase) sebagai bahan belajar sekaligus portofolio. Ke depannya, ingin mengasah kemampuan ini lebih jauh lewat kesempatan belajar dan berkarya yang lebih besar.',
      },
    ],
  },
];

const categoryBadgeStyles = {
  Experience: 'bg-white text-black font-semibold',
  Education: 'bg-gray-800 text-gray-100 border border-gray-700 font-medium',
  'Programs & Events': 'bg-gray-800 text-gray-200 border border-gray-700 font-medium',
};

const Journey = () => {
  const [activeYear, setActiveYear] = useState(journeyData[0].year);

  const toggleYear = (year) => {
    setActiveYear((prev) => (prev === year ? null : year));
  };

  return (
    <section
      id="journey"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-black text-white transition-colors duration-300 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-gray-400 uppercase">
              // 05 JOURNEY
            </span>
            <span className="h-[1px] w-12 bg-gray-700" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SplitLineReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display uppercase"
            >
              Growth &amp; Learning
            </SplitLineReveal>
            <SplitLineReveal
              as="p"
              delay={0.15}
              className="text-xs sm:text-sm md:text-base text-gray-400 max-w-lg font-sans font-medium leading-relaxed"
            >
              Catatan perjalanan belajar, dari bangku sekolah sampai proyek-proyek yang membentuk kemampuan saya sebagai web developer.
            </SplitLineReveal>
          </div>
        </div>

        <div className="border-y border-gray-800 divide-y divide-gray-800">
          {journeyData.map((period) => {
            const isOpen = activeYear === period.year;
            return (
              <div
                key={period.id}
                className={`transition-colors duration-300 ${
                  isOpen ? 'bg-gray-900/40' : 'bg-transparent hover:bg-gray-900/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleYear(period.year)}
                  aria-expanded={isOpen}
                  className="w-full text-left py-6 sm:py-7 md:py-8 px-2 sm:px-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 md:gap-8 flex-1 min-w-0">
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          isOpen ? 'bg-white scale-125' : 'bg-gray-700 group-hover:bg-gray-400'
                        }`}
                      />
                      <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono tracking-tight text-white group-hover:translate-x-0.5 transition-transform">
                        {period.year}
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-base sm:text-lg font-bold font-heading text-gray-100 tracking-tight">
                          {period.headline}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1 truncate font-medium">
                        {period.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 shrink-0 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isOpen
                        ? 'bg-white text-black border-white'
                        : 'border-gray-800 text-gray-400 group-hover:border-white group-hover:text-white'
                    }`}
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
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-2 sm:px-4 pb-8 sm:pb-10 pt-2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          {period.items.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="p-5 sm:p-6 bg-gray-900/40 border-l-2 border-white flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
                            >
                              <div>
                                <div className="flex items-center justify-between gap-2 mb-3">
                                  <span
                                    className={`text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 ${
                                      categoryBadgeStyles[item.category] || 'bg-gray-800'
                                    }`}
                                  >
                                    {item.category}
                                  </span>
                                  <span className="text-xs font-mono text-gray-400 font-medium">
                                    {item.period}
                                  </span>
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-white leading-snug mb-1">
                                  {item.organization}
                                </h3>
                                <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2.5">
                                  {item.role}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>

                              {item.link && (
                                <div className="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-end">
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-white hover:underline underline-offset-4"
                                  >
                                    <span>Official Website</span>
                                    <FiArrowUpRight className="w-3.5 h-3.5" />
                                  </a>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
