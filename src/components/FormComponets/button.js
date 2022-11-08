const Button = ({ text, handleSubmit }) => {
  return (
    <>
      <button className="submit-btn" type="submit" onClick={handleSubmit}>
        {text}
      </button>
    </>
  );
};

export default Button;
