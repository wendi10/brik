const Button = (props) => {
  const { onClick, text, customStyle } = props;

  return (
    <button onClick={onClick} className={"btn " + customStyle}>
      {text}
    </button>
  );
};

export default Button;
