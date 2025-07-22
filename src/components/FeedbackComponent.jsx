const FeedbackComponent = ({ rating, message }) => {
  return (rating || message) && <p className="feedback">{message}</p>;
};

export default FeedbackComponent;
