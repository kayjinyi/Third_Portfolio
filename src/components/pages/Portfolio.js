import React from "react";

export default function About() {
  return (
    <div>
      <h1>Portfolio</h1>

      <p>project card</p>
      <div id="work">
        <h1>Work</h1>
        <div className="workproject">
          <div className="special">
            <a
              className="card"
              id="cardsix"
              href="https://fotofotolibrary.herokuapp.com/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Foto</h3>
                <p>One stop image editing library wherever you go!</p>
              </div>
            </a>
          </div>

          <div>
            <h4>
              An image editing platform, and creative outlet.
              <br />
              repo:{" "}
              <a href="https://github.com/kayjinyi/FOTOFOTO" target="_blank">
                https://github.com/kayjinyi/FOTOFOTO
              </a>
            </h4>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardone"
              href="https://kayjinyi.github.io/delicacy/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Delicacy</h3>
                <p>
                  Beautiful food pictures could both soothe our stomachs and
                  soul.
                </p>
              </div>
            </a>
          </div>

          <div>
            <h4>
              Team work. Providing randomized excellent food pictures that give
              the user some sparks about what to eat.
              <br />
              repo:{" "}
              <a href="https://github.com/kayjinyi/delicacy" target="_blank">
                https://github.com/kayjinyi/delicacy
              </a>
            </h4>
          </div>

          <div className="special">
            <a
              id="cardtwo"
              className="card"
              href="https://kayjinyi.github.io/weatherReport/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Weather Report</h3>
                <p>Weather for multiple cities</p>
              </div>
            </a>
          </div>

          <div className="repo">
            <h4>
              A website that lets travelers search for weather outlook for
              multiple cities so that they can plan a trip
              <br />
              repo:{" "}
              <a
                href="https://github.com/kayjinyi/weatherReport"
                target="_blank"
              >
                https://github.com/kayjinyi/weatherReport
              </a>
            </h4>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardthree"
              href="https://kayjinyi.github.io/thirdPassword/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Password Generator</h3>
                <p>Randomly generate!</p>
              </div>
            </a>
          </div>
          <div className="repo">
            <h4>
              A website that randomly generates a strong password that provides
              greater security.
              <br />
              repo:
              <a
                href="https://github.com/kayjinyi/thirdPassword"
                target="_blank"
              >
                https://github.com/kayjinyi/thirdPassword
              </a>
            </h4>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardfour"
              href="https://pure-caverns-20602.herokuapp.com/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Note Taker</h3>
                <p>Note Taker app</p>
              </div>
            </a>
          </div>

          <div className="repo">
            <h4>
              A website that lets small business owners write and save notes.
              <br />
              repo:{" "}
              <a href="https://github.com/kayjinyi/noteTaker" target="_blank">
                https://github.com/kayjinyi/noteTaker
              </a>
            </h4>
          </div>

          <div className="special">
            <a
              className="card"
              id="cardfive"
              href="https://gentle-hollows-22810.herokuapp.com/"
              target="_blank"
            >
              <div className="card-text">
                <h3>Tech Blog</h3>
                <p>Start your blog</p>
              </div>
            </a>
          </div>
          <div className="repo">
            <h4>
              CMS-style blog using Model View Controller (MVC) paradigm where
              developers can publish their blog posts and comment on other
              developers’ posts. repo:{" "}
              <a href="https://github.com/kayjinyi/TechBlog" target="_blank">
                https://github.com/kayjinyi/TechBlog
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
