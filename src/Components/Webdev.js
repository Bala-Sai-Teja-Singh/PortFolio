import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import "./CSS/Webdev.css";
import { BsArrowRight } from "react-icons/bs";
import background from "../Images/bg-img.avif";
export default class Webdev extends Component {
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
                <h2>Full Stack MERN Developer Certification</h2>
                <p>ISSUED ON: May 2023</p>
                <a
                  href="https://drive.google.com/file/d/1yqv1x15h_NS6seyt13F6Gzkli1k37ffo/view?pli=1"
                  target="_blank"
                  rel="noreferrer"
                >
                  View certficate <BsArrowRight className="arrow" />
                </a>
              </div>
              <div className="right">
                <img
                  src={require("../Images/Prepbyteslogo.avif")}
                  alt="prepbytes-logo"
                ></img>
              </div>
            </div>
            <div className="certificates box">
              <div className="left">
                <h2>CSS Certification</h2>
                <p>ISSUED ON: May 2023</p>
                <a
                  href="https://drive.google.com/file/d/1r3e54IGPWdllO1DRxshIS0mfXxAoHusx/view"
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
                <h2>React Certification</h2>
                <p>ISSUED ON: May 2023</p>
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
                  src={require("../Images/Learnx-logo.png")}
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
