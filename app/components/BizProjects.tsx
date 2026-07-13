"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GithubIcon from "./GithubIcon";
import { useLanguage } from "../i18n/LanguageContext";

const projects = [
  {
    id: "eksamenboost" as const,
    name: "EksamenBoost",
    link: "https://eksamenboost.no",
    linkLabel: "eksamenboost.no",
    github: null,
    color: "#6AAEE0",
  },
  {
    id: "clearterms" as const,
    name: "ClearTerms",
    link: "https://clearterms-b8n03o3tc-apablos00s-projects.vercel.app/",
    linkLabel: "clearterms.vercel.app",
    github: null,
    color: "#D9A441",
  },
];

export default function BizProjects() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="biz-projects"
      className="py-28 px-6 relative"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #040C18 0%, #061525 50%, #040C18 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 10% 70%, rgba(144,198,234,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#D6E5F2] mb-4">
            {t.bizProjects.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((proj, i) => {
            const bp = t.bizProjects.projects[proj.id];
            return (
            <motion.div
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col"
            >
              <div
                className="h-px w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${proj.color}80, transparent)` }}
              />

              <div className="p-5 flex flex-col flex-1 gap-4">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="font-bold text-[#D6E5F2] text-base leading-tight">{proj.name}</h3>
                  </div>
                  <p className="text-[#7A95AE] text-xs italic">{bp.tagline}</p>
                </div>

                <p className="text-[#8AACCA] text-sm leading-relaxed flex-1">{bp.description}</p>

                <p className="text-[10px] font-bold tracking-widest uppercase" style={{ color: proj.color }}>
                  {bp.status}
                </p>

                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      color: proj.color,
                      border: `1px solid ${proj.color}50`,
                      background: `${proj.color}10`,
                    }}
                  >
                    {proj.linkLabel}
                  </a>
                ) : proj.github ? (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:opacity-90"
                    style={{
                      color: proj.color,
                      border: `1px solid ${proj.color}50`,
                      background: `${proj.color}10`,
                    }}
                  >
                    <GithubIcon />
                    {t.techProjects.viewOnGithub}
                  </a>
                ) : null}
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
