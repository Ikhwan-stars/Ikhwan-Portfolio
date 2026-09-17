import React, { useRef } from 'react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

/**
 * GANTI array di bawah ini dengan proyek asli kamu.
 * - title, description, tags: bebas
 * - image: taruh screenshot di /public/images/projects/nama-file.jpg (opsional, ada fallback)
 * - liveUrl / githubUrl: kosongkan string '' kalau belum ada, tombolnya otomatis kesembunyian
 */
const projectsData = [
  {
    id: 'proyek-1',
    title: 'Kyoto API',
    description:
      'Platform REST API performa tinggi dengan 30+ endpoint di 6 kategori — AI, downloader media, tools, storage, image manipulation, hingga data manga/anime — dengan respons rata-rata di bawah 100ms.',
    tags: ['REST API', 'Node.js', 'Vercel'],
    image: '/images/projects/project-1.jpg',
    liveUrl: 'https://kyoto-rest-api.vercel.app/',
    githubUrl: 'https://github.com/Ikhwan-stars/kyoto-rest-api',
    year: '2025',
  },
  {
    id: 'proyek-2',
    title: 'Archie',
    description:
      'Ruang arsip & jurnal pribadi yang tenang untuk menyimpan tulisan, galeri foto, musik, dan guestbook — dibangun dengan Astro dan Supabase sebagai backend.',
    tags: ['Astro', 'Supabase', 'Personal Site'],
    image: '/images/projects/project-2.jpg',
    liveUrl: 'https://archie-lovat.vercel.app/',
    githubUrl: 'https://github.com/Ikhwan-stars/archie',
    year: '2025',
  },
  {
    id: 'proyek-3',
    title: 'RepoHub',
    description:
      'Dashboard client-side untuk mengontrol GitHub tanpa terminal — upload folder atau ZIP, jelajahi file repo, kelola issue, dan push langsung dari browser.',
    tags: ['JavaScript', 'GitHub API', 'Dashboard'],
    image: '/images/projects/project-3.jpg',
    liveUrl: 'https://repo-hub-psi.vercel.app/',
    githubUrl: 'https://github.com/Ikhwan-stars/RepoHub',
    year: '2025',
  },
];

const ProjectCard = ({ project, index }) => {
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
      className="spotlight-card group relative border border-gray-800 hover:border-gray-600 bg-gray-950/40 transition-colors duration-300 overflow-hidden flex flex-col"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-900 border-b border-gray-800">
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
        <div className="hidden w-full h-full items-center justify-center absolute inset-0 bg-gray-900">
          <span className="font-display text-3xl sm:text-4xl text-gray-700 select-none">
            0{index + 1}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 pointer-events-none" />
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest text-gray-300 bg-black/60 px-2 py-1 border border-gray-700">
          {project.year}
        </span>
      </div>

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-400 px-2.5 py-1 border border-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-gray-800/80 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
            >
              <FiGithub className="w-3.5 h-3.5" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:underline underline-offset-4"
            >
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
  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-black text-white border-b border-gray-800/60"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-gray-400 uppercase">
              // 04 PROJECTS
            </span>
            <span className="h-[1px] w-12 bg-gray-700" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SplitLineReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display uppercase"
            >
              Selected Work
            </SplitLineReveal>
            <SplitLineReveal
              as="p"
              delay={0.15}
              className="text-xs sm:text-sm md:text-base text-gray-400 max-w-lg font-sans font-medium leading-relaxed"
            >
              Beberapa proyek belajar yang sudah dan sedang saya kerjakan. Lebih banyak lagi ada di GitHub saya.
            </SplitLineReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <a
            href="https://github.com/Ikhwan-stars"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3.5 border border-gray-800 hover:border-white bg-transparent text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span>Lihat Semua di GitHub</span>
            <FiArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
