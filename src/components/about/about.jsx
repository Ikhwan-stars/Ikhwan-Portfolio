import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitLineReveal from '../animations/SplitLineReveal';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const overlay = overlayRef.current;
    if (!section || !content || !overlay) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        overlay,
        { opacity: 0 },
        {
          opacity: 0.95,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'center top', end: 'bottom top', scrub: true },
        }
      );
      gsap.fromTo(
        content,
        { opacity: 1, scale: 1 },
        {
          opacity: 0.05,
          scale: 0.95,
          ease: 'none',
          scrollTrigger: { trigger: section, start: 'center top', end: 'bottom top', scrub: true },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full flex items-center justify-center bg-black text-white py-20 md:py-28 lg:py-36 px-4 sm:px-6 overflow-hidden"
    >
      <div ref={overlayRef} className="absolute inset-0 bg-black pointer-events-none z-20 opacity-0 will-change-transform" aria-hidden="true" />

      <div
        ref={contentRef}
        className="w-full max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 gap-10 lg:gap-20 relative z-10 will-change-transform"
      >
        {/* Teks Kiri */}
        <div className="lg:w-3/5 w-full text-left">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
            <span className="text-xs sm:text-sm font-mono tracking-widest text-gray-400 uppercase font-semibold">
              ABOUT
            </span>
            <span className="h-[1px] w-8 bg-gray-700 hidden sm:block" />
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              TANGERANG, BANTEN, INDONESIA
            </span>
          </div>

          <SplitLineReveal
            as="h2"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-[42px] font-normal leading-[1.3] md:leading-[1.25] tracking-tight text-white font-sans mb-6"
          >
            I'm Ikhwan Romadon — Pelajar SMAN 7 Kabupaten Tangerang yang sedang membangun jalan menjadi Web Developer.
          </SplitLineReveal>

          <div className="space-y-4 text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 font-sans font-normal max-w-2xl mb-8">
            <SplitLineReveal delay={0.1}>
              Di luar jam sekolah, saya belajar mandiri membangun aplikasi web dari nol — menyusun tampilan dengan HTML, CSS, dan Tailwind CSS, menghidupkannya dengan JavaScript, lalu menyambungkannya ke server sederhana memakai Node.js.
            </SplitLineReveal>
            <SplitLineReveal delay={0.2}>
              Saya senang mengulik cara kerja sebuah produk digital secara utuh, dari tampilan yang dilihat pengguna sampai logika yang bekerja di baliknya, dan terus melatih kemampuan lewat proyek-proyek kecil.
            </SplitLineReveal>
          </div>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs text-gray-400 py-4 border-y border-gray-800">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-gray-200 uppercase tracking-wider font-semibold">Siswa SMAN 7 Kab. Tangerang</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-gray-200 uppercase tracking-wider font-semibold">Front-End Learner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-gray-200 uppercase tracking-wider font-semibold">Belajar Back-End</span>
            </div>
          </div>
        </div>

        {/* Foto Kanan */}
        <div className="lg:w-2/5 w-full flex flex-col items-center lg:items-end">
          <div className="relative w-52 h-70 sm:w-60 sm:h-80 md:w-68 md:h-92 lg:w-76 lg:h-[400px] group cursor-pointer">
            <div className="absolute -top-3.5 left-0 right-0 h-[1px] bg-gray-800 group-hover:bg-gray-600 transition-colors duration-300" />
            <div className="absolute -bottom-3.5 left-0 right-0 h-[1px] bg-gray-800 group-hover:bg-gray-600 transition-colors duration-300" />

            {/* Ganti /images/about.jpg dengan foto kamu */}
            <img
              src="/images/about.jpg"
              alt=""
              aria-hidden="true"
              width="320"
              height="400"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover absolute top-4 left-4 opacity-25 transition-all duration-500 group-hover:top-0 group-hover:left-0 brightness-75 pointer-events-none"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02] bg-gray-900 border border-gray-800 flex items-center justify-center overflow-hidden">
              <img
                src="/images/about.jpg"
                alt="Ikhwan Romadon"
                width="320"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <span className="hidden font-display text-6xl text-white select-none">IR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
