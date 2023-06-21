import React, { Component } from "react";
import "./CSS/Experience.css";
import Scrollbars from "react-custom-scrollbars-2";
export default class Academics extends Component {
  render() {
    return (
      <Scrollbars>
        <div className="timeline">
          <div className="t-container lf-container">
            <img
              src={require("../Images/raghu-logo.jpeg")}
              alt="Immensphere logo"
            ></img>
            <div className="txt-box">
              <h2>Raghu Engineering College</h2>
              <small>2020-2024</small>
              <p>Computer Science Department</p>
              <p>
                <strong>CGPA:</strong> 8.96
              </p>
            </div>
          </div>
          <div className="t-container rt-container">
            <img
              src={require("../Images/Nri-icn.png")}
              alt="Immensphere logo"
            ></img>
            <div className="txt-box">
              <h2>NRI-Junior College</h2>
              <small>2018-2020</small>
              <p>
                <strong>CGPA:</strong> 9.36
              </p>
            </div>
          </div>
          <div className="t-container lf-container">
            <img
              src={require("../Images/Rbs.png")}
              alt="Immensphere logo"
            ></img>
            <div className="txt-box">
              <h2>Ravindhra Bharathi School</h2>
              <small>2018 Passed Out</small>
              <p>
                <strong>CGPA:</strong> 9.8
              </p>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
