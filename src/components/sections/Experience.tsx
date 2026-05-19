"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    title: "Art Gallery Vibes",
    desc: "Immerse yourself in contemporary art while enjoying your coffee.",
    image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 row-span-2",
    category: "Atmosphere"
  },
  {
    title: "Creative Work Sessions",
    desc: "Inspiring corners designed for productivity.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    category: "Space"
  },
  {
    title: "Perfect for Dates",
    desc: "Intimate seating and warm lighting for romantic evenings.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1",
    category: "Evening"
  },
  {
    title: "Coffee Conversations",
    desc: "A relaxed atmosphere perfect for catching up with friends.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2",
    category: "Social"
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-brand-gold"></div>
              <span className="text-brand-gold text-[10px] tracking-[0.5em] uppercase font-bold">
                The Atmosphere
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-serif text-brand-brown leading-tight"
            >
              Beyond the <br />
              <span className="italic text-brand-gold">Ordinary Cafe</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-brand-brown/60 text-lg font-light max-w-sm leading-relaxed"
          >
            A curated environment where every corner is a canvas, every aroma a story, and every visit an inspiration.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[350px] gap-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden bg-brand-brown ${exp.span}`}
            >
              <Image
                src={exp.image}
                alt={exp.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>

              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <motion.span
                  className="text-brand-gold text-[10px] tracking-[0.4em] uppercase font-bold mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
                >
                  {exp.category}
                </motion.span>
                <h3 className="text-3xl md:text-4xl font-serif text-brand-cream mb-4 transition-transform duration-500 group-hover:-translate-y-2">
                  {exp.title}
                </h3>
                <div className="h-[1px] w-0 bg-brand-gold group-hover:w-full transition-all duration-700 mb-4"></div>
                <p className="text-brand-cream/60 font-light text-sm opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 max-w-xs">
                  {exp.desc}
                </p>
              </div>

              <div className="absolute inset-4 border border-brand-gold/0 group-hover:border-brand-gold/20 transition-all duration-1000 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
