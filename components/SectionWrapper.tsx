"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export default function SectionWrapper({ id, children, className, style }: Props) {
  const isMobile = useIsMobile();

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      style={{
        padding: isMobile ? "56px 20px" : "96px 24px",
        ...style,
      }}
      className={className}
    >
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>{children}</div>
    </motion.section>
  );
}