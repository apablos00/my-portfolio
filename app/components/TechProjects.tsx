"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    name: "Customer Service Chatbot",
    tagline: "LLM embedded in everyday messaging",
    problem: "I wanted to test how an AI assistant would behave inside an app I already use daily, not a separate tool I had to open.",
    solution: "I embedded an LLM directly into WhatsApp, handling the full conversation flow with message routing and context.",
    tech: ["Python", "LLM APIs", "WhatsApp API"],
    github: "https://github.com/apablos00/whatsapp-chatbot-demo",
    color: "#4ECDC4",
  },
  {
    name: "Autius",
    tagline: "Driving school slot monitor",
    problem: "I had to open the booking website every 30 minutes to check if a driving slot had opened. It was random, unpredictable, and I kept missing them.",
    solution: "I built a Python scraper that monitors the page 24/7 and sends me a Discord alert the instant a slot opens.",
    tech: ["Python", "Web Scraping", "Discord API"],
    github: "https://github.com/apablos00/autius-tracker",
    color: "#4ECDC4",
  },
  {
    name: "TipsterAuto",
    tagline: "AI-powered bet replication",
    problem: "I follow sports tipsters on Telegram to track their strategies, but they post at all hours. I kept missing bets, which skewed my analysis.",
    solution: "I built an AI pipeline that reads their Telegram messages, extracts the bet parameters and places them automatically across two bookmakers.",
    tech: ["Python", "AI / NLP", "Telegram API", "Bookmaker APIs"],
    github: "https://github.com/apablos00/tipster-auto",
    color: "#4ECDC4",
  },
];

export default function TechProjects() {
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
            Tech projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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
                style={{ background: `linear-gradient(90deg, ${proj.color}90, transparent)` }}
              />

              <div className="p-5 flex-1" style={{ display: "grid", gridTemplateRows: "auto 1fr auto auto", gap: "16px" }}>
                {/* Header */}
                <div>
                  <h3 className="font-bold text-[#D6E5F2] text-base leading-tight mb-1">
                    {proj.name}
                  </h3>
                  <p className="text-[#7A95AE] text-xs italic">{proj.tagline}</p>
                </div>

                {/* Problem / Solution */}
                <div className="flex flex-col gap-2.5">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: proj.color + "99" }}>Problem</p>
                    <p className="text-[#7A95AE] text-xs leading-relaxed">{proj.problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-1" style={{ color: proj.color }}>Solution</p>
                    <p className="text-[#8AACCA] text-xs leading-relaxed">{proj.solution}</p>
                  </div>
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 content-start" style={{ minHeight: "44px" }}>
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded"
                      style={{
                        color: "#6AAEE0",
                        background: "rgba(74,144,208,0.08)",
                        border: "1px solid rgba(74,144,208,0.15)",
                      }}
                    >
                      {t}
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
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View on GitHub
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold"
                    style={{ color: "#4E6480", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}
                  >
                    Private repo
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
