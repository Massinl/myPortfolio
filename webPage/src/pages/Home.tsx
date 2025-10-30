import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import profilePic from '../assets/profile.jpg'; // put your image in src/assets/

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.skills-section, .project-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="home-container">

      {/* === Hero Section === */}
      <section className="hero">
        <img src={profilePic} alt="Cristian Massini Pérez" className="hero-image" />
        <h1>Hi, I'm <br />Cristian Massini Pérez 👋</h1>
        <p>
          I’m a <strong>4th-year Software Engineering student</strong> and <strong>Web Developer</strong> 
          based in Puerto Rico. I love turning ideas into smooth, functional, and visually engaging web experiences. 
          I focus on crafting clean, efficient code and systems that make a difference.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="button button-blue">
            View My Projects
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button button-green">
            Download Resume
          </a>
        </div>
      </section>

      {/* === About Section === */}
      <section className="skills-section">
        <h2>What I Do</h2>
        <p>
          I specialize in designing <strong>responsive web applications</strong>, managing <strong>databases</strong>, 
          and developing <strong>full-stack systems</strong>. I’m driven by curiosity, collaboration, and the desire 
          to build tools that genuinely help people. Most of my experience comes from personal and university projects.
        </p>
      </section>

      {/* === Skills Section === */}
      <section className="skills-section">
        <h2>Technical Skills</h2>

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

      {/* === Projects Section === */}
      <section className="skills-section">
        <h2>Highlighted Projects</h2>
        <p>Here are a few projects I’ve built recently.</p>

        <div className="projects-preview">
          <div className="project-card">
            <h3>Instant Runoff Voting System</h3>
            <p>A voting app implementing ranked-choice logic using Python. Designed for fair and transparent elections.</p>
          </div>

          <div className="project-card">
            <h3>Travel Time System</h3>
            <p>Shortest-path visualizer using Dijkstra’s algorithm in Java, built to optimize route planning.</p>
          </div>

          <div className="project-card">
            <h3>UPRM Connect</h3>
            <p>A collaboration platform built with React & Supabase, connecting students for projects and study groups.</p>
          </div>
        </div>

        <Link to="/projects" className="button button-blue">
          See All Projects →
        </Link>
      </section>

    </div>
  );
}
