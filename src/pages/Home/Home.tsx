import Hero from "../../components/Hero/Hero";
import PopularCars from "../../components/PopularCars/PopularCars";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Home.scss";
import Recomandations from "../../components/Recomandations/Recomandations";
import Footer from "../../components/Footer/Footer";
import FilterSection from "../../components/FilterSection/FilterSection";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
const Home = () => {
  const authCtx = useContext(AuthContext);
  console.log(authCtx);
  return (
    <div className="bg">
      <FullPageLayout>
        <Hero />
        <FilterSection />
        <PopularCars title="Popular Car" />
        <Recomandations />
      </FullPageLayout>
      <div style={{ backgroundColor: "white" }}>
        <FullPageLayout>
          <Footer />
        </FullPageLayout>
      </div>
    </div>
  );
};

export default Home;
