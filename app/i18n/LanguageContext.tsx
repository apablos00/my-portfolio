"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, type Translations } from "./translations";

type Lang = "en" | "es";

type LanguageContextValue = {
  lang: Lang;
  toggle: () => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang");
    if (stored === "en" || stored === "es") setLang(stored);
  }, []);

  const toggle = () => {
    setLang((prev) => {
      const next = prev === "en" ? "es" : "en";
      window.localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
