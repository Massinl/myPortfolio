import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="home-container">

      {/* Hero section */}
      <section className="hero">
        <h1>Hi, my <br />name is Cristian.</h1>
        <p>I'm a Software Engineer & Web Developer based in Puerto Rico.<br />
           I create web apps, databases, and beats.</p>

        <div className="hero-buttons">
          <Link to="/beats" className="button button-blue">
            View My Beats
          </Link>
          <a href="/resume.pdf" target="_blank" className="button button-green">
            Download Resume
          </a>
        </div>
      </section>

      {/* About / Skills section */}
      <section className="skills-section">
        <h2>Skills</h2>

        <h3>Frontend</h3>
        <div className="skills">
          <span>React</span>
          <span>TypeScript</span>
          <span>CSS</span>
          <span>HTML</span>
        </div>

        <h3>Backend & Databases</h3>
        <div className="skills">
          <span>Node.js</span>
          <span>Supabase</span>
          <span>SQL</span>
        </div>

        <h3>Languages & Tools</h3>
        <div className="skills">
          <span>Python</span>
          <span>Java</span>
          <span>C++</span>
          <span>Git</span>
        </div>
      </section>
    </div>
  );
}
