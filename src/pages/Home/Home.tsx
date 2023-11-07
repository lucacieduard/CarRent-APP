import Hero from "../../components/Hero/Hero";
import PopularCars from "../../components/PopularCars/PopularCars";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import "./Home.scss";
import Recomandations from "../../components/Recomandations/Recomandations";
import Footer from "../../components/Footer/Footer";
import FilterSection from "../../components/FilterSection/FilterSection";
import { motion } from "framer-motion";
import { containerVariants } from "../../utils/containerVariants";



const Home = () => {
  return (
    <motion.div
      className="bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
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
    </motion.div>
  );
};

export default Home;
