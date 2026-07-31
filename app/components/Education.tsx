"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENT = "#4A90D0";

const arc = [
  { year: "2018–22", key: "bsc" as const },
  { year: "2022", key: "mscAi" as const },
  { year: "2025", key: "mscInnovation" as const },
];

const education = [
  { id: "oslo" as const },
  { id: "msc" as const },
  { id: "bsc" as const },
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
              style={{ top: "5px", background: `${ACCENT}40` }}
            />
            <div className="grid grid-cols-3">
              {arc.map((node) => (
                <div key={node.year} className="flex flex-col items-center text-center gap-1.5 relative z-10 px-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full border-2 flex-shrink-0"
                    style={{ borderColor: ACCENT, background: "#0B1F38", boxShadow: `0 0 8px ${ACCENT}70` }}
                  />
                  <span className="text-[10px] font-bold tracking-widest uppercase leading-tight mt-2.5" style={{ color: ACCENT }}>
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
                style={{ background: `linear-gradient(90deg, ${ACCENT}80, transparent)` }}
              />

              <p className="text-[10px] font-bold tracking-widest uppercase mb-1.5" style={{ color: ACCENT }}>
                {card.chapter}
              </p>
              <h3 className="font-bold text-[#D6E5F2] text-lg leading-tight mb-1">{card.degree}</h3>
              <p className="font-medium text-sm" style={{ color: ACCENT }}>{card.school}</p>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
