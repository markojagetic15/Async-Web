import "./NavLink.scss";
function NavLink(props) {
  return (
    <button className="btn btn-arrow ">
      <span>
        {props.name}
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 36.1 25.8"
          enableBackground="new 0 0 36.1 25.8"
        >
          <g>
            <line
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeMiterlimit="10"
              x1="0"
              y1="12.9"
              x2="34"
              y2="12.9"
            ></line>
            <polyline
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeMiterlimit="10"
              points="22.2,1.1 34,12.9 22.2,24.7   "
            ></polyline>
          </g>
        </svg>
      </span>
    </button>
  );
}

export default NavLink;
