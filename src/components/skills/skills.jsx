import React from 'react';

const techStack = [
  'HTML',
  'CSS',
  'JavaScript',
  'Tailwind CSS',
  'Node.js',
  'React',
  'Vite',
  'Git',
];

const Skills = () => {
  const marqueeList = [...techStack, ...techStack];

  return (
    <div
      id="skills"
      className="w-full py-6 sm:py-8 md:py-10 overflow-hidden select-none bg-black border-y border-gray-800/60 transition-colors duration-300"
    >
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee-right flex items-center whitespace-nowrap">
          {marqueeList.map((tech, idx) => (
            <div key={idx} className="inline-flex items-center">
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-semibold tracking-tight text-white hover:opacity-70 transition-opacity duration-200 cursor-default px-2">
                {tech}
              </span>
              <span className="text-gray-700 text-lg sm:text-xl md:text-2xl mx-5 sm:mx-8 md:mx-10 select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
