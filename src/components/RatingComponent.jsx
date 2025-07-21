import { useState } from "react";

const RatingComponent = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const stars = Array.from({ length: 5 }, (_, i) => i);
  const messages = ["Terrible", "Poor", "Fair", "Good", "Excellent"];

  const onClick = (index) => (e) => setRating(index);
  const onHover = (index) => (e) => setHover(index);

  return (
    <div className="rating-container">
      <h2>Rate your experience</h2>
      <div className="stars">
        {stars.map((e, i) => {
          const idx = i + 1;
          return (
            <span
              onClick={onClick(idx)}
              onMouseEnter={onHover(idx)}
              onMouseLeave={onHover(null)}
              key={e}
              className={`star ${idx <= (hover || rating) ? "active" : ""}`}
            >
              {"\u2605"}
            </span>
          );
        })}
      </div>
      {rating && <div className="feedback">{messages[rating - 1]}</div>}
    </div>
  );
};

export default RatingComponent;
