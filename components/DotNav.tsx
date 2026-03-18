"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const sections = [
  { id: "hero", label: "Hero" },
  { id: "approach", label: "Pendekatan" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "about", label: "Tentang" },
  { id: "contact", label: "Kontak" },
];

export default function DotNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.5 }
      );
      observer.observe(el);
      return observer;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          title={label}
          className="group relative flex items-center justify-end"
        >
          {/* Tooltip */}
          <span className="absolute right-6 bg-surface border border-white/10 text-text-dim text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {label}
          </span>
          {/* Dot */}
          <span
            className={clsx(
              "block rounded-full transition-all duration-300",
              active === id
                ? "w-2.5 h-2.5 bg-accent"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            )}
          />
        </button>
      ))}
    </div>
  );
}