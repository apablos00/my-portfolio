"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  { period: "Feb 2026 –", label: "Startup Innovation Advisor",org: "iHub & StartupLab, Oslo",     color: "#4A90D0", current: true  },
  { period: "Aug 2025 –", label: "MSc Entrepreneurship & Innovation Management", org: "University of Oslo", color: "#4A90D0", current: true  },
  { period: "2024–25",    label: "Data & IT Consultant",      org: "NFQ Advisory, Madrid",        color: "#7A9EC0", current: false },
  { period: "2022–23",    label: "MSc Applied AI",            org: "UC3M · 10/10 Honors",        color: "#7A9EC0", current: false },
  { period: "2021–22",    label: "Erasmus+",                  org: "NTNU Trondheim, Norway",     color: "#6AAEE0", current: false },
  { period: "2018–22",    label: "BSc Computer Engineering", org: "UC3M Madrid",                color: "#7A9EC0", current: false },
];

export default function AboutMe() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="profile"
      className="py-24 px-6 relative"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #040C18 0%, #061525 40%, #040C18 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-10">
            Me in 2 min
          </h2>

          <div className="space-y-5 max-w-3xl">
            <p className="text-[#B0C8DE] text-lg leading-relaxed">
              I grew up in Madrid with a passion for maths and sciences that started in
              high school and never really faded. That passion led me to study Computer
              Engineering and then a Master&apos;s in Applied AI, building a solid technical
              foundation along the way.
            </p>
            <p className="text-[#8AACCA] text-base leading-relaxed">
              After graduating, I spent two years working as a Data and IT Consultant,
              helping financial institutions build data platforms and analytics
              infrastructure. It was good work, but I kept feeling drawn to the bigger
              questions: not just how to build something, but why and for whom.
            </p>
            <p className="text-[#8AACCA] text-base leading-relaxed">
              That shift brought me to Oslo. I&apos;m now studying Entrepreneurship and
              Innovation at UiO and advising startups at iHub and StartupLab, building
              the business side of my career at the intersection of technology and
              entrepreneurship. At a more personal level, I&apos;m passionate about
              travelling, sports, international cuisine and fashion.
            </p>
          </div>
        </motion.div>

        {/* ── In Brief ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p className="section-label mb-5">In brief</p>

          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            {timeline.map((item, i) => {
              const isLast = i === timeline.length - 1;
              const switchesToPast = item.current && !timeline[i + 1]?.current;
              return (
                <motion.div key={item.label}>
                  <div
                    className="flex items-start gap-5 px-5 py-4 relative"
                    style={{
                      background: item.current ? "rgba(74,144,208,0.06)" : "transparent",
                      borderLeft: item.current ? "2px solid #4A90D0" : "2px solid transparent",
                      borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Period */}
                    <p
                      className="text-xs font-semibold tabular-nums flex-shrink-0 pt-0.5"
                      style={{ width: "80px", color: item.current ? "#6AAEE0" : "#4E6480" }}
                    >
                      {item.period}
                    </p>

                    {/* Role + org */}
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-sm font-semibold leading-snug"
                        style={{ color: item.current ? "#D6E5F2" : "#8AACCA" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: item.current ? "#5A9EC8" : "#4E6480" }}
                      >
                        {item.org}
                      </p>
                    </div>

                    {/* Pulse dot for current */}
                    {item.current && (
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 animate-pulse"
                        style={{ background: "#4A90D0" }}
                      />
                    )}
                  </div>

                  {/* Divider between current and past */}
                  {switchesToPast && (
                    <div
                      className="px-5 py-2 flex items-center gap-3"
                      style={{ background: "rgba(255,255,255,0.02)" }}
                    >
                      <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#4E6480]">before</span>
                      <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
