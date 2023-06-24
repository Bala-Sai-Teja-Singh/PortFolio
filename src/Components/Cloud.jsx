import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { BsArrowRight } from "react-icons/bs";
export default class Cloud extends Component {
  render() {
    return (
      <Scrollbars
      >
        <div className="certificate-page">
          <NavLink className="back" to="/Certificates">
            <BsArrowLeft/>
          </NavLink>
          <div className="certificates-box">
            <div className="certificates box">
              <div className="left">
                <h2>AWS Academy Graduate - AWS Academy Cloud Foundations</h2>
                <p>ISSUED ON: December 2022</p>
                <a
                  href="https://drive.google.com/file/d/1iQIa8l7s0VgILgdDSnzdPpSA-a5Bl2su/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate
                  <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/aws-cloud-logo.webp")}
                  alt="prepbytes-logo"
                ></img>
              </div>
            </div>
            <div className="certificates box">
              <div className="left">
                <h2>AWS Academy Graduate - AWS Academy Data Analytics</h2>
                <p>ISSUED ON: May 2023</p>
                <a
                  href="https://drive.google.com/drive/folders/1T7Cz63DMrhfVsyOvQTcxwOGknLlIcEpt"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate
                  <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/aws-cloud-logo.webp")}
                  alt="prepbytes-logo"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Scrollbars>
    );
  }
}
