import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./styles/NavBar.scss";
//Pages
import Projects from "../pages/Projects.js";
import About from "../pages/About.js";
import Services from "../pages/Services.js";
import Contact from "../pages/Contact.js";
import Careers from "../pages/Careers.js";
import Team from "../pages/Team.js";
import Blog from "../pages/Blog.js";
import PositionInfo from "../pages/PositionInfo.js";
import LINK from "./Link.js";

//Assets
import NavImage from "../assets/img/nav-img/scott-graham-5-f-nm-wej-4-t-aa-unsplash.jpg";

function NavBar() {
  function closeNav() {
    document.getElementById("wrapper").collapse("hide");
  }
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="wrapper row" id="wrapper">
          <div className="grid-item-1 col-xl-4 col-md-2 col-sm-1 col-1">
            <img src={NavImage} alt=""></img>
          </div>
          <div className="grid-item-2 col-xl-4 col-md-7 col-sm-7 col-8">
            <ul>
              <li>
                <Link to="/" id="link" onClick={closeNav}>
                  <LINK name="Home" />
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeNav}>
                  <LINK name="Projects" />
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeNav}>
                  <LINK name="About" />
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={closeNav}>
                  <LINK name="Services" />
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeNav}>
                  <LINK name="Contact" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="grid-item-3 col-xl-4 col-md-3 col-sm-4 col-3">
            <ul>
              <li>
                <Link to="/careers" onClick={closeNav}>
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/team" onClick={closeNav}>
                  Team
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={closeNav}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Routes>
          <Route exact path="/" element={<Contact />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/careers" element={<Careers />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
          <Route exact path="/careers/:id" element={<PositionInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
