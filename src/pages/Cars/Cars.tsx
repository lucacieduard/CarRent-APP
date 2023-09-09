import Footer from "../../components/Footer/Footer";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Cars.scss";
import CarCard from "../../components/CarCard.tsx/CarCard";
import FilterSection from "../../components/FilterSection/FilterSection";
import SideBarPage from "../../layout/SideBarPage/SideBarPage";
import { useState } from "react";

const Cars = () => {
  const [carsNumber, setCarsNumber] = useState(8);
  const clickHandler = (add: boolean) => {
    if (add) {
      setCarsNumber((prev) => prev + 8);
    } else {
      setCarsNumber((prev) => prev - 8);
    }
  };
  return (
    <div className="bg">
      <SideBarPage buttons={true}>
        <FilterSection />
        <div className="carsContainer">
          {Array(carsNumber)
            .fill(0)
            .map((_car, index) => (
              <CarCard key={index} recomandation={true} />
            ))}
        </div>

        <div className="buttons">
          <button onClick={() => clickHandler(true)}>Show more car</button>
          {carsNumber > 8 && (
            <button onClick={() => clickHandler(false)}>Show less car</button>
          )}
        </div>
      </SideBarPage>
      <div style={{ backgroundColor: "white" }}>
        <FullPageLayout>
          <Footer />
        </FullPageLayout>
      </div>
    </div>
  );
};

export default Cars;
