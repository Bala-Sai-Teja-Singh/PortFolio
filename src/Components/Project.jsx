import React, { Component } from "react";
import "./CSS/Project.css";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
export default class Projects extends Component {
  render() {
    return (
      <Scrollbars
      >
        <div id="main-p">
          <div className="title">
            <h1>Projects</h1>
          </div>
          <div className="domain-p domain">
            <NavLink
              className="Nav-link-left size"
              to="/Projects/WebDevelopment"
            >
              <div id="p1">
                <img loading="eager" 
                  src={require("../Images/web-projects.jpg")}
                  alt="facebookicon"
                />
              </div>
            </NavLink>
            <NavLink className="Nav-link-right size" to="/Projects/Java">
              <div id="p2">
                <img loading="eager" src={require("../Images/java.jpg")} alt="facebookicon" />
              </div>
            </NavLink>
            <NavLink className="Nav-link-left size" to="/Projects/Python">
              <div id="p3">
                <img loading="eager" src={require("../Images/python.jpg")} alt="facebookicon" />
              </div>
            </NavLink>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
