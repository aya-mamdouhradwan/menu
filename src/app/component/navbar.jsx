"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("navbar");

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <Image
            src="/food/logo.jpg"
            alt="logo"
            width={80}
            height={80}
            unoptimized
          />
        </div>

        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="#home">{t("home")}</a>
          <a href="#menu">{t("menu")}</a>
          <a href="#feedback">{t("feedback")}</a>
          <a href="#subscribe">{t("subscribe")}</a>
        </div>

        <div className="icons">
          <LanguageSwitcher />
          <button
            type="button"
            className="menu-toggle block md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

