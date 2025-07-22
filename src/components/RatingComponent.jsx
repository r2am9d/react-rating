import { useState } from "react";
import StarComponent from "./StarComponent";
import FeedbackComponent from "./FeedbackComponent";
import ModalComponent from "./ModalComponent";
import ButtonComponent from "./ButtonComponent";

const RatingComponent = ({
  header = "Rate your experience",
  color = "gold",
  starCount = 5,
  messages = ["Terrible", "Poor", "Fair", "Good", "Excellent"],
}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [submit, setSubmit] = useState(false);

  const stars = Array.from({ length: starCount }, (_, i) => i + 1);

  const onClick = (index) => (e) => setRating(index);
  const onHover = (index) => (e) => setHover(index);

  const onSubmit = (value) => (e) => {
    if (!value) {
      setRating(null);
      setHover(null);
    }
    setSubmit(value);
  };

  return (
    <>
      <div className="rating-container">
        <h2>{header}</h2>
        <div className="stars">
          {stars.map((e) => {
            return (
              <StarComponent
                key={e}
                star={e}
                rating={rating}
                hover={hover}
                color={color}
                onClick={onClick}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
              />
            );
          })}
        </div>
        <FeedbackComponent rating={rating} message={messages[rating - 1]} />
        <ButtonComponent
          className="submit-btn"
          onClick={onSubmit(true)}
          disabled={rating === null}
          text="Submit"
        />
        <ModalComponent
          isOpen={submit}
          rating={rating}
          onClick={onSubmit(false)}
        />
      </div>
    </>
  );
};

export default RatingComponent;
