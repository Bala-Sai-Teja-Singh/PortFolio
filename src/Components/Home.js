import React, { Component } from "react";
import "../Components/CSS/Home.css";
import { TypeAnimation } from "react-type-animation";
import Shape from "../Images/shap.png";
import dp from "../Images/DP.png";
import backgroundImage from "../Images/blue.jpeg";
import { HiDownload } from "react-icons/hi";
export default class Home extends Component {
  componentDidMount() {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.overflow = "hidden";
  }
  render() {
    return (
      <div id="main">
        <div className="content">
          <h3 className="hi txt">Hello!</h3>
          <h1 className="txt">
            <span className="hi">I am </span>Bala Sai Teja Singh Bondili.
          </h1>

          <TypeAnimation
            className="my-info"
            sequence={[
              "I am a Computer Science Student!",
              1000,
              "I am a Freelancer!",
              1000,
              "I am a Web developer!",
              1000,
              "I am a Mobile App Developer!",
              1000,
            ]}
            wrapper="span"
            speed={20}
            style={{ display: "inline-block" }}
            repeat={Infinity}
            omitDeletionAnimation="true"
          />

          <div className="socialMedia socialMedia-mobile">
            <a
              href="https://github.com/Bala-Sai-Teja-Singh"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("../Images/GitHub-logo.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/teja-singh-443383242/"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("../Images/icons8-linkedin-50.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
            <a
              href="https://www.instagram.com/balasaiteja_singh/"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("../Images/instaicon.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100093261739794"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("../Images/fbicon.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
            <a
              href="tel:+91 7036779862"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("../Images/phone-call.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
            <a
              href="mailto:b.balasaiteja2003@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("../Images/email.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
          </div>
          <div className="ignore-web download-resume">
        <a
              href="Teja Singh Resume.pdf"
              target="_blank"
              download={"Teja Singh Resume.pdf"}
              className="nav_link"
            >
              Download Resume  &nbsp;
            </a>
            <a
              href="Teja Singh Resume.pdf"
              target="_blank"
              download={"Teja Singh Resume.pdf"}
              className="nav_link"
            >
              <HiDownload />
            </a>
        </div>
        </div>
        <div class="right-section">
          <img loading="eager" src={Shape} class="splash" alt="Shape" />
          <img loading="eager" src={dp} alt="Dp" />
        </div>
        
      </div>
    );
  }
}
