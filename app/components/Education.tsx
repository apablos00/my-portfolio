"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const arc = [
  { year: "2018–22", key: "bsc" as const, color: "#C4845A" },
  { year: "2022", key: "mscAi" as const, color: "#C4845A" },
  { year: "2025", key: "mscInnovation" as const, color: "#4A90D0" },
];

const education = [
  { id: "oslo" as const, color: "#4A90D0", status: "current" as const },
  { id: "msc" as const, color: "#C4845A", status: "complete" as const },
  { id: "bsc" as const, color: "#C4845A", status: "complete" as const },
];

export default function Education() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      className="py-28 px-6 relative"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #040C18 0%, #061526 50%, #040C18 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-4">
            {t.education.heading}
          </h2>
        </motion.div>

        {/* Mini horizontal arc */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card rounded-2xl px-5 sm:px-8 pt-6 pb-7 mb-12 relative overflow-hidden"
        >
          <div className="relative">
            <div
              className="absolute left-0 right-0 h-px"
              style={{ top: "5px", background: "linear-gradient(90deg, #C4845A, #C4845A 60%, #4A90D0)" }}
            />
            <div className="grid grid-cols-3">
              {arc.map((node) => (
                <div key={node.year} className="flex flex-col items-center text-center gap-1.5 relative z-10 px-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
                    style={{ borderColor: node.color, background: "#0B1F38", boxShadow: `0 0 8px ${node.color}70` }}
                  />
                  <span className="text-[10px] font-bold tracking-widest uppercase leading-tight mt-2.5" style={{ color: node.color }}>
                    {t.education.arc[node.key]}
                  </span>
                  <span className="text-[10px] text-[#4E6480] leading-none">{node.year}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Education cards */}
        <div className="flex flex-col gap-5">
          {education.map((edu, i) => {
            const card = t.education.cards[edu.id];
            return (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.3 + i * 0.12 }}
              className="glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, ${edu.color}80, transparent)` }}
              />

              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-1.5" style={{ color: edu.color }}>
                      {card.chapter}
                    </p>
                    <h3 className="font-bold text-[#D6E5F2] text-base leading-tight mb-1">{card.degree}</h3>
                    <p className="font-medium text-sm" style={{ color: edu.color }}>{card.school}</p>
                    <p className="text-[#4E6480] text-xs mt-1">{card.location} · {card.period}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {edu.status === "current" && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6AAEE0" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D0] animate-pulse" />
                      {t.education.current}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-1" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-[11px] font-semibold uppercase tracking-wide mb-1.5" style={{ color: edu.color }}>
                  {card.storyTitle}
                </p>
                <p className="text-sm text-[#8FA6BE] leading-relaxed">{card.story}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
