"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "EksamenBoost",
    tagline: "Exam prep built for Norwegian universities",
    description:
      "After years mentoring UiO students, I kept seeing the same gap: generic study resources didn't match the specific courses students were failing. I built a platform with course-specific quizzes, coding exercises and exam simulators that actually reflect what's tested.",
    link: "https://eksamenboost.no",
    linkLabel: "eksamenboost.no",
    github: null,
    status: "Live · deployed at eksamenboost.no",
    color: "#90C6EA",
  },
  {
    name: "ClearTerms",
    tagline: "AI adoption platform for SMEs",
    description:
      "The biggest blocker to AI adoption in SMEs isn't technology — it's the communication gap between technical teams and decision-makers. ClearTerms makes AI opportunities legible to executives in business terms, not technical ones. Built during my MSc at UiO.",
    link: "https://clearterms-b8n03o3tc-apablos00s-projects.vercel.app/",
    linkLabel: "clearterms.vercel.app",
    github: null,
    status: "MSc project · prototype built",
    color: "#90C6EA",
  },
];

export default function BizProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="biz-projects"
      className="py-28 px-6 relative"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #040C18 0%, #061525 50%, #040C18 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 70%, rgba(144,198,234,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-4">
            Entrepreneurial projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div
                className="h-px w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${proj.color}80, transparent)` }}
              />

              <div className="p-5 flex flex-col flex-1 gap-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-[#D6E5F2] text-base leading-tight">{proj.name}</h3>
                  </div>
                  <p className="text-[#7A95AE] text-xs italic">{proj.tagline}</p>
                </div>

                <p className="text-[#8AACCA] text-sm leading-relaxed flex-1">{proj.description}</p>

                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: proj.color }}>
                  {proj.status}
                </p>

                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      color: proj.color,
                      border: `1px solid ${proj.color}50`,
                      background: `${proj.color}10`,
                    }}
                  >
                    {proj.linkLabel}
                  </a>
                ) : proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      color: proj.color,
                      border: `1px solid ${proj.color}50`,
                      background: `${proj.color}10`,
                    }}
                  >
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View on GitHub
                  </a>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
