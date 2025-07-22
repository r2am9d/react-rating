const StarComponent = ({
  star,
  rating,
  hover,
  color,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      <span
        className="star"
        style={{ color: star <= (hover || rating) ? color : "#CCC" }}
        onClick={onClick(star)}
        onMouseEnter={onMouseEnter(star)}
        onMouseLeave={onMouseLeave(null)}
      >
        {"\u2605"}
      </span>
    </>
  );
};

export default StarComponent;
