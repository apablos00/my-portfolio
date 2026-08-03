"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const chapters = [
  {
    src: "/story/childhood.jpeg",
    alt: "Spain, childhood",
    label: "Spain · childhood",
    caption: "I was always taking things apart just to see how they worked.",
  },
  {
    src: "/story/madrid-uni.jpeg",
    alt: "Madrid, university",
    label: "Madrid · 2018–22",
    caption: "I studied Computer Engineering at UC3M.",
  },
  {
    src: "/story/ntnu-17may.jpeg",
    alt: "Trondheim, Norway",
    label: "Trondheim 🇳🇴 · 2021–22",
    caption: "I did my Erasmus at NTNU. It was the year that changed everything for me.",
  },
  {
    src: "/story/spain-coast.jpeg",
    alt: "Madrid, MSc & consulting",
    label: "Madrid · 2022–25",
    caption: "I finished my Master's in Applied AI, then spent two years as a data consultant.",
  },
  {
    src: "/story/oslo-now.jpeg",
    alt: "Oslo, now",
    label: "Oslo 🇳🇴 · now",
    caption: "I'm doing my Master's in Entrepreneurship at UiO now. Building, for real.",
  },
];

export default function Background() {
  return (
    <section id="background" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-11 max-w-xl"
        >
          <div className="eyebrow mb-3.5">Background</div>
          <h2 className="font-display font-bold text-3xl sm:text-[42px] leading-tight mb-3.5">
            An ambitious child, passionate about technology and discovery.
          </h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#5B6572" }}>
            I&apos;ve narrowed my story down to five chapters and five photos, the short version of a longer one.
          </p>
        </motion.div>

        <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>
          {chapters.map((ch, i) => (
            <motion.div
              key={ch.src}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            >
              <div className="relative w-full mb-3 rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <Image src={ch.src} alt={ch.alt} fill className="object-cover" sizes="(max-width: 640px) 45vw, 220px" />
              </div>
              <div className="text-[11px] font-bold mb-1" style={{ letterSpacing: "0.04em", color: "var(--accent)" }}>{ch.label}</div>
              <p className="text-[13px] leading-snug m-0" style={{ color: "#3A4450" }}>{ch.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
