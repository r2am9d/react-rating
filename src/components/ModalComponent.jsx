const ModalComponent = ({ rating, isOpen, onClick }) => {
  const text = rating > 1 ? "stars" : "star";
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank You</h2>
            <p>
              You rated us {rating} {text}.
            </p>
            <button className="close-btn" onClick={onClick}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
