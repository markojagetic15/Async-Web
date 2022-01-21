import "./styles/Careers.scss";
import Position from "../../Components/Position/Position.js";
import careerImage from "../../assets/img/careers/image.png";
import positionData from "../../assets/positions-data.js";
import useDocumentTitle from "../../useDocumentTitle.js";

function Careers() {
  useDocumentTitle("Careers - Async Labs");
  function positionF(info) {
    return (
      <Position
        key={info.id}
        id={info.id}
        position={info.position}
        name={info.name}
        type={info.type}
      />
    );
  }

  return (
    <div className="careers-container">
      <h1>Creative talent wanted</h1>
      <h1 className="careers-outline">Careers</h1>
      <img src={careerImage} alt=""></img>
      <div className="careers-desc">
        <p>Careers</p>
        <h1>The kind of people we look for</h1>
        <div className="row">
          <div className="col-xl-6">
            <h4>Hungry for new knowledge</h4>
            <p>
              Itself sixth bearing beast was she'd image spirit tree male
              gathering and open gathered fourth itself can't seas. Dominion
              one, gathered bearing third.
            </p>
          </div>
          <div className="col-xl-6">
            <h4>Not afraid of the unknown</h4>
            <p>
              Don't signs creepeth creeping light spirit kind divide fowl,
              female saying, forth after bring created. Good that fish set don't
              void.
            </p>
          </div>
        </div>
        <div className="positions">
          <h1>Positions</h1>
          <div>
            {positionData.length === 0 ? (
              <h1>There are no open positions</h1>
            ) : (
              positionData.map(positionF)
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
