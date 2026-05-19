"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-2", alt: "Coffee Pour" },
  { src: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop", span: "col-span-2 row-span-1", alt: "Cafe Interior" },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", alt: "Art Display" },
  { src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-2", alt: "Dessert" },
  { src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop", span: "col-span-2 row-span-2", alt: "Ambience" },
  { src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop", span: "col-span-1 row-span-1", alt: "Coffee Cup" },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Decorative noise/grain */}
      <div className="absolute inset-0 noise-bg opacity-10 pointer-events-none"></div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-brand-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-10 right-10 text-brand-gold hover:text-brand-cream z-[210] p-4 bg-white/5 rounded-full"
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            <motion.div
              layoutId={selectedImg}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Gallery Preview"
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 border border-brand-gold/30 rounded-full flex items-center justify-center mb-8"
          >
            <div className="w-2 h-2 bg-brand-gold rounded-full animate-pulse"></div>
          </motion.div>
          
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold mb-6"
          >
            Visual Journey
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-brand-cream mb-8"
          >
            A Glimpse of <span className="italic font-light opacity-80">Our World</span>
          </motion.h2>
          
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4 md:gap-6">
          {galleryImages.map((image, idx) => (
            <motion.div
              key={idx}
              layoutId={image.src}
              onClick={() => setSelectedImg(image.src)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden ${image.span} bg-brand-brown-light cursor-none`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
              />
              
              <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-brown"
                >
                  <Plus size={32} strokeWidth={1} />
                </motion.div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-brand-black/80 to-transparent">
                <span className="text-brand-cream text-[10px] tracking-widest uppercase font-bold">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-4 text-brand-gold hover:text-brand-cream transition-colors duration-500 group"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Follow Our Story on Instagram</span>
            <div className="w-8 h-[1px] bg-brand-gold group-hover:w-16 transition-all duration-500"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
