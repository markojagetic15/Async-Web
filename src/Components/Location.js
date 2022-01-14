import "./styles/Location.scss";
import { Link } from "react-router-dom";
function Location(props) {
  return (
    <Link to="#">
      <div className="location-container">
        <h3>{props.city}</h3>
        <br />
        <span>
          {props.street}
          <br />
          {props.email}
          <br />
          {props.telephone}
        </span>
      </div>
    </Link>
  );
}

export default Location;
