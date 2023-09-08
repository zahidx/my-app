import React from 'react';
import '../App.css'; // Import the CSS file



const PortfolioHome = () => {
  return (
    <div className="portfolio-home">
      <header>
        <h1>Zahidul Islam</h1>
        <p>Front-End Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Welcome to my portfolio website! I am a passionate front-end developer with a strong focus on creating beautiful and functional web applications.
        </p>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>
        {/* Add your portfolio items here */}
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me through the contact form below or via email at your.email@example.com.
        </p>
        {/* Add your contact form here */}
      </section>
    </div>
  );
};


export default PortfolioHome;
