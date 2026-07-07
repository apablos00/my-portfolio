"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const arc = [
  { year: "2018", label: "BSc", color: "#7A9EC0" },
  { year: "2021", label: "Erasmus", color: "#4A90D0" },
  { year: "2022", label: "MSc AI", color: "#6AAEE0" },
  { year: "2025", label: "MSc Innovation", color: "#90C6EA" },
];

const education = [
  {
    chapter: "Current",
    degree: "MSc Entrepreneurship & Innovation Management",
    school: "University of Oslo (UiO)",
    period: "Aug 2025 – Present",
    location: "Oslo, Norway",
    color: "#4A90D0",
    status: "current" as const,
    storyTitle: "The Oslo Chapter",
    highlights: [
      "Focus on innovation strategy, startup ecosystem, and venture creation",
      "Active in iHub and StartupLab Oslo through Insj UiO advisor role",
      "Combining technical AI background with entrepreneurial frameworks",
    ],
  },
  {
    chapter: "2022–23",
    degree: "MSc Applied Artificial Intelligence",
    school: "Carlos III de Madrid University",
    period: "Sep 2022 – Sep 2023",
    location: "Madrid, Spain",
    color: "#6AAEE0",
    status: "complete" as const,
    storyTitle: "Going Deeper into AI",
    highlights: [
      "Machine Learning, Computer Vision, Deep Learning",
      "Master thesis: Computer Vision (YOLO) for industrial defect detection, ITP Aero",
      "Thesis grade: 10/10, Honors",
    ],
  },
  {
    chapter: "2018–22",
    degree: "BSc Computer Engineering",
    school: "Carlos III de Madrid University",
    period: "Sep 2018 – Sep 2022",
    location: "Madrid + Trondheim, Norway",
    color: "#7A9EC0",
    status: "complete" as const,
    storyTitle: "The Foundation · The Norway Spark",
    highlights: [
      "Full degree conducted entirely in English",
      "Erasmus+ exchange at NTNU, Trondheim, one full academic year",
      "First contact with Norway, Norwegian culture, and Nordic work values",
    ],
  },
];

export default function Education() {
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
            Academic background
          </h2>
        </motion.div>

        {/* Mini horizontal arc */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass-card rounded-2xl px-8 py-6 mb-12 relative overflow-hidden"
        >
          <div className="flex items-center justify-between relative">
            <div
              className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2"
              style={{ background: "linear-gradient(90deg, #7A9EC0, #4A90D0, #6AAEE0, #90C6EA)" }}
            />
            {arc.map((node) => (
              <div key={node.year} className="flex flex-col items-center gap-2 relative z-10">
                <div
                  className="w-2.5 h-2.5 rounded-full border-2"
                  style={{ borderColor: node.color, background: "#061526", boxShadow: `0 0 8px ${node.color}70` }}
                />
                <span className="text-[10px] font-bold tracking-widest uppercase mt-1" style={{ color: node.color }}>
                  {node.label}
                </span>
                <span className="text-[10px] text-[#4E6480]">{node.year}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education cards */}
        <div className="flex flex-col gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
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
                      {edu.chapter}
                    </p>
                    <h3 className="font-bold text-[#D6E5F2] text-base leading-tight mb-1">{edu.degree}</h3>
                    <p className="font-medium text-sm" style={{ color: edu.color }}>{edu.school}</p>
                    <p className="text-[#4E6480] text-xs mt-1">{edu.location} · {edu.period}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {edu.status === "current" && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#6AAEE0" }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D0] animate-pulse" />
                      Current
                    </span>
                  )}
                </div>
              </div>

              <ul className="flex flex-col gap-2">
                {edu.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-[#7A95AE] leading-snug">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: edu.color }} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
