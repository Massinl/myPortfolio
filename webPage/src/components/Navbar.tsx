import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Cristian Massini</h2>

      <div className="navbar-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Home
        </Link>
        <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
          About
        </Link>
        <Link to="/beats" className={location.pathname === "/beats" ? "active" : ""}>
          My Beats
        </Link>
        <Link to="/resume" className={location.pathname === "/resume" ? "active" : ""}>
          Resume
        </Link>
        <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
