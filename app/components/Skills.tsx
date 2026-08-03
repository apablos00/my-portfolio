"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const businessRows = [
  { title: "Entrepreneurship & Innovation Advisor", org: "Insj UiO, iHub & StartupLab Oslo", period: "Now", highlighted: true },
  { title: "MSc Entrepreneurship & Innovation Management", org: "University of Oslo", period: "2025 – now" },
  { title: "Go-To-Market Lead, Juridex", org: "Opened the Spanish market", period: "Feb – May 2026" },
];

const techRows = [
  { title: "Data Consultant, NFQ Advisory Solutions", org: "Banking & insurance data pipelines", period: "2024–25", highlighted: true },
  { title: "MSc Applied AI", org: "UC3M, thesis graded 10/10 with Honors", period: "2022 – 2023" },
  { title: "BSc Computer Engineering", org: "UC3M + NTNU", period: "2018 – 2022" },
];

const traits = [
  { title: "Self-development", desc: "I keep a critical but constructive view of myself, and treat every project as a chance to improve.", col: "own" },
  { title: "Empathy", desc: "I listen actively and stay present in the conversation, to actually understand where the other person is coming from.", col: "team" },
  { title: "Fast learning", desc: "My field moves fast, so I stay current and turn what I learn into practical value quickly.", col: "own" },
  { title: "Communication", desc: "Speaking up didn't always come naturally to me. I've worked deliberately at communicating clearly, and it's paying off.", col: "team" },
];

function Row({ title, org, period, highlighted, isLast }: { title: string; org: string; period: string; highlighted?: boolean; isLast?: boolean }) {
  return (
    <div
      className="flex justify-between items-baseline gap-3 py-3.5"
      style={!isLast ? { borderBottom: "1px solid rgba(16,24,38,0.08)" } : undefined}
    >
      <div>
        <div className={`text-sm mb-0.5 ${highlighted ? "font-bold" : "font-semibold"}`} style={{ color: "var(--ink)" }}>{title}</div>
        <div className="text-xs" style={{ color: "#5B6572" }}>{org}</div>
      </div>
      <div
        className="text-[11px] font-bold whitespace-nowrap flex-shrink-0"
        style={{ color: highlighted ? "var(--accent)" : "#5B6572" }}
      >
        {period}
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState<"business" | "tech">("business");

  return (
    <section id="skills" className="px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 max-w-2xl"
        >
          <div className="eyebrow mb-3.5">What I bring</div>
          <h2 className="font-display font-bold text-3xl sm:text-[42px] leading-tight mb-4">
            I stand right between business and technology.
          </h2>
          <p className="text-base sm:text-[17px] leading-relaxed" style={{ color: "#3A4450" }}>
            I love bringing technical solutions to real-life problems, but I love even more finding those problems and opportunities, and exploring the most feasible solutions in the tech and AI space. This is how I&apos;m forming my double-sided background so far, between both disciplines.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
          className="rounded-2xl overflow-hidden mb-3"
          style={{ border: "1px solid rgba(16,24,38,0.1)" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <button
              onClick={() => setActiveSkill("business")}
              className="text-left border-none px-5 sm:px-6 py-4 font-display font-bold text-sm sm:text-[14.5px] cursor-pointer transition-colors duration-300"
              style={{
                background: activeSkill === "business" ? "var(--ink)" : "rgba(16,24,38,0.04)",
                color: activeSkill === "business" ? "#F4F6F8" : "var(--ink)",
              }}
            >
              01 · Business &amp; Innovation
            </button>
            <button
              onClick={() => setActiveSkill("tech")}
              className="text-left px-5 sm:px-6 py-4 font-display font-bold text-sm sm:text-[14.5px] cursor-pointer transition-colors duration-300 sm:border-l"
              style={{
                background: activeSkill === "tech" ? "var(--ink)" : "rgba(16,24,38,0.04)",
                color: activeSkill === "tech" ? "#F4F6F8" : "var(--ink)",
                borderColor: "rgba(16,24,38,0.1)",
                borderTop: "1px solid rgba(16,24,38,0.1)",
              }}
            >
              02 · AI &amp; Technology
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div
              className="px-5 sm:px-6 py-1 transition-opacity duration-300 sm:border-r"
              style={{ borderColor: "rgba(16,24,38,0.08)", borderBottom: "1px solid rgba(16,24,38,0.08)", opacity: activeSkill === "tech" ? 0.4 : 1 }}
            >
              {businessRows.map((row, i) => (
                <Row key={row.title} {...row} isLast={i === businessRows.length - 1} />
              ))}
            </div>
            <div className="px-5 sm:px-6 py-1 transition-opacity duration-300" style={{ opacity: activeSkill === "business" ? 0.4 : 1 }}>
              {techRows.map((row, i) => (
                <Row key={row.title} {...row} isLast={i === techRows.length - 1} />
              ))}
            </div>
          </div>
        </motion.div>
        <div className="text-xs mb-11" style={{ color: "#9AA3AD" }}>Click a column to focus on one side.</div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11"
        >
          <h3 className="font-display font-bold text-xl sm:text-[22px] mb-2.5">How is it to work with me?</h3>
          <p className="text-sm sm:text-[14.5px] leading-relaxed mb-7 max-w-xl" style={{ color: "#5B6572" }}>
            I&apos;m very into self-development and improving every day, and I try to keep a critical but constructive view of myself. Here are my two main traits, working alone and in a team.
          </p>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(16,24,38,0.1)" }}>
            <div className="grid grid-cols-2">
              <div className="px-5 sm:px-[22px] py-3.5 font-display font-bold text-sm" style={{ background: "rgba(16,24,38,0.04)" }}>On my own</div>
              <div className="px-5 sm:px-[22px] py-3.5 font-display font-bold text-sm" style={{ background: "rgba(16,24,38,0.04)", borderLeft: "1px solid rgba(16,24,38,0.1)" }}>In a team</div>
            </div>
            <div className="grid grid-cols-2">
              {traits.map((t, i) => (
                <div
                  key={t.title}
                  className="px-5 sm:px-[22px] py-5"
                  style={{
                    borderRight: t.col === "own" ? "1px solid rgba(16,24,38,0.08)" : undefined,
                    borderBottom: i < 2 ? "1px solid rgba(16,24,38,0.08)" : undefined,
                  }}
                >
                  <div className="font-display font-bold text-[15.5px] mb-1.5">{t.title}</div>
                  <p className="text-[13px] leading-relaxed m-0" style={{ color: "#5B6572" }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
