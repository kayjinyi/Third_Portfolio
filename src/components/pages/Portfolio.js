import React from "react";

import Fotofoto from "../../assets/Fotofoto.png";
import delicacy from "../../assets/delicacy.png";
import weather from "../../assets/weather.png";
import password from "../../assets/password.png";
import note from "../../assets/note.png";
import tech from "../../assets/tech.png";
import Project from "../Project";
export default function Portfolio() {
  const myProjects = [
    {
      name: "Fotofoto",
      image: Fotofoto,
      liveSites: "https://fotofotolibrary.herokuapp.com/",
      github: "https://github.com/kayjinyi/FOTOFOTO",
    },
    {
      name: "Delicacy",
      image: delicacy,
      liveSites: "https://kayjinyi.github.io/delicacy/",
      github: "https://github.com/kayjinyi/delicacy",
    },
    {
      name: "Weather Report",
      image: weather,
      liveSites: "https://kayjinyi.github.io/weatherReport/",
      github: "https://github.com/kayjinyi/weatherReport",
    },
    {
      name: "Password Generator",
      image: password,
      liveSites: "https://kayjinyi.github.io/thirdPassword/",
      github: "https://github.com/kayjinyi/thirdPassword",
    },
    {
      name: "Note Taker",
      image: note,
      liveSites: "https://pure-caverns-20602.herokuapp.com/",
      github: "https://github.com/kayjinyi/noteTaker",
    },
    {
      name: "Tech Blog",
      image: tech,
      liveSites: "https://gentle-hollows-22810.herokuapp.com/",
      github: "https://github.com/kayjinyi/TechBlog",
    },
  ];
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div id="work" className="row">
        {myProjects.map((project) => (
          <Project project={project}></Project>
        ))}
      </div>
    </div>
  );
}
