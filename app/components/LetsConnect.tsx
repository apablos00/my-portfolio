"use client";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useLanguage } from "../i18n/LanguageContext";

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002ZM7 8.48H3V21h4V8.48ZM13.32 8.48H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48Z" fill="currentColor" />
  </svg>
);

const CvIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M6 2.5h9l4.5 4.5V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M15 2.5V7a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M8.5 13h7M8.5 16.2h7M8.5 9.8h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const OpenIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function LetsConnect() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState<number | null>(null);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  const connections = [
    {
      label: t.letsConnect.linkedinLabel,
      sub: t.letsConnect.linkedinSub,
      value: "https://www.linkedin.com/in/alejandro-pablos-sanchez",
      href: "https://www.linkedin.com/in/alejandro-pablos-sanchez",
      color: "#0A66C2",
      icon: LinkedInIcon,
    },
    {
      label: t.letsConnect.cvLabel,
      sub: t.letsConnect.cvSub,
      value: origin ? `${origin}/Alejandro_Pablos_CV_startup_2026.pdf` : "",
      href: "/Alejandro_Pablos_CV_startup_2026.pdf",
      color: "#4A90D0",
      icon: CvIcon,
    },
  ];

  return (
    <section
      id="lets-connect"
      className="py-28 px-6 relative"
      ref={ref}
      style={{ background: "linear-gradient(180deg, #040B16 0%, #071221 60%, #040B16 100%)" }}
    >
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 20%, rgba(78,205,196,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: "spring", stiffness: 260, damping: 14 }}
          className="text-center mb-4"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#E8F0FE] mb-4">
            {t.letsConnect.heading}
          </h2>
          <p className="text-[#7A95AE] text-base">{t.letsConnect.subheading}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto">
          {connections.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.4, rotate: i % 2 === 0 ? -8 : 8 }}
              animate={
                inView ? { opacity: 1, scale: 1, rotate: 0 } : {}
              }
              transition={{ type: "spring", stiffness: 220, damping: 12, delay: 0.25 + i * 0.15 }}
              whileHover={{ scale: 1.04, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileTap={{ scale: 0.96 }}
              className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col items-center gap-4 text-center relative overflow-hidden"
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
              />
              {/* Direct one-tap open — scanning your own phone's QR code doesn't work, so mobile visitors need a real link */}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={t.letsConnect.openLinkInstead}
                className="absolute top-3 right-3 z-10 flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{ color: item.color, background: `${item.color}14`, border: `1px solid ${item.color}30` }}
              >
                <OpenIcon />
              </a>
              <button
                type="button"
                onClick={() => setExpanded(i)}
                className="flex flex-col items-center gap-4 w-full cursor-pointer"
              >
                <div className="p-3 rounded-xl" style={{ background: "#FFFFFF" }}>
                  <QRCodeSVG
                    value={item.value || item.href}
                    size={116}
                    bgColor="#FFFFFF"
                    fgColor="#040B16"
                    level="M"
                  />
                </div>
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex items-center gap-2">
                    <span style={{ color: item.color }}>
                      <item.icon />
                    </span>
                    <p className="text-sm font-semibold text-[#E8F0FE]">{item.label}</p>
                  </div>
                  <p className="text-[#7A95AE] text-xs">{item.sub}</p>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {expanded !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6"
            style={{ background: "rgba(2,6,14,0.88)", backdropFilter: "blur(6px)" }}
            onClick={() => setExpanded(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card rounded-3xl p-8 flex flex-col items-center gap-5 text-center max-w-xs w-full"
            >
              <div className="flex items-center gap-2">
                <span style={{ color: connections[expanded].color }}>
                  {(() => {
                    const Icon = connections[expanded].icon;
                    return <Icon />;
                  })()}
                </span>
                <p className="text-lg font-bold text-[#E8F0FE]">{connections[expanded].label}</p>
              </div>
              <div className="p-4 rounded-2xl" style={{ background: "#FFFFFF" }}>
                <QRCodeSVG
                  value={connections[expanded].value || connections[expanded].href}
                  size={220}
                  bgColor="#FFFFFF"
                  fgColor="#040B16"
                  level="M"
                />
              </div>
              <p className="text-[#8AACCA] text-sm">{connections[expanded].sub}</p>
              <a
                href={connections[expanded].href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold underline underline-offset-4"
                style={{ color: connections[expanded].color }}
              >
                {t.letsConnect.openLinkInstead}
              </a>
              <button
                type="button"
                onClick={() => setExpanded(null)}
                className="text-[#4E6480] text-xs mt-1"
              >
                {t.letsConnect.close}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
