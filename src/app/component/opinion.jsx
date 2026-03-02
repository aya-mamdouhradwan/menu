'use client';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import { useTranslations } from "next-intl";

export default function Opinion() {
  const t = useTranslations("opinion");

  return (
    <section className="opinion-section">
      <h2 className="opinion-title">{t("title")}</h2>

      {/* Card */}
      <div className="opinion-card">
        <div className="opinion-avatar">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="User Avatar"
            width={50}
            height={50}
            className="avatar-img"
          />
          <div className="user-info">
            <h3>{t("user1Name")}</h3>
            <p>{t("user1Role")}</p>
          </div>
        </div>

        <p className="opinion-text">
          {t("user1Text")}
        </p>

        <div className="opinion-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>
      </div>

      {/* Card 2 */}
      <div className="opinion-card">
        <div className="opinion-avatar">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User Avatar"
            width={50}
            height={50}
            className="avatar-img"
          />
          <div className="user-info">
            <h3>{t("user2Name")}</h3>
            <p>{t("user2Role")}</p>
          </div>
        </div>

        <p className="opinion-text">
          {t("user2Text")}
        </p>

        <div className="opinion-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star-icon" />
          ))}
        </div>
      </div>
    </section>
  );
}