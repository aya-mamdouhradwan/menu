'use client';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import { useTranslations } from "next-intl";

export default function Opinion() {
  const t = useTranslations("opinion");

  const opinions = [
    {
      img: "https://i.pravatar.cc/150?img=5",
      name: t("user1Name"),
      role: t("user1Role"),
      text: t("user1Text")
    },
    {
      img: "https://i.pravatar.cc/150?img=12",
      name: t("user2Name"),
      role: t("user2Role"),
      text: t("user2Text")
    },
    {
      img: "https://i.pravatar.cc/150?img=25",
      name: t("user3Name"),
      role: t("user3Role"),
      text: t("user3Text")
    },
    {
      img: "https://i.pravatar.cc/150?img=32",
      name: t("user4Name"),
      role: t("user4Role"),
      text: t("user4Text")
    },
  ];

  return (
    <section className="opinion-section">
      <h2 className="opinion-title">{t("title")}</h2>

      <div className="opinion-grid">
        {opinions.map((op, idx) => (
          <div key={idx} className="opinion-card">
            <div className="opinion-avatar">
              <img
                src={op.img}
                alt="User Avatar"
                width={50}
                height={50}
                className="avatar-img"
              />
              <div className="user-info">
                <h3>{op.name}</h3>
                <p>{op.role}</p>
              </div>
            </div>

            <p className="opinion-text">{op.text}</p>

            <div className="opinion-stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-icon" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}