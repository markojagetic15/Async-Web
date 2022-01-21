import { useParams, Link } from "react-router-dom";
import "./styles/ServiceInfo.scss";
import $ from "jquery";
import topBanner from "../../assets/img/services/topbanner/top-banner.png";
import firstImage from "../../assets/img/services/bottom/1/mask.png";
import secondImage from "../../assets/img/services/bottom/2/2.png";
import thirdImage from "../../assets/img/services/bottom/3/3.png";
import fourthImage from "../../assets/img/services/bottom/4/4.png";

import sadT from "../../assets/img/services/software-and-app-ontop/1@3x.png";
import ddT from "../../assets/img/services/digital-design-ontop/1@3x.png";

function ServiceInfo() {
  const { id } = useParams();
  $(document).ready(function () {
    $(this).scrollTop(0);
  });
  return (
    <div className="service-container">
      <div className="title">
        <img src={topBanner} alt="top-banner"></img>
        <h1 className="job-title">{id}</h1>
      </div>
      <div className="row service-description">
        <div className="col-xl-6">
          <p>Description</p>
          <h2>
            Behold you lesser our let seed there for and light great lights that
            seasons.
          </h2>
        </div>
        <div className="col-xl-6">
          <p>
            Gathered hath days beginning fowl divided image i can't given is
            life air. Created without stars life moved second two forth make.{" "}
            <br />
            <br />
            Creature also hath every fruitful them third own. She'd called he
            created two after created morning make also open stars upon, herb
            without fowl said itself good. Fruitful seed of, blessed be were.
          </p>
          <ul>
            <li>User interface design</li>
            <li>User Experience Design</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>
      <div className="work">
        <h1>Work</h1>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <Link to="/">
              <img src={firstImage} alt="" className="first"></img>
              <h2>Revuto</h2>
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <Link to="/">
              <img src={secondImage} alt="" className="second"></img>
              <h2>MyDubrovnik App</h2>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <Link to="/">
              <img src={thirdImage} alt="" className="third"></img>
              <h2>Bizar</h2>
            </Link>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <Link to="/">
              <img src={fourthImage} alt="" className="fourth"></img>
              <h2>Aymo</h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="links_to_other_services">
        <Link to="/services/Software%20And%20App%20Development">
          <div>
            <img src={sadT} alt=""></img>
            <h3>Software And App Development</h3>
          </div>
        </Link>
        <Link to="/services/Digital%20Design">
          <div>
            <img src={ddT} alt=""></img>
            <h3>Digital Design</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ServiceInfo;
