"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Tentang", href: "#about" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s",
          background: scrolled ? "rgba(11,11,11,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        }}
      >
        <div style={{ maxWidth: "1152px", margin: "0 auto", padding: "0 80px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>

          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-space-grotesk), sans-serif", fontSize: "18px", fontWeight: 700, letterSpacing: "-0.02em" }}>
              <span style={{ color: "#22C55E" }}>&lt;</span>
              <span style={{ color: "#EAEAEA" }}>xkskhekd</span>
              <span style={{ color: "#22C55E" }}>/&gt;</span>
            </span>
          </Link>

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} style={{ fontSize: "14px", color: "#9CA3AF", textDecoration: "none", cursor: "pointer" }} onMouseEnter={(e) => { e.currentTarget.style.color = "#22C55E"; }} onMouseLeave={(e) => { e.currentTarget.style.color = "#9CA3AF"; }}>
                {item.label}
              </a>
            ))}
            <a href="/cv.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#22C55E", background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.3)", borderRadius: "8px", padding: "8px 20px", textDecoration: "none" }}>
              <Download size={14} />
              Download CV
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", color: "#9CA3AF", cursor: "pointer" }} className="mobile-btn">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: "64px", left: 0, right: 0, zIndex: 40, background: "rgba(20,20,20,0.97)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "16px 24px 24px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }} style={{ fontSize: "15px", color: "#9CA3AF", textDecoration: "none", padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "pointer" }}>
                  {item.label}
                </a>
              ))}
              <a href="/cv.pdf" download style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#22C55E", textDecoration: "none", paddingTop: "4px" }}>
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}