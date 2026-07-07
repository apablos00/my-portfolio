"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const chapters = [
  {
    year: "Madrid · childhood",
    location: "Spain",
    flag: "🇪🇸",
    title: "Grew up curious",
    caption: "Raised in Madrid. Always pulling things apart to see how they worked: computers, people, ideas. The Segovia aqueduct was a day trip. Engineering was eventually inevitable.",
    photo: "/story/childhood.jpeg",
    photoPosition: "object-top",
    norway: false,
    accent: "#C4845A",
  },
  {
    year: "2018–2022",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    title: "BSc Computer Engineering · UC3M",
    caption: "Four years building the technical foundation. The degree was conducted entirely in English, which mattered more than I expected. I learned to think in a second language and in code.",
    photo: "/story/madrid-uni.jpeg",
    photoPosition: "object-center",
    norway: false,
    accent: "#7A9EC0",
  },
  {
    year: "2021–2022",
    location: "Trondheim, Norway",
    flag: "🇳🇴",
    title: "Erasmus+ at NTNU: Norway changed everything",
    caption: "One year that genuinely rewired how I see the world. I celebrated 17 mai on the bridge, hiked in -25°C, and worked with people from 30 countries. I came back a different person.",
    photo: "/story/ntnu-17may.jpeg",
    photoPosition: "object-top",
    norway: true,
    accent: "#4A90D0",
    extra: {
      label: "First Norway connection · NTNU Trondheim",
      photos: ["/story/ntnu-campus.jpeg", "/story/norway-mountains.jpeg"],
    },
  },
  {
    year: "2022–2025",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    title: "MSc Applied AI · Research · Consulting",
    caption: "Finished the computer vision thesis at ITP Aero (10/10 with Honors), then spent 18 months consulting on data platforms for banks and insurers. Learned that technical quality and client trust are different things.",
    photo: "/story/spain-coast.jpeg",
    photoPosition: "object-top",
    norway: false,
    accent: "#7A9EC0",
  },
  {
    year: "2025 →",
    location: "Oslo, Norway",
    flag: "🇳🇴",
    title: "MSc Entrepreneurship · UiO · Oslo",
    caption: "I chose to come back. Oslo feels like the right place to build. People are direct, ambition is quiet and the startup scene is serious. I'm at UiO and advising startups at iHub and StartupLab.",
    photo: "/story/oslo-now.jpeg",
    photoPosition: "object-top",
    norway: true,
    accent: "#6AAEE0",
    current: true,
    extra: {
      label: "Back in Norway · Oslo · Now",
      photos: [],
    },
  },
];

const hobbies = [
  { icon: "🏔️", label: "Hiking & Friluftsliv", desc: "Fjords, mountains, and Norwegian nature" },
  { icon: "⚽", label: "Football", desc: "Barça fan, been to Rosenborg games in Norway" },
  { icon: "✈️", label: "Travel", desc: "Morocco, Portugal, Lofoten, across Europe" },
  { icon: "🧑‍🏫", label: "Teaching", desc: "10+ years mentoring students" },
  { icon: "📚", label: "Business & Tech books", desc: "Zero to One, Thinking Fast and Slow..." },
  { icon: "🎵", label: "Music & culture", desc: "Spanish roots, Nordic influences" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="life" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 80% 30%, rgba(96,165,250,0.03) 0%, transparent 60%)" }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Deep dive</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E8F0FE] mb-4">
            My Life in<br /><span className="gradient-text">Pictures</span>
          </h2>
          <p className="text-[#6B7FA3] max-w-xl text-base leading-relaxed">
            For those who want to go beyond the CV, a brief visual journey from Madrid to Oslo.
          </p>
        </motion.div>

        {/* Photo timeline */}
        <div className="relative">
          {/* Spine */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #C4845A, #7A9EC0 35%, #4A90D0 65%, #6AAEE0 100%)" }}
          />

          <div className="flex flex-col gap-0">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.year}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className={`relative sm:pl-10 pb-10 ${ch.norway ? "sm:pl-8" : ""}`}
              >
                {/* Spine dot */}
                <div
                  className="absolute hidden sm:block left-[-5px] top-6 w-2.5 h-2.5 rounded-full border-2 z-10"
                  style={{
                    borderColor: ch.accent,
                    background: "#040B16",
                    boxShadow: ch.norway ? `0 0 16px ${ch.accent}` : `0 0 8px ${ch.accent}60`,
                  }}
                />

                {ch.norway ? (
                  /* ── Norway featured chapter ── */
                  <div
                    className="rounded-2xl overflow-hidden relative"
                    style={{ border: `1px solid ${ch.accent}40`, boxShadow: `0 0 40px ${ch.accent}15` }}
                  >
                    {/* Header strip */}
                    <div
                      className="flex items-center justify-between px-5 py-3"
                      style={{ background: `${ch.accent}12`, borderBottom: `1px solid ${ch.accent}25` }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{ch.flag}</span>
                        <div>
                          <span
                            className="text-[10px] font-bold tracking-widest uppercase"
                            style={{ color: ch.accent }}
                          >
                            {ch.extra?.label}
                          </span>
                          <p className="text-xs text-[#6B7FA3]">{ch.location} · {ch.year}</p>
                        </div>
                      </div>
                      {ch.current && (
                        <span
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
                          style={{ background: "rgba(44,95,150,0.14)", border: "1px solid rgba(74,144,208,0.28)", color: "#6AAEE0" }}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D0] animate-pulse" />
                          Now
                        </span>
                      )}
                    </div>

                    {/* Main photo */}
                    <div className="relative h-64 sm:h-80">
                      <Image
                        src={ch.photo}
                        alt={ch.title}
                        fill
                        className={`object-cover ${ch.photoPosition}`}
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(4,11,22,0.85) 0%, rgba(4,11,22,0.1) 50%, transparent 100%)" }}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="font-bold text-white text-lg leading-tight mb-1.5">{ch.title}</h3>
                        <p className="text-[rgba(255,255,255,0.72)] text-sm leading-relaxed">{ch.caption}</p>
                      </div>
                    </div>

                    {/* Extra photos row */}
                    {ch.extra && ch.extra.photos.length > 0 && (
                      <div className="grid grid-cols-2 gap-px">
                        {ch.extra.photos.map((src, pi) => (
                          <div key={pi} className="relative h-40">
                            <Image
                              src={src}
                              alt=""
                              fill
                              className="object-cover object-center"
                              sizes="400px"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  /* ── Standard chapter ── */
                  <div className="flex gap-4 sm:gap-6">
                    {/* Photo thumbnail */}
                    <div
                      className="relative flex-shrink-0 rounded-xl overflow-hidden"
                      style={{ width: "110px", height: "140px" }}
                    >
                      <Image
                        src={ch.photo}
                        alt={ch.title}
                        fill
                        className={`object-cover ${ch.photoPosition}`}
                        sizes="110px"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col justify-center gap-1.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-bold tracking-widest uppercase"
                          style={{ color: ch.accent }}
                        >
                          {ch.year}
                        </span>
                        <span className="text-sm">{ch.flag}</span>
                        <span className="text-xs text-[#6B7FA3]">{ch.location}</span>
                      </div>
                      <h3 className="font-bold text-[#E8F0FE] text-base leading-tight">{ch.title}</h3>
                      <p className="text-[#6B7FA3] text-sm leading-snug">{ch.caption}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="section-label mb-6">Beyond work</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {hobbies.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.07 }}
                className="rounded-xl p-4"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-2xl block mb-2">{h.icon}</span>
                <p className="text-[#E8F0FE] text-sm font-semibold leading-tight mb-1">{h.label}</p>
                <p className="text-[#6B7FA3] text-xs leading-snug">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
