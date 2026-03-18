"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

type Category = "electrical" | "programmer" | "other";

const filters = [
  {
    label: "Electrical Engineering",
    value: "electrical" as Category,
    color: "#FACC15",
    activeBg: "rgba(250,204,21,0.1)",
    activeBorder: "rgba(250,204,21,0.4)",
  },
  {
    label: "Programming & ML",
    value: "programmer" as Category,
    color: "#60A5FA",
    activeBg: "rgba(96,165,250,0.1)",
    activeBorder: "rgba(96,165,250,0.4)",
  },
  {
    label: "Other Projects",
    value: "other" as Category,
    color: "#C084FC",
    activeBg: "rgba(192,132,252,0.1)",
    activeBorder: "rgba(192,132,252,0.4)",
  },
];

export default function Projects() {
  const [active, setActive] = useState<Category>("electrical");

  const filtered = projects.filter((p) => {
    if (active === "electrical") return p.category === "electrical";
    if (active === "programmer") return p.category === "ml";
    if (active === "other") return p.category === "other";
    return true;
  });

  return (
    <SectionWrapper id="projects">
      <div style={{ marginBottom: "40px" }}>
        <p style={{ color: "#22C55E", fontSize: "13px", fontFamily: "monospace", marginBottom: "8px" }}>
          // proyek
        </p>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            color: "#EAEAEA",
          }}
        >
          Featured Projects
        </h2>
        <p style={{ color: "#9CA3AF", fontSize: "15px", marginTop: "12px", maxWidth: "480px", lineHeight: 1.65 }}>
          Proyek pilihan yang mencerminkan pendekatan teknis dan dampak nyata di lapangan.
        </p>
      </div>

      {/* Filter tabs */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            style={{
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 20px",
              borderRadius: "10px",
              border: active === f.value
                ? `1px solid ${f.activeBorder}`
                : "1px solid rgba(255,255,255,0.08)",
              background: active === f.value ? f.activeBg : "#141414",
              color: active === f.value ? f.color : "#9CA3AF",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f.label}
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