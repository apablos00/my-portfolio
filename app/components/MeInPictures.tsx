"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const chapters = [
  {
    year: "2025 –",
    location: "Oslo, Norway",
    title: "MSc Entrepreneurship · UiO · Oslo",
    caption: "I chose to come back. Oslo feels like the right place to build. People are direct, ambition is quiet and the startup scene is serious. I'm at UiO and advising startups at iHub and StartupLab.",
    photo: "/story/back-in-norway.jpeg",
    photoPosition: "object-center",
    photoFit: "object-contain",
    norway: true,
    accent: "#6AAEE0",
    current: true,
    extra: {
      label: "Back in Norway · Oslo · Now",
      photos: [],
    },
  },
  {
    year: "2022–2025",
    location: "Madrid, Spain",
    title: "MSc Applied AI · Research · Consulting",
    caption: "Finished the computer vision thesis at ITP Aero (10/10 with Honors), then spent 18 months consulting on data platforms for banks and insurers. Learned that technical quality and client trust are different things.",
    photo: "/story/master-ai.jpeg",
    photoPosition: "object-top",
    norway: false,
    accent: "#7A9EC0",
  },
  {
    year: "2021–2022",
    location: "Trondheim, Norway",
    title: "Erasmus+ at NTNU: Norway changed everything",
    caption: "One year that genuinely rewired how I see the world. I celebrated 17 mai on the bridge, hiked in -25°C, and worked with people from 30 countries. I came back a different person.",
    photo: "/story/ntnu-17may.jpeg",
    photoPosition: "object-top",
    norway: true,
    accent: "#4A90D0",
    current: false,
    extra: {
      label: "First Norway connection · NTNU Trondheim",
      photos: ["/story/ntnu-campus.jpeg", "/story/norway-mountains.jpeg"],
    },
  },
  {
    year: "2018–2022",
    location: "Madrid, Spain",
    title: "BSc Computer Engineering · UC3M",
    caption: "Four years building the technical foundation. The degree was conducted entirely in English, which mattered more than I expected. I learned to think in a second language and in code.",
    photo: "/story/madrid-uni.jpeg",
    photoPosition: "object-center",
    norway: false,
    accent: "#7A9EC0",
  },
  {
    year: "Madrid · childhood",
    location: "Spain",
    title: "Grew up curious",
    caption: "Raised in Madrid. Always pulling things apart to see how they worked: computers, people, ideas. The Segovia aqueduct was a day trip. Engineering was eventually inevitable.",
    photo: "/story/childhood.jpeg",
    photoPosition: "object-top",
    norway: false,
    accent: "#C4845A",
  },
];


export default function MeInPictures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="me-in-pictures" className="py-24 px-6 relative" ref={ref}>
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
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E8F0FE] mb-4">
            My timeline
          </h2>
        </motion.div>

        {/* Photo timeline */}
        <div className="relative">
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
                <div
                  className="absolute hidden sm:block left-[-5px] top-6 w-2.5 h-2.5 rounded-full border-2 z-10"
                  style={{
                    borderColor: ch.accent,
                    background: "#040B16",
                    boxShadow: ch.norway ? `0 0 16px ${ch.accent}` : `0 0 8px ${ch.accent}60`,
                  }}
                />

                {ch.norway ? (
                  <div
                    className="rounded-2xl overflow-hidden relative"
                    style={{
                      border: `1px solid ${ch.accent}40`,
                      boxShadow: `0 0 40px ${ch.accent}15`,
                    }}
                  >
                    <div
                      className="flex items-center justify-between px-5 py-3"
                      style={{ background: `${ch.accent}12`, borderBottom: `1px solid ${ch.accent}25` }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div>
                          <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ch.accent }}>
                            {ch.extra?.label}
                          </span>
                          <p className="text-xs text-[#6B7FA3]">{ch.location} · {ch.year}</p>
                        </div>
                      </div>
                      {ch.current && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "#6AAEE0" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D0] animate-pulse" />
                          Now
                        </span>
                      )}
                    </div>

                    {(!ch.extra || ch.extra.photos.length === 0) && (
                      <div className="flex">
                        <div className="relative flex-shrink-0" style={{ width: "160px", aspectRatio: "4/5" }}>
                          <Image
                            src={ch.photo}
                            alt={ch.title}
                            fill
                            className={`${(ch as {photoFit?: string}).photoFit ?? "object-cover"} ${ch.photoPosition}`}
                            sizes="160px"
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-2 p-5 flex-1">
                          <h3 className="font-bold text-[#E8F0FE] text-base leading-tight">{ch.title}</h3>
                          <p className="text-[#6B7FA3] text-sm leading-relaxed">{ch.caption}</p>
                        </div>
                      </div>
                    )}

                    {ch.extra && ch.extra.photos.length > 0 && (
                      <>
                        <div className="px-5 py-4" style={{ borderBottom: `1px solid ${ch.accent}15` }}>
                          <h3 className="font-bold text-[#E8F0FE] text-base leading-tight mb-2">{ch.title}</h3>
                          <p className="text-[#6B7FA3] text-sm leading-relaxed">{ch.caption}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-px">
                          {ch.extra.photos.map((src, pi) => (
                            <div key={pi} className="relative aspect-[4/3]">
                              <Image src={src} alt="" fill className="object-cover object-center" sizes="400px" />
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex gap-4 sm:gap-6">
                    <div className="relative flex-shrink-0 rounded-xl overflow-hidden" style={{ width: "110px", height: "140px" }}>
                      <Image src={ch.photo} alt={ch.title} fill className={`object-cover ${ch.photoPosition}`} sizes="110px" />
                    </div>
                    <div className="flex flex-col justify-center gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ch.accent }}>{ch.year}</span>
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

        {/* Fun facts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="section-label mb-6">Fun facts</p>
          <div className="flex flex-col gap-3">
            {[
              "Even though I was born and raised in Madrid, I am the biggest Barça fan.",
              "My right foot fingers do not follow the standard sizing pattern.",
              "I had my wallet stolen on my Interrail trip the moment I arrived in Brussels.",
            ].map((fact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                className="flex items-start gap-3"
              >
                <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0 bg-[#4A90D0]" />
                <p className="text-[#8AACCA] text-sm leading-relaxed">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
