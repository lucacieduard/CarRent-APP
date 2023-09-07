import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Filter from "../../components/Filter/Filter";
import Hero from "../../components/Hero/Hero";
import PopularCars from "../../components/PopularCars/PopularCars";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Home.scss";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Recomandations from "../../components/Recomandations/Recomandations";
const Home = () => {
  return (
    <div className="bg">
      <FullPageLayout>
        <Hero />
        <div className="filter container_w">
          <Filter pickUp={true} />
          <div className="arrows">
            <FontAwesomeIcon
              icon={faArrowRightArrowLeft}
              rotation={90}
              className="ic"
            />
          </div>
          <Filter pickUp={false} />
        </div>
        <PopularCars />
        <Recomandations />
      </FullPageLayout>
    </div>
  );
};

export default Home;
