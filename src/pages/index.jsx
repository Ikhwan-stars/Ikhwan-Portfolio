import React, { useEffect } from 'react';
import About from '../components/about/about';
import Contact from '../components/contact/contact';
import Footer from '../components/footer/footer';
import Journey from '../components/journey/journey';
import MainContent from '../components/main/main-content';
import Navbar from '../components/navbar/navbar';
import Skills from '../components/skills/skills';
import Services from '../components/services/services';
import Projects from '../components/projects/projects';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full text-gray-100 overflow-x-clip" style={{ background: 'var(--color-ink)' }}>
      <Navbar />

      <section id="home" className="relative z-0 w-full min-h-screen">
        <MainContent />
      </section>

      <section id="about" className="relative w-full">
        <About />
      </section>

      <section id="skills" className="relative w-full">
        <Skills />
      </section>

      <Services />
      <Projects />
      <Journey />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
