"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Story() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const img1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const img2Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="py-32 relative bg-brand-cream overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Images */}
          <div className="lg:col-span-7 relative h-[450px] sm:h-[600px] md:h-[800px]">
            <motion.div
              style={{ y: img1Y }}
              className="absolute top-0 left-0 w-[85%] sm:w-3/4 h-[75%] z-10 shadow-2xl"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=2000&auto=format&fit=crop"
                  alt="Cafe Interior"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-brown/10 mix-blend-overlay"></div>
              </div>
            </motion.div>

            <motion.div
              style={{ y: img2Y }}
              className="absolute bottom-0 right-0 w-3/5 sm:w-1/2 h-[55%] z-20 shadow-xl border-4 sm:border-8 border-brand-cream"
            >
              <div className="relative w-full h-full overflow-hidden bg-brand-beige">
                <Image
                  src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2000&auto=format&fit=crop"
                  alt="Coffee Pour"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="text-brand-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-brown mb-8 leading-tight">
                A canvas for <br />
                <span className="italic font-light">conversations.</span>
              </h2>
              
              <div className="space-y-6 text-brand-brown/80 font-sans text-lg font-light leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  The Gallery Cafe is an artistic haven nestled inside the
                  prestigious <span className="font-medium text-brand-brown">Kalakriti Art Complex</span> in Banjara Hills, Hyderabad.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  More than just a destination for specialty coffee, we are a place
                  where creativity, conversations, and culture blend seamlessly.
                  Every corner is designed to inspire, whether you are admiring contemporary
                  art pieces or savoring our handcrafted artisanal menu.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <a
                  href="#gallery"
                  className="inline-flex items-center gap-4 group"
                >
                  <span className="text-brand-brown uppercase tracking-widest text-sm font-semibold group-hover:text-brand-gold transition-colors duration-300">
                    Discover the Gallery
                  </span>
                  <div className="w-12 h-[1px] bg-brand-brown group-hover:w-20 group-hover:bg-brand-gold transition-all duration-500"></div>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-beige rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-beige rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2 z-0"></div>
    </section>
  );
}