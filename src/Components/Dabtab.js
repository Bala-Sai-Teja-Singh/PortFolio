import React, { Component } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import { BsArrowRight } from "react-icons/bs";
import background from "../Images/bg-img.avif";
export default class Datab extends Component {
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
                <h2>Data Base Management System Certification</h2>
                <p>ISSUED ON: March 2023</p>
                <a
                  href="https://drive.google.com/file/d/1J0PekNpIKpSRMo8icBdcC86sABu4qv4M/view"
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
