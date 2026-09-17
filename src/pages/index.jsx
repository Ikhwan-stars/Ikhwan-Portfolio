import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Journey from '../components/journey/journey';
import MainContent from '../components/main/main-content';
import Navbar from '../components/navbar/navbar';
import Skills from '../components/skills/skills';
import Services from '../components/services/services';
import Projects from '../components/projects/projects';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero (Home) di-pin di bawah, About slide menutupinya, sama seperti versi asli
      ScrollTrigger.create({
        trigger: '#home',
        start: 'top top',
        endTrigger: '#about',
        end: 'top top',
        pin: true,
        pinSpacing: false,
        anticipatePin: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-black text-gray-100 overflow-x-clip">
      <Navbar />

      {/* Layer 1: Home */}
      <section
        id="home"
        className="relative z-0 w-full h-screen min-h-screen bg-black flex items-center justify-center will-change-transform"
      >
        <MainContent />
      </section>

      {/* Layer 2: About + Skills + Services + Projects + Journey + Contact, slide menutupi Home */}
      <div className="relative z-10 w-full bg-black text-white shadow-[0_-30px_80px_rgba(0,0,0,0.85)] border-t border-gray-800/80">
        <section id="about" className="relative w-full min-h-screen">
          <About />
        </section>

        <section id="skills" className="relative w-full bg-black text-gray-100 border-b border-gray-800/60">
          <Skills />
        </section>

        <Services />

        <Projects />

        <Journey />

        <div className="relative z-20 w-full bg-black shadow-[0_-35px_80px_rgba(0,0,0,0.85)] border-t border-gray-800">
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
