import "../css/checbox.css";
const Checkbox = ({ message }) => {
  return (
    <div className="checkbox">
      <label>
        {message}
        <span>*</span>
      </label>
      <br />
      <div className="checkbox-container">
        <div className="checkbox-field">
          <input
            type="checkbox"
            id="exellent"
            name="excellent"
            value="excellent"
            required
          />
          <p>Exellent</p>
        </div>

        <div className="checkbox-field">
          <input type="checkbox" id="Good" name="Good" value="Good" required />
          <p>Good</p>
        </div>
        <div className="checkbox-field">
          <input type="checkbox" id="Fair" name="Fair" value="Fair" required />
          <p>Fair</p>
        </div>
        <div className="checkbox-field">
          <input type="checkbox" id="Bad" name="Bad" value="Bad" required />
          <p>Bad</p>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
