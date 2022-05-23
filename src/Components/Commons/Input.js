const Input = ({ type, className, name, placeholder, value }) => {
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        placeholder={placeholder}
        required
        value={value}
      />
    </>
  );
};
export default Input;
