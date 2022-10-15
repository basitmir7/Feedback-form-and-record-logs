import Checkbox from "./FormComponets/checbox";
import Input from "./FormComponets/Input";
import "./css/form.css";
import Button from "./FormComponets/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiErrorCircle } from "react-icons/bi";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  let isName;

  // submit function
  const handleformSubmit = (e) => {
    console.log(name, phone, email);

    if (name == "") {
      isName = !isName;
      console.log(isName);
    }
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <div className="form-heading">
          <h2>Aromatic bar</h2>
        </div>
        <form autoComplete="off" className="form">
          <div className="left-form-group">
            {" "}
            <div className="form-group">
              <Input
                value={name}
                type="text"
                name="Customer Name"
                setValue={setName}
              />
              <div className={`error ${!isName ? "error-display" : ""}`}>
                {" "}
                <BiErrorCircle className="icon" /> <p>Name cannot be empty</p>
              </div>
            </div>
            <div className="form-group">
              <label>
                phone<span>*</span>
              </label>

              <PhoneInput
                defaultCountry="IN"
                value={phone}
                onChange={setPhone}
                required
              />
              <br />
            </div>
            <div className="form-group">
              <Checkbox message="Please rate the qality of the service you recieved fro your host" />
            </div>
            <div className="form-group">
              <Checkbox message=" Was our restraunt clean ?" />
            </div>
          </div>
          <div className="right-form-group">
            <div className="form-group">
              <Input
                type="email"
                name="Email"
                value={email}
                setValue={setEmail}
              />
            </div>
            <div className="form-group" style={{ marginTop: "7.2rem" }}>
              <Checkbox message="Please rate the quality of your beverage" />
            </div>
            <div className="form-group">
              <Checkbox message="Please rate overall dining experience" />
            </div>
          </div>
        </form>
      </div>

      <Button
        text="submit review"
        type="submit"
        handleSubmit={() => handleformSubmit()}
      />
    </div>
  );
};

export default Form;
