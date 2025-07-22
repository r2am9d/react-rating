import ButtonComponent from "./ButtonComponent";

const ModalComponent = ({ rating, isOpen, onClick }) => {
  const text = rating > 1 ? "stars" : "star";
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You</h2>
            <p>
              You rated us {rating} {text}!
            </p>
            <ButtonComponent
              className="close-btn"
              onClick={onClick}
              text="Close"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
