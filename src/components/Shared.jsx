import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useInView, animate, AnimatePresence } from "framer-motion";
import { Phone, Check } from "lucide-react";

export function StarIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.5l2.76 6.15 6.74.62-5.1 4.5 1.54 6.63L12 16.9l-5.94 3.5 1.54-6.63-5.1-4.5 6.74-.62L12 2.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MagneticButton({ children, as = "a", ...props }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function handleMove(e) {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  }
  function reset() {
    x.set(0);
    y.set(0);
  }

  const Comp = motion[as];
  return (
    <Comp
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.94 }}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Reveal({ children, delay = 0, y = 34, ...rest }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

// A phone contact pill: tapping it still triggers the normal tel: call
// action, but it also copies the number to the clipboard and shows a
// brief "Copied" confirmation — useful on desktop where tel: links
// can't actually place a call.
export function PhonePill({ number, display, className = "contact-pill" }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(number);
      setCopied(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1600);
    } catch (e) {
      // clipboard API unavailable — tel: link below still works fine
    }
  }

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <motion.a
      whileHover={{ y: -3, borderColor: "var(--accent)", color: "var(--accent-bright)" }}
      className={className}
      href={`tel:${number}`}
      onClick={handleClick}
      style={{ position: "relative" }}
    >
      <span className="ic" style={{ display: "flex" }}>
        <Phone size={13} strokeWidth={2.3} />
      </span>
      {display}
      <AnimatePresence>
        {copied && (
          <motion.span
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: "calc(100% + 8px)",
              left: "50%",
              transform: "translateX(-50%)",
              background: "var(--accent)",
              color: "#0A0714",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              padding: "5px 10px",
              borderRadius: 6,
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Check size={12} strokeWidth={3} /> Copied
          </motion.span>
        )}
      </AnimatePresence>
    </motion.a>
  );
}
