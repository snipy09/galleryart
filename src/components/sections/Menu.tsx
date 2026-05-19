"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["Coffee & Beverages", "Main Food", "Desserts"];

type MenuItem = {
  name: string;
  price: string;
  desc: string;
  image: string;
  highlight?: boolean;
};

const menuData: Record<string, MenuItem[]> = {
  "Coffee & Beverages": [
    { name: "Espresso", price: "₹200", desc: "Intense, robust single shot", image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=800&auto=format&fit=crop" },
    { name: "Café Mocha", price: "₹280", desc: "Espresso, cocoa, steamed milk", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=800&auto=format&fit=crop", highlight: true },
    { name: "Irish Coffee", price: "₹350", desc: "Premium roast, irish cream, whipped top", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop" },
    { name: "Organic Teas", price: "₹220", desc: "Hand-plucked artisanal blends", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=800&auto=format&fit=crop" },
  ],
  "Main Food": [
    { name: "Paneer Tikka Pizza", price: "₹450", desc: "Wood-fired, rich spices", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
    { name: "White Sauce Pasta", price: "₹380", desc: "Creamy alfredo, parmesan, herbs", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop", highlight: true },
    { name: "Lasagna", price: "₹420", desc: "Layered perfection, house marinara", image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=800&auto=format&fit=crop" },
    { name: "Gourmet Salads", price: "₹320", desc: "Fresh greens, exotic vinaigrette", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
  ],
  "Desserts": [
    { name: "Premium Cheesecake", price: "₹350", desc: "New York style, berry compote", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop", highlight: true },
    { name: "Dark Chocolate Brownie", price: "₹280", desc: "Warm, fudgy, vanilla bean ice cream", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=800&auto=format&fit=crop" },
    { name: "Artisanal Cakes", price: "₹300", desc: "Daily selection of handcrafted slices", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop" },
    { name: "Ice Cream Sundaes", price: "₹250", desc: "Classic flavors, rich toppings", image: "https://images.unsplash.com/photo-1563805042-7684c8a9e9cb?q=80&w=800&auto=format&fit=crop" },
  ],
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      id="menu" 
      className="py-32 bg-brand-black text-brand-cream relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 noise-bg mix-blend-overlay opacity-20"></div>

      {/* Floating Image Preview */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x - 150,
              y: mousePos.y - 150
            }}
            exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
            transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.5 }}
            className="fixed top-0 left-0 w-64 h-64 z-[60] pointer-events-none rounded-2xl overflow-hidden border-4 border-brand-gold shadow-2xl hidden lg:block"
          >
            <Image
              src={hoveredItem.image}
              alt={hoveredItem.name}
              fill
              sizes="256px"
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4 block"
          >
            Culinary Canvas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif mb-6"
          >
            The Collection
          </motion.h2>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="relative text-sm md:text-base uppercase tracking-widest font-medium px-4 py-2 transition-colors duration-300"
            >
              <span className={`relative z-10 ${activeTab === cat ? "text-brand-brown" : "text-brand-cream hover:text-brand-gold"}`}>
                {cat}
              </span>
              {activeTab === cat && (
                <motion.div
                  layoutId="menu-tab"
                  className="absolute inset-0 bg-brand-gold rounded-full"
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[600px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12"
            >
              {menuData[activeTab as keyof typeof menuData].map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.8 }}
                  className="group relative flex items-center gap-6 cursor-pointer"
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Static Image (Always visible on mobile, fades on desktop hover) */}
                  <motion.div
                    animate={{ 
                      scale: hoveredItem?.name === item.name ? 1.1 : 1,
                      opacity: hoveredItem?.name === item.name ? 0.3 : 0.8 
                    }}
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border border-brand-gold/20"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 768px) 96px, 128px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex items-end justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-serif text-brand-cream group-hover:text-brand-gold transition-colors duration-300">
                        {item.name}
                      </h3>
                      <div className="hidden md:block flex-1 border-b border-brand-cream/20 mx-4 mb-2 border-dashed relative top-[-4px]"></div>
                      <span className="text-lg font-sans font-medium text-brand-gold shrink-0">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-brand-cream/60 font-light text-sm md:text-base">
                      {item.desc}
                    </p>
                    {item.highlight && (
                      <span className="inline-block mt-2 text-[10px] uppercase tracking-widest text-brand-black bg-brand-gold px-2 py-1 font-bold">
                        Chef&apos;s Pick
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Full Menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="#"
            className="inline-block px-10 py-4 border border-brand-gold text-brand-gold uppercase tracking-widest text-sm font-semibold hover:bg-brand-gold hover:text-brand-black transition-all duration-300"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}