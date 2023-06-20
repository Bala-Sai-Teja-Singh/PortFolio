import React, { Component } from "react";
import "./CSS/Experience.css";
import backgroundImage from "../Images/blue.jpeg";
import Scrollbars from "react-custom-scrollbars-2";
export default class Experience extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }

  render() {
    return (
      <Scrollbars>
        <div className="timeline">
          <div className="t-container lf-container">
            <img
              src={require("../Images/fgrid.png")}
              alt="Immensphere logo"
            ></img>
            <div className="txt-box">
              <h2>Fluentgrid</h2>
              <small>June 2023 - Present</small>
              <p>Java Development Intern</p>
              <span className="left-container-arrow"></span>
            </div>
          </div>
          <div className="t-container rt-container">
            <img
              src={require("../Images/Immensphere-icon.png")}
              alt="Immensphere logo"
            ></img>
            <div className="txt-box">
              <h2>Immensphere</h2>
              <small>April 2022 - May 2022</small>
              <p>Android App Development Intern</p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
