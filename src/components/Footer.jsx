import React from "react";
import { motion } from "framer-motion";
import { Mail, Link2, ArrowUp } from "lucide-react";
import { EMAIL, LINKEDIN, MAILTO } from "../data.js";
// import { PhonePill } from "./Shared.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ borderTop: "1px solid var(--border)", position: "relative", zIndex: 1 }}>
      <div className="wrap" style={{ padding: "56px 32px 30px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1.1fr",
            gap: 40,
            marginBottom: 44,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 14,
                fontSize: 15,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)" }} />
              hira.dev
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: 13.5, maxWidth: 260 }}>
              MERN stack developer building responsive, component‑driven web
              apps — from UI to API to database.
            </p>
          </div>
          <div>
            <div className="footer-heading">Navigate</div>
            {["About", "Skills", "Projects", "Education"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="footer-link">
                {l}
              </a>
            ))}
          </div>
          <div>
            <div className="footer-heading">Connect</div>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener"
              className="footer-link"
              style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
            >
              <Link2 size={13} strokeWidth={2.3} /> LinkedIn
            </a>
            <div style={{ marginBottom: 11 }}>
              {/* <PhonePill number={PHONE} display="0335-2665465" className="footer-phone-pill" /> */}
            </div>
            <a
              href="#contact"
              className="footer-link"
              style={{ display: "inline-flex", alignItems: "center", gap: 7 }}
            >
              <ArrowUp size={13} strokeWidth={2.3} /> Contact 
            </a>
          </div>
          <div>
            <div className="footer-heading">Get in touch</div>
            <motion.a
              whileHover={{ x: 4 }}
              href={MAILTO}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "var(--accent-bright)",
                border: "1px solid var(--border-strong)",
                padding: "10px 16px",
                borderRadius: 9,
              }}
            >
              <Mail size={14} strokeWidth={2.3} /> {EMAIL}
            </motion.a>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)" }}>
            © {year} Hira Mustaqeem. All rights reserved.
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)" }}>
            Built with React <span style={{ color: "var(--accent)" }}>&</span> Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
