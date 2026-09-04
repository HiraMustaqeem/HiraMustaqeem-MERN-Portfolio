import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Mail, Menu, X } from "lucide-react";
import { CV_URL, MAILTO } from "../data.js";
import { MagneticButton } from "./Shared.jsx";

const links = ["About", "Skills", "Projects", "Education", "Contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: "blur(14px)",
        background: scrolled ? "rgba(10,7,20,0.78)" : "rgba(10,7,20,0.3)",
        borderBottom: "1px solid var(--border)",
        transition: "background .3s ease",
      }}
    >
      <nav
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 0",
        }}
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            gap: 8,
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          <motion.span
            animate={{
              boxShadow: [
                "0 0 0px var(--accent)",
                "0 0 12px var(--accent)",
                "0 0 0px var(--accent)",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity }}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "inline-block",
            }}
          />
          hira.dev
        </a>

        {/* desktop links */}
        <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {links.slice(0, 4).map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link">
              {l}
            </a>
          ))}
          <MagneticButton
            href={CV_URL}
            target="_blank"
            rel="noopener"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12.5,
              fontWeight: 600,
              color: "#0A0714",
              background: "linear-gradient(135deg,var(--accent),#6E5CFF)",
              padding: "10px 18px",
              borderRadius: 8,
              marginLeft: 8,
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <FileText size={14} strokeWidth={2.3} />
            Check CV
          </MagneticButton>
        </div>

        {/* mobile trigger */}
        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "transparent",
            border: "1px solid var(--border-strong)",
            borderRadius: 8,
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text)",
            zIndex: 2,
            flexShrink: 0,
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              overflow: "hidden",
              background: "rgba(10,7,20,0.97)",
              borderBottom: "1px solid var(--border)",
            }}
            className="nav-mobile-panel"
          >
            <div style={{ padding: "8px 32px 28px", display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((l, i) => (
                <motion.a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 15,
                    color: "var(--text-muted)",
                    padding: "12px 4px",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {l}
                </motion.a>
              ))}
              <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener"
                  onClick={() => setOpen(false)}
                  style={{
                    flex: 1,
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0A0714",
                    background: "linear-gradient(135deg,var(--accent),#6E5CFF)",
                    padding: "13px 16px",
                    borderRadius: 9,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                  }}
                >
                  <FileText size={15} strokeWidth={2.3} /> Check CV
                </a>
                <a
                  href={MAILTO}
                  onClick={() => setOpen(false)}
                  style={{
                    flex: 1,
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--text)",
                    border: "1px solid var(--border-strong)",
                    padding: "13px 16px",
                    borderRadius: 9,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 7,
                  }}
                >
                  <Mail size={15} strokeWidth={2.3} /> Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}