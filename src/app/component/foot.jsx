'use client';
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Foot() {
  return (
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
        {/* الروابط الأساسية */}
        <div className="main-links">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
        {/* الروابط الفرعية */}
        <div className="sub-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Process</a>
          <a href="#">Service</a>
          <a href="#">Blog</a>
        </div>
      </div>

      {/* Social Icons */}
      <div className="icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      {/* Footer Bottom */}
      <h1 className="foot-bottom">© 2025 Your Company. All rights reserved.</h1>
    </footer>
  );
}


