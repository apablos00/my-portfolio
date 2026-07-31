"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const navItems = [
  { href: "#profile", key: "profile" as const },
  { href: "#education", key: "education" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#more-about-me", key: "moreAboutMe" as const },
  { href: "#lets-connect", key: "connect" as const },
];

export default function Navigation() {
  const { lang, toggle: toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    // Track how much of each section is visible
    const visibility: Record<string, number> = {};

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

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(4, 11, 22, 0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(78,205,196,0.1)" : "none",
      }}
    >
      {/* Language toggle */}
      <button
        onClick={toggleLang}
        aria-label="Toggle language"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 flex items-center gap-0.5 rounded-full p-0.5 z-10"
        style={{ border: "1px solid rgba(74,144,208,0.3)", background: "rgba(4,11,22,0.4)" }}
      >
        <span
          className="px-2.5 py-2 rounded-full text-[11px] font-bold tracking-wide transition-colors duration-200"
          style={{
            color: lang === "en" ? "#D6E5F2" : "#4E6480",
            background: lang === "en" ? "rgba(74,144,208,0.22)" : "transparent",
          }}
        >
          EN
        </span>
        <span
          className="px-2.5 py-2 rounded-full text-[11px] font-bold tracking-wide transition-colors duration-200"
          style={{
            color: lang === "es" ? "#D6E5F2" : "#4E6480",
            background: lang === "es" ? "rgba(74,144,208,0.22)" : "transparent",
          }}
        >
          ES
        </span>
      </button>

      <div className="max-w-6xl mx-auto flex items-center justify-end md:justify-center">
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium transition-colors duration-200"
                style={{ color: isActive ? "#D6E5F2" : "#7A95AE" }}
              >
                {t.nav[l.key]}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-px"
                    style={{ background: "#4A90D0" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 mr-20 sm:mr-24"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#4A90D0] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#4A90D0] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#4A90D0] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(4,12,24,0.98)", borderBottom: "1px solid rgba(74,144,208,0.12)" }}
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((l) => {
                const isActive = activeSection === l.href.slice(1);
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-medium transition-colors py-3 text-base"
                    style={{ color: isActive ? "#6AAEE0" : "#D6E5F2" }}
                  >
                    {t.nav[l.key]}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
