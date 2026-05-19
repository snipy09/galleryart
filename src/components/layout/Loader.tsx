"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isExit, setIsExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExit(true), 500);
          setTimeout(onComplete, 1500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 1;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExit && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-black cursor-wait"
        >
          <div className="relative flex flex-col items-center w-full max-w-xs md:max-w-md px-6">
            {/* Logo Reveal */}
            <div className="overflow-hidden mb-12 flex items-center justify-center">
              {"THE GALLERY".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    delay: 0.1 * idx, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`text-4xl md:text-6xl font-serif text-brand-cream tracking-tight uppercase font-bold ${char === " " ? "mr-4" : ""}`}
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Subtle Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="mb-8 text-brand-gold/60 text-[10px] tracking-[0.8em] uppercase font-bold text-center"
            >
              Art • Coffee • Culture
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full h-[1px] bg-white/10 relative overflow-hidden mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                className="absolute inset-0 bg-brand-gold"
              />
            </div>

            {/* Progress Info */}
            <div className="w-full flex justify-between items-center">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-brand-gold/60 text-[10px] tracking-[0.5em] uppercase font-bold"
              >
                Loading Experience
              </motion.span>
              <span className="text-brand-cream font-serif italic text-xl tabular-nums">
                {Math.min(progress, 100)}%
              </span>
            </div>

            {/* Decorative background number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif font-black text-white/[0.02] pointer-events-none select-none">
              2014
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
