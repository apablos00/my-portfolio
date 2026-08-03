"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = heroRef.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: px * 10, y: -py * 10 });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative overflow-hidden px-6 md:px-12 pt-16 md:pt-24 pb-20"
      style={{ background: "var(--ink)", color: "#F4F6F8" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(244,246,248,0.025) 0px, rgba(244,246,248,0.025) 1px, transparent 1px, transparent 5px)",
        }}
      />
      <div
        className="absolute pointer-events-none select-none font-display font-bold whitespace-nowrap hidden md:block"
        style={{
          top: "-9%",
          right: "-1%",
          fontSize: "min(26vw, 380px)",
          lineHeight: 1,
          color: "#F4F6F8",
          opacity: 0.08,
        }}
      >
        AP
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center relative z-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-9 h-[3px] mb-6"
            style={{ background: "var(--accent-light)" }}
          />
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-display font-bold text-[44px] sm:text-[58px] lg:text-[78px] leading-[1.02] mb-7"
            style={{ letterSpacing: "-0.01em" }}
          >
            Business observer.
            <br />
            <span style={{ color: "var(--accent-light)" }}>AI product builder.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
            className="text-lg sm:text-xl font-semibold leading-snug max-w-xl mb-3.5"
            style={{ color: "#F4F6F8" }}
          >
            Two years of consulting taught me technology means nothing without the business behind it.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="text-base sm:text-[17px] leading-relaxed max-w-md mb-9"
            style={{ color: "rgba(244,246,248,0.62)" }}
          >
            I&apos;m now studying at that intersection, and looking for roles that sit there too.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
          >
            <a
              href="#contact"
              className="inline-block font-bold text-[13px] uppercase no-underline px-7 py-3.5 rounded-sm transition-colors duration-200 hover:bg-[#F4F6F8] hover:text-[var(--ink)]"
              style={{ color: "#F4F6F8", letterSpacing: "0.06em", border: "1.5px solid #F4F6F8" }}
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <div style={{ perspective: "1200px" }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="relative w-60 mx-auto lg:w-full lg:mx-0"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: "transform .35s cubic-bezier(.16,1,.3,1)",
            }}
          >
            <div
              className="absolute rounded-2xl"
              style={{ inset: "14px -14px -14px 14px", border: "1.5px solid var(--accent-light)", opacity: 0.5 }}
            />
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", boxShadow: "0 30px 70px rgba(0,0,0,0.45)" }}>
              <Image
                src="/story/intro.jpeg"
                alt="Alejandro Pablos"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 240px, 480px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
