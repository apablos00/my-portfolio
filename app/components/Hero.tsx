"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050E1C 0%, #040C18 60%, #061525 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(44,95,150,0.10) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 sm:pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[420px_1fr] gap-8 lg:gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-60 mx-auto lg:w-full lg:mx-0"
          >
            <div className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5", boxShadow: "0 24px 80px rgba(4,12,24,0.7)" }}>
              <Image
                src="/story/intro.jpeg"
                alt="Alejandro Pablos"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 240px, 420px"
              />
            </div>

          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="flex flex-col gap-7"
          >
            {/* Name */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-[#D6E5F2] mb-2">
                Alejandro<br />
                <span className="gradient-text">Pablos Sánchez</span>
              </h1>
            </div>

            {/* Personal intro */}
            <div className="max-w-xl">
              <p className="text-[#B0C8DE] text-lg leading-relaxed">
                {t.hero.intro}
              </p>
            </div>

            {/* CTAs */}
            <div>
              <p className="section-label mb-4">{t.hero.wantToConnect}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://www.linkedin.com/in/alejandro-pablos-sanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                style={{ color: "#4C9BE0", border: "1px solid #0A66C250", background: "#0A66C212" }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48ZM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" fill="#0A66C2" />
                </svg>
                {t.hero.linkedin}
              </a>
              <a
                href="mailto:alejandropablos@hotmail.es"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                style={{ color: "#6AAEE0", border: "1px solid #4A90D050", background: "#4A90D010" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M3.5 6.5 12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {t.hero.email}
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
