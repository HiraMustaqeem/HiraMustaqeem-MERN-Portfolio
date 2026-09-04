import React from "react";
import { eduItems, courseItems } from "../data.js";
import { Reveal } from "./Shared.jsx";

function TimelineCol({ heading, items, delay }) {
  return (
    <Reveal delay={delay}>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          color: "var(--accent-bright)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: 26,
        }}
      >
        {heading}
      </div>
      {items.map((it, i) => (
        <div
          key={it.h}
          style={{
            position: "relative",
            paddingLeft: 28,
            paddingBottom: i === items.length - 1 ? 0 : 32,
            borderLeft: "1px solid var(--border-strong)",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: -5,
              top: 2,
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "var(--accent)",
              boxShadow: "0 0 0 4px var(--accent-soft)",
            }}
          />
          <h4 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 600, marginBottom: 4 }}>
            {it.h}
          </h4>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)" }}>{it.m}</div>
        </div>
      ))}
    </Reveal>
  );
}

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <div className="eyebrow">Education</div>
        <Reveal>
          <h2 className="section-title">Background &amp; certifications.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-sub">
            Formal education alongside hands‑on, industry‑aligned training.
          </p>
        </Reveal>
        <div className="edu-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 }}>
          <TimelineCol heading="Education" items={eduItems} delay={0.05} />
          <TimelineCol heading="Courses & Certificates" items={courseItems} delay={0.15} />
        </div>
      </div>
    </section>
  );
}
