import { useEffect, useRef } from 'react';

/**
 * useMagnetic: attaches a subtle magnetic pull to an element as the
 * pointer approaches, smoothed with rAF lerp so it never feels jittery.
 * strength: how far (px) the element can travel toward the cursor.
 */
export function useMagnetic(strength = 14) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;

    let raf;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };
    let active = false;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      target.x = (relX / rect.width) * strength;
      target.y = (relY / rect.height) * strength;
    };

    const onEnter = () => { active = true; };
    const onLeave = () => {
      active = false;
      target = { x: 0, y: 0 };
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.2;
      current.y += (target.y - current.y) * 0.2;
      el.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(raf);
    };
  }, [strength]);

  return ref;
}
