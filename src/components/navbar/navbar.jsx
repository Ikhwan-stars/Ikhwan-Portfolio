import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const navContainerVariants = {
  hidden: { y: -80, opacity: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.05, delayChildren: 0.05 },
  },
};

const navItemVariants = {
  hidden: { y: -15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const showNavbarRef = useRef(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const delta = currentScrollY - lastScrollY.current;

          if (Math.abs(delta) > 5) {
            if (delta < 0 && currentScrollY > 100) {
              if (!showNavbarRef.current) {
                showNavbarRef.current = true;
                setShowNavbar(true);
              }
            } else if (delta > 0 || currentScrollY <= 80) {
              if (showNavbarRef.current) {
                showNavbarRef.current = false;
                setShowNavbar(false);
              }
            }
            lastScrollY.current = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const goTo = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0 });
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Nav desktop: pill mengambang, muncul saat scroll ke atas */}
      <motion.nav
        variants={navContainerVariants}
        initial="hidden"
        animate={showNavbar && !menuOpen ? 'visible' : 'hidden'}
        style={{ pointerEvents: showNavbar && !menuOpen ? 'auto' : 'none' }}
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 bg-transparent text-white mix-blend-difference px-4 sm:px-6 py-2 hidden md:flex justify-center items-center gap-6 lg:gap-8 z-50 max-w-[96vw]"
      >
        {links.map((item) => (
          <motion.a
            key={item.name}
            variants={navItemVariants}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              goTo(item.href);
            }}
            className="text-xs md:text-sm font-bold uppercase hover:-translate-y-0.5 transition-all duration-200 inline-block tracking-wider whitespace-nowrap cursor-pointer"
          >
            {item.name}
          </motion.a>
        ))}
      </motion.nav>

      {/* Tombol menu mobile: selalu ada, di pojok kanan atas */}
      <div className="md:hidden fixed top-4 right-4 z-[60]">
        <motion.button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="w-11 h-11 rounded-full bg-black/70 backdrop-blur border border-gray-700 text-white flex items-center justify-center cursor-pointer"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <FiX className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <FiMenu className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Panel menu mobile fullscreen */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-50 bg-black/97 backdrop-blur-sm flex flex-col items-center justify-center gap-2"
          >
            {links.map((item, idx) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(item.href);
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.08 * idx, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl font-display font-extrabold uppercase text-white py-3 tracking-tight active:opacity-60"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-gray-500"
            >
              Ikhwan Romadon
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
