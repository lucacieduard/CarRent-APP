import Footer from "../../components/Footer/Footer";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import PaymentSummary from "../../components/PaymentSummary/PaymentSummary";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import styles from "./Payment.module.scss";

const Payment = () => {
  return (
    <>
      <div style={{ background: "#F6F7F9" }}>
        <div className={`${styles.container} container_w`}>
          <PaymentSummary />
          <PaymentForm />
        </div>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <FullPageLayout>
          <Footer />
        </FullPageLayout>
      </div>{" "}
    </>
  );
};

export default Payment;
