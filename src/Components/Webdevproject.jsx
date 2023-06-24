import React, { Component } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import "./CSS/Webdev.css";
import "./CSS/Project.css";
import "./CSS/Projects.css";

export default class Webdevprojects extends Component {
  render() {
    return (
      <Scrollbars
      >
        <div className="certificate-page">
          <NavLink className="back" to="/projects">
            <BsArrowLeft/>
          </NavLink>
          <div className="certificates-box">
            <div className="certificates box proj">
              <div className="left">
                <h2 className="no-margin">Basic Html Page</h2>
                <a
                  className="git-links"
                  href="https://bala-sai-teja-singh.github.io/backtracking-html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL <BsArrowRight />
                </a>
                <a
                  className="git-links"
                  href="https://github.com/Bala-Sai-Teja-Singh/backtracking-html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link <BsArrowRight />
                </a>
              </div>
              <div className="right rht">
                <h3 className="no-margin">Programming<br/>Languages</h3>
                <ul>
                  <li>HTML</li>
                </ul>
              </div>
            </div>
            <div className="certificates box proj">
              <div className="left">
                <h2 className="no-margin">TO-DO Web UI</h2>
                <a
                  className="git-links"
                  href="https://bala-sai-teja-singh.github.io/todo-web/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL <BsArrowRight />
                </a>
                <a
                  className="git-links"
                  href="https://github.com/Bala-Sai-Teja-Singh/todo-web"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link <BsArrowRight />
                </a>
              </div>
              <div className="right rht">
                <h3 className="no-margin">Programming<br/>Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className="certificates box proj">
              <div className="left">
                <h2 className="no-margin">TO-DO Mobile UI</h2>
                <a
                  className="git-links"
                  href="https://bala-sai-teja-singh.github.io/to-do-mobileUI/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL <BsArrowRight />
                </a>
                <a
                  className="git-links"
                  href="https://github.com/Bala-Sai-Teja-Singh/to-do-mobileUI"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link <BsArrowRight />
                </a>
              </div>
              <div className="right rht">
                <h3 className="no-margin">Programming<br/>Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className="certificates box proj">
              <div className="left">
                <h2 className="no-margin">Basic Restaurant UI</h2>
                <a
                  className="git-links"
                  href="https://bala-sai-teja-singh.github.io/BasicRestaurantUI/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL <BsArrowRight />
                </a>
                <a
                  className="git-links"
                  href="https://github.com/Bala-Sai-Teja-Singh/BasicRestaurantUI"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link <BsArrowRight />
                </a>
              </div>
              <div className="right rht">
                <h3 className="no-margin">Programming<br/>Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>
            <div className="certificates box proj">
              <div className="left">
                <h2 className="no-margin">Digital Clock</h2>
                <a
                  className="git-links"
                  href="https://bala-sai-teja-singh.github.io/Digital-Clock/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL <BsArrowRight />
                </a>
                <a
                  className="git-links"
                  href="https://github.com/Bala-Sai-Teja-Singh/Digital-Clock"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link <BsArrowRight />
                </a>
              </div>
              <div className="right rht">
                <h3 className="no-margin">Programming<br/>Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="certificates box proj" style={{ gridTemplateColumns: '45% 25% 30%',paddingRight:'10px' }}>
              <div className="left">
                <h2 className="no-margin">Portfolio</h2>
                <a
                  className="git-links"
                  href="https://bala-sai-teja-singh.github.io/Teja-Portfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL <BsArrowRight />
                </a>
                <a
                  className="git-links"
                  href="https://github.com/Bala-Sai-Teja-Singh/Teja-Portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link <BsArrowRight />
                </a>
              </div>
              <div className="right rht">
                <h3 className="no-margin">Programming<br/>Languages</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </div>
              <div className="right rht" style={{paddingLeft:'10px'}}>
                <h3 className="no-margin">Frameworks<br/>and Libraries</h3>
                <ul>
                  <li>Bootstrap</li>
                  <li>AOS</li>
                  <li>Animate.css</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
