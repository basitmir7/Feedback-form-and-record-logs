import Checkbox from "./FormComponets/checbox";
import Input from "./FormComponets/Input";
import Phone from "./FormComponets/Phone";
import "./css/form.css";
import Button from "./FormComponets/button";
import { Link } from "react-router-dom";

const Form = () => {
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
              <Input type="text" name="Customer Name" />
            </div>
            <div className="form-group">
              <label>
                phone<span>*</span>
              </label>

              <Phone />
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
              <Input type="email" name="Email" />
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
      <Link to="/message">
        <Button text="submit review" />
      </Link>
    </div>
  );
};

export default Form;
