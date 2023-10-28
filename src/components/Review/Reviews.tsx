import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Reviews.scss";
import { Car, ReviewT } from "../../types/Car";
import Review from "./Review";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { CarsContext } from "../../context/carsContext";

type Props = {
  car: Car;
};

const Reviews = (props: Props) => {
  const carsContext = useContext(CarsContext);
  const [review, setReview] = useState({} as ReviewT);
  const userContext = useContext(AuthContext);
  const [showAll, setShowAll] = useState<boolean>(false);
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const addCar = async () => {
    const ref = doc(db, "cars", props.car.uid);

    await updateDoc(ref, {
      reviews: arrayUnion({
        ...review,
        user: userContext.user.uid,
        date: Date.now(),
      }),
    });

    setReview({} as ReviewT);

    carsContext.refresh();
  };
  return (
    <div className="reviewsContainer">
      <h2 className="reviewsTitle">Reviews</h2>{" "}
      <span className="reviewsLength">{props.car.reviews.length}</span>
      <div className="reviews">
        {userContext.user.email && (
          <div className="addComment">
            <textarea
              name="description"
              value={review.description}
              onChange={changeHandler}
            />
            <div className="rating">
              <label>Rating : </label>
              <input
                value={review.rating}
                type="number"
                min={1}
                max={5}
                name="rating"
                onChange={changeHandler}
              />
              <button className="button" onClick={addCar}>
                Add Comment
              </button>
            </div>
          </div>
        )}
        {props.car.reviews.length > 0 && showAll
          ? props.car.reviews.map((review) => {
              return <Review review={review} />;
            })
          : props.car.reviews.slice(0, 3).map((review) => {
              return <Review review={review} />;
            })}

        <button
          className="showMore"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show less" : "Show All"}{" "}
          <FontAwesomeIcon icon={faChevronDown} className="icon" />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
