import Hero from "../../components/Hero/Hero";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Home.scss";
const Home = () => {
  return (
    <div className="bg">
      <FullPageLayout>
        <Hero />
      </FullPageLayout>
    </div>
  );
};

export default Home;
