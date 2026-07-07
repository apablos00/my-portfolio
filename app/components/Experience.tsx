"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    title: "Entrepreneurship & Innovation Advisor",
    org: "Insj UiO, iHub & StartupLab Oslo",
    period: "Feb 2026 – Present",
    location: "Oslo, Norway",
    flag: "🇳🇴",
    color: "#4A90D0",
    context: "Norway's leading startup incubator ecosystem, embedded through UiO's innovation arm.",
    challenge: "Early-stage startups struggle to adopt AI in a way that creates real business value, not just technical demos.",
    role: "I work with student founders and startup teams as an advisor, helping them evaluate AI tools, structure their ideas, and connect with the right partners. I focus on keeping the business logic central.",
    result: "Supported multiple teams through ideation and go-to-market framing. Established introductions to AI provider partnerships that reduce cost barriers for early-stage adoption.",
    learning: "The best AI advice is often: you don't need this yet. Clarity comes first.",
  },
  {
    title: "Go-To-Market Lead",
    org: "Juridex",
    period: "Feb 2026 – Present",
    location: "Oslo, Norway",
    flag: "🇳🇴",
    color: "#4A90D0",
    context: "Norwegian legaltech startup expanding into the Spanish market.",
    challenge: "Juridex had a strong product but no commercial presence in Spain and needed someone who understood both Norwegian work culture and the Spanish business context.",
    role: "I lead the B2B outreach to Spanish law firms and legal departments: prospecting, cold outreach, demos and early relationship management.",
    result: "Ongoing. Building the first pipeline of Spanish clients and gathering market feedback that feeds back into product decisions.",
    learning: "Selling across cultures requires more listening than talking.",
  },
  {
    title: "Data Consultant",
    org: "NFQ Advisory Solutions",
    period: "Jan 2024 – Jun 2025",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    color: "#C4845A",
    context: "18 months in a consulting environment, embedded with top-tier banking and insurance clients.",
    challenge: "Large financial institutions had data spread across siloed systems, making reporting slow and decisions lagged behind reality.",
    role: "Part of a small team responsible for designing and building cloud data pipelines, analytics infrastructure, and BI dashboards. I also managed small client deliverables and stakeholder communication.",
    result: "Delivered scalable data platforms for multiple clients. One HR analytics dashboard reduced manual reporting time significantly for the client's team.",
    learning: "Enterprise clients value predictability and clear communication above all. Technical quality matters, but trust matters more.",
  },
  {
    title: "Computer Vision AI Researcher",
    org: "ITP Aero (Master's Thesis)",
    period: "Mar 2023 – Jul 2023",
    location: "Madrid, Spain",
    flag: "🇪🇸",
    color: "#C4845A",
    context: "Aerospace sector. Final project for my MSc in Applied AI at Carlos III University.",
    challenge: "Manual inspection of aerospace components for defects is slow, costly, and prone to human error. The challenge was to build a reliable automated system from X-Ray imagery.",
    role: "I designed, trained, and evaluated a YOLO-based computer vision model to detect structural defects in aircraft components. This was independent research within an industrial environment.",
    result: "The model reached production-viable accuracy. The thesis was graded 10/10 with Honors, the highest possible grade.",
    learning: "The hardest part wasn't the algorithm. It was making engineers trust the output. That's a communication problem, not a technical one.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 50% 50% at 5% 50%, rgba(44,95,150,0.04) 0%, transparent 60%)" }} />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p className="section-label mb-3">Work</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-4">
            What I've<br /><span className="gradient-text">worked on</span>
          </h2>
          <p className="text-[#7A95AE] max-w-xl text-base leading-relaxed">
            Four roles that shaped how I think. Each one taught me something I still use.
          </p>
        </motion.div>

        {/* Location key */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-6 mb-14"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#4A90D0]" />
            <span className="text-[#4E6480] text-xs">Oslo, Norway</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C4845A]" />
            <span className="text-[#4E6480] text-xs">Madrid, Spain</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.org}-${exp.title}`}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              {/* Top bar */}
              <div className="h-px w-full" style={{ background: `linear-gradient(90deg, ${exp.color}80, transparent)` }} />

              <div className="p-7">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span>{exp.flag}</span>
                      <span className="text-[#4E6480] text-xs">{exp.location} · {exp.period}</span>
                    </div>
                    <h3 className="font-bold text-[#D6E5F2] text-lg leading-tight">{exp.title}</h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: exp.color }}>{exp.org}</p>
                  </div>
                </div>

                {/* Context */}
                <p className="text-[#7A95AE] text-sm italic leading-relaxed mb-6 pb-5"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  {exp.context}
                </p>

                {/* Case study grid */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: exp.color }}>
                      The challenge
                    </p>
                    <p className="text-[#8AACCA] text-sm leading-relaxed">{exp.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: exp.color }}>
                      My contribution
                    </p>
                    <p className="text-[#8AACCA] text-sm leading-relaxed">{exp.role}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: exp.color }}>
                      Outcome
                    </p>
                    <p className="text-[#8AACCA] text-sm leading-relaxed">{exp.result}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: exp.color }}>
                      What I learned
                    </p>
                    <p className="text-[#8AACCA] text-sm leading-relaxed italic">{exp.learning}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
