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
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </div>
    </div>
  );
};

export default PopularCars;
