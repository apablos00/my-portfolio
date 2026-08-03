"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#background", label: "Background" },
];

const sectionIds = [...navItems.map((i) => i.href.slice(1)), "contact"];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const visibility: Record<string, number> = {};
    const observers: IntersectionObserver[] = [];

    const pickActive = () => {
      const winner = Object.entries(visibility).sort((a, b) => b[1] - a[1])[0];
      if (winner && winner[1] > 0) setActiveSection(winner[0]);
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          visibility[id] = entry.intersectionRatio;
          pickActive();
        },
        { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const isContactActive = activeSection === "contact";

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 flex-wrap gap-4"
      style={{ background: "var(--bg)", borderBottom: "1px solid rgba(16,24,38,0.12)" }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full border flex items-center justify-center font-display font-bold text-[12.5px] flex-shrink-0"
          style={{ borderColor: "var(--ink)", letterSpacing: "-0.02em" }}
        >
          AP
        </div>
        <div className="w-px h-5" style={{ background: "rgba(16,24,38,0.2)" }} />
        <div className="font-display font-bold text-[15px] whitespace-nowrap" style={{ letterSpacing: "0.01em" }}>
          Alejandro Pablos
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <a
              key={item.href}
              href={item.href}
              className="relative font-bold text-[12.5px] uppercase no-underline pb-1 transition-colors duration-200"
              style={{ letterSpacing: "0.06em", color: isActive ? "var(--ink)" : "#5B6572" }}
            >
              {item.label}
              {isActive && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px]"
                  style={{ background: "var(--accent)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          );
        })}
        <a
          href="#contact"
          className="font-bold text-[12.5px] uppercase no-underline px-6 py-2.5 rounded-sm transition-colors duration-200 hover:bg-[var(--ink)] hover:text-[#F4F6F8]"
          style={{
            letterSpacing: "0.06em",
            border: "1.5px solid var(--ink)",
            background: isContactActive ? "var(--ink)" : "transparent",
            color: isContactActive ? "#F4F6F8" : "var(--ink)",
          }}
        >
          Get in touch
        </a>
      </div>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ background: "var(--ink)" }} />
        <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ background: "var(--ink)" }} />
        <span className={`block w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ background: "var(--ink)" }} />
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden w-full"
            style={{ background: "var(--bg)", borderTop: "1px solid rgba(16,24,38,0.1)" }}
          >
            <div className="flex flex-col gap-1 py-4">
              {[...navItems, { href: "#contact", label: "Get in touch" }].map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-bold text-sm uppercase no-underline py-3 transition-colors duration-200"
                    style={{ color: isActive ? "var(--accent)" : "var(--ink)", letterSpacing: "0.06em" }}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
