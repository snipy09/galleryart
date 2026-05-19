"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Menu from "@/components/sections/Menu";
import Experience from "@/components/sections/Experience";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Reservation from "@/components/sections/Reservation";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Basic setup if needed, Lenis handles smooth scrolling
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen selection:bg-brand-gold selection:text-brand-brown">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <Navbar />
            <Hero />
            <Story />
            <Menu />
            <Experience />
            <Gallery />
            <Testimonials />
            <Reservation />
            <Location />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
