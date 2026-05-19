"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="reservation" className="py-32 bg-brand-brown relative overflow-hidden text-brand-cream">
      {/* Background Texture */}
      <div className="absolute inset-0 noise-bg mix-blend-overlay opacity-30"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Info */}
          <div className="flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold text-xs tracking-[0.3em] uppercase font-semibold mb-6 block"
            >
              Join Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-serif mb-10 leading-tight"
            >
              Reserve your <br />
              <span className="italic text-brand-gold">experience.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 text-brand-cream/80 font-light"
            >
              <div>
                <h4 className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2">Location</h4>
                <p>
                  The Gallery Cafe<br />
                  Kalakriti Art Complex,<br />
                  8-2-465, Road No 4,<br />
                  Banjara Hills,<br />
                  Hyderabad, Telangana 500034
                </p>
              </div>
              
              <div>
                <h4 className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2">Contact</h4>
                <p>+91 90306 16161</p>
              </div>

              <div>
                <h4 className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-2">Hours</h4>
                <p>Open daily</p>
                <p>Closes at 10 PM</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="glass-dark p-8 md:p-12 shadow-2xl relative">
              <h3 className="text-2xl font-serif mb-8 border-b border-white/10 pb-4">
                Booking Request
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full min-h-[450px] flex flex-col items-center justify-center text-center"
                >
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.2 }}
                    className="w-24 h-24 rounded-full border-2 border-brand-gold flex items-center justify-center mb-8 relative"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-[-8px] border border-brand-gold rounded-full"
                    />
                    <svg className="w-10 h-10 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </motion.div>
                  <h4 className="text-3xl font-serif text-brand-gold mb-4">Request Received</h4>
                  <p className="text-brand-cream/70 font-light max-w-xs leading-relaxed">
                    Thank you for choosing The Gallery. Our concierge will contact you shortly to finalize your reservation.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitted(false)}
                    className="mt-10 text-brand-gold text-[10px] uppercase tracking-[0.4em] font-bold border-b border-brand-gold/30 pb-1"
                  >
                    Make another request
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-brand-cream/60">Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-brand-cream/10 py-3 focus:outline-none focus:border-brand-gold transition-all duration-500 font-light placeholder:text-brand-cream/20" placeholder="Your Name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-brand-cream/60">Phone</label>
                      <input required type="tel" className="w-full bg-transparent border-b border-brand-cream/10 py-3 focus:outline-none focus:border-brand-gold transition-all duration-500 font-light placeholder:text-brand-cream/20" placeholder="Your Number" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-brand-cream/60">Date</label>
                      <input required type="date" className="w-full bg-transparent border-b border-brand-cream/10 py-3 focus:outline-none focus:border-brand-gold transition-all duration-500 font-light text-brand-cream" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-brand-cream/60">Time</label>
                      <select className="w-full bg-transparent border-b border-brand-cream/10 py-3 focus:outline-none focus:border-brand-gold transition-all duration-500 font-light appearance-none text-brand-cream">
                        <option value="" className="text-brand-black">Select Time</option>
                        <option value="12:00" className="text-brand-black">12:00 PM</option>
                        <option value="13:00" className="text-brand-black">1:00 PM</option>
                        <option value="18:00" className="text-brand-black">6:00 PM</option>
                        <option value="20:00" className="text-brand-black">8:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-brand-cream/60">Guests</label>
                      <select className="w-full bg-transparent border-b border-brand-cream/10 py-3 focus:outline-none focus:border-brand-gold transition-all duration-500 font-light appearance-none text-brand-cream">
                        <option value="2" className="text-brand-black">2 People</option>
                        <option value="3" className="text-brand-black">3 People</option>
                        <option value="4" className="text-brand-black">4 People</option>
                        <option value="5+" className="text-brand-black">5+ People</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-brand-cream/60">Occasion</label>
                      <select className="w-full bg-transparent border-b border-brand-cream/10 py-3 focus:outline-none focus:border-brand-gold transition-all duration-500 font-light appearance-none text-brand-cream">
                        <option value="casual" className="text-brand-black">Casual</option>
                        <option value="date" className="text-brand-black">Date</option>
                        <option value="work" className="text-brand-black">Work Meeting</option>
                        <option value="celebration" className="text-brand-black">Celebration</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full bg-brand-gold text-brand-black py-4 uppercase tracking-widest font-semibold hover:bg-brand-cream transition-colors duration-300"
                    >
                      Confirm Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}