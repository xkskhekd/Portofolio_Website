import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const categoryColors: Record<string, string> = {
    electrical: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    ml: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    other: "text-purple-400 bg-purple-400/10 border-purple-400/20",
  };

  const sections = [
    { title: "Overview", content: project.overview },
    { title: "Problem", content: project.problem },
    { title: "Pendekatan", content: project.approach },
    { title: "Implementasi", content: project.implementation },
    { title: "Hasil", content: project.outcome },
  ];

  return (
    <div className="min-h-screen bg-background text-text">
      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-text-dim hover:text-accent transition-colors text-sm font-body mb-8"
        >
          <ArrowLeft size={16} />
          Kembali ke Proyek
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 pb-6">
        <span
          className={`inline-block text-xs font-body font-medium px-3 py-1 rounded-full border mb-4 ${
            categoryColors[project.category]
          }`}
        >
          {project.categoryLabel}
        </span>

        <h1 className="font-heading text-4xl font-bold text-text mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="text-text-dim font-body text-lg leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-sm font-mono text-muted bg-surface border border-white/5 px-3 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Result highlight */}
        <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-12">
          <p className="text-xs text-accent font-mono mb-1">HASIL</p>
          <p className="text-text font-body font-medium">{project.result}</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-3xl mx-auto px-6 pb-24 space-y-10">
        {sections.map(({ title, content }) => (
          <div key={title} className="border-l-2 border-accent/30 pl-6">
            <h2 className="font-heading font-semibold text-xl text-text mb-3">
              {title}
            </h2>
            <p className="text-text-dim font-body leading-relaxed">{content}</p>
          </div>
        ))}
      </div>

      {/* Navigation to other projects */}
      <div className="max-w-3xl mx-auto px-6 pb-16 border-t border-white/5 pt-12">
        <p className="text-muted text-sm font-body mb-4">Proyek lainnya</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {projects
            .filter((p) => p.slug !== project.slug)
            .slice(0, 2)
            .map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="block bg-surface border border-white/5 rounded-xl p-4 hover:border-accent/30 transition-all"
              >
                <p className="text-xs text-muted font-body mb-1">{p.categoryLabel}</p>
                <p className="text-text font-body font-medium text-sm">{p.title}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}