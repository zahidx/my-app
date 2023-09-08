import React from 'react';
import '../App.css'; // Import the CSS file

const Resume = () => {
  return (
    <div className="resume">
      <h1>Resume</h1>

      <section className="education">
        <h2>Education</h2>
        <div className="entry">
          <h3>University Name</h3>
          <p>Degree: Bachelor of Science in Computer Science</p>
          <p>Year: 2010 - 2014</p>
        </div>
        {/* Add more education entries as needed */}
      </section>

      <section className="experience">
        <h2>Work Experience</h2>
        <div className="entry">
          <h3>Company ABC</h3>
          <p>Position: Senior Software Engineer</p>
          <p>Duration: 2014 - Present</p>
          <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
        {/* Add more work experience entries as needed */}
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML/CSS</li>
          <li>Node.js</li>
          <li>Database Management</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
