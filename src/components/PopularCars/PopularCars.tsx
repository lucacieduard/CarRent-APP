import { Link } from "react-router-dom";
import CarCard from "../CarCard.tsx/CarCard";
import "./PopularCars.scss";
import { useContext } from "react";
import { CarsContext } from "../../context/carsContext";
import Loading from "../Loading/Loading";

type Props = {
  title: string;
};

const PopularCars = (props: Props) => {
  const carsContext = useContext(CarsContext);

  let popularCars = carsContext.cars.filter((car) => car.popular);
  popularCars = popularCars.slice(0, 4);

  return (
    <div className="popularCars container_w">
      <div className="header">
        <h3 className="title">{props.title}</h3>
        <Link to={"/cars"} style={{ textDecoration: "none" }}>
          <span className="link">View All</span>
        </Link>
      </div>
      <div className="cards">
        {popularCars.length === 0 ? (
          <Loading />
        ) : (
          popularCars.map((car, index) => {
            return <CarCard key={index} recomandation={false} car={car} />;
          })
        )}
      </div>
    </div>
  );
};

export default PopularCars;
