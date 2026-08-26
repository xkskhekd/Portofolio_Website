import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import ProjectLinks from "@/components/ProjectLinks";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const categoryConfig: Record<string, { color: string; bg: string; border: string }> = {
    electrical: { color: "#FACC15", bg: "rgba(250,204,21,0.08)", border: "rgba(250,204,21,0.25)" },
    ml: { color: "#60A5FA", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.25)" },
    other: { color: "#C084FC", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.25)" },
  };

  const cat = categoryConfig[project.category];
  const otherProjects = projects
  .filter((p) => p.slug !== slug && p.category === project.category)
  .slice(0, 2);

  return (
    <div style={{ minHeight: "100vh", background: "#0B0B0B", color: "#EAEAEA" }}>

      {/* Top bar */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "16px 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}>
          <Link href="/#projects" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#6B7280", textDecoration: "none", fontSize: "13px" }}>
            <ArrowLeft size={14} />
            Kembali ke Proyek
          </Link>
          <span style={{ fontSize: "11px", color: "#6B7280", fontFamily: "monospace" }}>
            {project.publishedAt}
          </span>
        </div>
      </div>

      {/* Article header */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, color: cat.color, background: cat.bg, border: `1px solid ${cat.border}`, borderRadius: "4px", padding: "3px 10px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {project.categoryLabel}
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>|</span>
          <span style={{ fontSize: "12px", color: "#6B7280", fontFamily: "monospace" }}>{project.publishedAt}</span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "12px" }}>|</span>
          <span style={{ fontSize: "12px", color: "#6B7280" }}>Fathi Annaqi</span>
        </div>

        <h1 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(26px, 6vw, 48px)", fontWeight: 700, color: "#EAEAEA", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}>
          {project.title}
        </h1>

        <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "#9CA3AF", lineHeight: 1.7, marginBottom: "32px", borderLeft: "3px solid #22C55E", paddingLeft: "16px", fontStyle: "italic" }}>
          {project.description}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "40px" }}>
          {project.tech.map((t) => (
            <span key={t} style={{ fontSize: "11px", fontFamily: "monospace", color: "#9CA3AF", background: "#141414", border: "1px solid rgba(255,255,255,0.07)", padding: "4px 10px", borderRadius: "4px" }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hero image */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px 40px" }}>
        <div style={{ position: "relative", width: "100%", height: "clamp(220px, 55vw, 480px)", borderRadius: "12px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
          <Image src={project.images[0]} alt={project.title} fill style={{ objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,11,11,0.6) 0%, transparent 50%)" }} />
          <div style={{ position: "absolute", bottom: "16px", left: "16px" }}>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>
              Fig. 1 — {project.title}
            </span>
          </div>
        </div>
      </div>

      {/* Result highlight */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px 48px" }}>
        <div style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.15)", borderLeft: "4px solid #22C55E", borderRadius: "0 8px 8px 0", padding: "18px 20px" }}>
          <p style={{ fontSize: "11px", color: "#22C55E", fontFamily: "monospace", marginBottom: "8px", letterSpacing: "0.1em" }}>HASIL UTAMA</p>
          <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "#EAEAEA", fontWeight: 500, lineHeight: 1.5 }}>{project.result}</p>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 20px" }}>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(19px, 3vw, 22px)", fontWeight: 700, color: "#EAEAEA", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Overview</h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9CA3AF", lineHeight: 1.85 }}>{project.overview}</p>
        </div>

        {/* Inline image 1 */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.07)",
            background: "#0B0B0B",
            display: "flex",
            justifyContent: "center",
          }}>
            <img
              src={project.images[1]}
              alt={`${project.title} detail`}
              style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "10px", fontFamily: "monospace", textAlign: "center" }}>
            Fig. 2 — Detail implementasi {project.title}
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(19px, 3vw, 22px)", fontWeight: 700, color: "#EAEAEA", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Problem</h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9CA3AF", lineHeight: 1.85 }}>{project.problem}</p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(19px, 3vw, 22px)", fontWeight: 700, color: "#EAEAEA", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Approach</h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9CA3AF", lineHeight: 1.85 }}>{project.approach}</p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(19px, 3vw, 22px)", fontWeight: 700, color: "#EAEAEA", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Implementasi</h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9CA3AF", lineHeight: 1.85 }}>{project.implementation}</p>
        </div>

        {/* Inline image 2 */}
        <div style={{ marginBottom: "48px" }}>
          <div style={{ position: "relative", width: "100%", height: "clamp(200px, 45vw, 340px)", borderRadius: "8px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
            <Image src={project.images[2]} alt={`${project.title} hasil`} fill style={{ objectFit: "cover" }} />
          </div>
          <p style={{ fontSize: "12px", color: "#6B7280", marginTop: "10px", fontFamily: "monospace", textAlign: "center" }}>
            Fig. 3 — Hasil akhir {project.title}
          </p>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "clamp(19px, 3vw, 22px)", fontWeight: 700, color: "#EAEAEA", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Outcome</h2>
          <p style={{ fontSize: "clamp(14px, 2vw, 16px)", color: "#9CA3AF", lineHeight: 1.85 }}>{project.outcome}</p>
        </div>

        <ProjectLinks
          projectUrl={project.projectUrl}
          category={project.category}
          otherProjects={otherProjects}
        />

      </div>
    </div>
  );
}