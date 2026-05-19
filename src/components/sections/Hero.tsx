"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  const { scrollY } = useScroll();
  
  // Refined parallax values for better performance
  const yParallax = useTransform(scrollY, [0, 1000], [0, 300]);
  const contentY = useTransform(scrollY, [0, 600], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1.1, 1.25]);

  useEffect(() => {
    // Staggered reveal for hero text
    gsap.fromTo(".hero-reveal-char", 
      { y: 120, rotate: 5, opacity: 0 },
      { 
        y: 0, 
        rotate: 0, 
        opacity: 1, 
        duration: 1.5, 
        stagger: 0.04, 
        ease: "power4.out", 
        delay: 0.6 
      }
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    gsap.to(buttonRef.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    if (!buttonRef.current) return;
    gsap.to(buttonRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-brand-black flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yParallax, scale }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2947&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/40 to-brand-black" />
      </motion.div>

      {/* Floating Particles/Noise */}
      <div className="absolute inset-0 z-0 noise-bg mix-blend-overlay opacity-40 pointer-events-none"></div>

      {/* Main Content */}
      <motion.div
        style={{
          y: contentY,
          opacity,
        }}
        className="relative z-10 text-center flex flex-col items-center px-4 max-w-6xl will-change-transform"
      >
        <div className="overflow-hidden mb-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block"
          >
            <span className="text-brand-gold text-xs md:text-sm tracking-[0.4em] uppercase font-bold px-6 py-2 border-x border-brand-gold/40">
              Est. 2014 • Hyderabad
            </span>
          </motion.div>
        </div>

        <h1
          ref={titleRef}
          className="text-[12vw] sm:text-[10vw] md:text-8xl lg:text-9xl font-serif text-brand-cream mb-8 tracking-tighter leading-[0.9] text-balance"
        >
          <div className="overflow-hidden py-2 block">
            {"Where Art".split("").map((char, i) => (
              <span key={i} className="hero-reveal-char inline-block min-w-[0.1em]">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="overflow-hidden py-2 block">
            {"Meets Coffee".split("").map((char, i) => (
              <span key={i} className="hero-reveal-char inline-block italic text-brand-gold/90 font-light min-w-[0.1em]">
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="text-brand-cream/70 text-base sm:text-lg md:text-2xl font-light max-w-2xl mb-14 text-balance leading-relaxed tracking-wide px-4"
        >
          An immersive sanctuary where handcrafted flavors, artisan soul, and creative sparks ignite.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <a
            ref={buttonRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            href="#reservation"
            className="group relative px-10 py-5 bg-brand-gold text-brand-brown font-bold uppercase tracking-[0.2em] text-xs transition-transform duration-300"
          >
            <span className="relative z-10">Reserve Your Experience</span>
            <div className="absolute inset-0 bg-brand-cream scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
          <a
            href="#menu"
            className="group px-10 py-5 border border-brand-cream/20 text-brand-cream font-bold uppercase tracking-[0.2em] text-xs hover:border-brand-gold transition-all duration-500 relative overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-brand-gold">Discover the Menu</span>
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right"></div>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-brand-gold/60 text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/60 to-transparent relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold"
          />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-black to-transparent z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-brand-black to-transparent z-10"></div>
    </section>
  );
}
