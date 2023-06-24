import React, { Component } from "react";
import "./CSS/Certificates.css";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";

export default class Certificates extends Component {
  render() {
    return (
      <Scrollbars 
      >
        <div id="main-c">
          <div className="title">
            <h1>My Certifications</h1>
          </div>
          <div className="domain">
            <NavLink
              className="Nav-link-left size"
              to="/Certificates/WebDevelopment"
            >
              <div id="c1">
                <img src={require("../Images/web4.jpg")} alt="facebookicon" />
              </div>
            </NavLink>
            <NavLink className="Nav-link-right size" to="/Certificates/Cloud" >
              <div id="c2">
                <img
                  src={require("../Images/aws_logo.png")}
                  alt="facebookicon"
                />
              </div>
            </NavLink>
            <NavLink
              className="Nav-link-left size"
              to="/Certificates/ProgrammingLanguages"
            >
              <div id="c3">
                <img
                  src={require("../Images/Programming-languages.jpeg")}
                  alt="facebookicon"
                />
              </div>
            </NavLink>
            <NavLink
              className="Nav-link-right size"
              to="/Certificates/Databases"
            >
              <div id="c4">
                <img 
                  src={require("../Images/database-services.jpg")}
                  alt="facebookicon"
                />
              </div>
            </NavLink>
            <NavLink
              className="Nav-link-left size"
              to="/Certificates/Android-app-dev"
            >
              <div id="c5">
                <img 
                  src={require("../Images/android.png")}
                  alt="facebookicon"
                />
              </div>
            </NavLink>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
