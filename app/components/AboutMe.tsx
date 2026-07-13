"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutMe() {
  const { t } = useLanguage();
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
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-10">
            {t.aboutMe.heading}
          </h2>

          <div className="space-y-5 max-w-3xl">
            <p className="text-[#B0C8DE] text-lg leading-relaxed">{t.aboutMe.p1}</p>
            <p className="text-[#8AACCA] text-base leading-relaxed">{t.aboutMe.p2}</p>
            <p className="text-[#8AACCA] text-base leading-relaxed">{t.aboutMe.p3}</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
