"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Twitter = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-cream relative overflow-hidden pt-40 pb-12">
      {/* Animated Texture Overlay */}
      <div className="absolute inset-0 noise-bg mix-blend-overlay opacity-30"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-serif tracking-[0.2em] text-brand-gold font-bold uppercase mb-8">
              The <span className="italic font-light">Gallery</span>
            </h2>
            <p className="text-brand-cream/50 font-light text-sm leading-relaxed mb-10 max-w-xs">
              A premium artistic sanctuary where handcrafted flavors, artisan soul, and creative sparks ignite.
            </p>
            <div className="flex gap-6">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-brand-cream/40 hover:text-brand-gold transition-all duration-500 transform hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-10">Experience</h4>
            <ul className="space-y-6 font-bold text-[10px] text-brand-cream/40 uppercase tracking-[0.3em]">
              {["Story", "Menu", "Experience", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-brand-gold transition-all duration-500 flex items-center gap-4 group">
                    <span className="w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-8"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours & Contact */}
          <div>
            <h4 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-10">Connect</h4>
            <div className="space-y-8 font-light text-sm text-brand-cream/50">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-cream/30 mb-2">Location</p>
                <p className="text-brand-cream leading-relaxed">Kalakriti Art Complex,<br/>Road No 4, Banjara Hills,<br/>Hyderabad 500034</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-cream/30 mb-2">Reservations</p>
                <p className="text-brand-gold text-lg font-serif italic">+91 90306 16161</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-10">Journal</h4>
            <p className="text-brand-cream/50 font-light text-sm leading-relaxed mb-8">
              Join our exclusive circle for exhibition previews and seasonal tastings.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-transparent border-b border-brand-cream/10 py-4 pr-12 focus:outline-none focus:border-brand-gold transition-all duration-700 font-bold text-[10px] tracking-[0.3em] text-brand-cream placeholder-brand-cream/20"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 text-brand-gold hover:text-brand-cream transition-all duration-500"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Big Decorative Text */}
        <div className="relative mb-20 overflow-hidden py-10">
          <motion.h2 
            initial={{ y: "120%", skewY: 10 }}
            whileInView={{ y: 0, skewY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15vw] font-serif font-bold text-white/[0.03] leading-none whitespace-nowrap text-center select-none"
          >
            THE GALLERY CAFE
          </motion.h2>
        </div>

        {/* Footer Bottom */}
        <div className="pt-12 border-t border-brand-cream/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-bold text-brand-cream/20 tracking-[0.5em] uppercase">
          <p>&copy; {new Date().getFullYear()} The Gallery Cafe</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-brand-gold transition-colors duration-500">Privacy</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-500">Terms</a>
            <a href="#" className="hover:text-brand-gold transition-colors duration-500">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
