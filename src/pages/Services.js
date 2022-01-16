import "./styles/Services.scss";
import { Link } from "react-router-dom";
import useDocumentTitle from "../useDocumentTitle.js";
import sadT from "../assets/img/services/software-and-app-ontop/1.png";
import sadB from "../assets/img/services/software-and-app-bottom/2.png";

import pmT from "../assets/img/services/product-marketing-ontop/1.png";
import pmB from "../assets/img/services/product-marketing-bottom/2.png";

import ddT from "../assets/img/services/digital-design-ontop/1.png";
import ddB from "../assets/img/services/digital-design-bottom/2.png";
function Services() {
  useDocumentTitle("Services - Async Labs");
  return (
    <div className="services-container">
      <h1 className="services-top-text">
        Building from idea to implementation
      </h1>
      <h1 className="services-outline">Services</h1>
      <div className="software-and-app-dev row">
        <div className="col-xl-6 images">
          <img src={sadT} alt=""></img>
          <img src={sadB} alt="" className="img"></img>
        </div>
        <div className="col-xl-6 list">
          <h1>Software & App Development</h1>
          <p>
            Delivering tailored engineering solutions to your business
            challenges, whether it is architectural design or web application
            development.
          </p>
          <ul>
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Mobile Development</li>
            <li>Blockchain Development</li>
          </ul>
          <Link to="/services/Software%20And%20App%20Development">
            <button className="btn btn-primary">View service</button>
          </Link>
        </div>
      </div>
      <div className="product-marketing row">
        <div className="col-xl-6 images">
          <img src={pmT} alt=""></img>
          <img src={pmB} alt="" className="img"></img>
        </div>
        <div className="col-xl-6 list">
          <h1>Product Marketing</h1>
          <p>
            Your potential users are already here. We can help you reach them
            through different marketing channels and convert them to profitable
            customers.
          </p>
          <ul>
            <li>SEO & Search Marketing</li>
            <li>Social Media Marketing</li>
            <li>Content Marketing</li>
            <li>Inbound Marketing</li>
            <li>Paid Advertising</li>
          </ul>
          <Link to="/services/Product%20Marketing">
            <button className="btn btn-primary">View service</button>
          </Link>
        </div>
      </div>
      <div className="digital-design row">
        <div className="col-xl-6 images">
          <img src={ddT} alt="" className=""></img>
          <img src={ddB} alt="" className="img"></img>
        </div>
        <div className="col-xl-6 list">
          <h1>Digital Design</h1>
          <p>
            From UX to visual design, we create digital products people love to
            use.
          </p>
          <ul>
            <li>User Interface Design</li>
            <li>User Experience Design</li>
            <li>Graphic Design</li>
          </ul>
          <Link to="/services/Digital%20Design">
            <button className="btn btn-primary">View service</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Services;
