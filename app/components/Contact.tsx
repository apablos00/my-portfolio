"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactItems = [
  {
    label: "Email",
    value: "alejandropablos@hotmail.es",
    href: "mailto:alejandropablos@hotmail.es",
    color: "#4ECDC4",
  },
  {
    label: "Phone",
    value: "+47 46 25 96 07",
    href: "tel:+4746259607",
    color: "#60A5FA",
  },
  {
    label: "LinkedIn",
    value: "Alejandro Pablos Sánchez",
    href: "https://www.linkedin.com/in/alejandro-pablos-sanchez",
    color: "#00FF9F",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact-me" className="py-28 px-6 relative" ref={ref}
      style={{ background: "linear-gradient(180deg, #040B16 0%, #071221 60%, #040B16 100%)" }}>
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(78,205,196,0.07) 0%, transparent 65%)" }} />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E8F0FE] mb-6">
            Contact Me
          </h2>
        </motion.div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card glass-card-hover rounded-2xl p-7 text-center flex flex-col items-center gap-3 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: item.color }}>{item.label}</p>
              <p className="text-[#E8F0FE] text-sm font-medium break-all">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-4 flex-wrap mb-20"
        >
          <a href="/Alejandro_Pablos_CV_startup_2026.pdf" download className="btn-primary text-base">
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/alejandro-pablos-sanchez" target="_blank" rel="noopener noreferrer" className="btn-outline text-base">
            View LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
