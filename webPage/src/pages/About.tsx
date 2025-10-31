import React, { type FC } from 'react';
import './styles/about.css';
import { FaUser, FaGamepad, FaUtensils, FaLaptopCode, FaRocket } from 'react-icons/fa';

// Data for vertical bar chart
const barsData = [
  { label: 'Sleeping', percent: 100 },
  { label: 'Gaming', percent: 95 },
  { label: 'Eating', percent: 95 },
  { label: 'Coding', percent: 80 },
  { label: 'Calisthenics', percent: 25 },
];

const About: FC = () => {
  return (
    <div className="about-container">
      <section className="about-section">

        {/* Card 1: About Me */}
        <div className="about-section-card wide-card">
          <h2><FaUser /> About Me</h2>
          <p>
            I’m from Jayuya, Puerto Rico, and currently studying <strong>Software Engineering</strong> at UPRM.
            I enjoy turning ideas into web apps, learning new technologies, and tackling challenges heads on.
          </p>
        </div>
        {/* Card 5: Tech & Learning */}
        <div className="about-section-card">
          <h2><FaLaptopCode /> Tech & Learning</h2>
          <p>
            Passionate about web development, programming, and new tech.  
            Currently diving into <strong>Machine Learning</strong> and <strong>AI</strong> to build smarter apps.
          </p>
        </div>

        {/* Card 3: Hobbies */}
        <div className="about-section-card">
          <h2><FaGamepad /> Hobbies</h2>
          <p>
            When I’m not working or coding, you’ll find me on the gym or most likely on my PS5, diving into competitive gaming. 
            My top picks are <strong>NBA 2K</strong>, <strong>Rocket League</strong>, and <strong>Rainbow Six</strong>. 
            I love testing my skills, challenging others, and having a blast online. If you like to play feel free to add me! (PSN: <strong>vLmNukes</strong>)
          </p>
        </div>

        {/* Card 4: Food & Fun */}
        <div className="about-section-card">
          <h2><FaUtensils /> Food & Fun</h2>
          <p>
            I love exploring almost all types of food—Asian, Korean, Criollo, and more. I also enjoy experimenting in the kitchen, though mofongo is still tricky to master!
            <br /><br />
            <strong>Fun fact:</strong> I run on <strong>water</strong> instead of coffee, definitely not your typical coder!
          </p>
        </div>


        {/* Card 6: My Approach */}
        <div className="about-section-card">
          <h2><FaRocket /> My Approach</h2>
          <p>
            I tackle challenges with curiosity, persistence, and creativity.  
            Whether debugging code, building features, competing in games, or learning AI/ML, I aim to grow constantly and create impactful projects.
          </p>
        </div>

        {/* Card 2: Archetype Breakdown */}
        <div className="about-section-card wide-card">
          <h2>Archetype Breakdown 🧠</h2>
          <div className="vertical-bar-chart-container" style={{ '--chart-height': '300px' } as React.CSSProperties}>
            {barsData.map((bar) => (
              <div className="bar-item" key={bar.label}>
                <div className="bar-percent">{bar.percent}%</div>
                <div className="bar-wrapper">
                  <div className="bar-fill" style={{ height: `${bar.percent}%` }}></div>
                </div>
                <div className="bar-label">{bar.label}</div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default About;
