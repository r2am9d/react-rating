const RatingComponent = () => {
  const arr = Array.from({ length: 5 }, (_, i) => i);

  return (
    <>
      <div className="rating-container">
        <h2>Rate your experience</h2>
        <div className="stars">
          {arr.map((e) => (
            <span key={e} className="star">
              {"\u2605"}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default RatingComponent;
