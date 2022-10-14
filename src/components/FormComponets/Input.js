const Input = ({ name, value, type }) => {
  return (
    <div className="text-input">
      <label>
        {name}
        <span>*</span>
      </label>
      <br />
      <input type={type} value={value} required />
    </div>
  );
};

export default Input;
