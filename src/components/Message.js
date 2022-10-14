import { TiTick } from "react-icons/ti";
import Button from "./FormComponets/button";
import "./css/message.css";
import { Link } from "react-router-dom";
const Message = () => {
  return (
    <div className="message-wrapper">
      <div className="message-container">
        <div className="tick-circle">
          <TiTick className="icon" />
        </div>
        <h2>Thankyou for providing the feedback</h2>
        <p>We will work towards improving your experience</p>
        <Link to="/">
          <button id="close-btn">Close</button>
        </Link>
      </div>
    </div>
  );
};

export default Message;
