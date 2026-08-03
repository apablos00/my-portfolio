"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const featuredProjects = [
  {
    slug: "eksamenboost",
    image: "/projects/proj-eksamenboost.webp",
    status: "Live platform",
    headline: "EksamenBoost",
    meta: "After an exciting journey in face-to-face and online teaching in platforms like GoStudent or Superprof, I thought it was the time to create my own tutoring platform. This is the result, eksamenboost, a platform that I started in March 2026 to support exam preparation for students at the Faculty of Mathematics and Natural Sciences at University of Oslo, targeting the most difficult courses according to examination statistics and students' testimonials. A dream come true... there's still a lot to come in the platform though.",
    link: "https://eksamenboost.no",
    linkLabel: "Visit eksamenboost.no",
  },
  {
    slug: "clearterms",
    image: "/projects/proj-clearterms.webp",
    status: "PoC",
    headline: "ClearTerms",
    meta: "The result of the work of my team during the second semester of my first year of my master at University of Oslo. We built an MVP of a platform focused on streamlining and helping SMBs (small and medium businesses) to find AI-implementation opportunities in their current workflows and processes, making the communication and adoption process frictionless.",
    link: "https://clearterms-b8n03o3tc-apablos00s-projects.vercel.app/",
    linkLabel: "View prototype",
  },
];

const quickProjects = [
  {
    name: "WhatsApp AI Chatbot",
    why: "I wanted to test how an AI assistant should behave inside a tool people already use daily, instead of asking them to learn a new app.",
    tagline: "Handles the full conversation, from routing to context, inside the chat.",
    tags: ["Python", "LLM API", "WhatsApp API"],
    link: "https://github.com/apablos00/whatsapp-chatbot-demo",
  },
  {
    name: "Autius",
    why: "While getting my driving license, lesson slots opened at random and were gone within minutes. I needed to know the second one appeared.",
    tagline: "Monitors the booking page around the clock and pings Discord instantly.",
    tags: ["Python", "Scraping", "Discord API"],
    link: "https://github.com/apablos00/autius-tracker",
  },
  {
    name: "TipsterAuto",
    why: "I follow sports tipsters to benchmark their strategies, but their calls land at all hours. I kept missing the window to act.",
    tagline: "Reads Telegram tips, extracts the bet, and places it automatically.",
    tags: ["Python", "Telegram API", "Bookmaker API"],
    link: "https://github.com/apablos00/tipster-auto",
  },
];

export default function Work() {
  const [activeSide, setActiveSide] = useState<"business" | "tech">("business");
  const isBusiness = activeSide === "business";
  const activeFill = "color-mix(in srgb, var(--accent) 20%, white)";
  const inactiveFill = "rgba(16,24,38,0.04)";

  return (
    <section id="work" className="px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 max-w-xl"
        >
          <div className="eyebrow mb-3.5">Selected work</div>
          <h2 className="font-display font-bold text-3xl sm:text-[42px] leading-tight mb-3.5">Things I&apos;ve shipped.</h2>
          <p className="text-sm sm:text-base leading-relaxed" style={{ color: "#5B6572" }}>
            Here I show some of the projects I&apos;m most proud of. The business ones are more recent and connected to the Current Me, whereas the technical ones belong mostly to the era when I was a purely technical guy.
          </p>
        </motion.div>

        <div className="flex flex-col items-center mb-2">
          <svg viewBox="0 0 100 100" width="160" height="160" style={{ overflow: "visible" }}>
            <line x1="50" y1="6" x2="50" y2="92" style={{ stroke: "rgba(16,24,38,0.18)", strokeWidth: 1.5, strokeDasharray: "2,3" }} />
            <path d="M45,92 C45,98 55,98 55,92 L52,88 L48,88 Z" style={{ fill: "rgba(16,24,38,0.2)" }} />
            <g
              onClick={() => setActiveSide("business")}
              className="cursor-pointer"
              style={{
                transformOrigin: "50px 50px",
                transform: `scale(${isBusiness ? 1.05 : 1})`,
                transition: "transform .3s cubic-bezier(.16,1,.3,1)",
              }}
            >
              <path
                d="M50,8 C38,4 22,8 12,20 C2,32 2,47 10,52 C1,58 2,71 12,77 C20,87 34,95 48,93 L50,93 Z"
                style={{ fill: isBusiness ? activeFill : inactiveFill, stroke: "var(--accent)", strokeWidth: isBusiness ? 2 : 1.2, transition: "fill .3s ease, stroke-width .3s ease" }}
              />
              <path d="M20,28 C26,24 32,26 36,32" style={{ fill: "none", stroke: "var(--ink)", strokeWidth: 1, opacity: 0.25, strokeLinecap: "round" }} />
              <path d="M15,49 C23,47 29,51 33,57" style={{ fill: "none", stroke: "var(--ink)", strokeWidth: 1, opacity: 0.25, strokeLinecap: "round" }} />
              <path d="M21,68 C27,66 33,70 37,76" style={{ fill: "none", stroke: "var(--ink)", strokeWidth: 1, opacity: 0.25, strokeLinecap: "round" }} />
            </g>
            <g
              onClick={() => setActiveSide("tech")}
              className="cursor-pointer"
              style={{
                transformOrigin: "50px 50px",
                transform: `scale(${!isBusiness ? 1.05 : 1})`,
                transition: "transform .3s cubic-bezier(.16,1,.3,1)",
              }}
            >
              <path
                d="M50,8 C62,4 78,8 88,20 C98,32 98,47 90,52 C99,58 98,71 88,77 C80,87 66,95 52,93 L50,93 Z"
                style={{ fill: !isBusiness ? activeFill : inactiveFill, stroke: "var(--accent)", strokeWidth: !isBusiness ? 2 : 1.2, transition: "fill .3s ease, stroke-width .3s ease" }}
              />
              <path d="M80,28 C74,24 68,26 64,32" style={{ fill: "none", stroke: "var(--ink)", strokeWidth: 1, opacity: 0.25, strokeLinecap: "round" }} />
              <path d="M85,49 C77,47 71,51 67,57" style={{ fill: "none", stroke: "var(--ink)", strokeWidth: 1, opacity: 0.25, strokeLinecap: "round" }} />
              <path d="M79,68 C73,66 67,70 63,76" style={{ fill: "none", stroke: "var(--ink)", strokeWidth: 1, opacity: 0.25, strokeLinecap: "round" }} />
            </g>
          </svg>
          <div className="flex gap-10 mt-4">
            <button
              onClick={() => setActiveSide("business")}
              className="bg-none border-none p-0 pb-1 cursor-pointer text-[12.5px] font-bold uppercase transition-colors duration-200"
              style={{
                letterSpacing: "0.06em",
                color: isBusiness ? "var(--ink)" : "#9AA3AD",
                borderBottom: `2px solid ${isBusiness ? "var(--accent)" : "transparent"}`,
              }}
            >
              Product Builder
            </button>
            <button
              onClick={() => setActiveSide("tech")}
              className="bg-none border-none p-0 pb-1 cursor-pointer text-[12.5px] font-bold uppercase transition-colors duration-200"
              style={{
                letterSpacing: "0.06em",
                color: !isBusiness ? "var(--ink)" : "#9AA3AD",
                borderBottom: `2px solid ${!isBusiness ? "var(--accent)" : "transparent"}`,
              }}
            >
              Software Engineer
            </button>
          </div>
          <div className="text-xs mt-3.5" style={{ color: "#9AA3AD" }}>Click a hemisphere to switch sides</div>
        </div>

        <div className="h-px my-10" style={{ background: "rgba(16,24,38,0.08)" }} />

        <div
          className="overflow-hidden transition-[max-height,opacity] duration-500"
          style={{ maxHeight: isBusiness ? "2000px" : "0px", opacity: isBusiness ? 1 : 0, marginBottom: isBusiness ? "64px" : "0px", transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
        >
          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))" }}>
            {featuredProjects.map((p) => (
              <div
                key={p.slug}
                className="rounded-2xl overflow-hidden bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(16,24,38,0.1)]"
                style={{ border: "1px solid rgba(16,24,38,0.12)" }}
              >
                <div className="relative w-full" style={{ height: 220 }}>
                  <Image src={p.image} alt={p.headline} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 480px" />
                </div>
                <div className="p-6">
                  <div
                    className="inline-block text-[11px] font-bold uppercase px-3 py-1.5 rounded-full mb-3.5"
                    style={{ letterSpacing: "0.06em", color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 8%, white)" }}
                  >
                    {p.status}
                  </div>
                  <h3 className="font-display font-bold text-xl leading-snug mb-2.5">{p.headline}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "#5B6572" }}>{p.meta}</p>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm no-underline inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-[var(--accent)]"
                  >
                    {p.linkLabel} ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="overflow-hidden transition-[max-height,opacity] duration-500"
          style={{ maxHeight: !isBusiness ? "2000px" : "0px", opacity: !isBusiness ? 1 : 0, transitionTimingFunction: "cubic-bezier(.16,1,.3,1)" }}
        >
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {quickProjects.map((q) => (
              <div
                key={q.name}
                className="rounded-2xl p-6 bg-white transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(16,24,38,0.1)]"
                style={{ border: "1px solid rgba(16,24,38,0.12)" }}
              >
                <div
                  className="inline-block text-[11px] font-bold uppercase px-3 py-1.5 rounded-full mb-3.5"
                  style={{ letterSpacing: "0.06em", color: "var(--accent)", background: "color-mix(in srgb, var(--accent) 8%, white)" }}
                >
                  Code repo
                </div>
                <h3 className="font-display font-bold text-lg leading-snug mb-2.5">{q.name}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#3A4450" }}>{q.tagline}</p>
                <div className="text-[11px] font-bold uppercase mb-2" style={{ letterSpacing: "0.06em", color: "#5B6572" }}>Why I built it</div>
                <p className="text-xs leading-relaxed mb-4" style={{ color: "#5B6572" }}>{q.why}</p>
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {q.tags.map((tag) => (
                    <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full" style={{ background: "rgba(16,24,38,0.06)", color: "#5B6572" }}>{tag}</span>
                  ))}
                </div>
                <a
                  href={q.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[13px] no-underline transition-colors duration-200 hover:text-[var(--accent)]"
                >
                  View code ↗
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
