import { BrowserRouter, Link } from "react-router-dom";
import "./styles/Footer.scss";
function Footer() {
  return (
    <BrowserRouter>
      <div className="footer-container">
        <div className="row">
          <div className="col-xl-4 col-md-4 col-xs-6 col-6">
            <ul>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-md-4 col-xs-6 col-6">
            <ul>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Linkedin</Link>
              </li>
              <li>
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-md-4 col-xs-6 col-6">
            <ul>
              <li>
                <Link to="/">Async d.o.o,</Link>
              </li>
              <li>
                <Link to="/">Lipovecka 1,</Link>
              </li>
              <li>
                <Link to="/">10000 Zagreb,</Link>
              </li>
              <li>
                <Link to="/">Croatia</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="row">
            <div className="col-xl-6">
              <p> © Async Labs. All rights reserved 2020.</p>
            </div>
            <div className="col-xl-6">
              <p> Privacy Policy</p>
            </div>
          </div> */}
      </div>
    </BrowserRouter>
  );
}

export default Footer;
