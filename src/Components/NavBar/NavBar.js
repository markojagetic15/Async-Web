import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./NavBar.scss";
import {
  Projects,
  About,
  Services,
  Contact,
  Careers,
  Team,
  Blog,
  PositionInfo,
  ServiceInfo,
} from "../../pages";
import NavLink from "../../Components/NavLink/NavLink.js";

//Assets
import NavImage from "../../assets/img/nav-img/scott-graham-5-f-nm-wej-4-t-aa-unsplash.jpg";

function NavBar() {
  function closeNav() {
    document.getElementById("grid-container").collapse("hide");
  }
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
        <label htmlFor="active" className="close"></label>
        <div className="grid-container" id="grid-container">
          <div className="grid-item">
            <img src={NavImage} alt=""></img>
          </div>
          <div className="grid-item">
            <div>
              <ul>
                <li>
                  <Link to="/" id="link" onClick={closeNav}>
                    <NavLink name="Home" />
                  </Link>
                </li>
                <li>
                  <Link to="/projects" onClick={closeNav}>
                    <NavLink name="Projects" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={closeNav}>
                    <NavLink name="About" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={closeNav}>
                    <NavLink name="Services" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={closeNav}>
                    <NavLink name="Contact" />
                  </Link>
                </li>
              </ul>
            </div>
            <div>
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
          <Route exact path="/services/:id" element={<ServiceInfo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default NavBar;
