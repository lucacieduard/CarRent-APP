import { Link } from "react-router-dom";
import { CarsContext } from "../../context/carsContext";
import CarCard from "../CarCard.tsx/CarCard";
import "./Recomandations.scss";
import { useContext } from "react";
import Loading from "../Loading/Loading";

const Recomandations = () => {
  const carsContext = useContext(CarsContext);

  const recomandations = carsContext.cars
    .filter((car) => car.recomandation)
    .slice(0, 8);

  return (
    <div className="recomandations container_w">
      <span className="title">Recomendation Car</span>
      <div className="recomandationCars">
        {recomandations.length === 0 ? (
          <Loading />
        ) : (
          recomandations.map((car, index) => {
            return (
              <CarCard nr={index} key={index} recomandation={true} car={car} />
            );
          })
        )}
      </div>
      <div className="buttons">
        <Link to={"/cars"}>
          <button style={{ cursor: "pointer" }}>Show more cars</button>
        </Link>
      </div>
    </div>
  );
};

export default Recomandations;
