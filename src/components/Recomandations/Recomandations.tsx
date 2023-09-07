import CarCard from "../CarCard.tsx/CarCard";
import "./Recomandations.scss";

const Recomandations = () => {
  return (
    <div className="recomandations container_w">
      <span className="title">Recomendation Car</span>
      <div className="recomandationCars">
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
        <CarCard recomandation={true} />
      </div>
    </div>
  );
};

export default Recomandations;
