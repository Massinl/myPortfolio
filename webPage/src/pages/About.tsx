import React from 'react';
import '../styles/home.css';

export default function About() {
  return (
    <div className="home-container">

      {/* === Personal Info Cards === */}
      <section className="about-section no-animation">
        <div className="section-card">
          <h2>About Me</h2>
          <p>
            I’m from Jayuya, Puerto Rico, and currently studying <strong>Software Engineering</strong> at the UPR of Mayagüez.
            I enjoy turning ideas into web apps, learning new technologies, and tackling every type of challenges head-on.
          </p>
        </div>      
        <div className="section-card">
          <h2>Hobbies</h2>
            <p>
                When I’m not working or coding, you’ll find me on my PS5, diving into competitive gaming. 
                My top picks are <strong>NBA 2K</strong>, <strong>Rocket League</strong> and <strong>Rainbow Six</strong>. 
                I love testing my skills, challenging others, and having a blast online. 
                If you’re into gaming too, add me and let’s play! (PSN: <strong>vLmNukes</strong>)
            </p>

        </div>

        <div className="section-card">
          <h2>Food & Fun 🍴</h2>
          <p>
            I love exploring almost all types of food—Asian, Korean, Criollo, and more. Also I enjoy experimenting in the kitchen, trying out new recipes and flavors.
            That said, the experiments doesn’t always go as planned...
           <br /><br />Fun fact: I run on <strong>water</strong> instead of coffee this is not your typical coder!
          </p>



        </div>

        <div className="section-card">
          <h2>Tech & Learning 💻</h2>
          <p>
            Passionate about web development, programming, and new tech.  
            Currently diving into <strong>Machine Learning</strong> and  <strong>Artificial Intelligence</strong> to build smarter apps.
          </p>
        </div>

        <div className="section-card">
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
