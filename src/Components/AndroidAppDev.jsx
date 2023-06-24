import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import "./CSS/Webdev.css";
import { BsArrowRight } from "react-icons/bs";
export default class AndroidAppDev extends Component {
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
                <h2>Android App Development Certification</h2>
                <p>ISSUED ON: June 2022</p>
                <a
                  href="https://drive.google.com/file/d/1HUziucXxFgg-ssxZgPVa6LIteFb5oj4Y/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/verzeo-logo.png")}
                  alt="prepbytes-logo"
                ></img>
              </div>
            </div>

            <div className="certificates box">
              <div className="left">
                <h2>
                  Android App Development Internship Completion Certification
                </h2>
                <p>ISSUED ON: June 2022</p>
                <a
                  href="https://drive.google.com/file/d/1g59hk1Q3uyQ9WgGAkCRrkQoWpGgjCa8D/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/Immensphere-icon.png")}
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
