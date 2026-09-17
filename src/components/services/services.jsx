import React, { useState } from 'react';
import { FiLayout, FiCode, FiServer, FiRefreshCw, FiArrowUpRight } from 'react-icons/fi';
import SplitLineReveal from '../animations/SplitLineReveal';

const services = [
  {
    icon: FiLayout,
    number: '01',
    title: 'Front-End Development',
    description: 'Membangun tampilan web yang rapi, responsif, dan enak dipakai di semua ukuran layar memakai HTML, CSS, Tailwind CSS, dan React.',
    tags: ['React', 'Tailwind CSS', 'Responsive UI'],
  },
  {
    icon: FiServer,
    number: '02',
    title: 'Back-End & REST API',
    description: 'Merancang dan membangun REST API dari nol dengan Node.js — struktur endpoint, penanganan request/response, sampai deployment produksi.',
    tags: ['Node.js', 'REST API', 'Vercel'],
  },
  {
    icon: FiCode,
    number: '03',
    title: 'Integrasi & Tools',
    description: 'Menghubungkan aplikasi ke layanan pihak ketiga seperti GitHub API dan Supabase, serta membangun tools kecil untuk mempermudah workflow.',
    tags: ['GitHub API', 'Supabase', 'Astro'],
  },
  {
    icon: FiRefreshCw,
    number: '04',
    title: 'Belajar Berkelanjutan',
    description: 'Terus mengasah kemampuan lewat proyek kecil, eksplorasi tools baru, dan membaca cara developer lain menyelesaikan masalah.',
    tags: ['Git & GitHub', 'Problem Solving', 'Self-Taught'],
  },
];

const ServiceRow = ({ service, isOpen, onToggle }) => {
  const Icon = service.icon;
  return (
    <div
      className="group border-b cursor-pointer transition-colors duration-300"
      style={{ borderColor: 'rgba(243,240,232,0.12)' }}
      onClick={onToggle}
      data-cursor-hover
    >
      <div className="flex items-center gap-4 sm:gap-8 py-6 sm:py-8">
        <span className="font-mono text-xs sm:text-sm w-8 shrink-0" style={{ color: isOpen ? 'var(--color-accent)' : 'rgba(243,240,232,0.35)' }}>
          {service.number}
        </span>

        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            borderColor: isOpen ? 'var(--color-accent)' : 'rgba(243,240,232,0.2)',
            background: isOpen ? 'var(--color-accent)' : 'transparent',
            color: isOpen ? 'var(--color-ink)' : 'var(--color-paper)',
          }}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <h3 className="flex-1 font-heading font-bold text-lg sm:text-2xl md:text-3xl tracking-tight text-paper transition-transform duration-300 group-hover:translate-x-1">
          {service.title}
        </h3>

        <FiArrowUpRight
          className="w-5 h-5 shrink-0 transition-transform duration-300"
          style={{ color: 'var(--color-accent)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        />
      </div>

      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ maxHeight: isOpen ? '220px' : '0px' }}
      >
        <div className="pb-7 sm:pb-9 pl-12 sm:pl-24 pr-4 sm:pr-16">
          <p className="text-sm sm:text-base text-paper/55 leading-relaxed max-w-2xl mb-4">{service.description}</p>
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 border"
                style={{ borderColor: 'rgba(243,240,232,0.18)', color: 'var(--color-paper)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 px-6 sm:px-10 md:px-16 lg:pl-32 lg:pr-16 border-b overflow-hidden"
      style={{ background: 'var(--color-ink)', borderColor: 'rgba(243,240,232,0.1)' }}
    >
      <div className="max-w-5xl mx-auto lg:mx-0">
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>03 / What I Do</span>
            </div>
            <SplitLineReveal
              as="h2"
              className="font-display font-medium leading-[1] text-paper"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Skillset saat ini.
            </SplitLineReveal>
          </div>
          <SplitLineReveal
            as="p"
            delay={0.1}
            className="text-xs sm:text-sm md:text-base text-paper/50 max-w-xs font-sans leading-relaxed"
          >
            Hal-hal yang sedang saya pelajari dan bisa saya kerjakan sejauh ini sebagai calon web developer.
          </SplitLineReveal>
        </div>

        <div>
          {services.map((service, idx) => (
            <ServiceRow
              key={service.number}
              service={service}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex((prev) => (prev === idx ? -1 : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
