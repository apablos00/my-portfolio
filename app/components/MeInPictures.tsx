"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";

const chapters = [
  {
    id: "oslo" as const,
    year: "2025 –",
    photo: "/story/back-in-norway.jpeg",
    photoPosition: "object-center",
    photoFit: "object-contain",
    norway: true,
    accent: "#4A90D0",
    current: true,
    photos: [] as string[],
  },
  {
    id: "madridConsulting" as const,
    year: "2022–2025",
    photo: "/story/master-ai.jpeg",
    photoPosition: "object-top",
    norway: false,
    accent: "#C4845A",
    photos: [] as string[],
  },
  {
    id: "trondheim" as const,
    year: "2021–2022",
    photo: "/story/ntnu-17may.jpeg",
    photoPosition: "object-top",
    norway: true,
    accent: "#4ECDC4",
    current: false,
    photos: ["/story/ntnu-campus.jpeg", "/story/norway-mountains.jpeg"],
  },
  {
    id: "bsc" as const,
    year: "2018–2022",
    photo: "/story/madrid-uni.jpeg",
    photoPosition: "object-center",
    norway: false,
    accent: "#C4845A",
    photos: [] as string[],
  },
  {
    id: "childhood" as const,
    year: "Madrid · childhood",
    photo: "/story/childhood.jpeg",
    photoPosition: "object-top",
    norway: false,
    accent: "#C4845A",
    photos: [] as string[],
  },
];


export default function MeInPictures() {
  const { t } = useLanguage();
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
            {t.meInPictures.heading}
          </h2>
        </motion.div>

        {/* Photo timeline */}
        <div className="relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #4A90D0, #C4845A 30%, #4ECDC4 55%, #C4845A 80%, #C4845A 100%)" }}
          />

          <div className="flex flex-col gap-0">
            {chapters.map((ch, i) => {
              const chapterT = t.meInPictures.chapters[ch.id];
              const photos = ch.photos;
              return (
              <motion.div
                key={ch.id}
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
                            {chapterT.extraLabel}
                          </span>
                          <p className="text-xs text-[#6B7FA3]">{chapterT.location} · {ch.year}</p>
                        </div>
                      </div>
                      {ch.current && (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold" style={{ color: "#6AAEE0" }}>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D0] animate-pulse" />
                          {t.meInPictures.now}
                        </span>
                      )}
                    </div>

                    {photos.length === 0 && (
                      <div className="flex">
                        <div className="relative flex-shrink-0" style={{ width: "160px", aspectRatio: "4/5" }}>
                          <Image
                            src={ch.photo}
                            alt={chapterT.title}
                            fill
                            className={`${(ch as {photoFit?: string}).photoFit ?? "object-cover"} ${ch.photoPosition}`}
                            sizes="160px"
                          />
                        </div>
                        <div className="flex flex-col justify-center gap-2 p-5 flex-1">
                          <h3 className="font-bold text-[#E8F0FE] text-base leading-tight">{chapterT.title}</h3>
                          <p className="text-[#6B7FA3] text-sm leading-relaxed">{chapterT.caption}</p>
                        </div>
                      </div>
                    )}

                    {photos.length > 0 && (
                      <>
                        <div className="px-5 py-4" style={{ borderBottom: `1px solid ${ch.accent}15` }}>
                          <h3 className="font-bold text-[#E8F0FE] text-base leading-tight mb-2">{chapterT.title}</h3>
                          <p className="text-[#6B7FA3] text-sm leading-relaxed">{chapterT.caption}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-px">
                          {photos.map((src, pi) => (
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
                      <Image src={ch.photo} alt={chapterT.title} fill className={`object-cover ${ch.photoPosition}`} sizes="110px" />
                    </div>
                    <div className="flex flex-col justify-center gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ch.accent }}>{ch.year}</span>
                        <span className="text-xs text-[#6B7FA3]">{chapterT.location}</span>
                      </div>
                      <h3 className="font-bold text-[#E8F0FE] text-base leading-tight">{chapterT.title}</h3>
                      <p className="text-[#6B7FA3] text-sm leading-snug">{chapterT.caption}</p>
                    </div>
                  </div>
                )}
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
