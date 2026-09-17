import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { useMagnetic } from '../../hooks/useMagnetic';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Ikhwan-stars' },
    { name: 'Instagram', url: 'https://www.instagram.com/username/' },
    { name: 'WhatsApp', url: 'https://wa.me/6281234567890' },
  ];

  const btnRef = useMagnetic(10);

  const scrollToTop = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t transition-colors duration-300" style={{ background: 'var(--color-ink)', borderColor: 'rgba(243,240,232,0.1)' }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-16 lg:pl-32 lg:pr-16 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono text-paper/40 text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} Ikhwan Romadon.</span>
          <span className="hidden sm:inline-block text-paper/20">&bull;</span>
          <span className="uppercase tracking-wider">Tangerang, Banten, ID</span>
        </div>

        <button
          ref={btnRef}
          onClick={scrollToTop}
          type="button"
          data-cursor-hover
          aria-label="Scroll back to top of page"
          className="magnetic group inline-flex items-center gap-2 px-5 py-2.5 border font-mono text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          style={{ borderColor: 'rgba(243,240,232,0.15)' }}
        >
          <span>BACK TO TOP</span>
          <FiArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </button>

        <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 md:gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="text-xs sm:text-sm font-mono font-semibold tracking-wider text-paper/45 hover:text-[var(--color-accent)] transition-colors duration-200 inline-flex items-center gap-1"
            >
              <span>{link.name}</span>
              <span className="text-[10px] opacity-70">&#8599;</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
