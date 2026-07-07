"use client";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const capabilities = [
  {
    area: "AI & Data",
    color: "#4A90D0",
    honest: "I can scope, prototype and evaluate AI solutions for real business problems. I've built computer vision models, data pipelines, analytics dashboards and cloud platform integrations. I know enough to ask the right questions and to know when a simpler solution is better.",
    tools: ["Python", "SQL", "Power BI", "Azure / GCP", "Computer Vision (YOLO)"],
  },
  {
    area: "Product & Go-to-Market",
    color: "#6AAEE0",
    honest: "I understand how to take an idea from concept to first customers: defining the problem, structuring the offer and making the first conversations happen. I've done cold outreach, demos and market expansion work. I'm comfortable in early-stage ambiguity.",
    tools: ["B2B sales", "GTM strategy", "Market research", "Startup advising"],
  },
  {
    area: "How I work",
    color: "#7A9EC0",
    honest: "I work best in small teams where the goal is clear but the path isn't. I like to understand the full picture before diving in. I communicate directly. I prefer fewer, better decisions over many fast ones. I've mentored and taught others for 10+ years. I like sharing knowledge.",
    tools: ["Flat teams", "Cross-functional", "Client-facing", "Teaching & mentoring"],
  },
];

const languages = [
  { lang: "Spanish", flag: "🇪🇸", level: "Native · Professional", pct: 100, color: "#C4845A", phrase: "Hola, trabalho en español con total comodidad.", subtext: "Native, full professional use" },
  { lang: "English", flag: "🇬🇧", level: "Fluent · Professional", pct: 90, color: "#4A90D0", phrase: "My day-to-day working language.", subtext: "Full professional fluency" },
  { lang: "Norwegian", flag: "🇳🇴", level: "Learning", pct: 35, color: "#6AAEE0", phrase: "Hei! Jeg lærer norsk, det er gøy!", subtext: "In progress, actively learning" },
];

const RADIUS = 48;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function LanguageRingCard({ lang: l, index, inView }: { lang: typeof languages[0]; index: number; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const progress = useMotionValue(0);
  const strokeDashoffset = useTransform(progress, (v) => CIRCUMFERENCE * (1 - v / 100));

  useEffect(() => {
    if (inView) {
      animate(progress, l.pct, { duration: 1.3, delay: 0.3 + index * 0.15, ease: "easeOut" });
    } else {
      progress.set(0);
    }
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.25 + index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-card rounded-2xl p-6 flex flex-col items-center gap-3 cursor-default select-none"
      style={{ transition: "box-shadow 0.25s", boxShadow: hovered ? `0 0 24px ${l.color}25` : undefined }}
    >
      <div className="relative w-[112px] h-[112px]">
        <svg width="112" height="112" viewBox="0 0 112 112" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="56" cy="56" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <motion.circle
            cx="56" cy="56" r={RADIUS}
            fill="none" stroke={l.color} strokeWidth="6" strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            style={{ strokeDashoffset }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
          <motion.span className="text-3xl" animate={{ scale: hovered ? 1.12 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            {l.flag}
          </motion.span>
        </div>
      </div>

      <div className="text-center">
        <p className="font-bold text-[#D6E5F2] text-sm">{l.lang}</p>
        <p className="text-xs text-[#4E6480] mt-0.5">{l.level}</p>
      </div>

      <motion.div
        initial={false}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
        transition={{ duration: 0.2 }}
        className="text-center min-h-[36px] flex flex-col items-center justify-center"
      >
        <p className="text-xs italic font-medium" style={{ color: l.color }}>"{l.phrase}"</p>
        <p className="text-[10px] text-[#4E6480] mt-0.5">{l.subtext}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 relative" ref={ref}
      style={{ background: "linear-gradient(180deg, #040C18 0%, #061525 50%, #040C18 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="section-label mb-3">Capabilities</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-4">
            What I can<br /><span className="gradient-text">bring to a team</span>
          </h2>
          <p className="text-[#7A95AE] max-w-xl text-base leading-relaxed">
            An honest account, no made-up percentages. If something isn't listed, I probably can't do it well yet.
          </p>
        </motion.div>

        {/* Capability cards — text-based, honest */}
        <div className="flex flex-col gap-5 mb-16">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.area}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass-card glass-card-hover rounded-2xl p-7 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 bottom-0 w-0.5 rounded-l-2xl"
                style={{ background: `linear-gradient(to bottom, ${cap.color}, transparent)` }} />
              <div className="flex flex-wrap items-start gap-6">
                <div className="flex-1 min-w-[240px]">
                  <h3 className="font-bold text-[#D6E5F2] text-base mb-3">{cap.area}</h3>
                  <p className="text-[#8AACCA] text-sm leading-relaxed">{cap.honest}</p>
                </div>
                <div className="flex flex-wrap gap-2 max-w-[200px]">
                  {cap.tools.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full"
                      style={{ color: cap.color, background: `${cap.color}12`, border: `1px solid ${cap.color}28` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="section-label mb-6">Languages</p>
          <p className="text-[#4E6480] text-xs mb-6">Spanish and English, fully comfortable in professional settings. Norwegian is a work in progress and I enjoy it.</p>
          <div className="grid sm:grid-cols-3 gap-5 max-w-xl">
            {languages.map((l, i) => (
              <LanguageRingCard key={l.lang} lang={l} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
