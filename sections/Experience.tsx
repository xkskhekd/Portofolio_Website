"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const experiences = [
  {
    type: "programmer",
    role: "AI Cohort Member",
    company: "Coding Camp Powered by DBS Foundation",
    period: "Feb 2026 — Sekarang",
    location: "Remote, Indonesia",
    points: [
      "-",
      "-",
      "-",
      "-",
    ],
  },
  {
    type: "electrical",
    role: "Electrical Engineer Laboratory Assistant",
    company: "Universitas Malikussaleh",
    period: "Maret 2025 — Sekarang",
    location: "Lhokseumawe, Indonesia",
    points: [
      "Menjadi instruktur di 6 laboratorium teknik listrik, mendukung praktikum mahasiswa semester 2–7.",
      "Mengelola kegiatan laboratorium end-to-end termasuk persiapan alat, pengajaran, troubleshooting rangkaian, dan evaluasi.",
      "Memberikan instruksi praktis pada mesin listrik, sistem tenaga, elektronika, dan embedded system menggunakan berbagai alat ukur dan kit eksperimen.",
      "Melakukan kalibrasi, pengujian sistem, serta berkontribusi dalam pengembangan modul dan SOP laboratorium bersama dosen.",
    ],
  },
  {
    type: "programmer",
    role: "Technical Lead - (AR & Web)",
    company: "Direktorat Jenderal Pendidikan Tinggi, Riset, dan Teknologi",
    period: "April 2025 — Nov 2025",
    location: "Hybrid, Indonesia",
    points: [
      "Memimpin bidang teknikal dalam proyek PKM-PM, menangani arsitektur sistem, implementasi, hingga deployment solusi AR dan web.",
      "Mengembangkan aplikasi AR berbasis marker menggunakan Unity dan Vuforia dengan fitur tracking, animasi, dan UI interaktif.",
      "Membuat aset 3D lengkap di Blender yang dioptimasi untuk performa real-time pada aplikasi AR.",
      "Melakukan deployment dan demonstrasi langsung di sekolah, meningkatkan pemahaman siswa melalui storytelling 3D interaktif.",
    ],
  },
  {
    type: "programmer",
    role: "Programmer Division",
    company: "UPT. BKK Universitas Malikussaleh",
    period: "Maret 2025 — Jul 2025",
    location: "Lhokseumawe, Indonesia",
    points: [
      "Mengembangkan sistem logbook magang berbasis web untuk mencatat aktivitas mingguan bagi ±40 pengguna aktif.",
      "Mengimplementasikan fitur CRUD, autentikasi pengguna, dan integrasi MySQL untuk menggantikan pelaporan manual.",
      "Melakukan maintenance dan pembaruan konten website UPT BKK serta portal karier, termasuk artikel dan lowongan kerja.",
      "Berkontribusi pada debugging, peningkatan UI/UX, deployment dasar, serta kolaborasi dengan stakeholder non-teknis.",
    ],
  },
  {
    type: "electrical",
    role: "Electrical Engineering Intern",
    company: "PT. Industri Nabati Lestari",
    period: "Jan 2025 — Feb 2025",
    location: "Simalungun, Indonesia",
    points: [
      "Melaksanakan maintenance kelistrikan industri melalui rotasi tim electrical, mechanical, dan utility untuk menjaga keandalan produksi.",
      "Melakukan wiring panel, sistem starter motor, serta troubleshooting, termasuk perakitan panel kontrol motor 3-phase DOL untuk operasional.",
      "Menangani instalasi, pengujian, dan commissioning sistem listrik secara mandiri dengan validasi teknisi senior sebelum digunakan.",
      "Melakukan inspeksi, perawatan, dan analisis kerusakan peralatan industri menggunakan alat ukur listrik serta dokumentasi teknis.",
    ],
  },
  {
    type: "programmer",
    role: "Information Technology Intern",
    company: "PT.Industri Nabati Lestari",
    period: "Jul 2021 — Oct 2021",
    location: "Simalungun, Indonesia",
    points: [
      "Memberikan dukungan IT harian untuk troubleshooting hardware, Windows, software kantor, printer, CCTV, dan jaringan dasar",
      "Mendukung operasional ERP sebagai user support, termasuk instalasi client dan input data sesuai standar bisnis.",
      "Melakukan maintenance jaringan LAN sederhana seperti pengecekan kabel, konektivitas, dan konfigurasi IP.",
      "Mengembangkan prototype sistem absensi berbasis web dengan Laravel, Bootstrap, dan MySQL untuk pembelajaran sistem internal.",
    ],
  },
];

const typeConfig = {
  electrical: {
    label: "Electrical",
    color: "#FACC15",
    bg: "rgba(250,204,21,0.1)",
    border: "rgba(250,204,21,0.3)",
    dot: "#FACC15",
  },
  programmer: {
    label: "Programming",
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.1)",
    border: "rgba(96,165,250,0.3)",
    dot: "#60A5FA",
  },
};

export default function Experience() {
  return (
    <SectionWrapper id="experience" style={{ background: "rgba(20,20,20,0.4)" }}>
      {/* Header */}
      <div style={{ marginBottom: "48px" }}>
        <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
          // pengalaman
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            color: "#EAEAEA",
            marginBottom: "16px",
          }}
        >
          Experience
        </h2>

        {/* Legend */}
        <div style={{ display: "flex", gap: "20px" }}>
          {Object.entries(typeConfig).map(([key, cfg]) => (
            <div key={key} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                width: "10px", height: "10px",
                borderRadius: "50%",
                background: cfg.dot,
                display: "inline-block",
              }} />
              <span style={{ fontSize: "13px", color: "#9CA3AF" }}>{cfg.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative" }}>

        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "20px",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "linear-gradient(to bottom, #22C55E, rgba(34,197,94,0.1))",
        }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {experiences.map((exp, i) => {
            const cfg = typeConfig[exp.type as keyof typeof typeConfig];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: "flex", gap: "32px", alignItems: "flex-start" }}
              >
                {/* Dot on timeline */}
                <div style={{
                  position: "relative",
                  width: "40px",
                  flexShrink: 0,
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "20px",
                }}>
                  <div style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: cfg.dot,
                    border: "2px solid #0B0B0B",
                    boxShadow: `0 0 0 3px ${cfg.border}`,
                    zIndex: 1,
                  }} />
                </div>

                {/* Card */}
                <div style={{
                  flex: 1,
                  background: "#0B0B0B",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderLeft: `3px solid ${cfg.dot}`,
                  borderRadius: "12px",
                  padding: "24px",
                  marginBottom: "8px",
                }}>
                  {/* Card header */}
                  <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "8px",
                  }}>
                    <div>
                      {/* Type badge */}
                      <span style={{
                        fontSize: "11px",
                        fontWeight: 500,
                        color: cfg.color,
                        background: cfg.bg,
                        border: `1px solid ${cfg.border}`,
                        borderRadius: "999px",
                        padding: "2px 10px",
                        marginBottom: "8px",
                        display: "inline-block",
                      }}>
                        {cfg.label}
                      </span>
                      <h3 style={{
                        fontFamily: "var(--font-space-grotesk), sans-serif",
                        fontSize: "17px",
                        fontWeight: 600,
                        color: "#EAEAEA",
                        marginBottom: "2px",
                      }}>
                        {exp.role}
                      </h3>
                      <p style={{ color: "#22C55E", fontSize: "13px" }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <p style={{ color: "#9CA3AF", fontSize: "12px", fontFamily: "monospace" }}>
                        {exp.period}
                      </p>
                      <p style={{ color: "#6B7280", fontSize: "11px", marginTop: "2px" }}>
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  {/* Points */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
                    {exp.points.map((point, j) => (
                      <div key={j} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: cfg.color, fontSize: "12px", flexShrink: 0, marginTop: "2px" }}>▸</span>
                        <p style={{ fontSize: "14px", color: "#9CA3AF", lineHeight: 1.6 }}>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}