const TextField = (props) => {
  const { id, type, placeholder, label, onChange, name } = props;

  return (
    <div>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}

      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default TextField;
