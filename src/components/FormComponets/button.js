const Button = ({ text, ma, bg, pa }) => {
  return (
    <div>
      <button
        className="submit-btn"
        type="submit"
        style={{ background: { bg } }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
