import React from "react";
import github from "../assets/github.png";
function Project({ project }) {
  return (
    <div className="card special col-6 col-sm-12">
      <br></br>
      <div>
        <img className="special-image" src={project.image}></img>
      </div>
      <div className="special-text">
        <a href={project.liveSites} target="_blank">
          <div className="card-text">
            <h3>{project.name}</h3>
          </div>
        </a>
        <a href={project.github} target="_blank">
          {" "}
          <img src={github} alt="github" />
        </a>
      </div>
      <br></br>
    </div>
  );
}

export default Project;
