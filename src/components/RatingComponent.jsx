const RatingComponent = () => {
  const arr = Array.from({ length: 5 }, (_, i) => i);
  const handler = (index) => (e) => console.log(`${index}`);
  const hovered = (direction, index) => (e) =>
    console.log(`${direction} | ${index}`);

  return (
    <>
      <div className="rating-container">
        <h2>Rate your experience</h2>
        <div className="stars">
          {arr.map((e, i) => (
            <span
              onClick={handler(i)}
              onMouseEnter={hovered("Enter", i)}
              onMouseLeave={hovered("Leave", i)}
              key={e}
              className="star"
              style={{ border: "1px solid red" }}
            >
              {"\u2605"}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default RatingComponent;
