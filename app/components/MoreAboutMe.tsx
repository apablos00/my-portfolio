"use client";
import { motion, useInView, Reorder, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
    accent: "#4A90D0",
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

const DragHandle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <circle cx="9" cy="6" r="1.6" fill="currentColor" />
    <circle cx="15" cy="6" r="1.6" fill="currentColor" />
    <circle cx="9" cy="12" r="1.6" fill="currentColor" />
    <circle cx="15" cy="12" r="1.6" fill="currentColor" />
    <circle cx="9" cy="18" r="1.6" fill="currentColor" />
    <circle cx="15" cy="18" r="1.6" fill="currentColor" />
  </svg>
);

const ShuffleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7M3 8V3h5M16 21h5v-5M9 9 3 3M15 15l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MEDALS = [
  { color: "#D9A441", glow: "0 0 20px rgba(217,164,65,0.35)" },
  { color: "#8FA6BE", glow: "0 0 14px rgba(143,166,190,0.2)" },
  { color: "#C4845A", glow: "0 0 14px rgba(196,132,90,0.2)" },
];

function shuffled(arr: number[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MoreAboutMe() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [order, setOrder] = useState([0, 1, 2]);
  const [interacted, setInteracted] = useState(false);

  const rankLabel = (pos: number) =>
    pos === 0 ? t.funFacts.rankMost : pos === order.length - 1 ? t.funFacts.rankLeast : "";

  return (
    <section id="more-about-me" className="py-24 px-6 relative" ref={ref}>
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
            {t.moreAboutMe.heading}
          </h2>
        </motion.div>

        {/* ── My timeline ── */}
        <div className="mb-20">
          <p className="section-label mb-8">{t.moreAboutMe.timelineLabel}</p>

          <div className="relative">
            <div
              className="absolute left-0 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "linear-gradient(to bottom, #4A90D0, #C4845A 30%, #4A90D0 55%, #C4845A 80%, #C4845A 100%)" }}
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
                  transition={{ duration: 0.6, delay: 0.06 * i }}
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

        {/* ── Fun facts ── */}
        <div className="pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-end justify-between gap-4 mb-2 flex-wrap">
            <p className="section-label">{t.moreAboutMe.funFactsLabel}</p>
            <button
              type="button"
              onClick={() => {
                setOrder((prev) => shuffled(prev));
                setInteracted(true);
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 flex-shrink-0"
              style={{ color: "#6AAEE0", border: "1px solid rgba(74,144,208,0.35)", background: "rgba(74,144,208,0.08)" }}
            >
              <ShuffleIcon />
              {t.funFacts.shuffle}
            </button>
          </div>
          <p className="text-[#7A95AE] text-sm mb-6">{t.funFacts.instructions}</p>

          <Reorder.Group
            as="div"
            axis="y"
            values={order}
            onReorder={(next) => {
              setOrder(next);
              setInteracted(true);
            }}
            className="flex flex-col gap-3"
          >
            {order.map((factIdx, pos) => {
              const medal = MEDALS[pos];
              return (
                <Reorder.Item
                  key={factIdx}
                  value={factIdx}
                  onDragStart={() => setInteracted(true)}
                  className="glass-card rounded-xl pl-4 pr-5 py-4 flex items-center gap-4 cursor-grab active:cursor-grabbing select-none relative overflow-hidden"
                  style={{ listStyle: "none", borderLeft: `3px solid ${medal.color}` }}
                  whileDrag={{ scale: 1.04, boxShadow: `0 16px 36px rgba(4,12,24,0.55), ${medal.glow}`, zIndex: 10 }}
                >
                  <motion.span
                    className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-bold"
                    style={{ width: "30px", height: "30px", background: `${medal.color}22`, color: medal.color, boxShadow: pos === 0 ? medal.glow : "none" }}
                    layout
                  >
                    {pos + 1}
                  </motion.span>
                  <div className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                      {rankLabel(pos) && (
                        <motion.p
                          key={rankLabel(pos)}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.2 }}
                          className="text-[10px] font-bold tracking-widest uppercase mb-1"
                          style={{ color: medal.color }}
                        >
                          {rankLabel(pos)}
                        </motion.p>
                      )}
                    </AnimatePresence>
                    <p className="text-[#8AACCA] text-sm leading-relaxed">{t.funFacts.facts[factIdx]}</p>
                  </div>
                  <motion.span
                    className="flex-shrink-0"
                    style={{ color: "#4E6480" }}
                    animate={
                      !interacted && pos === 0
                        ? { y: [0, -3, 0], opacity: [0.5, 1, 0.5] }
                        : { y: 0, opacity: 1 }
                    }
                    transition={
                      !interacted && pos === 0
                        ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                        : { duration: 0.2 }
                    }
                  >
                    <DragHandle />
                  </motion.span>
                </Reorder.Item>
              );
            })}
          </Reorder.Group>
        </div>
      </div>
    </section>
  );
}
