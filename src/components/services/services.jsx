import React, { useRef } from 'react';
import { FiLayout, FiCode, FiServer, FiRefreshCw } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

const services = [
  {
    icon: FiLayout,
    number: '01',
    title: 'Front-End Development',
    description:
      'Membangun tampilan web yang rapi, responsif, dan enak dipakai di semua ukuran layar memakai HTML, CSS, Tailwind CSS, dan React.',
    tags: ['React', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: FiServer,
    number: '02',
    title: 'Back-End & REST API',
    description:
      'Merancang dan membangun REST API dari nol dengan Node.js — mulai dari struktur endpoint, penanganan request/response, sampai deployment ke production.',
    tags: ['Node.js', 'REST API', 'Vercel'],
  },
  {
    icon: FiCode,
    number: '03',
    title: 'Integrasi & Tools',
    description:
      'Menghubungkan aplikasi ke layanan pihak ketiga seperti GitHub API dan Supabase, serta membangun tools kecil yang mempermudah workflow sehari-hari.',
    tags: ['GitHub API', 'Supabase', 'Astro'],
  },
  {
    icon: FiRefreshCw,
    number: '04',
    title: 'Belajar Berkelanjutan',
    description:
      'Terus mengasah kemampuan lewat proyek kecil, eksplorasi tools baru, dan membaca cara developer lain menyelesaikan masalah.',
    tags: ['Git & GitHub', 'Problem Solving', 'Self-Taught'],
  },
];

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const Icon = service.icon;

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
      className="spotlight-card group relative p-6 sm:p-8 border border-gray-800 bg-gray-950/40 hover:border-gray-600 transition-colors duration-300 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-gray-700 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <Icon className="w-5 h-5" />
        </div>
        <span className="font-mono text-xs text-gray-600 group-hover:text-gray-400 transition-colors">
          {service.number}
        </span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-3 tracking-tight">
        {service.title}
      </h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">{service.description}</p>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800/80">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-gray-400 px-2.5 py-1 border border-gray-800 group-hover:border-gray-600 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 bg-black text-white border-b border-gray-800/60 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dot-grid bg-dot-grid-fade opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-gray-400 uppercase">
              // 03 SERVICES
            </span>
            <span className="h-[1px] w-12 bg-gray-700" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <SplitLineReveal
              as="h2"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display uppercase"
            >
              What I Do
            </SplitLineReveal>
            <SplitLineReveal
              as="p"
              delay={0.15}
              className="text-xs sm:text-sm md:text-base text-gray-400 max-w-lg font-sans font-medium leading-relaxed"
            >
              Hal-hal yang sedang saya pelajari dan bisa saya kerjakan sejauh ini sebagai calon web developer.
            </SplitLineReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
