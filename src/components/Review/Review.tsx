import { useContext, useEffect, useState } from "react";
import { ReviewT } from "../../types/Car";
import "./Review.scss";
import { UsersContext } from "../../context/usersContext";
import { User } from "../../types/Auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

type Props = {
  review: ReviewT;
};

// TODO review sistem

const Review = (props: Props) => {
  // TODO users context to fill the review

  const [user, setUser] = useState<User | undefined>({} as User);

  const usersContext = useContext(UsersContext);

  useEffect(() => {
    const user = usersContext.users.find(
      (user) => user.uid === props.review.user
    );
    setUser(user);
  }, [usersContext.users]);

  const date = new Date(props.review.date);

  return (
    <div className="review">
      {user ? (
        <img
          src={user?.fileURL}
          alt="Reviewer profile picture"
          className="profilePic"
        />
      ) : (
        <FontAwesomeIcon icon={faUser} style={{ height: "30px" }} />
      )}

      <div className="reviewContent">
        <div className="reviewHeader">
          <h4 className="reviewerName">
            {user ? `${user?.firstName} ${user?.lastName}` : "Deleted User"}
          </h4>
          <span className="postDate">
            {date.getDate()} -{" "}
            {date.getMonth() + 1 < 10
              ? `0${date.getMonth() + 1}`
              : date.getMonth() + 1}{" "}
            - {date.getFullYear()}
          </span>
        </div>

        <div className="reviewInfo">
          <span className="reviewerTitle">{user ? user.title : "---"}</span>
          <span className="rating">{props.review.rating} stele</span>
        </div>

        <p className="description">{props.review.description}</p>
      </div>
    </div>
  );
};

export default Review;
