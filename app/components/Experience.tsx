"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Entrepreneurship & Innovation Advisor",
    org: "Insj UiO, iHub & StartupLab",
    period: "Feb 2026 – Present",
    loc: "Oslo, Norway",
    flag: "🇳🇴",
    highlight:
      "I advise founders on turning AI into real business value instead of demos. I've guided multiple teams from idea to go-to-market and opened partnerships that lower adoption costs for early-stage teams.",
  },
  {
    title: "Go-To-Market Lead",
    org: "Juridex",
    period: "Feb 2026 – May 2026",
    loc: "Oslo, Norway",
    flag: "🇳🇴",
    highlight:
      "I led the commercial expansion of a Norwegian legaltech startup into Spain, owning outreach, demos, and the first client pipeline end to end. My market feedback shaped product decisions directly.",
  },
  {
    title: "Data Consultant",
    org: "NFQ Advisory Solutions",
    period: "Jan 2024 – Jun 2025",
    loc: "Madrid, Spain",
    flag: "🇪🇸",
    highlight:
      "I designed and delivered cloud data pipelines and BI dashboards for banking and insurance clients, leading small-team delivery and client relationships. One dashboard sharply cut a client's manual reporting time.",
  },
  {
    title: "Computer Vision AI Researcher",
    org: "ITP Aero (MSc Thesis)",
    period: "Mar – Jul 2023",
    loc: "Madrid, Spain",
    flag: "🇪🇸",
    highlight:
      "I independently designed and trained a computer-vision model to detect aerospace defects, reaching production-viable accuracy. The thesis was graded 10/10 with Honors, the program's highest distinction.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 py-24" style={{ background: "#EAEDF1" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-11 max-w-xl"
        >
          <div className="eyebrow mb-3.5">Experience</div>
          <h2 className="font-display font-bold text-3xl sm:text-[42px] leading-tight mb-3.5">What I&apos;ve worked on.</h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#5B6572" }}>
            With the experience I&apos;ve gotten so far, I have a good understanding of what tech developments entail in real corporate settings, plus a sense of the factors that must be considered before building real solutions.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[5px] top-3.5 bottom-3.5 w-0.5" style={{ background: "rgba(16,24,38,0.14)" }} />
          {experiences.map((e, i) => (
            <motion.div
              key={e.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
              className="relative py-7 pl-10"
            >
              <div
                className="absolute left-0 top-[34px] w-3 h-3 rounded-full"
                style={{
                  background: i === 0 ? "var(--accent)" : "#FFFFFF",
                  border: "2.5px solid var(--accent)",
                }}
              />
              <div className="text-xs mb-2" style={{ color: "#5B6572" }}>
                {e.flag} {e.loc} · {e.period}
              </div>
              <h3 className="font-display font-bold text-xl mb-1">{e.title}</h3>
              <p className="text-sm font-semibold mb-3.5" style={{ color: "var(--accent)" }}>{e.org}</p>
              <p className="text-sm leading-relaxed max-w-xl m-0" style={{ color: "#3A4450" }}>{e.highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
