"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Use quickTo for smoother performance
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    const fxTo = gsap.quickTo(follower, "x", { duration: 0.5, ease: "power3" });
    const fyTo = gsap.quickTo(follower, "y", { duration: 0.5, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    const onMouseDown = () => {
      gsap.to([cursor, follower], {
        scale: 0.8,
        duration: 0.2,
      });
    };

    const onMouseUp = () => {
      gsap.to([cursor, follower], {
        scale: 1,
        duration: 0.2,
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName === "A" || target.closest("a");
      const isButton = target.tagName === "BUTTON" || target.closest("button");
      const isGallery = target.closest("#gallery .group");
      const isMenu = target.closest("#menu .group");

      if (isLink || isButton || isMenu) {
        gsap.to(follower, {
          scale: 2.5,
          backgroundColor: "rgba(197, 160, 89, 0.1)",
          borderColor: "rgba(197, 160, 89, 0.4)",
          duration: 0.3,
        });
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 0,
          duration: 0.3,
        });
      }

      if (isGallery) {
        setCursorText("VIEW");
        gsap.to(follower, {
          scale: 4,
          backgroundColor: "#C5A059",
          borderColor: "#C5A059",
          duration: 0.4,
          ease: "back.out(1.7)",
        });
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = () => {
      setCursorText("");
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(197, 160, 89, 0.3)",
        duration: 0.3,
      });
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        backgroundColor: "#C5A059",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-brand-gold rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-brand-gold/30 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence>
          {cursorText && (
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="text-[8px] font-bold text-brand-brown tracking-widest"
            >
              {cursorText}
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
