/* eslint-disable eqeqeq */
import "./Form.scss";
import { useState } from "react";
import React from "react";
import { useForm } from "react-hook-form";
function Form(props) {
  let [add, setAdd] = useState();
  const [a] = useState(Math.floor(Math.random() * 10));
  const [b] = useState(Math.floor(Math.random() * 10));
  function handleCaptcha(event) {
    setAdd(event.target.value);
  }

  function handleSubmitForm(event) {
    document.getElementById("form").reset();
  }

  const { register, formState } = useForm({ mode: "onChange" });

  React.useEffect(() => {
    console.log("touchedFields", formState.touchedFields);
  }, [formState]);

  return (
    <form onSubmit={handleSubmitForm} id="form" autoComplete="on" name="Form">
      <div className="row">
        <div className="searchformfld form-group col-xl-6">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="fName"
            id="fName"
            required
            {...register("fName")}
          />
          <label>Your name*</label>
        </div>
        <div className="searchformfld form-group col-xl-6">
          <input
            type="email"
            className="form-control"
            placeholder=" "
            name="email"
            required
            {...register("email")}
          />
          <label>Email address*</label>
        </div>
      </div>
      <div className="row">
        <div className="searchformfld form-group col-xl-6">
          <input
            type="tel"
            className="form-control"
            placeholder=" "
            name="phone"
          />
          <label>Phone number</label>
        </div>
        <div className="searchformfld form-group col-xl-6">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="company"
          />
          <label>Company</label>
        </div>
      </div>

      <div className="row">
        <div className="searchformfld form-group col-xl-12">
          <input
            type="text"
            className="form-control"
            placeholder=" "
            name="title"
            required
            {...register("title")}
          />
          <label>Title*</label>
        </div>
        <div className="searchformfld form-group col-xl-12">
          <textarea
            type="textarea"
            className="form-control"
            placeholder=" "
            name="message"
            required
            {...register("message")}
            rows="5"
          />
          <label>Message*</label>
        </div>
      </div>
      <h6>Are you sure you're not a robot?</h6>
      <h2 className="add" style={{ display: "inline-block" }}>
        {a} + {b} =
      </h2>
      <input
        className="captcha"
        type="number"
        onChange={handleCaptcha}
        value={add}
        required
      ></input>
      <div className="button">
        {add == a + b && Object.keys(formState.touchedFields).length == 4 ? (
          <button type="submit" className="btn col-xl-2" id="SubmitButton">
            Submit
          </button>
        ) : (
          <button
            type="submit"
            className="btn col-xl-2"
            id="SubmitButton"
            disabled
          >
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default Form;
