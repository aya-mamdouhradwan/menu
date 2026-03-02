'use client';
import { useTranslations } from "next-intl";

export default function Subscribe() {
  const t = useTranslations("subscribe");

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2 className="newsletter-title">{t("title")}</h2>
        <p className="newsletter-description">
          {t("desc1")}
        </p>
        <p className="newsletter-description">
          {t("desc2")}
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder={t("placeholder")}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button">
            {t("button")}
          </button>
        </form>
      </div>
    </section>
  );
}
