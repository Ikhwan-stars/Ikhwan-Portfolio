import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';

const sections = [
  { id: 'home', label: 'Home', num: '00' },
  { id: 'about', label: 'About', num: '01' },
  { id: 'services', label: 'Work', num: '03' },
  { id: 'projects', label: 'Projects', num: '04' },
  { id: 'journey', label: 'Journey', num: '05' },
  { id: 'contact', label: 'Contact', num: '06' },
];

const NavItem = ({ item, active, onClick }) => {
  const magRef = useMagnetic(8);
  return (
    <a
      ref={magRef}
      href={`#${item.id}`}
      onClick={(e) => onClick(e, item.id)}
      data-cursor-hover
      className="group relative flex items-center gap-3 py-2"
    >
      <span
        className={`font-mono text-[10px] tabular-nums transition-colors duration-300 ${
          active ? '' : 'text-paper/30 group-hover:text-paper/60'
        }`}
        style={{ color: active ? 'var(--color-accent)' : undefined }}
      >
        {item.num}
      </span>
      <span
        className={`h-px transition-all duration-300 ${active ? 'w-5' : 'w-2.5 group-hover:w-4'}`}
        style={{ background: active ? 'var(--color-accent)' : 'rgba(243,240,232,0.3)' }}
      />
      <span
        className={`font-heading text-xs uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${
          active ? 'opacity-100 translate-x-0 text-paper' : 'opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-paper/70'
        }`}
      >
        {item.label}
      </span>
    </a>
  );
};

const Navbar = () => {
  const [activeId, setActiveId] = useState('home');
  const [revealed, setRevealed] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    els.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Mobile top brand mark */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={revealed ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 z-50 lg:hidden font-heading text-sm font-bold tracking-widest uppercase mix-blend-difference"
      >
        IR<span style={{ color: 'var(--color-accent)' }}>.</span>
      </motion.div>

      {/* Desktop vertical index rail */}
      <motion.nav
        initial={{ x: -40, opacity: 0 }}
        animate={revealed ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-1 items-start"
      >
        {sections.map((item) => (
          <NavItem key={item.id} item={item} active={activeId === item.id} onClick={handleClick} />
        ))}
      </motion.nav>

      {/* Top-right minimal identity + resume-style tag, desktop only */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={revealed ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 right-6 z-50 hidden md:flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-paper/50"
      >
        <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: 'var(--color-accent)' }} />
        <span>Available for work</span>
      </motion.div>

      {/* Mobile bottom nav */}
      <motion.nav
        initial={{ y: 60, opacity: 0 }}
        animate={revealed ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex items-center gap-4 px-5 py-3 rounded-full backdrop-blur-md border"
        style={{ background: 'rgba(10,10,8,0.75)', borderColor: 'rgba(243,240,232,0.12)' }}
      >
        {sections.slice(0, 5).map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className="font-mono text-[10px] uppercase tracking-wider transition-colors"
            style={{ color: activeId === item.id ? 'var(--color-accent)' : 'rgba(243,240,232,0.5)' }}
          >
            {item.label}
          </a>
        ))}
      </motion.nav>
    </>
  );
};

export default Navbar;
