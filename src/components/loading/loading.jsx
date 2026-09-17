import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1300;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsDone(true), 200);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!isDone && (
        <motion.div
          key="loading-screen"
          exit={{ opacity: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: 'var(--color-ink)' }}
        >
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: progress >= 100 ? 0 : 1 }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            style={{ originY: 0, background: 'var(--color-ink)' }}
            className="absolute top-0 left-0 w-full h-1/2"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: progress >= 100 ? 0 : 1 }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            style={{ originY: 1, background: 'var(--color-ink)' }}
            className="absolute bottom-0 left-0 w-full h-1/2"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6">
            <div className="flex items-baseline gap-2.5">
              <span className="font-display font-medium text-3xl sm:text-4xl tracking-tight text-paper">Ikhwan</span>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase" style={{ color: 'var(--color-accent)' }}>
                Portfolio
              </span>
            </div>

            <div className="w-[220px] sm:w-[280px] h-[2px] relative overflow-hidden" style={{ background: 'rgba(243,240,232,0.12)' }}>
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ background: 'var(--color-accent)' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            <span className="font-mono text-xs tabular-nums tracking-widest text-paper/50">
              {String(progress).padStart(3, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
