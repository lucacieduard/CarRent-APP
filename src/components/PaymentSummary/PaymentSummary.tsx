import styles from "./PayymentSummary.module.scss";
import rectangle from "/rectangle.png";

const PaymentSummary = () => {
  return (
    <div className={`${styles.rentalSummaryContainer}`}>
      <h2 className={styles.title}>Rental Summary</h2>
      <p className={styles.p}>
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>
      <div className={styles.box}>
        <div
          className={styles.imageContainer}
          style={{
            backgroundImage: `url(${rectangle})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <img src="/image_8.png" alt="" className={styles.carImg} />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.carName}>Nissan GTR</h3>
          <p className={styles.stars}>5 stars based on X reviews</p>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.field}>
          <p className={styles.title}>Subtotal</p>
          <p className={styles.price}>$80.0</p>
        </div>
        <div className={styles.field}>
          <p className={styles.title}>Tax</p>
          <p className={styles.price}>$0</p>
        </div>

        <div className={styles.promo}>
          <input type="text" placeholder="Promo Code" />{" "}
          <button>Apply now</button>
        </div>

        <div className={styles.total}>
          <div className={styles.text}>
            <p className={styles.bold}>Total Rental Price</p>
            <p className={styles.subp}>Overall price rental</p>
          </div>
          <p className={styles.totalP}>$80.00</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
