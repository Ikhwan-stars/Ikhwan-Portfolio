import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 'proyek-1',
    title: 'Kyoto API',
    description: 'Platform REST API performa tinggi dengan 30+ endpoint di 6 kategori — AI, downloader media, tools, storage, image manipulation, hingga data manga/anime — dengan respons rata-rata di bawah 100ms.',
    tags: ['REST API', 'Node.js', 'Vercel'],
    image: '/images/projects/project-1.jpg',
    liveUrl: 'https://kyoto-rest-api.vercel.app/',
    githubUrl: 'https://github.com/Ikhwan-stars/kyoto-rest-api',
    year: '2025',
  },
  {
    id: 'proyek-2',
    title: 'Archie',
    description: 'Ruang arsip & jurnal pribadi yang tenang untuk menyimpan tulisan, galeri foto, musik, dan guestbook — dibangun dengan Astro dan Supabase sebagai backend.',
    tags: ['Astro', 'Supabase', 'Personal Site'],
    image: '/images/projects/project-2.jpg',
    liveUrl: 'https://archie-lovat.vercel.app/',
    githubUrl: 'https://github.com/Ikhwan-stars/archie',
    year: '2025',
  },
  {
    id: 'proyek-3',
    title: 'RepoHub',
    description: 'Dashboard client-side untuk mengontrol GitHub tanpa terminal — upload folder atau ZIP, jelajahi file repo, kelola issue, dan push langsung dari browser.',
    tags: ['JavaScript', 'GitHub API', 'Dashboard'],
    image: '/images/projects/project-3.jpg',
    liveUrl: 'https://repo-hub-psi.vercel.app/',
    githubUrl: 'https://github.com/Ikhwan-stars/RepoHub',
    year: '2025',
  },
];

const ProjectPanel = ({ project, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="project-panel spotlight-card shrink-0 w-[86vw] sm:w-[64vw] md:w-[46vw] lg:w-[38vw] h-[70vh] md:h-[75vh] border flex flex-col overflow-hidden"
      style={{ borderColor: 'rgba(243,240,232,0.14)', background: 'rgba(243,240,232,0.02)' }}
    >
      <div className="relative w-full flex-1 overflow-hidden border-b" style={{ borderColor: 'rgba(243,240,232,0.1)' }}>
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full items-center justify-center absolute inset-0" style={{ background: '#141410' }}>
          <span className="font-display text-4xl text-paper/20 select-none">0{index + 1}</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        <span
          className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1"
          style={{ background: 'var(--color-accent)', color: 'var(--color-ink)' }}
        >
          {project.year}
        </span>
        <span className="absolute bottom-4 right-4 font-display text-5xl text-paper/15 select-none">0{index + 1}</span>
      </div>

      <div className="p-6 sm:p-7 flex flex-col">
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-paper mb-2 tracking-tight">{project.title}</h3>
        <p className="text-sm text-paper/55 leading-relaxed mb-5 line-clamp-3">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 border" style={{ borderColor: 'rgba(243,240,232,0.16)', color: 'var(--color-paper)' }}>
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-4 border-t mt-auto" style={{ borderColor: 'rgba(243,240,232,0.1)' }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-paper/70 hover:text-paper transition-colors">
              <FiGithub className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider hover:underline underline-offset-4" style={{ color: 'var(--color-accent)' }}>
              <span>Live Site</span>
              <FiArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const trackWrapRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const wrap = trackWrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;

    const setup = () => {
      const isDesktop = window.innerWidth >= 768;
      if (!isDesktop) return;

      const scrollLength = track.scrollWidth - wrap.clientWidth;
      if (scrollLength <= 0) return;

      gsap.to(track, {
        x: -scrollLength,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: () => `+=${scrollLength}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    const ctx = gsap.context(() => {
      setup();
    });

    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctx.revert();
    };
  }, []);

  return (
    <section id="projects" className="relative overflow-hidden" style={{ background: 'var(--color-ink)' }}>
      <div ref={trackWrapRef} className="relative w-full min-h-screen flex flex-col justify-center py-20 md:py-0 px-6 sm:px-10 md:px-16 lg:pl-32">
        <div className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4 shrink-0 md:pr-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest block mb-4" style={{ color: 'var(--color-accent)' }}>04 / Selected Work</span>
            <SplitLineReveal as="h2" className="font-display font-medium leading-[1] text-paper" style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}>
              Proyek yang saya bangun.
            </SplitLineReveal>
          </div>
          <SplitLineReveal as="p" delay={0.1} className="text-xs sm:text-sm md:text-base text-paper/50 max-w-xs font-sans leading-relaxed">
            Beberapa proyek belajar yang sudah dan sedang saya kerjakan. Geser untuk melihat semua &rarr;
          </SplitLineReveal>
        </div>

        <div className="overflow-x-auto md:overflow-hidden pb-4 -mx-6 sm:-mx-10 md:mx-0 px-6 sm:px-10 md:px-0" style={{ scrollbarWidth: 'thin' }}>
          <div ref={trackRef} className="flex gap-5 sm:gap-6 md:pr-16 will-change-transform">
            {projectsData.map((project, index) => (
              <ProjectPanel key={project.id} project={project} index={index} />
            ))}
            <a
              href="https://github.com/Ikhwan-stars"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="shrink-0 w-[86vw] sm:w-[64vw] md:w-[30vw] lg:w-[24vw] h-[70vh] md:h-[75vh] border flex flex-col items-center justify-center gap-4 text-center px-8 group transition-colors duration-300 hover:border-[var(--color-accent)]"
              style={{ borderColor: 'rgba(243,240,232,0.14)' }}
            >
              <span className="font-display text-2xl sm:text-3xl text-paper">Lihat semua di GitHub</span>
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{ borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
              >
                <FiArrowUpRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
