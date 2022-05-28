import React from "react";

export default function Resume() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        Download my{" "}
        <a
          href="https://drive.google.com/file/d/1K-9BInIZR4LEc49U06bwqPn8VISy-4Gb/view?usp=sharing"
          alt="resume"
          target="_blank"
        >
          Resume
        </a>
      </p>
      <h2>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>UIkit</li>
      </ul>
      <h2>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Express</li>
        <li>dotenv</li>
        <li>bcrypt</li>
        <li>handlebars</li>
      </ul>
    </div>
  );
}
