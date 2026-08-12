"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";

const categoryStyles: Record<string, { color: string; bg: string; border: string }> = {
  electrical: { color: "#FACC15", bg: "rgba(250,204,21,0.08)", border: "rgba(250,204,21,0.25)" },
  ml:         { color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.25)"  },
  other:      { color: "#C084FC", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.25)" },
};

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cat = categoryStyles[project.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        style={{
          display: "block",
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "16px",
          overflow: "hidden",
          textDecoration: "none",
          cursor: "pointer",
          transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(34,197,94,0.35)";
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.4)";
          const img = e.currentTarget.querySelector(".card-img") as HTMLElement;
          if (img) img.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
          const img = e.currentTarget.querySelector(".card-img") as HTMLElement;
          if (img) img.style.transform = "scale(1)";
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: "relative", width: "100%", height: "140px", overflow: "hidden" }}>
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="card-img"
            style={{
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
          />
          {/* Overlay gradient */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, transparent 40%, rgba(20,20,20,0.8) 100%)",
          }} />
          {/* Category badge di atas gambar */}
          <div style={{ position: "absolute", top: "12px", left: "12px" }}>
            <span style={{
              fontSize: "10px",
              fontWeight: 600,
              color: cat.color,
              background: "rgba(11,11,11,0.75)",
              border: `1px solid ${cat.border}`,
              borderRadius: "999px",
              padding: "3px 10px",
              backdropFilter: "blur(6px)",
              letterSpacing: "0.05em",
            }}>
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: "16px" }}>
          {/* Title */}
          <h3 style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "14px",
            fontWeight: 600,
            color: "#EAEAEA",
            lineHeight: 1.35,
            marginBottom: "10px",
          }}>
            {project.title}
          </h3>

          {/* Description */}
          <p style={{
            fontSize: "13px",
            color: "#9CA3AF",
            lineHeight: 1.65,
            marginBottom: "16px",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}>
            {project.description}
          </p>

          {/* Tech stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
            {project.tech.slice(0, 4).map((t, i) => (
              <span key={`${t}-${i}`} style={{
                fontSize: "11px",
                fontFamily: "monospace",
                color: "#6B7280",
                background: "rgba(255,255,255,0.05)",
                padding: "2px 8px",
                borderRadius: "4px",
              }}>
                {t}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span style={{ fontSize: "11px", color: "#6B7280", padding: "2px 4px" }}>
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          {/* Result */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "12px",
            display: "flex",
            gap: "8px",
            alignItems: "flex-start",
          }}>
            <span style={{ color: "#22C55E", fontSize: "13px", flexShrink: 0 }}>→</span>
            <p style={{ fontSize: "12px", color: "#9CA3AF", lineHeight: 1.5 }}>{project.result}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
