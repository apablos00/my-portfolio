"use client";
import { motion, useInView, Reorder, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const DragHandle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <circle cx="9" cy="6" r="1.6" fill="currentColor" />
    <circle cx="15" cy="6" r="1.6" fill="currentColor" />
    <circle cx="9" cy="12" r="1.6" fill="currentColor" />
    <circle cx="15" cy="12" r="1.6" fill="currentColor" />
    <circle cx="9" cy="18" r="1.6" fill="currentColor" />
    <circle cx="15" cy="18" r="1.6" fill="currentColor" />
  </svg>
);

const ShuffleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
    <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7M3 8V3h5M16 21h5v-5M9 9 3 3M15 15l6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const MEDALS = [
  { color: "#D9A441", glow: "0 0 20px rgba(217,164,65,0.35)" },
  { color: "#8FA6BE", glow: "0 0 14px rgba(143,166,190,0.2)" },
  { color: "#C4845A", glow: "0 0 14px rgba(196,132,90,0.2)" },
];

function shuffled(arr: number[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FunFacts() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [order, setOrder] = useState([0, 1, 2]);
  const [interacted, setInteracted] = useState(false);

  const rankLabel = (pos: number) =>
    pos === 0 ? t.funFacts.rankMost : pos === order.length - 1 ? t.funFacts.rankLeast : "";

  return (
    <section id="fun-facts" className="py-24 px-6 relative" ref={ref}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 40% at 20% 40%, rgba(74,144,208,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-4 mb-2 flex-wrap"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#E8F0FE] mb-3">
              {t.funFacts.heading}
            </h2>
            <p className="text-[#7A95AE] text-sm">{t.funFacts.instructions}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              setOrder((prev) => shuffled(prev));
              setInteracted(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:opacity-90 flex-shrink-0"
            style={{ color: "#6AAEE0", border: "1px solid rgba(74,144,208,0.35)", background: "rgba(74,144,208,0.08)" }}
          >
            <ShuffleIcon />
            {t.funFacts.shuffle}
          </button>
        </motion.div>

        <Reorder.Group
          as="div"
          axis="y"
          values={order}
          onReorder={(next) => {
            setOrder(next);
            setInteracted(true);
          }}
          className="flex flex-col gap-3 mt-6"
        >
          {order.map((factIdx, pos) => {
            const medal = MEDALS[pos];
            return (
              <Reorder.Item
                key={factIdx}
                value={factIdx}
                onDragStart={() => setInteracted(true)}
                className="glass-card rounded-xl pl-4 pr-5 py-4 flex items-center gap-4 cursor-grab active:cursor-grabbing select-none relative overflow-hidden"
                style={{ listStyle: "none", borderLeft: `3px solid ${medal.color}` }}
                whileDrag={{ scale: 1.04, boxShadow: `0 16px 36px rgba(4,12,24,0.55), ${medal.glow}`, zIndex: 10 }}
              >
                <motion.span
                  className="flex items-center justify-center rounded-full flex-shrink-0 text-sm font-bold"
                  style={{ width: "30px", height: "30px", background: `${medal.color}22`, color: medal.color, boxShadow: pos === 0 ? medal.glow : "none" }}
                  layout
                >
                  {pos + 1}
                </motion.span>
                <div className="flex-1 min-w-0">
                  <AnimatePresence mode="wait">
                    {rankLabel(pos) && (
                      <motion.p
                        key={rankLabel(pos)}
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.2 }}
                        className="text-[10px] font-bold tracking-widest uppercase mb-1"
                        style={{ color: medal.color }}
                      >
                        {rankLabel(pos)}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <p className="text-[#8AACCA] text-sm leading-relaxed">{t.funFacts.facts[factIdx]}</p>
                </div>
                <motion.span
                  className="flex-shrink-0"
                  style={{ color: "#4E6480" }}
                  animate={
                    !interacted && pos === 0
                      ? { y: [0, -3, 0], opacity: [0.5, 1, 0.5] }
                      : { y: 0, opacity: 1 }
                  }
                  transition={
                    !interacted && pos === 0
                      ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.2 }
                  }
                >
                  <DragHandle />
                </motion.span>
              </Reorder.Item>
            );
          })}
        </Reorder.Group>
      </div>
    </section>
  );
}
