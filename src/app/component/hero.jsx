'use client';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Hero() {
  const t = useTranslations("hero");

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
          <p className="hero-badge">{t("badge")}</p>
          <p className="hero-subtitle">
            {t("subtitle1")}
          </p>
          <p className="hero-subtitle">
            {t("subtitle2")}
          </p>
        </div>
      </section>
    </motion.div>
  );
}