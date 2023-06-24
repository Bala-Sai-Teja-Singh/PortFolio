import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import "./CSS/Webdev.css";
export default class JavaProject extends Component {
  render() {
    return (
      <Scrollbars
      >
        <div className="certificate-page">
          <NavLink className="back" to="/projects">
            <BsArrowLeft />
          </NavLink>
          <div className="certificates-box">
            <div className="certificates box">
              <div className="left">
                <h2>Project name</h2>
                <a
                  className="git-links"
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hosting URL
                </a>
                <a
                  className="git-links"
                  href="/"
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
