import { useParams } from "react-router-dom";
import "./styles/ServiceInfo.scss";
import $ from "jquery";
import topBanner from "../assets/img/services/topbanner/top-banner.png";
import firstImage from "../assets/img/services/bottom/1/mask.png";
import secondImage from "../assets/img/services/bottom/2/2.png";
import thirdImage from "../assets/img/services/bottom/3/3.png";
import fourthImage from "../assets/img/services/bottom/4/4.png";

import sadT from "../assets/img/services/software-and-app-ontop/1@3x.png";
import ddT from "../assets/img/services/digital-design-ontop/1@3x.png";

function ServiceInfo() {
  const { id } = useParams();
  $(document).ready(function () {
    $(this).scrollTop(0);
  });
  return (
    <div className="service-container">
      <div className="top-container">
        <img src={topBanner} alt="top-banner"></img>
        <h1 className="job-title">{id}</h1>
      </div>
      <div className="row middle-container">
        <div className="col-xl-6">
          <p style={{ color: "#2396b4" }}>Description</p>
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
      <div className="bottom-container">
        <h1>Work</h1>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <img src={firstImage} alt="" className="first"></img>
            <h2 className="revuto">Revuto</h2>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <img src={secondImage} alt="" className="second"></img>
            <h2 className="dubrovnik">MyDubrovnik App</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <img src={thirdImage} alt="" className="third"></img>
            <h2 className="net">Looks like tennis net</h2>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-12">
            <img src={fourthImage} alt="" className="fourth"></img>
            <h2 className="aymo">Aymo</h2>
          </div>
        </div>
      </div>
      <div className="last-container">
        <div>
          <img src={sadT} alt=""></img>
          <h3>Software And App Development</h3>
        </div>
        <div>
          <img src={ddT} alt=""></img>
          <h3>Digital Design</h3>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfo;
