"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

const greetings = [
  { lang: "Norsk", flag: "🇳🇴", file: "/audio/norsk.mp4", word: "Hei" },
  { lang: "English", flag: "🇬🇧", file: "/audio/english.mp4", word: "Hello" },
  { lang: "Español", flag: "🇪🇸", file: "/audio/espanol.mp4", word: "Hola" },
];

export default function Hero() {
  const { t } = useLanguage();
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const handlePlay = (lang: string) => {
    Object.entries(audioRefs.current).forEach(([key, el]) => {
      if (el && key !== lang) { el.pause(); el.currentTime = 0; }
    });
    const el = audioRefs.current[lang];
    if (!el) return;
    if (playing === lang) {
      el.pause(); el.currentTime = 0; setPlaying(null);
    } else {
      el.play(); setPlaying(lang);
      el.onended = () => setPlaying(null);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #050E1C 0%, #040C18 60%, #061525 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(44,95,150,0.10) 0%, transparent 65%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5", boxShadow: "0 24px 80px rgba(4,12,24,0.7)" }}>
              <Image
                src="/story/intro.jpeg"
                alt="Alejandro Pablos"
                fill
                priority
                className="object-cover object-center"
                sizes="420px"
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

            {/* Audio greetings */}
            <div>
              <p className="section-label mb-4">{t.hero.hereIs}</p>
              <div className="flex items-center gap-3 flex-wrap">
                {greetings.map(({ lang, flag, file, word }) => (
                  <div key={lang}>
                    <audio ref={(el) => { audioRefs.current[lang] = el; }} src={file} />
                    <button
                      onClick={() => handlePlay(lang)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-200 cursor-pointer"
                      style={{
                        background: playing === lang ? "rgba(44,95,150,0.16)" : "rgba(255,255,255,0.04)",
                        border: playing === lang ? "1px solid rgba(74,144,208,0.45)" : "1px solid rgba(255,255,255,0.08)",
                        boxShadow: playing === lang ? "0 0 16px rgba(44,95,150,0.2)" : "none",
                      }}
                    >
                      {/* Play / pause icon */}
                      <span
                        className="flex items-center justify-center rounded-full flex-shrink-0 transition-colors duration-200"
                        style={{
                          width: "28px",
                          height: "28px",
                          background: playing === lang ? "rgba(74,144,208,0.25)" : "rgba(74,144,208,0.12)",
                        }}
                      >
                        {playing === lang ? (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <rect x="1" y="1" width="3" height="8" rx="1" fill="#6AAEE0" />
                            <rect x="6" y="1" width="3" height="8" rx="1" fill="#6AAEE0" />
                          </svg>
                        ) : (
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M2 1.5L9 5L2 8.5V1.5Z" fill="#6AAEE0" />
                          </svg>
                        )}
                      </span>
                      <p className="text-[#D6E5F2] font-semibold text-sm">{lang}</p>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div>
              <p className="section-label mb-4">{t.hero.wantToConnect}</p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="/Alejandro_Pablos_CV_startup_2026.pdf"
                download
                className="flex items-center gap-1.5 text-xs font-medium text-[#6B7FA3] hover:text-[#8AACCA] transition-colors duration-200 underline underline-offset-4 decoration-[#4A90D030] hover:decoration-[#4A90D080]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <path d="M6 2.5h9l4.5 4.5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M15 2.5V7a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  <path d="M8.5 13h7M8.5 16.2h7M8.5 9.8h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                {t.hero.downloadCv}
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-pablos-sanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-[#6B7FA3] hover:text-[#8AACCA] transition-colors duration-200 underline underline-offset-4 decoration-[#4A90D030] hover:decoration-[#4A90D080]"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48ZM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" fill="currentColor" />
                </svg>
                {t.hero.linkedin}
              </a>
              <a
                href="mailto:alejandropablos@hotmail.es"
                className="flex items-center gap-1.5 text-xs font-medium text-[#6B7FA3] hover:text-[#8AACCA] transition-colors duration-200 underline underline-offset-4 decoration-[#4A90D030] hover:decoration-[#4A90D080]"
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
