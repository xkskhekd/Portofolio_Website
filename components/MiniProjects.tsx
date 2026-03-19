"use client";

import { useState } from "react";
import { miniProjects } from "@/data/mini-projects";
import { ChevronDown, ChevronUp } from "lucide-react";

type Category = "electrical" | "ml" | "other";

const categoryConfig = {
  electrical: { color: "#FACC15", bg: "rgba(250,204,21,0.06)", border: "rgba(250,204,21,0.15)", dot: "#FACC15" },
  ml:         { color: "#60A5FA", bg: "rgba(96,165,250,0.06)",  border: "rgba(96,165,250,0.15)",  dot: "#60A5FA"  },
  other:      { color: "#C084FC", bg: "rgba(192,132,252,0.06)", border: "rgba(192,132,252,0.15)", dot: "#C084FC" },
};

const SHOW_LIMIT = 5;

type Props = {
  activeCategory: Category;
};

export default function MiniProjects({ activeCategory }: Props) {
  const [expanded, setExpanded] = useState(false);

  const filtered = miniProjects.filter((p) => p.category === activeCategory);
  const visible = expanded ? filtered : filtered.slice(0, SHOW_LIMIT);
  const hasMore = filtered.length > SHOW_LIMIT;

  const cfg = categoryConfig[activeCategory];

  if (filtered.length === 0) return null;

  return (
    <div style={{ marginTop: "48px" }}>
      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
        <div style={{ width: "3px", height: "20px", background: cfg.color, borderRadius: "2px" }} />
        <p style={{ fontSize: "12px", color: cfg.color, fontFamily: "monospace", letterSpacing: "0.08em" }}>
          SIDE PROJECTS & EXPERIMENTS
        </p>
      </div>

      {/* List */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        {visible.map((p, i) => (
          <div
            key={i}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "16px",
              alignItems: "start",
              padding: "16px 20px",
              background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
              borderLeft: `2px solid ${cfg.border}`,
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = cfg.bg; e.currentTarget.style.borderLeftColor = cfg.color; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent"; e.currentTarget.style.borderLeftColor = cfg.border; }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: cfg.dot, flexShrink: 0, display: "inline-block" }} />
                <p style={{ fontSize: "14px", fontWeight: 600, color: "#EAEAEA", fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {p.title}
                </p>
              </div>
              <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6, paddingLeft: "13px" }}>
                {p.overview}
              </p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: "12px", color: cfg.color, fontFamily: "monospace" }}>{p.year}</p>
              <p style={{ fontSize: "11px", color: "#6B7280", marginTop: "2px", whiteSpace: "nowrap" }}>{p.context}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Expand / Collapse */}
      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginTop: "12px",
            background: "none",
            border: "none",
            color: cfg.color,
            fontSize: "13px",
            fontFamily: "monospace",
            cursor: "pointer",
            padding: "8px 20px",
            letterSpacing: "0.05em",
          }}
        >
          {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          {expanded ? "Sembunyikan" : `Lihat ${filtered.length - SHOW_LIMIT} proyek lainnya`}
        </button>
      )}
    </div>
  );
}
