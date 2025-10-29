import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>Cristian Massini Pérez</h1>
      <p>Software Engineer | Web & Database Developer</p>

      <div className="flex gap-4">
        <Link to="/projects" className="button button-blue">
          View Projects
        </Link>
        <a href="/resume.pdf" target="_blank" className="button button-green">
          Download Resume
        </a>
      </div>

      <div className="skills">
        <span>React</span>
        <span>TypeScript</span>
        <span>Supabase</span>
        <span>SQL</span>
      </div>
    </div>
  );
}
