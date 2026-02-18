"use client";

import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
  return (
    <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
    }}
    viewport={{ once: false, amount: 0.2 }}
  >
      {children}
    </motion.div>
  );
}