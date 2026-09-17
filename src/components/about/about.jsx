import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitLineReveal from '../animations/SplitLineReveal';

gsap.registerPlugin(ScrollTrigger);

const facts = [
  { label: 'Siswa SMAN 7 Kab. Tangerang', value: 'Sekolah' },
  { label: 'Front-End Learner', value: 'Fokus' },
  { label: 'Back-End & API', value: 'Fokus' },
];

const About = () => {
  const sectionRef = useRef(null);
  const imageWrapRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imageWrapRef.current;
    if (!section || !imgWrap) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrap,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 70%' },
        }
      );

      gsap.to(imgWrap.querySelector('img'), {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full bg-black text-white py-24 md:py-32 lg:py-40 px-6 sm:px-10 md:px-16 lg:pl-32 lg:pr-16 overflow-hidden"
      style={{ background: 'var(--color-ink)' }}
    >
      <div className="max-w-6xl mx-auto lg:mx-0 lg:max-w-none">
        <div className="flex items-center gap-3 mb-10 md:mb-14">
          <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>01 / About</span>
          <span className="h-px flex-1" style={{ background: 'rgba(243,240,232,0.15)' }} />
          <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40 hidden sm:inline">Tangerang, Banten, ID</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-start">
          <div>
            <SplitLineReveal
              as="h2"
              className="font-display font-medium leading-[1.15] text-paper mb-8"
              style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.75rem)' }}
            >
              Saya Ikhwan Romadon, pelajar SMAN 7 Kabupaten Tangerang yang sedang membangun jalan menjadi Web Developer.
            </SplitLineReveal>

            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-paper/60 font-sans max-w-2xl">
              <SplitLineReveal delay={0.05}>
                Di sekolah saya cukup suka pelajaran Informatika, dan dari situ rasa penasaran saya soal dunia teknologi terus tumbuh. Di luar jam sekolah, saya belajar mandiri membangun aplikasi web dari nol — mulai dari HTML, CSS, dan Tailwind CSS, menghidupkannya dengan JavaScript, sampai merancang REST API sendiri dengan Node.js dan menghubungkannya ke layanan seperti GitHub API dan Supabase.
              </SplitLineReveal>
              <SplitLineReveal delay={0.1}>
                Saya suka mendalami cara kerja sebuah produk digital secara utuh, dari tampilan yang dilihat pengguna sampai logika yang bekerja di baliknya.
              </SplitLineReveal>
              <SplitLineReveal delay={0.15}>
                Selalu penasaran, senang cari tahu hal baru — bahasa pemrograman lain, tools baru, atau cara developer lain menyelesaikan masalah. Buat saya, belajar coding bukan cuma soal ngoding, tapi juga melatih cara berpikir lewat proyek-proyek kecil.
              </SplitLineReveal>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 pt-8 border-t" style={{ borderColor: 'rgba(243,240,232,0.12)' }}>
              {facts.map((f, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-paper/35">{f.value}</span>
                  <span className="text-xs sm:text-sm font-heading font-semibold text-paper/85">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-28">
            <div
              ref={imageWrapRef}
              className="relative w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto aspect-[4/5] overflow-hidden border"
              style={{ borderColor: 'rgba(243,240,232,0.12)' }}
            >
              <img
                src="/images/about.jpg"
                alt="Ikhwan Romadon"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover scale-110"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center absolute inset-0" style={{ background: '#141410' }}>
                <span className="font-display text-6xl text-paper/25 select-none">IR</span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 font-mono text-[10px] uppercase tracking-widest flex justify-between"
                style={{ background: 'rgba(10,10,8,0.7)', color: 'var(--color-accent)' }}
              >
                <span>Ikhwan.jpg</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
