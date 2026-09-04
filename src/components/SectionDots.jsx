import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

// A slim vertical rail of dots that tracks scroll position via
// IntersectionObserver and lets you jump straight to any section.
// The filled portion of the rail always shows how far through the
// page you are, and the active dot expands into a label on hover.
export default function SectionDots() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => observer.observe(el));

    function onScroll() {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
        setProgress(Math.min(1, Math.max(0, scrolled)));
        ticking.current = false;
      });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === active));

  return (
    <nav
      aria-label="Section navigation"
      className="section-dots"
      style={{
        position: "fixed",
        right: 26,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 90,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0,
      }}
    >
      {/* progress rail */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: 2,
          transform: "translateX(-50%)",
          background: "var(--border)",
          borderRadius: 2,
        }}
      >
        <motion.div
          style={{
            width: "100%",
            borderRadius: 2,
            background: "linear-gradient(var(--accent-2),var(--accent),var(--gold))",
            transformOrigin: "top",
          }}
          animate={{ height: `${progress * 100}%` }}
          transition={{ duration: 0.15, ease: "linear" }}
        />
      </div>

      {sections.map((s, i) => {
        const isActive = i === activeIndex;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="section-dot"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "13px 0",
              width: 28,
            }}
          >
            <motion.span
              animate={{
                scale: isActive ? 1.3 : 1,
                backgroundColor: isActive ? "var(--accent)" : "var(--text-dim)",
                boxShadow: isActive
                  ? "0 0 0 5px var(--accent-soft)"
                  : "0 0 0 0px transparent",
              }}
              transition={{ duration: 0.3 }}
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                zIndex: 1,
              }}
            />
            <span className="section-dot-label">{s.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
