"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
          scrolled 
            ? "py-4 bg-brand-cream/90 backdrop-blur-xl shadow-2xl border-b border-brand-gold/10" 
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className={`text-xl md:text-2xl font-serif tracking-[0.2em] uppercase font-bold transition-colors duration-500 ${
            scrolled ? "text-brand-brown" : "text-brand-cream"
          }`}>
            The <span className="text-brand-gold italic">Gallery</span> Cafe
          </div>

          {/* Desktop Links */}
          <div className={`hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold transition-colors duration-500 ${
            scrolled ? "text-brand-brown" : "text-brand-cream"
          }`}>
            {["Story", "Menu", "Experience", "Gallery", "Location"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-brand-gold transition-colors duration-300 relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-gold transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Reservation Button */}
          <div className="hidden md:block">
            <a
              href="#reservation"
              className={`px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border overflow-hidden relative group ${
                scrolled 
                  ? "border-brand-brown text-brand-brown hover:text-brand-cream" 
                  : "border-brand-cream/30 text-brand-cream hover:text-brand-brown"
              }`}
            >
              <span className="relative z-10">Reserve a Table</span>
              <div className={`absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${
                scrolled ? "bg-brand-brown" : "bg-brand-cream"
              }`}></div>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden transition-colors duration-500 ${scrolled ? "text-brand-brown" : "text-brand-cream"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-brand-brown flex flex-col items-center justify-center p-6 lg:hidden"
          >
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-brand-gold"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col items-center space-y-8">
              {["Story", "Menu", "Experience", "Gallery", "Location"].map((item, idx) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-4xl font-serif uppercase tracking-widest text-brand-cream hover:text-brand-gold transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                href="#reservation"
                onClick={() => setMenuOpen(false)}
                className="mt-8 px-12 py-5 bg-brand-gold text-brand-brown uppercase tracking-[0.2em] text-xs font-bold"
              >
                Reserve a Table
              </motion.a>
            </div>
            
            <div className="absolute bottom-12 text-brand-gold/40 text-[10px] tracking-[0.5em] uppercase font-bold">
              The Gallery Cafe
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
