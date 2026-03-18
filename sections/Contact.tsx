"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#0B0B0B",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "10px",
  padding: "12px 16px",
  fontSize: "14px",
  color: "#EAEAEA",
  outline: "none",
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  color: "#9CA3AF",
  marginBottom: "8px",
};

const cardStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px",
  background: "#0B0B0B",
  border: "1px solid rgba(255,255,255,0.07)",
  borderRadius: "12px",
  textDecoration: "none",
};

const iconBoxStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "rgba(34,197,94,0.1)",
  border: "1px solid rgba(34,197,94,0.2)",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
};

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("sending");

  const response = await fetch("https://formspree.io/f/xkoqkaqa", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: form.name,
      email: form.email,
      message: form.message,
    }),
  });

  if (response.ok) {
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  } else {
    setStatus("idle");
    alert("Gagal mengirim. Coba lagi.");
  }
};

  return (
    <SectionWrapper id="contact">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "start",
        }}
      >
        <div>
          <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
            // kontak
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
            Mari Berkolaborasi
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#9CA3AF",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "400px",
            }}
          >
            Saya terbuka untuk diskusi proyek, peluang kolaborasi, atau sekadar
            ngobrol tentang engineering dan ML.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <a href="https://mail.google.com/mail/?view=cm&to=fathiannaqi3@gmail.com" target="_blank" rel="noopener noreferrer" style={cardStyle}>
              <div style={iconBoxStyle}>
                <Mail size={16} color="#22C55E" />
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>Email</p>
                <p style={{ fontSize: "14px", color: "#EAEAEA" }}>fathiannaqi3@gmail.com</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/fathi-annaqi-205a2a222/" target="_blank" rel="noopener noreferrer" style={cardStyle}>
              <div style={iconBoxStyle}>
                <Linkedin size={16} color="#22C55E" />
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>LinkedIn</p>
                <p style={{ fontSize: "14px", color: "#EAEAEA" }}>Fathi Annaqi</p>
              </div>
            </a>

            <a href="https://github.com/xkskhekd" target="_blank" rel="noopener noreferrer" style={cardStyle}>
              <div style={iconBoxStyle}>
                <Github size={16} color="#22C55E" />
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>GitHub</p>
                <p style={{ fontSize: "14px", color: "#EAEAEA" }}>xkskhekd</p>
              </div>
            </a>
            <a href="https://www.instagram.com/xkskhekd/" target="_blank" rel="noopener noreferrer" style={cardStyle}>
                <div style={iconBoxStyle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="#22C55E" stroke="none"/>
                    </svg>
                </div>
                <div>
                    <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "2px" }}>Instagram</p>
                    <p style={{ fontSize: "14px", color: "#EAEAEA" }}>xkskhekd</p>
                </div>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <label style={labelStyle}>Nama</label>
              <input
                type="text"
                placeholder="Nama Anda"
                value={form.name}
                required
                style={inputStyle}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                placeholder="email@domain.com"
                value={form.email}
                required
                style={inputStyle}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label style={labelStyle}>Pesan</label>
              <textarea
                placeholder="Ceritakan proyek atau apapun yang ingin Anda bahas..."
                value={form.message}
                required
                rows={6}
                style={{ ...inputStyle, resize: "none", lineHeight: 1.6 }}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                background: status === "sent" ? "#16A34A" : "#22C55E",
                color: "#0B0B0B",
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                padding: "14px 24px",
                borderRadius: "10px",
                border: "none",
                cursor: status !== "idle" ? "not-allowed" : "pointer",
                opacity: status === "sending" ? 0.7 : 1,
                transition: "all 0.2s",
              }}
            >
              <Send size={16} />
              {status === "idle" && "Kirim Pesan"}
              {status === "sending" && "Mengirim..."}
              {status === "sent" && "✓ Terkirim!"}
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
