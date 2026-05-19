"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Art lovers will truly appreciate this place. The ambience is as crafted as their coffee.",
    author: "Rohan D.",
    role: "Local Guide",
  },
  {
    text: "Perfect ambience for coffee and deep conversations. The aesthetic is unmatched in Banjara Hills.",
    author: "Priya S.",
    role: "Art Curator",
  },
  {
    text: "A relaxed atmosphere with phenomenal food. The Paneer Tikka Pizza was an unexpected masterpiece.",
    author: "Vikram M.",
    role: "Food Blogger",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-brand-beige relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < 4 ? "text-brand-gold fill-brand-gold" : "text-brand-gold/30 fill-brand-gold/30"}
              />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-brand-brown mb-4"
          >
            Words from our Guests
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-brown/60 uppercase tracking-widest text-sm font-semibold"
          >
            4.2 Rating • 2181+ Reviews
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-brand-cream p-10 shadow-lg border border-brand-brown/5 relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-brand-gold text-4xl font-serif leading-none absolute top-6 left-6 opacity-20 group-hover:opacity-40 transition-opacity">
                &quot;
              </div>
              <p className="text-brand-brown/80 font-serif text-xl leading-relaxed relative z-10 mb-8 italic">
                {test.text}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-brown flex items-center justify-center text-brand-cream font-serif text-lg">
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-brand-brown font-semibold text-sm uppercase tracking-wider">
                    {test.author}
                  </h4>
                  <span className="text-brand-brown/50 text-xs uppercase tracking-widest">
                    {test.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}