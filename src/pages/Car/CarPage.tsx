import CarInfo from "../../components/CarInfo/CarInfo";
import Footer from "../../components/Footer/Footer";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import SideBarPage from "../../layout/SideBarPage/SideBarPage";

const CarPage = () => {
  return (
    <div className="bg">
      <SideBarPage buttons={false}>
        <CarInfo />
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
