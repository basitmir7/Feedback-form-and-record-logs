const Button = ({ text, handleSubmit }) => {
  return (
    <div>
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        {text}
      </button>
    </div>
  );
};

export default Button;
