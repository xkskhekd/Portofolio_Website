"use client";

import { motion } from "framer-motion";
import { Layers, BarChart2, Wrench } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { useIsMobile } from "@/hooks/useIsMobile";

const cards = [
  {
    icon: Layers,
    title: "System Thinking",
    desc: "Setiap masalah teknis dipahami sebagai bagian dari sistem yang lebih besar. Saya memetakan dependensi, failure mode, dan boundary condition sebelum menulis satu baris kode.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Engineering",
    desc: "Keputusan teknis didukung oleh data dan measurement. Dari power quality analysis hingga model ML, saya selalu memvalidasi asumsi dengan data nyata dari lapangan.",
  },
  {
    icon: Wrench,
    title: "Practical Implementation",
    desc: "Solusi terbaik adalah yang bisa diimplementasikan dan dipelihara. Saya menyeimbangkan kesempurnaan teknis dengan pragmatisme lapangan dan constraint nyata.",
  },
];

export default function Approach() {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="approach" style={{ background: "rgba(20,20,20,0.3)" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
          // pendekatan
        </p>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 700,
          color: "#EAEAEA",
        }}>
          Engineering Approach
        </h2>
        <p style={{
          color: "#9CA3AF",
          fontSize: "15px",
          marginTop: "16px",
          maxWidth: "640px",
          lineHeight: 1.7,
        }}>
          Saya mendekati masalah teknik dengan menggabungkan desain sistem yang
          praktis dengan metode berbasis data. Fokus saya adalah membangun sistem
          yang andal — dari infrastruktur daya hingga embedded intelligence.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: isMobile ? "16px" : "24px",
      }}>
        {cards.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            style={{
              background: "#0B0B0B",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: "12px",
              padding: "24px",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.2)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}
          >
            <div style={{
              width: "40px",
              height: "40px",
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
              <Icon size={18} color="#22C55E" />
            </div>
            <h3 style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              color: "#EAEAEA",
              marginBottom: "12px",
            }}>
              {title}
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: 1.7 }}>
              {desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}