import React from "react";
import { motion } from "framer-motion";
import { Mail, Link2, ArrowUp } from "lucide-react";
import { LINKEDIN, MAILTO } from "../data.js";
import { Reveal, MagneticButton, PhonePill } from "./Shared.jsx";

export default function Contact() {
  return (
    <section id="contact" style={{ textAlign: "center", paddingBottom: 60 }}>
      <div className="wrap">
        <div className="eyebrow" style={{ justifyContent: "center" }}>
          Contact
        </div>
        <Reveal>
          <h2 className="section-title">Let's build something.</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="section-sub" style={{ marginLeft: "auto", marginRight: "auto" }}>
            Open to React / MERN roles, internships, and freelance work — reach
            out any time.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <MagneticButton
            href={MAILTO}
            whileHover={{ scale: 1.03 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px,5.5vw,44px)",
              fontWeight: 800,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 10,
              margin: "18px 0 40px",
              padding: "16px 20px",
              borderRadius: 20,
              background: "var(--surface)",
              border: "1px solid var(--border-strong)",
              maxWidth: "100%",
              boxSizing: "border-box",
            }}
          >
            <span style={{ display: "flex", color: "var(--accent-bright)", flexShrink: 0 }}>
              <Mail size={32} strokeWidth={2} />
            </span>
            <span style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}>
              hiramustaqeem09
              <span style={{ color: "var(--accent-bright)" }}>@gmail.com</span>
            </span>
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.15}>
          <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
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
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent-bright)" }}
              className="contact-pill"
              href="#home"
            >
              <span className="ic" style={{ display: "flex" }}>
                <ArrowUp size={13} strokeWidth={2.3} />
              </span>
              Back to top
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}