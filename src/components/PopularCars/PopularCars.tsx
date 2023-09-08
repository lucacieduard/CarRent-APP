import { Link } from "react-router-dom";
import CarCard from "../CarCard.tsx/CarCard";
import "./PopularCars.scss";

const PopularCars = () => {
  return (
    <div className="popularCars container_w">
      <div className="header">
        <h3 className="title">Popular</h3>
        <Link to={"/cars"} style={{ textDecoration: "none" }}>
          <span className="link">View All</span>
        </Link>
      </div>
      <div className="cards">
        <CarCard recomandation={false} />
        <CarCard recomandation={false} />
        <CarCard recomandation={false} />
        <CarCard recomandation={false} />
      </div>
    </div>
  );
};

export default PopularCars;
