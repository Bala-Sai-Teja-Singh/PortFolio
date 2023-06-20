import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { BsArrowRight } from "react-icons/bs";
import background from "../Images/bg-img.avif";
export default class ProgrammingLang extends Component {
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
          <NavLink className="back" to="/Certificates">
            <BsArrowLeft/>
          </NavLink>
          <div className="certificates-box">
            <div className="certificates box">
              <div className="left">
                <h2>Java Certification</h2>
                <p>ISSUED ON: May 2023</p>
                <a
                  href="https://drive.google.com/file/d/1m_baPwTsomimYKxfyYPpnOxhkTvgFv6D/view"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/hackerRank-logo.png")}
                  alt="prepbytes-logo"
                ></img>
              </div>
            </div>
            <div className="certificates box">
              <div className="left">
                <h2>
                  Getting Started with Competitive Programming Course Completion
                  Certificate
                </h2>
                <p>ISSUED ON: April 2023</p>
                <a
                  href="https://drive.google.com/drive/folders/1T7Cz63DMrhfVsyOvQTcxwOGknLlIcEpt"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/Nptel-logo.jpeg")}
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
