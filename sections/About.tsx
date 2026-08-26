"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import { useIsMobile } from "@/hooks/useIsMobile";

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

export default function About() {
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="about">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "40px" : "64px",
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
              "Saya Fathi Annaqi, mahasiswa semester 8 Teknik Elektro di Universitas Malikussaleh, dengan fokus pada renewable energy dan power system dan di sela itu, saya juga ngutak-ngatik machine learning. Bagi saya dua bidang ini nggak terpisah: sistem energi butuh kecerdasan komputasi untuk jadi lebih adaptif, dan itu yang terus saya eksplorasi.",
              "Pengalaman saya nggak cuma di ruang kelas. Saya pernah magang menangani maintenance sistem kelistrikan di sebuah pabrik minyak makan, lalu pindah jalur ke UPT Bimbingan Karir & Kewirausahaan sebagai programmer membangun sistem auto-generate logbook mingguan untuk peserta magang dan menangani website tracer study. Saat ini saya juga Koordinator Asisten Lab Teknik Elektro Unimal (2025–2026), aktif freelance web programming, dan penerima Beasiswa DBS Foundation.",
              "Di ranah riset, saya terlibat sebagai AR Engineer di tim PKM-PM pendanaan nasional, sambil mengerjakan proyek teknis seperti multi-source energy harvesting berbasis embedded system, estimasi State of Charge baterai dengan ML di ESP32, dan deployment sistem tenaga surya untuk kebutuhan pasca bencana semuanya mencerminkan cara saya bekerja, system thinking, cepat problem solving, dan detail dalam eksekusi.",
              "Ke depan, saya ingin terus mengembangkan solusi yang menggabungkan energy systems dan machine learning untuk kebutuhan industri dan terbuka untuk peluang magang, kolaborasi riset, maupun proyek freelance.",
            ].map((text, i) => (
              <p key={i} style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: 1.75 }}>
                {text}
              </p>
            ))}
          </div>

          {/* Stats (masih kosong, isi nanti) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "12px",
              marginTop: "32px",
            }}
          />
        </div>

        {/* Right: Skills */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {Object.entries(skills).map(([category, items], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: isMobile ? 0 : 20 }}
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