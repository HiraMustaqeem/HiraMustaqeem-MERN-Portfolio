import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { GitBranch, ExternalLink, FileText } from "lucide-react";
import { projects } from "../data.js";
import { Reveal, StarIcon } from "./Shared.jsx";

function ActionButton({ href, icon: Icon, label }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent-bright)" }}
      whileTap={{ scale: 0.96 }}
      className="project-action"
    >
      <Icon size={14} strokeWidth={2.2} />
      {label}
    </motion.a>
  );
}

function ProjectCard({ p, i }) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 150, damping: 16 });
  const sry = useSpring(ry, { stiffness: 150, damping: 16 });

  function onMove(e) {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 5);
    rx.set(py * -4);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <Reveal delay={i * 0.1}>
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX: srx, rotateY: sry, transformPerspective: 1000, position: "relative" }}
        whileHover={{ boxShadow: "0 30px 70px -25px rgba(0,0,0,0.6)" }}
        transition={{ boxShadow: { duration: 0.3 } }}
        className="project-card"
      >
        {p.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -14 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 12 }}
            style={{
              position: "absolute",
              top: -16,
              right: 22,
              zIndex: 5,
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "linear-gradient(135deg,#FFD75E,var(--gold))",
              color: "#241900",
              padding: "8px 14px 8px 10px",
              borderRadius: 999,
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              fontWeight: 700,
              boxShadow: "0 8px 24px rgba(255,197,61,0.4)",
            }}
          >
            <motion.span
              animate={{ rotate: [0, 15, -10, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "flex" }}
            >
              <StarIcon size={15} />
            </motion.span>
            Project of the Month
          </motion.div>
        )}

        {/* browser chrome bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "14px 18px",
            background: "var(--surface-2)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ display: "flex", gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--text-dim)", opacity: 0.5 }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--text-dim)", opacity: 0.5 }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--text-dim)", opacity: 0.5 }} />
          </div>
          <div
            style={{
              flex: 1,
              background: "var(--bg)",
              borderRadius: 7,
              padding: "6px 14px",
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              color: "var(--text-dim)",
            }}
          >
            {p.url}
          </div>
        </div>

        {/* project screenshot */}
        <div className="project-image-frame">
          <img src={p.image} alt={`${p.name} preview`} loading="lazy" className="project-image" />
        </div>

        <div className="project-body" style={{ padding: 34 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 24, marginBottom: 20 }} className="project-head">
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)", marginBottom: 10 }}>
                {p.index} · {p.type}
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 25, fontWeight: 700, marginBottom: 6 }}>
                {p.name}
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--accent-2)",
                  display: "block",
                }}
              >
                {p.tagline}
              </span>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-dim)",
                textAlign: "right",
                whiteSpace: "nowrap",
                paddingTop: 4,
              }}
            >
              {p.dates}
            </div>
          </div>

          <p style={{ color: "var(--text-muted)", fontSize: 15, maxWidth: 640, marginBottom: 22 }}>{p.desc}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
            {p.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <ActionButton href={p.github} icon={GitBranch} label="GitHub" />
            {/* <ActionButton href={p.live} icon={ExternalLink} label="Live Preview" />
            <ActionButton href={p.readme} icon={FileText} label="README.md" /> */}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="eyebrow">Projects</div>
        <Reveal>
          <h2 className="section-title">Selected work.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-sub">
            Two full‑stack builds — from a customer‑facing storefront to a
            multi‑role hotel platform.
          </p>
        </Reveal>
        {projects.map((p, i) => (
          <div key={p.name} style={{ marginBottom: 44 }}>
            <ProjectCard p={p} i={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
