import Footer from "../../components/Footer/Footer";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Cars.scss";
import CarCard from "../../components/CarCard.tsx/CarCard";
import FilterSection from "../../components/FilterSection/FilterSection";
import SideBarPage from "../../layout/SideBarPage/SideBarPage";
import { useContext, useState } from "react";
import { CarsContext } from "../../context/carsContext";
import Loading from "../../components/Loading/Loading";

const Cars = () => {
  const [carsNumber, setCarsNumber] = useState(8);
  const carsContext = useContext(CarsContext);
  const clickHandler = (add: boolean) => {
    if (add && carsNumber > carsContext.cars.length) return;
    if (add && carsNumber + 8 > carsContext.cars.length) {
      setCarsNumber((prev) => prev + 8);
    }

    if (!add && carsNumber - 8 > 0) {
      setCarsNumber((prev) => prev - 8);
    }
  };

  return (
    <div className="bg">
      <SideBarPage buttons={true}>
        <FilterSection />
        <div className="carsContainer">
          {carsContext.cars.length === 0 ? (
            <Loading />
          ) : (
            carsContext.cars.slice(0, carsNumber).map((car, index) => {
              return <CarCard key={index} recomandation={false} car={car} />;
            })
          )}
        </div>

        <div className="buttons">
          {carsNumber < carsContext.cars.length && (
            <button
              style={{ cursor: "pointer" }}
              onClick={() => clickHandler(true)}
            >
              Show more cars
            </button>
          )}
          {carsNumber > 8 && (
            <button
              style={{ cursor: "pointer" }}
              onClick={() => clickHandler(false)}
            >
              Show less cars
            </button>
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
