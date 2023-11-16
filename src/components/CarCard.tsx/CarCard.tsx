import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CarCard.scss";
import { faGasPump, faO, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Car } from "../../types/Car";
import { motion } from "framer-motion";
import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";

type Props = {
  recomandation: boolean;
  car: Car;
  nr: number;
};
const CarCard = (props: Props) => {
  

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          staggerChildren: 0.5,
          delay: props.nr * 0.051,
        },
      }}
      exit={{ opacity: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`cardCar ${props.recomandation ? "recCardCar" : ""}`}
    >
      <div className="cardHeader">
        <span className="carName">{props.car.carName}</span>
        <FavoriteHeart car={props.car} />
        
      </div>
      <span className="carType">{props.car.carType}</span>
      <div className={`cardMain ${props.recomandation ? "recCardMain" : ""}`}>
        <img
          src={props.car.svg}
          className={`mainImg ${props.recomandation ? "recMainImg" : ""}`}
        />
        <ul
          className={`specifications ${
            props.recomandation ? "recSpecifications" : ""
          }`}
        >
          <li className="spec">
            <FontAwesomeIcon icon={faGasPump} className="specIcon" />
            <span className="specText">{props.car.gasoline} L</span>
          </li>
          <li className="spec">
            <FontAwesomeIcon icon={faO} className="specIcon" />
            <span className="specText">{props.car.steering}</span>
          </li>
          <li className="spec">
            <FontAwesomeIcon icon={faUserGroup} className="specIcon" />
            <span className="specText">{props.car.capacity} People</span>
          </li>
        </ul>
      </div>

      <div className="cardFooter">
        <p className="price">
          ${props.car.price}/<span className="day">day</span>{" "}
        </p>
        <Link to={`/cars/${props.car.uid}`}>
          <button className="rentNow">Rental Now</button>
        </Link>
      </div>
    </motion.div>
  );
};

export default CarCard;
