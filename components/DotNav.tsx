"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "hero", label: "Hero" },
//   { id: "approach", label: "Pendekatan" },
  { id: "projects", label: "Proyek" },
  { id: "experience", label: "Pengalaman" },
  { id: "about", label: "Tentang" },
  { id: "contact", label: "Kontak" },
];

export default function DotNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;

      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActive(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      right: "24px",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 40,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      {sections.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          title={label}
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "4px 0",
          }}
        >
          <span style={{
            display: "block",
            borderRadius: "50%",
            transition: "all 0.3s",
            width: active === id ? "10px" : "6px",
            height: active === id ? "10px" : "6px",
            background: active === id ? "#22C55E" : "rgba(255,255,255,0.2)",
            boxShadow: active === id ? "0 0 8px rgba(34,197,94,0.6)" : "none",
          }} />
        </button>
      ))}
    </div>
  );
}