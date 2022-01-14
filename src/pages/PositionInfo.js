import topBanner from "../assets/img/career/image.jpg";
import Laptop from "../assets/img/career/image.png";
import "./styles/PositionInfo.scss";
import Form from "../Components/Form.js";
import useDocumentTitle from "../useDocumentTitle.js";
import { useParams } from "react-router-dom";
import $ from "jquery";
function PositionInfo() {
  const { id } = useParams();
  useDocumentTitle("We're hiring an " + id);
  $(document).ready(function () {
    $(this).scrollTop(0);
  });
  return (
    <div className="position-info">
      <div className="top-container">
        <img src={topBanner} alt="top-banner"></img>
        <h1 className="job-title">{id}</h1>
      </div>
      <div className="desc row">
        <div className="col-xl-6">
          <p>Description</p>
          <h1>We are hiring a {id}</h1>
        </div>
        <div className="col-xl-6">
          <p>
            Deep light land beginning form fish there brought fifth forth earth
            us make cattle seasons every spirit one can't behold, creepeth fish
            thing male his him darkness darkness night us tree.
            <br /> <br />
            Given give make creature won't, yielding said good Seed seed form
            replenish deep which doesn't light can't our fruit seasons let
            light.
          </p>
        </div>
      </div>
      <div className="qualifications">
        <img src={Laptop} alt="laptop"></img>
        <div className="row">
          <div className="col-xl-6">
            <h3>Qualifications</h3>
            <ul>
              <li>
                A minimum of 5 years designing experiences and products in a
                professional setting.
              </li>
              <li>Excellent knowledge of modern HTML, CSS</li>
              <li>
                Fruit their days replenish first forth man after morning heaven
                place.
              </li>
              <li>
                Creeping creepeth open firmament seed lesser. Saw all gathered
                without. Deep thing gathering, midst.
              </li>
            </ul>
          </div>
          <div className="col-xl-6 ">
            <h3>Responsibilities</h3>
            <ul>
              <li>Build prototypes to illustrate ideas.</li>
              <li>
                Rule made fruit without deep. Night there a place herb our was
                greater fish cattle which gathering fill moving days.
              </li>
              <li>
                Fruit their days replenish first forth man after morning heaven
                place.
              </li>
              <li>
                Creeping creepeth open firmament seed lesser. Saw all gathered
                without. Deep thing gathering, midst.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="send-profile">
        <p>SEND PROFILE</p>
        <h1>Apply Position</h1>
        <Form
          field_1="First name*"
          field_2="Email address*"
          field_3="Last name*"
          field_5="Portfolio link*"
          field_6="About you*"
          type="file"
        />
      </div>
    </div>
  );
}

export default PositionInfo;
