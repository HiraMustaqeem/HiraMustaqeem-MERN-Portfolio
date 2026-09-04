import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data.js";
import { Reveal } from "./Shared.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="eyebrow">Skills</div>
        <Reveal>
          <h2 className="section-title">The stack, end to end.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-sub">
            From pixel‑level UI decisions to the API and database powering them.
          </p>
        </Reveal>
        <div
          className="skills-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}
        >
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, borderColor: "var(--border-strong)" }}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 16,
                  padding: 26,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: "var(--accent-soft)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-bright)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {g.code}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600 }}>
                    {g.title}
                  </h3>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {g.items.map((it, j) => (
                    <motion.span
                      key={it}
                      className="tag"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.04, duration: 0.35, ease: "backOut" }}
                      whileHover={{
                        color: "var(--accent-bright)",
                        borderColor: "var(--accent)",
                        background: "var(--accent-soft)",
                      }}
                    >
                      {it}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
