function Button({ onClick, type = null, children }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
