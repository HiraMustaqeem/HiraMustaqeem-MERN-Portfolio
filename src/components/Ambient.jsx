import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Ambient() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(233,228,247,0.025) 1px, transparent 1px),linear-gradient(90deg, rgba(233,228,247,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <motion.div style={{ y: y1 }} className="blob" data-b="1" />
      <motion.div style={{ y: y2 }} className="blob" data-b="2" />
      <motion.div style={{ y: y3 }} className="blob" data-b="3" />
    </div>
  );
}
