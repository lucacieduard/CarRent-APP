import CarInfo from "../../components/CarInfo/CarInfo";
import Footer from "../../components/Footer/Footer";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import SideBarPage from "../../layout/SideBarPage/SideBarPage";
import "./CarPage.scss";
import PopularCars from "../../components/PopularCars/PopularCars";
import { useParams } from "react-router-dom";
import { CarsContext } from "../../context/carsContext";
import { useContext, useEffect, useState } from "react";
import { Car } from "../../types/Car";
import Reviews from "../../components/Review/Reviews";
import Loading from "../../components/Loading/Loading";

const CarPage = () => {
  const [car, setCar] = useState<Car | null | undefined>(null);
  const params = useParams();
  const carContext = useContext(CarsContext);

  useEffect(() => {
    const mycar = carContext.cars.find((car) => car.uid === params.id);
    setCar(mycar);
  }, [carContext.cars, params.id]);

  return (
    <div className="bg">
      <SideBarPage buttons={false}>
        {!car ? (
          <div
            style={{
              height: "450px",
              width: "500px",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Loading />
          </div>
        ) : (
          <>
            <CarInfo car={car} />
            <Reviews car={car} />
          </>
        )}

        <PopularCars title="Recent Car" />
        <div style={{ marginBottom: "2rem" }}>
          <PopularCars title="Recomandation Car" />
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

export default CarPage;
