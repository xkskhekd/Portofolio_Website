"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Link from "next/link";

const skills = [
  "Power Systems",
  "Machine Learning",
  "Embedded Systems",
  "Signal Processing",
  "SCADA / HMI",
  "Predictive Maintenance",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 48px 48px",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow orb */}
      <div
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.7 }}
          style={{ marginBottom: "32px" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#141414",
              border: "1px solid rgba(34,197,94,0.25)",
              padding: "8px 16px",
              borderRadius: "999px",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#22C55E",
                borderRadius: "50%",
              }}
            />
            <span style={{ fontSize: "13px", color: "#22C55E" }}>
              Open to Opportunities
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          <span style={{ color: "#EAEAEA" }}>Electrical Engineer</span>
          <br />
          <span style={{ color: "#EAEAEA" }}>applying </span>
          <span style={{ color: "#22C55E" }}>Machine Learning</span>
          <br />
          <span
            style={{
              color: "#9CA3AF",
              fontSize: "clamp(28px, 5vw, 52px)",
              fontWeight: 500,
            }}
          >
            to real-world engineering systems
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            fontSize: "17px",
            color: "#9CA3AF",
            maxWidth: "560px",
            lineHeight: 1.7,
            marginBottom: "32px",
          }}
        >
          Saya merancang sistem yang menggabungkan rekayasa kelistrikan dengan
          kecerdasan data — dari infrastruktur daya hingga embedded intelligence.
        </motion.p>

        {/* Skill chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "40px",
          }}
        >
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <a href="/cv.pdf" download className="btn-primary">
            <Download size={16} />
            Download CV
          </a>

          <Link href="#projects" className="btn-secondary">
            Lihat Proyek
            <ArrowDown size={16} />
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "32px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "0.1em" }}>
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: "1px",
            height: "32px",
            background: "linear-gradient(to bottom, rgba(34,197,94,0.5), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}