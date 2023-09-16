import { Link } from "react-router-dom";
import CarCard from "../CarCard.tsx/CarCard";
import "./PopularCars.scss";

type Props = {
  title: string;
};

const PopularCars = (props: Props) => {
  return (
    <div className="popularCars container_w">
      <div className="header">
        <h3 className="title">{props.title}</h3>
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
