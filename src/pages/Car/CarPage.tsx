import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CarInfo from "../../components/CarInfo/CarInfo";
import Footer from "../../components/Footer/Footer";
import Review from "../../components/Review/Review";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import SideBarPage from "../../layout/SideBarPage/SideBarPage";
import "./CarPage.scss";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import PopularCars from "../../components/PopularCars/PopularCars";

const CarPage = () => {
  return (
    <div className="bg">
      <SideBarPage buttons={false}>
        <CarInfo />
        <div className="reviewsContainer">
          <h2 className="reviewsTitle">Reviews</h2>{" "}
          <span className="reviewsLength">13</span>
          <div className="reviews">
            <Review />
            <Review />

            <button className="showMore">
              Show All <FontAwesomeIcon icon={faChevronDown} className="icon" />
            </button>
          </div>
        </div>
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
