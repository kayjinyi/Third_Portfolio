import React from "react";
import github from "../assets/github.png";
function Project({ project }) {
  return (
    <div className="special">
      <img className="special-image" src={project.image}></img>

      <div className="special-text">
        <a
          className="card col-5 col-sm-4"
          id="cardsix"
          href={project.liveSites}
          target="_blank"
        >
          <div className="card-text">
            <h3>{project.name}</h3>
          </div>
        </a>
        <a href={project.github} target="_blank">
          {" "}
          <img src={github} alt="github" />
        </a>
      </div>
    </div>
  );
}

export default Project;
