'use client';
import Image from "next/image";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <motion.div>
    <section className="hero-card">
      <div className="hero-image">
        <Image
          src="/food/place.jpg"
          alt="Restaurant atmosphere"
          width={600}
          height={100}
          unoptimized
        />
      </div>
      <div className="hero-word">
        <p className="hero-badge">Welcome to Minu</p>
        <p className="hero-subtitle">
          Browse fresh seafood, premium grills and quick bites in a clean,
          easy-to-use interface designed to make choosing your next meal simple
          and fun.
        </p>
        <p className="hero-subtitle">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Laboriosam dicta sed quidem sit obcaecati non aliquam quod quae. Iusto soluta
             distinctio perferendis expedita nam nulla facilis quibusdam possimus vitae nesciunt?
        </p>
        
      </div>
    </section>
    </motion.div>
  );
}