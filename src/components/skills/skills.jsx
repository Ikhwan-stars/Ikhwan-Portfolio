import React from 'react';

const techStack = ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Node.js', 'React', 'Astro', 'Supabase', 'Vite', 'Git'];

const Row = ({ items, reverse }) => (
  <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
    <div
      className="animate-marquee-right flex items-center whitespace-nowrap"
      style={{ animationDirection: reverse ? 'reverse' : 'normal', animationDuration: reverse ? '38s' : '32s' }}
    >
      {items.map((tech, idx) => (
        <div key={idx} className="inline-flex items-center">
          <span
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-semibold tracking-tight hover:opacity-70 transition-opacity duration-200 cursor-default px-2"
            style={{ color: idx % 3 === 0 ? 'var(--color-accent)' : 'var(--color-paper)' }}
          >
            {tech}
          </span>
          <span className="text-lg sm:text-xl mx-5 sm:mx-8 select-none text-paper/25">&#10022;</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const marqueeList = [...techStack, ...techStack];

  return (
    <div
      id="skills"
      className="w-full py-8 sm:py-10 overflow-hidden select-none border-y transition-colors duration-300"
      style={{ background: 'var(--color-ink)', borderColor: 'rgba(243,240,232,0.1)' }}
    >
      <Row items={marqueeList} />
    </div>
  );
};

export default Skills;
