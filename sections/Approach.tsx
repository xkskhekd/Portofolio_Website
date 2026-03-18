"use client";

import { motion } from "framer-motion";
import { Layers, BarChart2, Wrench } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

const cards = [
  {
    icon: Layers,
    title: "System Thinking",
    desc: "Setiap masalah teknis dipahami sebagai bagian dari sistem yang lebih besar. Saya memetakan dependensi, failure mode, dan boundary condition sebelum menulis satu baris kode.",
  },
  {
    icon: BarChart2,
    title: "Data-Driven Engineering",
    desc: "Keputusan teknis didukung oleh data dan measurement. Dari power quality analysis hingga model ML, saya selalu memvalidasi asumsi dengan data nyata dari lapangan.",
  },
  {
    icon: Wrench,
    title: "Practical Implementation",
    desc: "Solusi terbaik adalah yang bisa diimplementasikan dan dipelihara. Saya menyeimbangkan kesempurnaan teknis dengan pragmatisme lapangan dan constraint nyata.",
  },
];

export default function Approach() {
  return (
    <SectionWrapper id="approach" className="bg-surface/30">
      {/* Header */}
      <div className="mb-12">
        <p className="text-accent text-sm font-mono mb-2">// pendekatan</p>
        <h2 className="font-heading text-4xl font-bold text-text">
          Engineering Approach
        </h2>
        <p className="text-text-dim font-body mt-4 max-w-2xl leading-relaxed">
          Saya mendekati masalah teknik dengan menggabungkan desain sistem yang
          praktis dengan metode berbasis data. Fokus saya adalah membangun sistem
          yang andal — dari infrastruktur daya hingga embedded intelligence.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group bg-background border border-white/5 rounded-xl p-6 hover:border-accent/20 transition-all duration-300"
          >
            <div className="w-10 h-10 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
              <Icon size={18} className="text-accent" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-text mb-3">
              {title}
            </h3>
            <p className="text-text-dim text-sm font-body leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}