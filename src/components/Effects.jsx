import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "framer-motion";

export function CursorGlow() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 2,
        pointerEvents: "none",
        width: 480,
        height: 480,
        borderRadius: "50%",
        translateX: sx,
        translateY: sy,
        x: "-50%",
        y: "-50%",
        background:
          "radial-gradient(circle, rgba(139,124,255,0.10), transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        transformOrigin: "0% 50%",
        background:
          "linear-gradient(90deg,var(--accent-2),var(--accent),var(--gold))",
        scaleX,
        zIndex: 200,
      }}
    />
  );
}
