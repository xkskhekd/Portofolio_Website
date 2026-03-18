"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";

const skills: Record<string, string[]> = {
  "Electrical Engineering": [
    "Power Systems", "Protection & Relay", "Arduino/ESP32",
    "Renewable Energy", "Harvest Energy", "Embedded Systems",
  ],
  "Machine Learning": [
    "TensorFlow", "PyTorch", "scikit-learn",
    "Time Series Analysis", "Numpy", "Pandas",
  ],
  "Framework & Library": [
    "Next.Js", "React.Js", "Bootstrap",
    "Laravel", "Tailwind",
  ],
  "Tools & Platforms": [
    "VS Code", "MATLAB/Simulink", "Unity",
    "AutoCAD Electrical", "Github",
  ],
  "Design": [
    "Photoshop", "Figma", "Blender",
  ],
};

// const stats = [
//   { value: "4+", label: "Tahun Pengalaman" },
//   { value: "15+", label: "Proyek Selesai" },
//   { value: "2", label: "Publikasi" },
//   { value: "3", label: "Sertifikasi" },
// ];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
            // tentang
          </p>
          <h2
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(28px, 5vw, 40px)",
              fontWeight: 700,
              color: "#EAEAEA",
              marginBottom: "24px",
            }}
          >
            About Me
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[
              "Saya adalah Electrical Engineer dengan spesialisasi di sistem tenaga dan kelistrikan industri, yang secara aktif mengintegrasikan Machine Learning untuk membangun sistem yang lebih cerdas dan andal.",
              "Perjalanan saya dimulai dari dunia power engineering klasik — merencanakan instalasi, merancang proteksi, dan memastikan keandalan sistem distribusi. Namun saya melihat gap besar: sistem kelistrikan menghasilkan data melimpah, tapi potensinya hampir tidak dimanfaatkan.",
              "Kini saya membangun di persimpangan dua dunia itu. Menggunakan data sensor real-time, model ML, dan pemahaman mendalam tentang fisika sistem untuk menciptakan solusi yang benar-benar bekerja di lapangan, bukan hanya di kertas atau Jupyter notebook.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: 1.75 }}>
                {text}
              </p>
            ))}
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            {/* {stats.map(({ value, label }) => ( */}
              {/* <div
                key={label}
                style={{
                  textAlign: "center",
                  padding: "16px 8px",
                  background: "#141414",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "#22C55E",
                    marginBottom: "4px",
                  }}
                >
                  {value}
                </p>
                <p style={{ fontSize: "11px", color: "#9CA3AF" }}>{label}</p>
              </div>
            ))} */}
          </div>
        </div>

        {/* Right: Skills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#EAEAEA",
                  marginBottom: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ width: "16px", height: "1px", background: "#22C55E", display: "inline-block" }} />
                {category}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {items.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontSize: "13px",
                      color: "#9CA3AF",
                      background: "#141414",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "6px 12px",
                      borderRadius: "8px",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}