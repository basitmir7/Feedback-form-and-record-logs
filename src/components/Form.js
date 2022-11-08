import Checkbox from "./FormComponets/checbox";
import Input from "./FormComponets/Input";
import "./css/form.css";
import Button from "./FormComponets/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { BiErrorCircle } from "react-icons/bi";
import mainImage from "../assets/clip-1394.png";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const Message = [
    { mssg: "please rate your overall experience ", id: 1 },
    { mssg: "how was the service provide ?", id: 2 },
  ];
  const Inputs = [
    { type: "email", name: "Email", value: email, setValue: setEmail, id: 1 },
    { type: "text", name: "Username", value: name, setValue: setName, id: 2 },
  ];

  // submit function
  const handleformSubmit = (e) => {
    console.log(name, phone, email);
  };
  return (
    <div className="form-wrapper">
      <div className="form-container">
        <header className="form-heading">
          <h2>Please provide your feedback ?</h2>
        </header>
        <main className="layout">
          <div className="left-side">
            <form autoComplete="off" className="form">
              {/* <div className={`error `}>
                  {" "}
                  <BiErrorCircle className="icon" /> <p>Name cannot be empty</p>
                </div> */}

              {Inputs.map((input) => {
                return (
                  <div className="form-group" id={input.id}>
                    <Input
                      type={input.type}
                      name={input.name}
                      value={input.value}
                      setValue={input.setValue}
                    />
                  </div>
                );
              })}
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
              {Message.map((msg) => {
                return (
                  <div className="form-group" key={msg.id}>
                    <Checkbox message={msg.mssg} />
                  </div>
                );
              })}
              <Button
                text="submit review"
                type="submit"
                handleSubmit={() => handleformSubmit()}
              />
            </form>
          </div>
          <div className="right-side">
            <img src={mainImage} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Form;
