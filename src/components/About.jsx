import React from "react";
import { motion } from "framer-motion";
import { Mail, Link2 } from "lucide-react";
import { EMAIL, LINKEDIN, MAILTO } from "../data.js";
import { Reveal, PhonePill } from "./Shared.jsx";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="eyebrow">Summary</div>
        <Reveal>
          <h2 className="section-title">A developer who thinks in components.</h2>
        </Reveal>
        <div
          className="about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          <Reveal delay={0.05}>
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: 30,
              }}
            >
              {[
                ["Role", "MERN Stack Developer"],
                ["Location", "Karachi, Malir — Pakistan"],
                ["Focus", "React.js & API‑driven apps"],
              ].map(([l, v], i, arr) => (
                <div key={l} style={{ marginBottom: i === arr.length - 1 ? 0 : 22 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11.5,
                      color: "var(--text-dim)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      marginBottom: 8,
                    }}
                  >
                    {l}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 19,
                      fontWeight: 600,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <p style={{ color: "var(--text-muted)", fontSize: 15.5, marginBottom: 18 }}>
                Passionate and detail‑oriented{" "}
                <strong style={{ color: "var(--text)" }}>React Developer</strong>{" "}
                skilled in JavaScript (ES6+), React.js, Hooks, Context API, HTML5,
                CSS3, Git, and RESTful APIs. Experienced in building responsive,
                interactive, and user‑friendly web applications using reusable
                components.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15.5, marginBottom: 18 }}>
                Strong understanding of{" "}
                <strong style={{ color: "var(--text)" }}>
                  component‑based architecture
                </strong>
                , state management, API integration, debugging, and responsive
                design — with the ability to solve technical problems, manage
                multiple projects, and meet deadlines.
              </p>
              <p style={{ color: "var(--text-muted)", fontSize: 15.5, marginBottom: 26 }}>
                Seeking an opportunity to contribute to a professional team and
                grow as a React developer.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <motion.a
                  whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent-bright)" }}
                  className="contact-pill"
                  href={MAILTO}
                >
                  <span className="ic" style={{ display: "flex" }}>
                    <Mail size={13} strokeWidth={2.3} />
                  </span>
                  {EMAIL}
                </motion.a>
                <motion.a
                  whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent-bright)" }}
                  className="contact-pill"
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener"
                >
                  <span className="ic" style={{ display: "flex" }}>
                    <Link2 size={13} strokeWidth={2.3} />
                  </span>
                  linkedin.com/in/hira‑mustaqeem
                </motion.a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
