'use client';
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Foot() {
  const t = useTranslations("footer");

  return (
    <motion.div>
      <footer className="foot-container">
        {/* Logo */}
        <div className="foot-ph">
          <Image
            src="/food/logo.jpg"
            width={100}
            height={100}
            alt="Company Logo"
            className="foot-logo"
          />
        </div>

        {/* Links */}
        <div className="links">
          <div className="links1">
            <a href="#" className="main">{t("home")}</a>
            <div className="sub">
              <a>{t("home")}</a>
              <a>{t("about")}</a>
              <a>{t("process")}</a>
              <a>{t("services")}</a>
            </div>
          </div>
          <div className="links2">
            <a className="main">{t("community")}</a>
            <div className="sub">
              <a>{t("teamPlans")}</a>
              <a>{t("referFriend")}</a>
              <a>{t("giftCards")}</a>
            </div>
          </div>
          <div className="lilnka3">
            <a className="main">{t("stayConnected")}</a>
            <div className="icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <h1 className="foot-bottom">{t("copyright")}</h1>
      </footer>
    </motion.div>
  );
}

