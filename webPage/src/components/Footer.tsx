import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Navbar.css';
export default function Footer() {
  return (
      <footer className="footer">
        <p className="footer-text">© 2025 Cristian J Massini Pérez</p>
        <div className="footer-icons">
          <a
            href="https://github.com/massinl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/tuUsuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/cristian_massini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </footer>
  );
      
}
