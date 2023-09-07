import CarCard from "../CarCard.tsx/CarCard";
import "./PopularCars.scss";

const PopularCars = () => {
  return (
    <div className="popularCars container_w">
      <div className="header">
        <h3 className="title">Popular</h3>
        <span className="link">View All</span>
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
