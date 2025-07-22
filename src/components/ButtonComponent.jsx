const ButtonComponent = ({ className, disabled, onClick, text }) => {
  return (
    <>
      <button className={className} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </>
  );
};

export default ButtonComponent;
