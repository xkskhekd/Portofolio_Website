"use client";

import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  projectUrl: string;
  category: string;
  otherProjects: Project[];
};

const categoryConfig: Record<string, { color: string }> = {
  electrical: { color: "#FACC15" },
  ml: { color: "#60A5FA" },
  other: { color: "#C084FC" },
};

export default function ProjectLinks({ projectUrl, category, otherProjects }: Props) {
  return (
    <>
      <div style={{ marginBottom: "64px" }}>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#141414", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "14px 24px", textDecoration: "none" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"; e.currentTarget.style.background = "rgba(34,197,94,0.05)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "#141414"; }}>
          <ExternalLink size={16} color="#22C55E" />
          <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "14px", fontWeight: 600, color: "#22C55E" }}>
            Behind The Build
          </span>
          <span style={{ fontSize: "12px", color: "#6B7280", marginLeft: "4px" }}>
            {category === "electrical" ? "— Lihat file proyek" : "— Lihat source code"}
          </span>
        </a>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ padding: "48px 0 64px" }}>
          <p style={{ fontSize: "11px", color: "#6B7280", fontFamily: "monospace", letterSpacing: "0.1em", marginBottom: "24px" }}>
            PROYEK LAINNYA
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
            {otherProjects.map((p) => {
              const c = categoryConfig[p.category];
              return (
                <Link key={p.slug} href={`/projects/${p.slug}`} style={{ display: "block", background: "#141414", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "10px", overflow: "hidden", textDecoration: "none" }} onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(34,197,94,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}>
                  <div style={{ position: "relative", width: "100%", height: "120px" }}>
                    <Image src={p.images[0]} alt={p.title} fill style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(11,11,11,0.4)" }} />
                  </div>
                  <div style={{ padding: "12px" }}>
                    <span style={{ fontSize: "10px", color: c.color, fontFamily: "monospace", letterSpacing: "0.05em" }}>
                      {p.categoryLabel}
                    </span>
                    <p style={{ fontSize: "13px", color: "#EAEAEA", fontWeight: 600, marginTop: "4px", lineHeight: 1.3 }}>
                      {p.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
