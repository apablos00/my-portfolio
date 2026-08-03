"use client";
import { motion } from "framer-motion";

const contactItems = [
  { label: "LinkedIn", value: "Alejandro Pablos Sánchez", href: "https://www.linkedin.com/in/alejandro-pablos-sanchez", target: "_blank" },
  { label: "Phone", value: "+47 46 25 96 07", href: "tel:+4746259607", target: "_self" },
  { label: "Email", value: "alejandropablos@hotmail.es", href: "mailto:alejandropablos@hotmail.es", target: "_self" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-12 pt-24 pb-10" style={{ background: "var(--ink)", color: "#F4F6F8" }}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-[13px] font-bold uppercase mb-3.5" style={{ letterSpacing: "0.1em", color: "var(--accent-light)" }}>Contact</div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl leading-tight mb-4">Let&apos;s talk.</h2>
          <p className="text-base sm:text-[17px] leading-relaxed max-w-xl mb-11" style={{ color: "rgba(244,246,248,0.7)" }}>
            I&apos;m open to AI and business-facing roles across Europe, startup or corporate.
          </p>
        </motion.div>

        <div className="grid gap-4 mb-16" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {contactItems.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.target}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
              className="no-underline rounded-2xl p-5 block transition-colors duration-200"
              style={{ color: "#F4F6F8", border: "1px solid rgba(244,246,248,0.2)" }}
            >
              <div className="text-[11px] font-bold uppercase mb-2.5" style={{ letterSpacing: "0.08em", color: "var(--accent-light)" }}>{c.label}</div>
              <div className="text-[15px] font-semibold">{c.value}</div>
            </motion.a>
          ))}
        </div>

        <div
          className="flex justify-between items-center flex-wrap gap-3 text-xs pt-6"
          style={{ borderTop: "1px solid rgba(244,246,248,0.15)", color: "rgba(244,246,248,0.5)" }}
        >
          <span>Alejandro Pablos Sánchez · Oslo, Norway</span>
          <span>© 2026</span>
        </div>
      </div>
    </section>
  );
}
