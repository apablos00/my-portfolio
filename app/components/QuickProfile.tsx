"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const essentials = [
  { icon: "🎓", value: "MSc Entrepreneurship · UiO", sub: "Oslo · Aug 2025 –" },
  { icon: "💡", value: "AI Advisor · iHub & StartupLab", sub: "Oslo · Feb 2026 –" },
  { icon: "💼", value: "Data Consultant · NFQ Madrid", sub: "18 months · 2024–25" },
  { icon: "🧠", value: "MSc Applied AI + BSc CS · UC3M", sub: "2018–23 · Thesis 10/10" },
  { icon: "🇳🇴", value: "NTNU Erasmus · UiO Oslo", sub: "2021–22 · 2025–now" },
  { icon: "🌐", value: "Spanish · English · Norwegian", sub: "Native · Fluent · Learning" },
];

export default function QuickProfile() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="profile" className="py-24 px-6 relative" ref={ref}
      style={{ background: "linear-gradient(180deg, #040C18 0%, #061525 50%, #040C18 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="section-label mb-3">About me</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-10">
            Who I am
          </h2>

          {/* Personal prose */}
          <div className="space-y-5 max-w-3xl">
            <p className="text-[#B0C8DE] text-lg leading-relaxed">
              I grew up in Madrid with a passion for maths and sciences that started in
              high school and never really faded. That passion led me to study Computer
              Engineering and then a Master's in Applied AI, building a solid technical
              foundation along the way.
            </p>
            <p className="text-[#8AACCA] text-base leading-relaxed">
              After graduating, I spent two years working as a Data and IT Consultant,
              helping financial institutions build data platforms and analytics
              infrastructure. It was good work, but I kept feeling drawn to the bigger
              questions: not just how to build something, but why and for whom.
            </p>
            <p className="text-[#8AACCA] text-base leading-relaxed">
              That shift brought me to Oslo. I'm now studying Entrepreneurship and
              Innovation at UiO and advising startups at iHub and StartupLab, building
              the business side of my career at the intersection of technology and
              entrepreneurship. At a more personal level, I'm a deep passionate of
              travelling, sports, international cuisine and fashion.
            </p>
          </div>
        </motion.div>

        {/* Essential facts — clean, no emojis, honest */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="section-label mb-6">In brief</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {essentials.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="glass-card rounded-xl p-4 flex items-center gap-3"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="text-[#D6E5F2] text-sm font-semibold leading-snug">
                    {item.value}
                  </p>
                  <p className="text-[#4E6480] text-xs mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
