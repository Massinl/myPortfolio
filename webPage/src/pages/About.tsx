import React, { useEffect } from 'react';
import '../styles/about.css';

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll('.about-section, .about-card');
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
    <div className="about-container">

      {/* === Hero / Intro === */}
      <section className="hero">
        <h1>About Me</h1>
        <p>
          I’m from Jayuya, Puerto Rico, and currently studying <strong>Software Engineering</strong> at UPRM.
          I enjoy turning ideas into web apps, learning new technologies, and tackling challenges head-on.
        </p>
      </section>

      {/* === Personal Info Cards === */}
      <section className="about-section">
        <div className="about-card">
          <h2>Hobbies & Gaming 🎮</h2>
          <p>
            Competitive PS5 gamer (PSN: <strong>vLmNukes</strong>), especially NBA 2K.  
            I also enjoy other video games and testing myself with <strong>daily LeetCode problems</strong>.
          </p>
        </div>

        <div className="about-card">
          <h2>Food & Fun 🍴</h2>
          <p>
            I love exploring new foods and cuisines.  
            Fun fact: I run on <strong>water</strong> instead of coffee—not common among coders! 😄
          </p>
        </div>

        <div className="about-card">
          <h2>Tech & Learning 💻</h2>
          <p>
            Passionate about web development, programming, and new tech.  
            Currently diving into <strong>Machine Learning</strong> and <strong>Artificial Intelligence</strong> to build smarter apps.
          </p>
        </div>

        <div className="about-card">
          <h2>My Approach 🚀</h2>
          <p>
            I tackle challenges with curiosity, persistence, and creativity.  
            Whether debugging code, building features, competing in games, or learning AI/ML, I aim to grow constantly and create enjoyable, impactful projects.
          </p>
        </div>
      </section>
    </div>
  );
}
