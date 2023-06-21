import "./App.css";
import Certificates from "./Components/Certificates";
import Project from "./Components/Project";
import Home from "./Components/Home";
import { useRoutes, NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Webdev from "./Components/Webdev";
import Cloud from "./Components/Cloud";
import ProgrammingLang from "./Components/ProgrammingLang";
import Datab from "./Components/Dabtab";
import Webdevproject from "./Components/Webdevproject";
import JavaProject from "./Components/JavaProject";
import Pythonprojects from "./Components/Pythonprojects";
import { HiDownload } from "react-icons/hi";
import AndroidAppDev from "./Components/AndroidAppDev";
import Experience from "./Components/Experience";
import Academics from "./Components/Academics";
window.onload = function () {
  var pageTitle = document.title;
  var attentionMessage = "Come Back! Know me better";

  document.addEventListener("visibilitychange", function (e) {
    var isPageActive = !document.hidden;

    if (!isPageActive) {
      document.title = attentionMessage;
    } else {
      document.title = pageTitle;
    }
  });
};
function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/Certificates",
      element: <Certificates />,
    },
    {
      path: "/Certificates/WebDevelopment",
      element: <Webdev />,
    },
    {
      path: "/Certificates/Cloud",
      element: <Cloud />,
    },
    {
      path: "/Certificates/ProgrammingLanguages",
      element: <ProgrammingLang />,
    },
    {
      path: "/Certificates/Databases",
      element: <Datab />,
    },
    {
      path: "/Certificates/Android-app-dev",
      element: <AndroidAppDev />,
    },
    {
      path: "/Projects/WebDevelopment",
      element: <Webdevproject />,
    },
    {
      path: "/Projects/Java",
      element: <JavaProject />,
    },
    {
      path: "/Projects/Python",
      element: <Pythonprojects />,
    },
    {
      path: "/projects",
      element: <Project />,
    },
    {
      path: "/Experience",
      element: <Experience />,
    },
    {
      path: "/Academics",
      element: <Academics />,
    },
  ]);

  return (
    <>
      <div id="main-container">
        <div id="left-container">
          <div id="components">
            <NavLink className="nav_link" to="/">
              Home
            </NavLink>
            <NavLink className="nav_link ignore" to="/">
              <BsArrowRight />
            </NavLink>
            <NavLink className="nav_link" to="/Certificates">
              Certificates{" "}
            </NavLink>
            <NavLink className="nav_link ignore" to="/Certificates">
              <BsArrowRight />
            </NavLink>
            <NavLink className="nav_link" to="/projects">
              Projects
            </NavLink>
            <NavLink className="nav_link ignore" to="/projects">
              <BsArrowRight />
            </NavLink>
            <NavLink className="nav_link" to="/Academics">
              Qualifications
            </NavLink>
            <NavLink className="nav_link ignore" to="/Academics">
              <BsArrowRight />
            </NavLink>
            <NavLink className="nav_link" to="/Experience">
              Experience
            </NavLink>
            <NavLink className="nav_link ignore" to="/Experience">
              <BsArrowRight />
            </NavLink>
            <a
              href="Teja Singh Resume.pdf"
              target="_blank"
              download={"Teja Singh Resume.pdf"}
              className="nav_link ignore"
            >
              Download Resume
            </a>
            <a
              href="Teja Singh Resume.pdf"
              target="_blank"
              download={"Teja Singh Resume.pdf"}
              className="nav_link ignore"
            >
              <HiDownload />
            </a>
          </div>
          <div className="socialMedia socialMedia-mq">
            <a
              href="https://github.com/Bala-Sai-Teja-Singh"
              target="_blank"
              rel="noreferrer"
              className="anchor"
            >
              <img
                src={require("./Images/GitHub-logo.png")}
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
                src={require("./Images/icons8-linkedin-50.png")}
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
                src={require("./Images/instaicon.png")}
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
                src={require("./Images/fbicon.png")}
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
                src={require("./Images/phone-call.png")}
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
                src={require("./Images/email.png")}
                alt="GitIcon"
                className="resize"
              ></img>
            </a>
          </div>
        </div>
        <div id="right-container">{element}</div>
      </div>
    </>
  );
}

export default App;
