/* eslint-disable eqeqeq */
import "./styles/Form.scss";
import Swal from "sweetalert2";
import { useState } from "react";
function Form(props) {
  let [add, setAdd] = useState();
  const [a] = useState(Math.floor(Math.random() * 10));
  const [b] = useState(Math.floor(Math.random() * 10));
  function handleSubmit(event) {
    Swal.fire({
      position: "top",
      icon: "success",
      title: "You have successfully sent a message",
      showConfirmButton: true,
      timer: 3000,
    });
    event.preventDefault();
    document.getElementById("form").reset();
  }
  function handleChange(event) {
    setAdd(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit} id="form">
      <div className="row">
        <div className="searchformfld form-group col-xl-6">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            required
          />
          <label>{props.field_1}</label>
        </div>
        <div className="searchformfld form-group col-xl-6">
          <input
            type="email"
            className="form-control"
            placeholder=" "
            required
          />
          <label>{props.field_2}</label>
        </div>
      </div>
      <div className="row">
        <div className="searchformfld form-group col-xl-6">
          <input type="text" className="form-control" placeholder=" " />
          <label>{props.field_3}</label>
        </div>
        <div className="searchformfld form-group col-xl-6">
          <input
            type={props.type}
            className="form-control"
            placeholder=" "
            title="&nbsp;"
          />
          <label>{props.field_4}</label>
        </div>
      </div>

      <div className="row">
        <div className="searchformfld form-group col-xl-12">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            required
          />
          <label>{props.field_5}</label>
        </div>
        <div className="searchformfld form-group col-xl-12">
          <input
            type="textarea"
            className="form-control"
            placeholder=" "
            required
          />
          <label>{props.field_6}</label>
        </div>
      </div>
      <h6>Are you sure you're not a robot?</h6>
      <h2 className="add">
        {a} + {b} =
      </h2>
      <input
        className="captcha"
        type="text"
        required
        placeholder="Answer here"
        onChange={handleChange}
        value={add}
      ></input>
      <div className="button">
        {add == a + b ? (
          <button type="submit" className="btn col-xl-2">
            Submit
          </button>
        ) : (
          <button type="submit" className="btn col-xl-2" disabled>
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
