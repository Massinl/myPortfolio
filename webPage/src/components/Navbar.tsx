import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Cristian Massini</h2>

      <div 
        className={`navbar-links ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/About" className={location.pathname === "/About" ? "active" : ""}>
          About me
        </Link>
        <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
          Projects
        </Link>
        <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
          Resume
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
      </div>

      <div 
        className={`hamburger ${menuOpen ? "open" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
