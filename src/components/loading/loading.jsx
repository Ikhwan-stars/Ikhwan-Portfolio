import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Preloader singkat dengan hitungan persentase + reveal tirai.
 * Memberi kesan pertama yang lebih "niat" & profesional sebelum konten muncul.
 */
const Loading = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let raf;
    const start = performance.now();
    const duration = 1400;

    const tick = (now) => {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);

      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setIsDone(true), 250);
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
          exit={{ opacity: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden"
        >
          {/* Tirai atas & bawah yang membuka */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: progress >= 100 ? 0 : 1 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            style={{ originY: 0 }}
            className="absolute top-0 left-0 w-full h-1/2 bg-black"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: progress >= 100 ? 0 : 1 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            style={{ originY: 1 }}
            className="absolute bottom-0 left-0 w-full h-1/2 bg-black"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6">
            <div className="flex items-baseline gap-3">
              <span className="font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-white">
                Ikhwan
              </span>
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.3em] text-gray-500 uppercase">
                Portofolio
              </span>
            </div>

            <div className="w-[220px] sm:w-[280px] h-[1px] bg-gray-800 relative overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: 'linear' }}
              />
            </div>

            <span className="font-mono text-xs text-gray-400 tabular-nums tracking-widest">
              {String(progress).padStart(3, '0')}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
