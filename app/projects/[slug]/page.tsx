import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

  const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
    electrical: { color: "#FACC15", bg: "rgba(250,204,21,0.08)", border: "rgba(250,204,21,0.25)" },
    ml:         { color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.25)"  },
    other:      { color: "#C084FC", bg: "rgba(192,132,252,0.08)", border: "rgba(192,132,252,0.25)" },
  };

  const cat = categoryColors[project.category];

  const sections = [
    { title: "Overview",     content: project.overview },
    { title: "Problem",      content: project.problem },
    { title: "Pendekatan",   content: project.approach },
    { title: "Implementasi", content: project.implementation },
    { title: "Hasil",        content: project.outcome },
  ];

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div style={{ minHeight: "100vh", background: "#0B0B0B", color: "#EAEAEA" }}>

      {/* Back button */}
      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "32px 24px 0" }}>
        <Link
          href="/#projects"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            color: "#9CA3AF",
            textDecoration: "none",
            fontSize: "14px",
            marginBottom: "40px",
          }}
        >
          <ArrowLeft size={16} />
          Kembali ke Proyek
        </Link>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: "768px", margin: "0 auto", padding: "0 24px 40px" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "11px",
            fontWeight: 500,
            color: cat.color,
            background: cat.bg,
            border: `1px solid ${cat.border}`,
            borderRadius: "999px",
            padding: "3px 12px",
            marginBottom: "16px",
          }}
        >
          {project.categoryLabel}
        </span>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(28px, 5vw, 44px)",
            fontWeight: 700,
            color: "#EAEAEA",
            lineHeight: 1.15,
            marginBottom: "16px",
          }}
        >
          {project.title}
        </h1>

        <p style={{ fontSize: "17px", color: "#9CA3AF", lineHeight: 1.7, marginBottom: "24px" }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "12px",
                fontFamily: "monospace",
                color: "#9CA3AF",
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "4px 10px",
                borderRadius: "6px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Result highlight */}
        <div
          style={{
            background: "rgba(34,197,94,0.05)",
            border: "1px solid rgba(34,197,94,0.2)",
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "48px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#22C55E", fontFamily: "monospace", marginBottom: "6px" }}>
            HASIL
          </p>
          <p style={{ fontSize: "15px", color: "#EAEAEA", fontWeight: 500 }}>{project.result}</p>
        </div>
      </div>

      {/* Content sections */}
      <div
        style={{
          maxWidth: "768px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {sections.map(({ title, content }) => (
          <div
            key={title}
            style={{
              borderLeft: "2px solid rgba(34,197,94,0.3)",
              paddingLeft: "24px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#EAEAEA",
                marginBottom: "12px",
              }}
            >
              {title}
            </h2>
            <p style={{ fontSize: "15px", color: "#9CA3AF", lineHeight: 1.75 }}>{content}</p>
          </div>
        ))}
      </div>

      {/* Other projects */}
      <div
        style={{
          maxWidth: "768px",
          margin: "64px auto 0",
          padding: "48px 24px 64px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p style={{ fontSize: "13px", color: "#6B7280", marginBottom: "16px" }}>Proyek lainnya</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {otherProjects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              style={{
                display: "block",
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "12px",
                padding: "16px",
                textDecoration: "none",
              }}
            >
              <p style={{ fontSize: "11px", color: "#6B7280", marginBottom: "4px" }}>{p.categoryLabel}</p>
              <p style={{ fontSize: "14px", color: "#EAEAEA", fontWeight: 500 }}>{p.title}</p>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}