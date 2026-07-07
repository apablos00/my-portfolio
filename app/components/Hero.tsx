"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const greetings = [
  { lang: "Norsk", flag: "🇳🇴", file: "/audio/norsk.mp4", word: "Hei" },
  { lang: "English", flag: "🇬🇧", file: "/audio/english.mp4", word: "Hello" },
  { lang: "Español", flag: "🇪🇸", file: "/audio/espanol.mp4", word: "Hola" },
];

export default function Hero() {
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
            <div className="space-y-3 max-w-xl">
              <p className="text-[#B0C8DE] text-lg leading-relaxed">
                I'm Alejandro, from Madrid, Spain. Since high school I've been passionate
                about maths and sciences, which led me to build a strong background in
                Computer Science and AI, and to spend two years working as a Data and IT Consultant.
              </p>
              <p className="text-[#7A95AE] text-base leading-relaxed">
                Now I'm building the business side of my career at the intersection of
                technology and entrepreneurship, here in Oslo. Outside of work, I'm a
                passionate traveller, into sports, international cuisine and fashion.
              </p>
            </div>

            {/* Audio greetings */}
            <div>
              <p className="section-label mb-4">Here&apos;s Alejandro</p>
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
              <p className="section-label mb-4">Want to know more or reach out?</p>
            <div className="flex items-center gap-5 flex-wrap">
              <a
                href="/Alejandro_Pablos_CV_startup_2026.pdf"
                download
                className="text-xs font-medium text-[#6B7FA3] hover:text-[#8AACCA] transition-colors duration-200 underline underline-offset-4 decoration-[#4A90D030] hover:decoration-[#4A90D080]"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/alejandro-pablos-sanchez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-[#6B7FA3] hover:text-[#8AACCA] transition-colors duration-200 underline underline-offset-4 decoration-[#4A90D030] hover:decoration-[#4A90D080]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:alejandropablos@hotmail.es"
                className="text-xs font-medium text-[#6B7FA3] hover:text-[#8AACCA] transition-colors duration-200 underline underline-offset-4 decoration-[#4A90D030] hover:decoration-[#4A90D080]"
              >
                Email
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
