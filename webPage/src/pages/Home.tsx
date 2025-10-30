import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import profilePic from '../assets/profile.jpg'; // Make sure your image is in src/assets/

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.section-card, .project-card');
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
      <section className="hero section-card">
        <img src={profilePic} alt="Cristian Massini" className="hero-image" />
        <div className="hero-text">
            <h1>Hello world!</h1>
            <h1>I'm Cristian Massini Pérez 👋</h1>
          <p>
            4th-year <strong>Software Engineering student</strong> & <strong>Web Developer</strong> from Puerto Rico.
            I turn ideas into smooth, functional web apps, focusing on clean code and engaging user experiences.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="button button-blue">
              View My Projects
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="button button-green">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* === What I Do Section === */}
      <section className="section-card">
        <h2>What I Do</h2>
        <p>
          I build <strong>responsive web apps</strong>, manage <strong>databases</strong>, and develop <strong>full-stack systems</strong>.
          My experience comes from personal and university projects. I’m curious, collaborative, and love building tools that help people.
        </p>
      </section>

      {/* === Skills Section === */}
      <section className="section-card">
        <h2>Technical Skills</h2>
        <div className="skills-cards">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, TypeScript, CSS, HTML</p>
          </div>
          <div className="skill-card">
            <h3>Backend & DB</h3>
            <p>Node.js, Supabase, SQL</p>
          </div>
          <div className="skill-card">
            <h3>Languages & Tools</h3>
            <p>Python, Java, C++, Git, Github</p>
          </div>
        </div>
      </section>

      {/* === Projects Section === */}
      <section className="section-card">
        <h2>Highlighted Projects</h2>
        <div className="projects-preview">
          <div className="project-card">
            <h3>Instant Runoff Voting System</h3>
            <p>Python app implementing ranked-choice voting for fair, transparent elections.</p>
          </div>
          <div className="project-card">
            <h3>Travel Time System</h3>
            <p>Shortest-path visualizer in Java, optimizing navigation and route planning.</p>
          </div>
          <div className="project-card">
            <h3>UPRM Connect</h3>
            <p>React & Supabase platform connecting students for projects and study groups.</p>
          </div>
        </div>
        <Link to="/projects" className="button button-blue">
          See All Projects →
        </Link>
      </section>

    </div>
  );
}
