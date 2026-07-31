"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GithubIcon from "./GithubIcon";
import { useLanguage } from "../i18n/LanguageContext";

const ACCENT = "#4A90D0";

const techProjects = [
  {
    id: "chatbot" as const,
    name: "Customer Service Chatbot",
    tech: ["Python", "LLM APIs", "WhatsApp API"],
    github: "https://github.com/apablos00/whatsapp-chatbot-demo",
  },
  {
    id: "autius" as const,
    name: "Autius",
    tech: ["Python", "Web Scraping", "Discord API"],
    github: "https://github.com/apablos00/autius-tracker",
  },
  {
    id: "tipster" as const,
    name: "TipsterAuto",
    tech: ["Python", "Telegram API", "Bookmaker APIs"],
    github: "https://github.com/apablos00/tipster-auto",
  },
];

const bizProjects = [
  {
    id: "eksamenboost" as const,
    name: "EksamenBoost",
    link: "https://eksamenboost.no",
    linkLabel: "eksamenboost.no",
  },
  {
    id: "clearterms" as const,
    name: "ClearTerms",
    link: "https://clearterms-b8n03o3tc-apablos00s-projects.vercel.app/",
    linkLabel: "clearterms.vercel.app",
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 95% 20%, rgba(74,144,208,0.05) 0%, transparent 60%)",
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
            {t.projects.heading}
          </h2>
        </motion.div>

        {/* Tech projects */}
        <div className="mb-14">
          <p className="section-label mb-5">{t.projects.techLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {techProjects.map((proj, i) => {
              const tp = t.projects.tech[proj.id];
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
                  style={{ background: `linear-gradient(90deg, ${ACCENT}90, transparent)` }}
                />

                <div className="p-5 flex-1" style={{ display: "grid", gridTemplateRows: "auto 1fr auto auto", gap: "16px" }}>
                  <div>
                    <h3 className="font-bold text-[#D6E5F2] text-base leading-tight mb-1">
                      {proj.name}
                    </h3>
                    <p className="text-[#7A95AE] text-xs italic">{tp.tagline}</p>
                  </div>

                  <p className="text-[#8AACCA] text-xs leading-relaxed">{tp.description}</p>

                  <div className="flex flex-wrap gap-1.5 content-start" style={{ minHeight: "44px" }}>
                    {proj.tech.map((techName) => (
                      <span
                        key={techName}
                        className="text-[11px] px-2 py-0.5 rounded"
                        style={{
                          color: ACCENT,
                          background: `${ACCENT}14`,
                          border: `1px solid ${ACCENT}30`,
                        }}
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      color: ACCENT,
                      border: `1px solid ${ACCENT}50`,
                      background: `${ACCENT}10`,
                    }}
                  >
                    <GithubIcon />
                    {t.projects.viewOnGithub}
                  </a>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Entrepreneurial projects */}
        <div>
          <p className="section-label mb-5">{t.projects.bizLabel}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {bizProjects.map((proj, i) => {
              const bp = t.projects.biz[proj.id];
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
                  style={{ background: `linear-gradient(90deg, ${ACCENT}80, transparent)` }}
                />

                <div className="p-5 flex flex-col flex-1 gap-4">
                  <div>
                    <div className="flex items-baseline gap-2 mb-1">
                      <h3 className="font-bold text-[#D6E5F2] text-base leading-tight">{proj.name}</h3>
                    </div>
                    <p className="text-[#7A95AE] text-xs italic">{bp.tagline}</p>
                  </div>

                  <p className="text-[#8AACCA] text-sm leading-relaxed flex-1">{bp.description}</p>

                  <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: ACCENT }}>
                    {bp.status}
                  </p>

                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      color: ACCENT,
                      border: `1px solid ${ACCENT}50`,
                      background: `${ACCENT}10`,
                    }}
                  >
                    {proj.linkLabel}
                  </a>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
