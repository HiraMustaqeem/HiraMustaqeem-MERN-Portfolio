import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MAILTO } from "../data.js";
import { MagneticButton, Counter } from "./Shared.jsx";

const codeLines = [
  { t: "const developer = {" },
  { t: '  name: "Hira Mustaqeem",' },
  { t: '  role: "MERN Stack Developer",' },
  { t: '  stack: ["React", "Node", "Express", "MongoDB"],' },
  { t: '  based_in: "Karachi, Pakistan",' },
  { t: '  status: "Available for hire"' },
  { t: "};" },
  { t: "" },
  { t: "// renders reusable, well-tested UI", c: true },
  { t: "deploy(developer);" },
];

function colorize(text) {
  return text
    .replace(/"([^"]*)"/g, '<span style="color:var(--accent-2)">"$1"</span>')
    .replace(
      /\b(const|deploy)\b/g,
      '<span style="color:#F27993">$1</span>'
    )
    .replace(
      /\b(name|role|stack|based_in|status)\b(?=:)/g,
      '<span style="color:var(--gold)">$1</span>'
    );
}

function Typewriter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= codeLines.length) return;
    const current = codeLines[count];
    const delay = count === 0 ? 500 : current && current.t.length ? 260 : 120;
    const id = setTimeout(() => setCount((c) => c + 1), delay);
    return () => clearTimeout(id);
  }, [count]);

  const lines = codeLines.slice(0, count);

  return (
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 14, minHeight: 270 }}>
      {lines.map((l, idx) => (
        <div
          key={idx}
          style={{
            whiteSpace: "pre",
            color: l.c ? "var(--text-dim)" : "var(--text)",
            fontStyle: l.c ? "italic" : "normal",
          }}
        >
          <span
            style={{
              color: "var(--text-dim)",
              display: "inline-block",
              width: 22,
              userSelect: "none",
            }}
          >
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span dangerouslySetInnerHTML={{ __html: colorize(l.t) || "&nbsp;" }} />
        </div>
      ))}
      <motion.span
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        style={{
          display: "inline-block",
          width: 8,
          height: 14,
          background: "var(--accent)",
          marginLeft: 26,
          verticalAlign: "middle",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 120,
      }}
    >
      <div className="wrap">
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--accent-2)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 22,
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0.2, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "var(--accent-2)",
                  display: "inline-block",
                }}
              />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                fontSize: "clamp(40px,5.4vw,64px)",
                lineHeight: 1.06,
                marginBottom: 26,
              }}
            >
              Building full‑stack products with the{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg,var(--accent),var(--accent-2))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                MERN
              </span>{" "}
              stack.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              style={{
                fontSize: 17,
                color: "var(--text-muted)",
                maxWidth: 480,
                marginBottom: 38,
              }}
            >
              I'm Hira Mustaqeem, a React‑focused developer who turns interfaces
              into reusable, well‑architected components — and backs them with
              real APIs, auth, and data.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42 }}
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 48,
              }}
            >
              <MagneticButton
                href="#projects"
                className="btn-primary"
                whileHover={{
                  y: -2,
                  boxShadow: "0 0 30px rgba(139,124,255,0.45)",
                }}
              >
                View projects →
              </MagneticButton>
              <MagneticButton href={MAILTO} className="btn-ghost" whileHover={{ y: -2 }}>
                Email me ✉
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              style={{ display: "flex", gap: 32, flexWrap: "wrap" }}
            >
              {[
                ["2", "Full‑stack projects"],
                ["10", "Technologies"],
                ["Karachi", "Based in"],
              ].map(([n, l]) => (
                <div
                  key={l}
                  style={{
                    borderLeft: "2px solid var(--border-strong)",
                    paddingLeft: 14,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 24,
                      fontWeight: 700,
                    }}
                  >
                    {isNaN(Number(n)) ? n : <Counter to={Number(n)} suffix="+" />}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: "var(--text-dim)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-strong)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 30px 90px -20px rgba(0,0,0,0.65)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 18px",
                background: "var(--surface-2)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28c840" }} />
              <span
                style={{
                  marginLeft: 10,
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text-dim)",
                }}
              >
                developer.js
              </span>
            </div>
            <div style={{ padding: "26px 24px" }}>
              <Typewriter />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          bottom: 34,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          color: "var(--text-dim)",
          letterSpacing: "0.1em",
        }}
      >
        <div
          style={{
            width: 1,
            height: 34,
            background: "linear-gradient(var(--accent), transparent)",
          }}
        />
        SCROLL
      </motion.div>
    </section>
  );
}
