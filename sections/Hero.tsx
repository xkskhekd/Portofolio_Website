"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Image from "next/image";

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
        padding: "80px 80px 48px",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        backgroundImage: "linear-gradient(#22C55E 1px, transparent 1px), linear-gradient(90deg, #22C55E 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      {/* Glow orb */}
      <div style={{
        position: "absolute",
        top: "25%",
        right: "20%",
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* 2 kolom */}
      <div style={{
        maxWidth: "1152px",
        margin: "0 auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 340px",
        gap: "48px",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}>

        {/* Kolom kiri */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.7 }}
            style={{ marginBottom: "32px" }}
          >
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#141414",
              border: "1px solid rgba(34,197,94,0.25)",
              padding: "8px 16px",
              borderRadius: "999px",
            }}>
              <span style={{ width: "8px", height: "8px", background: "#22C55E", borderRadius: "50%" }} />
              <span style={{ fontSize: "13px", color: "#22C55E" }}>Open to Opportunities</span>
            </div>
          </motion.div>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.7 }}
            style={{
              fontSize: "14px",
              color: "#FFFFFF",
              fontFamily: "monospace",
              marginBottom: "20px",
              letterSpacing: "0.05em",
            }}
          >
            Hello World, Saya Fathi Annaqi
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(28px, 3.5vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              marginBottom: "0px",
            }}
          >
            <span style={{ color: "#EAEAEA" }}>Electrical Engineer</span>
            <br />
            <span style={{ color: "#9CA3AF", fontWeight: 500, fontSize: "clamp(20px, 1.8vw, 40px)" }}>
              yang juga ngutak-ngatik
            </span>
            <br />
            <span style={{ color: "#22C55E" }}>Machine Learning</span>
          </motion.h1>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{
              fontSize: "12px",
              color: "#9CA3AF",
              maxWidth: "480px",
              lineHeight: 1.8,
              marginBottom: "32px",
              marginTop: "20px",
            }}
          >
            Saya suka membangun sistem yang benar-benar bekerja — dari panel listrik
            sampai model prediksi. Sedang menyelesaikan studi Teknik Elektro sambil
            aktif di dunia AI dan embedded systems.
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "36px" }}
          >
            {["Power Systems", "Machine Learning", "Embedded Systems", "ESP32/Arduino", "Python"].map((skill) => (
              <span key={skill} style={{
                fontSize: "12px",
                color: "#6B7280",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "4px 10px",
                borderRadius: "6px",
                fontFamily: "monospace",
              }}>
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}
          >
            <a href="/cv.pdf" download style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              color: "#0B0B0B",
              background: "#22C55E",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
            }}>
              <Download size={15} />
              Download CV
            </a>
            <a href="#projects" onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "14px",
                color: "#6B7280",
                textDecoration: "none",
                padding: "10px 4px",
                cursor: "pointer",
              }}>
              Lihat proyek saya
              <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>

        {/* Kolom kanan: foto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            position: "relative",
            width: "340px",
            height: "420px",
            flexShrink: 0,
          }}
        >
          <div style={{
            position: "absolute",
            inset: "-20px",
            background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }} />

          <div style={{
            position: "absolute",
            inset: 0,
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "24px",
            zIndex: 0,
          }} />

          <Image
            src="/images/photo.png"
            alt="Profile Photo"
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "24px",
              filter: "grayscale(20%)",
            }}
          />

          <div style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            background: "linear-gradient(to top, #0B0B0B, transparent)",
            borderRadius: "0 0 24px 24px",
            zIndex: 1,
          }} />

          <div style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(11,11,11,0.85)",
            border: "1px solid rgba(34,197,94,0.25)",
            backdropFilter: "blur(8px)",
            borderRadius: "999px",
            padding: "8px 20px",
            zIndex: 2,
            whiteSpace: "nowrap",
          }}>
            <span style={{ fontSize: "12px", color: "#22C55E", fontFamily: "monospace" }}>
              EE + ML Engineer
            </span>
          </div>
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
        <span style={{ fontSize: "11px", color: "#6B7280", letterSpacing: "0.1em" }}>scroll</span>
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