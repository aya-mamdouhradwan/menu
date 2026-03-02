'use client';
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Find() {
  const t = useTranslations("find");

  return (
    <motion.div>
      <div className="ui-card">
        <div className="ui-h1">
          <h1 className="hero-badge">{t("title")}</h1>
        </div>
        <div className="ui-image">
          <Image
            src="/food/opinun1.jpg"
            width={100}
            height={50}
            alt="opinion image"
          />
        </div>
        <div>
          <p className="hero-subtitle">
            {t("text1")}
          </p>
          <p className="hero-subtitle">
            {t("text2")}
          </p>
        </div>
        <div>
          <button className="ui-button">
            {t("button")}
          </button>
        </div>
        <br />
        <hr />
      </div>
    </motion.div>
  );
}