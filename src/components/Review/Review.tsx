import "./Review.scss";

const Review = () => {
  return (
    <div className="review">
      <img
        src="/profile.png"
        alt="Reviewer profile picture"
        className="profilePic"
      />

      <div className="reviewContent">
        <div className="reviewHeader">
          <h4 className="reviewerName">Alex Stanton</h4>
          <span className="postDate">21 july 2022</span>
        </div>

        <div className="reviewInfo">
          <span className="reviewerTitle">CEO at Amazon</span>
          <span className="rating">3 stele</span>
        </div>

        <p className="description">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
      </div>
    </div>
  );
};

export default Review;
