import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import "./CSS/Webdev.css";
import background from "../Images/bg-img.avif";
export default class Pythonprojects extends Component {
  render() {
    return (
      <Scrollbars
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="certificate-page">
          <NavLink className="back" to="/projects">
            <BsArrowLeft/>
          </NavLink>
          <div className="certificates-box">
            <div className="certificates box">
              <div className="left">
                <h2>Project name</h2>
                <a
                  className="git-links"
                  href="https://github.com/HarshaChintalapati"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL
                </a>
                <a
                  className="git-links"
                  href="https://github.com/HarshaChintalapati"
                  target="_blank"
                  rel="noreferrer"
                >
                  Git repository link
                </a>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
