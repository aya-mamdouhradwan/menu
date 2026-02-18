'use client';
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

import { motion } from "framer-motion";
export default function Foot() {
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
          <a href="#" className="main">Home</a>
          <div className="sub">
          <a>Home</a>
          <a>About Us</a>
          <a>Our Process</a>
          <a>Services</a>
          </div>
        </div>
        <div className="links2">
          <a className="main">Community</a>
          <div className="sub">
          <a>Team Plans</a>
          <a>Refer a Friend</a>
          <a>Get Cards</a>
          </div>

        </div>
        <div className="lilnka3">
          <a className="main">Stay Connected</a>
        <div className="icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>
        </div>

      </div>

      {/* Social Icons */}
      

      {/* Footer Bottom */}
      <h1 className="foot-bottom">© 2026 Your Company. All rights reserved.</h1>
    </footer>
    </motion.div>
  );
}


