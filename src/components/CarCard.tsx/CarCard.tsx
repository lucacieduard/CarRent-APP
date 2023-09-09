import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import "./CarCard.scss";
import { faGasPump, faO, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type Props = {
  recomandation: boolean;
};
const CarCard = (props: Props) => {
  return (
    <div className={`cardCar ${props.recomandation ? "recCardCar" : ""}`}>
      <div className="cardHeader">
        <span className="carName">Koenigsegg</span>
        <FontAwesomeIcon icon={faHeart} color="gray" className="heart" />
      </div>
      <span className="carType">Sport</span>
      <div className={`cardMain ${props.recomandation ? "recCardMain" : ""}`}>
        <img
          src="/image_7.png"
          className={`mainImg ${props.recomandation ? "recMainImg" : ""}`}
        />
        <ul
          className={`specifications ${
            props.recomandation ? "recSpecifications" : ""
          }`}
        >
          <li className="spec">
            <FontAwesomeIcon icon={faGasPump} className="specIcon" />
            <span className="specText">90 L</span>
          </li>
          <li className="spec">
            <FontAwesomeIcon icon={faO} className="specIcon" />
            <span className="specText">Manual</span>
          </li>
          <li className="spec">
            <FontAwesomeIcon icon={faUserGroup} className="specIcon" />
            <span className="specText">2 People</span>
          </li>
        </ul>
      </div>

      <div className="cardFooter">
        <p className="price">
          $99.00/<span className="day">day</span>{" "}
        </p>
        <Link to={`/cars/dummyID`}>
        
        <button className="rentNow">Rental Now</button>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
