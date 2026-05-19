"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export default function Location() {
  return (
    <section id="contact" className="py-32 bg-brand-cream relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4 block"
          >
            Visit Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-brown mb-6"
          >
            Find Us in the Heart of Banjara Hills
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch min-h-[500px] lg:h-[600px]">
          {/* Map Reveal (Using a cinematic image as placeholder for map) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 relative h-[300px] lg:h-full w-full overflow-hidden group"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 opacity-80 group-hover:grayscale-0 transition-all duration-1000"></div>
            <div className="absolute inset-0 bg-brand-brown/40 group-hover:bg-brand-brown/10 transition-colors duration-1000"></div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center shadow-2xl relative"
              >
                <div className="absolute inset-0 bg-brand-gold rounded-full animate-ping opacity-30"></div>
                <MapPin className="text-brand-black" size={32} />
              </motion.div>
            </div>
          </motion.div>

          {/* Premium Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-brand-brown text-brand-cream p-12 flex flex-col justify-between h-full"
          >
            <div>
              <h3 className="text-2xl font-serif mb-8 text-brand-gold border-b border-white/10 pb-4">
                The Gallery Cafe
              </h3>
              <div className="space-y-6 font-light text-sm">
                <div>
                  <p className="mb-1 text-brand-cream/60 uppercase tracking-widest text-xs">Address</p>
                  <p className="text-lg leading-relaxed">Kalakriti Art Complex,<br/>8-2-465, Road No 4,<br/>Banjara Hills,<br/>Hyderabad 500034</p>
                </div>
                <div>
                  <p className="mb-1 text-brand-cream/60 uppercase tracking-widest text-xs">Landmarks</p>
                  <p className="text-lg">Near GVK One Mall</p>
                </div>
                <div>
                  <p className="mb-1 text-brand-cream/60 uppercase tracking-widest text-xs">Parking</p>
                  <p className="text-lg">Valet Available</p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="mt-12 flex items-center justify-center gap-3 w-full py-4 border border-brand-gold text-brand-gold uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold hover:text-brand-black transition-colors duration-300"
            >
              <Navigation size={18} />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}