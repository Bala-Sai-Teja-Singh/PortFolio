import React from "react";
import "./CSS/Certificates.css";
import { NavLink } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import background from "../Images/blue.jpeg";
import { useState } from "react";
export default function Certificates() {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <Scrollbars
    style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div id="main-c"  className={`App ${imagesLoaded ? "visible" : "hidden"}`}>
      <div className="title">
        <h1>My Certifications</h1>
      </div>
      <div className="domain">
        <NavLink
          className="Nav-link-left size"
          to="/Certificates/WebDevelopment"
        >
          <div id="c1">
            <div style={{height:"100%", width:"100%"}}>
            <img src={require("../Images/web4.jpg")} alt="WebImage" />
            </div>
          </div>
        </NavLink>
        <NavLink className="Nav-link-right size" to="/Certificates/Cloud" >
          <div id="c2">
            <img loading="lazy" 
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
            <img loading="lazy" 
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
            <img loading="lazy" 
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
            <img loading="lazy" 
              src={require("../Images/android.png")}
              alt="facebookicon"
              onLoad={handleImageLoad}
            />
          </div>
        </NavLink>
      </div>
    </div>
  </Scrollbars>
  )
}

