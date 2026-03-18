"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type Category = "all" | "electrical" | "ml" | "other";

const filters: { label: string; value: Category }[] = [
  { label: "Semua", value: "all" },
  { label: "Electrical Engineering", value: "electrical" },
  { label: "Machine Learning", value: "ml" },
  { label: "Other Engineering", value: "other" },   
];

export default function Projects() {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter(p => p.category === active);

  return (
    <SectionWrapper id="projects">
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
          // proyek
        </p>
        <h2 style={{
          fontFamily: "var(--font-space-grotesk), sans-serif",
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 700,
          color: "#EAEAEA",
        }}>
          Featured Projects
        </h2>
        <p style={{ color: "#9CA3AF", fontSize: "15px", marginTop: "12px", maxWidth: "480px", lineHeight: 1.65 }}>
          Proyek pilihan yang mencerminkan pendekatan teknis dan dampak nyata di lapangan.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            style={{
              fontSize: "13px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: active === value ? "1px solid rgba(34,197,94,0.5)" : "1px solid rgba(255,255,255,0.08)",
              background: active === value ? "rgba(34,197,94,0.1)" : "#141414",
              color: active === value ? "#22C55E" : "#9CA3AF",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}