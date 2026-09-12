import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

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

  return (
    <motion.nav
      variants={navContainerVariants}
      initial="hidden"
      animate={showNavbar ? 'visible' : 'hidden'}
      style={{ pointerEvents: showNavbar ? 'auto' : 'none' }}
      className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 bg-transparent text-white mix-blend-difference px-4 sm:px-6 py-2 flex justify-center items-center gap-5 sm:gap-8 z-50 max-w-[96vw] flex-wrap"
    >
      {links.map((item) => (
        <motion.a
          key={item.name}
          variants={navItemVariants}
          href={item.href}
          className="text-xs sm:text-xs md:text-sm font-bold uppercase hover:-translate-y-0.5 transition-all duration-200 inline-block tracking-wider whitespace-nowrap"
        >
          {item.name}
        </motion.a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
