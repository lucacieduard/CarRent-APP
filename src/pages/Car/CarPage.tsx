import CarInfo from "../../components/CarInfo/CarInfo";
import Footer from "../../components/Footer/Footer";
import Review from "../../components/Review/Review";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import SideBarPage from "../../layout/SideBarPage/SideBarPage";
import "./CarPage.scss";
import PopularCars from "../../components/PopularCars/PopularCars";
import { useParams } from "react-router-dom";
import { CarsContext } from "../../context/carsContext";
import { useContext, useEffect, useState } from "react";
import { Car } from "../../types/Car";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/authContext";

const CarPage = () => {
  const [car, setCar] = useState<Car | null | undefined>(null);
  const params = useParams();
  const carContext = useContext(CarsContext);
  const userContext = useContext(AuthContext);
  console.log(carContext);
  console.log(userContext.user);

  useEffect(() => {
    const mycar = carContext.cars.find((car) => car.uid === params.id);
    setCar(mycar);
  }, [carContext.cars]);

  console.log(car);
  return (
    <div className="bg">
      <SideBarPage buttons={false}>
        {!car ? (
          carContext.loading && <p>Loading ... </p>
        ) : (
          <>
            <CarInfo car={car} />
            <div className="reviewsContainer">
              <h2 className="reviewsTitle">Reviews</h2>{" "}
              <span className="reviewsLength">13</span>
              <div className="reviews">
                {/* TODO textarea for connnected users */}
                {userContext.user && <textarea />}
                <Review />
                <Review />
                <Review />
                <button className="showMore">
                  Show All{" "}
                  <FontAwesomeIcon icon={faChevronDown} className="icon" />
                </button>
              </div>
            </div>
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
