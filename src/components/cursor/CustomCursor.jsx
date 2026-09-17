import React, { useEffect, useRef } from 'react';

/**
 * Custom cursor: a small dot that tracks instantly, and a ring that lags
 * behind via rAF lerp for a smooth, weighted feel. Pure transform-based,
 * no layout thrash -> stays lag-free even at 4K/120hz.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const scale = useRef(1);
  const targetScale = useRef(1);
  const rafId = useRef(null);
  const enabled = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return;
    enabled.current = true;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onOver = (e) => {
      const el = e.target.closest('a, button, [data-cursor-hover]');
      targetScale.current = el ? 1.8 : 1;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });

    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;
      scale.current += (targetScale.current - scale.current) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x - 5}px, ${mouse.current.y - 5}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 17}px, ${ring.current.y - 17}px, 0) scale(${scale.current})`;
      }
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
