import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * SplitLineReveal: memecah teks jadi kata-kata dengan wrapper overflow-hidden,
 * lalu menganimasikannya meluncur naik saat discroll ke viewport.
 */
export const SplitLineReveal = ({
  children,
  as: Component = 'div',
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = 0.9,
  start = 'top 88%',
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const inners = el.querySelectorAll('.line-split-inner');
    if (!inners.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inners,
        { yPercent: 120, opacity: 0, rotateX: 10 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration,
          ease: 'power3.out',
          stagger,
          delay,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, stagger, duration, start, children]);

  const renderContent = () => {
    if (typeof children === 'string') {
      const words = children.split(' ');
      return (
        <span className="inline-block">
          {words.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em] py-[1px]">
              <span className="line-split-inner inline-block will-change-transform">{word}</span>
            </span>
          ))}
        </span>
      );
    }
    return children;
  };

  return (
    <Component ref={containerRef} className={`split-reveal-container ${className}`}>
      {renderContent()}
    </Component>
  );
};

export default SplitLineReveal;
