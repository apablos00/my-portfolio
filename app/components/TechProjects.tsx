"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GithubIcon from "./GithubIcon";
import { useLanguage } from "../i18n/LanguageContext";

const projects = [
  {
    id: "chatbot" as const,
    name: "Customer Service Chatbot",
    tech: ["Python", "LLM APIs", "WhatsApp API"],
    github: "https://github.com/apablos00/whatsapp-chatbot-demo",
    color: "#4ECDC4",
  },
  {
    id: "autius" as const,
    name: "Autius",
    tech: ["Python", "Web Scraping", "Discord API"],
    github: "https://github.com/apablos00/autius-tracker",
    color: "#D9A441",
  },
  {
    id: "tipster" as const,
    name: "TipsterAuto",
    tech: ["Python", "AI / NLP", "Telegram API", "Bookmaker APIs"],
    github: "https://github.com/apablos00/tipster-auto",
    color: "#6AAEE0",
  },
];

export default function TechProjects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech-projects" className="py-28 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 95% 20%, rgba(78,205,196,0.05) 0%, transparent 60%)",
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
            {t.techProjects.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {projects.map((proj, i) => {
            const tp = t.techProjects.projects[proj.id];
            return (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div
                className="h-px w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${proj.color}90, transparent)` }}
              />

              <div className="p-5 flex-1" style={{ display: "grid", gridTemplateRows: "auto 1fr auto auto", gap: "16px" }}>
                {/* Header */}
                <div>
                  <h3 className="font-bold text-[#D6E5F2] text-base leading-tight mb-1">
                    {proj.name}
                  </h3>
                  <p className="text-[#7A95AE] text-xs italic">{tp.tagline}</p>
                </div>

                {/* Problem / Solution */}
                <div className="flex flex-col gap-2.5">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: proj.color + "99" }}>{t.techProjects.problemLabel}</p>
                    <p className="text-[#7A95AE] text-xs leading-relaxed">{tp.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: proj.color }}>{t.techProjects.solutionLabel}</p>
                    <p className="text-[#8AACCA] text-xs leading-relaxed">{tp.solution}</p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 content-start" style={{ minHeight: "44px" }}>
                  {proj.tech.map((techName) => (
                    <span
                      key={techName}
                      className="text-[11px] px-2 py-0.5 rounded"
                      style={{
                        color: proj.color,
                        background: `${proj.color}14`,
                        border: `1px solid ${proj.color}30`,
                      }}
                    >
                      {techName}
                    </span>
                  ))}
                </div>

                {/* Link */}
                {proj.github ? (
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
                    <GithubIcon />
                    {t.techProjects.viewOnGithub}
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ color: "#4E6480", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                  >
                    {t.techProjects.privateRepo}
                  </span>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
