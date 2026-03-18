"use client";

import { motion } from "framer-motion";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionWrapper({ id, children, className }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{ padding: "96px 24px" }}
      className={className}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>{children}</div>
    </motion.section>
  );
}