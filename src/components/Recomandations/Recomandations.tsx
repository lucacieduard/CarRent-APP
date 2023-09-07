import CarCard from "../CarCard.tsx/CarCard";
import "./Recomandations.scss";
import { useState } from "react";

const Recomandations = () => {
  const [carsNumber, setCarsNumber] = useState<number>(8);

  const clickHandler = (add: boolean): void => {
    setCarsNumber((prev) => {
      if (add) return prev + 8;
      else return prev - 8;
    });
  };
  return (
    <div className="recomandations container_w">
      <span className="title">Recomendation Car</span>
      <div className="recomandationCars">
        {Array(carsNumber)
          .fill(0)
          .map((_dummy, index) => {
            return <CarCard key={index} recomandation={true} />;
          })}
      </div>
      <div className="buttons">
        <button onClick={() => clickHandler(true)}>Show more car</button>
        {carsNumber > 8 && (
          <button onClick={() => clickHandler(false)}>Show less car</button>
        )}
      </div>
    </div>
  );
};

export default Recomandations;
