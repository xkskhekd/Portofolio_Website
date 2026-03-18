"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      whileHover={{ y: -4 }}
      style={{
        background: "#141414",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        padding: "24px",
        cursor: "pointer",
        transition: "border-color 0.3s",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          fontSize: "11px",
          fontWeight: 500,
          color: cat.color,
          background: cat.bg,
          border: `1px solid ${cat.border}`,
          borderRadius: "999px",
          padding: "3px 10px",
        }}>
          {project.categoryLabel}
        </span>
        <Link href={`/projects/${project.slug}`} style={{ color: "#6B7280" }}>
          <ArrowUpRight size={16} />
        </Link>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-space-grotesk), sans-serif",
        fontSize: "17px",
        fontWeight: 600,
        color: "#EAEAEA",
        lineHeight: 1.35,
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        fontSize: "13px",
        color: "#9CA3AF",
        lineHeight: 1.65,
        display: "-webkit-box",
        WebkitLineClamp: 3,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tech.slice(0, 4).map(t => (
          <span key={t} style={{
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
    </motion.div>
  );
}