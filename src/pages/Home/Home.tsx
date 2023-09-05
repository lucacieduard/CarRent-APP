import Hero from "../../components/Hero/Hero";
import PopularCars from "../../components/PopularCars/PopularCars";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Home.scss";
const Home = () => {
  return (
    <div className="bg">
      <FullPageLayout>
        <Hero />
        <PopularCars />
      </FullPageLayout>
    </div>
  );
};

export default Home;
