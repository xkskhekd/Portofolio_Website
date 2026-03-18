"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const experiences = [
  {
    role: "Electrical & ML Engineer",
    company: "PT. Nama Perusahaan",
    period: "2022 — Sekarang",
    location: "Jakarta, Indonesia",
    points: [
      "Merancang sistem monitoring distribusi daya 20kV dengan deteksi anomali real-time menggunakan ML",
      "Mengembangkan model predictive maintenance untuk motor industri dengan akurasi 94.2%",
      "Memimpin implementasi sistem SCADA berbasis web untuk 2 gedung komersial",
      "Menurunkan downtime produksi sebesar 25% melalui strategi maintenance berbasis data",
    ],
  },
  {
    role: "Electrical Engineer",
    company: "PT. Konsultan Energi",
    period: "2020 — 2022",
    location: "Bandung, Indonesia",
    points: [
      "Melakukan audit energi untuk 15+ gedung komersial dan industri",
      "Merancang sistem instalasi dan proteksi untuk beban hingga 2MW",
      "Mengembangkan tool otomasi audit energi yang mengurangi waktu pengerjaan 70%",
    ],
  },
  {
    role: "Research Assistant",
    company: "Universitas — Lab Sistem Tenaga",
    period: "2018 — 2020",
    location: "Bandung, Indonesia",
    points: [
      "Riset aplikasi machine learning untuk klasifikasi gangguan kualitas daya",
      "Publikasi 2 paper pada jurnal nasional terakreditasi",
      "Mengembangkan testbed untuk pengujian algoritma MPPT panel surya",
    ],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience" style={{ background: "rgba(20,20,20,0.4)" }}>
      <div style={{ marginBottom: "48px" }}>
        <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
          // pengalaman
        </p>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 700,
          color: "#EAEAEA",
        }}>
          Experience
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: "#0B0B0B",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "28px",
            }}
          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "20px",
            }}>
              <div>
                <h3 style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#EAEAEA",
                  marginBottom: "4px",
                }}>
                  {exp.role}
                </h3>
                <p style={{ color: "#22C55E", fontSize: "14px" }}>{exp.company}</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ color: "#9CA3AF", fontSize: "13px", fontFamily: "monospace" }}>{exp.period}</p>
                <p style={{ color: "#6B7280", fontSize: "12px", marginTop: "2px" }}>{exp.location}</p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {exp.points.map((point, j) => (
                <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#22C55E", fontSize: "13px", flexShrink: 0, marginTop: "1px" }}>▸</span>
                  <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.6 }}>{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}