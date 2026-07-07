"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pillars = [
  {
    icon: "🔬",
    title: "Research",
    subtitle: "Computer Vision · ML · AI",
    points: [
      "MSc Applied AI — Carlos III de Madrid",
      "Computer Vision thesis with ITP Aero (Aerospace sector)",
      "YOLO-based defect detection on X-Ray images",
      "Thesis grade: 10/10 — Honors",
    ],
    color: "#60A5FA",
  },
  {
    icon: "⚡",
    title: "Practice",
    subtitle: "Data · Analytics · Cloud",
    points: [
      "2 years as Data Consultant at NFQ Advisory",
      "Cloud data pipelines for Banking & Insurance",
      "Business Intelligence tools for HR departments",
      "SQL, Power BI, analytics infrastructure",
    ],
    color: "#4ECDC4",
  },
  {
    icon: "🚀",
    title: "Ecosystem",
    subtitle: "Startups · Oslo · iHub",
    points: [
      "Advisor at Insj UiO — Norway's startup hub",
      "AI adoption partnerships with iHub & StartupLab",
      "Helping founders apply AI with business clarity",
      "GTM advisor for legaltech scale-up Juridex",
    ],
    color: "#00FF9F",
  },
];

const stats = [
  { value: "10", label: "Thesis grade — Honors" },
  { value: "2+", label: "Years in IT consulting" },
  { value: "3", label: "Languages — EN / ES / NO" },
  { value: "∞", label: "Curiosity for what's next" },
];

export default function AISection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ai" className="py-28 px-6 relative" ref={ref}
      style={{ background: "linear-gradient(180deg, #040B16 0%, #071221 50%, #040B16 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(78,205,196,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">AI Commitment</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E8F0FE] mb-6">
            Not Just Talking About AI —<br /><span className="gradient-text">Living It</span>
          </h2>
          <p className="text-[#6B7FA3] max-w-2xl mx-auto text-lg leading-relaxed">
            From academic research to industry application to ecosystem building.
            AI is not a buzzword for me — it is the thread running through everything I do.
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-xl font-bold text-[#E8F0FE] mb-1">{p.title}</h3>
              <p className="text-xs font-medium mb-5" style={{ color: p.color }}>{p.subtitle}</p>
              <ul className="flex flex-col gap-3 flex-1">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5 text-sm text-[#6B7FA3] leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: p.color }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">{s.value}</p>
              <p className="text-[#6B7FA3] text-xs font-medium">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
