const Input = ({ name, value, type, setValue }) => {
  return (
    <div className="text-input">
      <label>
        {name} <span>*</span>
      </label>
      <br />
      <input
        type={type}
        value={value}
        required
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
