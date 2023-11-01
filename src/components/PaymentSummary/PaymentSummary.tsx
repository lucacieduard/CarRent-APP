import { useState } from "react";
import { Car } from "../../types/Car";
import styles from "./PayymentSummary.module.scss";
import rectangle from "/rectangle.png";

type Props = {
  car: Car | undefined;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PaymentSummary = (props: Props) => {
  const [days, setDays] = useState<number>(1);
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
          <img src={props.car?.svg} alt="" className={styles.carImg} />
        </div>
        <div className={styles.infoContainer}>
          <h3 className={styles.carName}>{props.car?.carName}</h3>
          <p className={styles.stars}>5 stars based on X reviews</p>
        </div>
      </div>
      <div className={styles.priceContainer}>
        <div className={styles.field}>
          <p className={styles.title}>Subtotal</p>
          <p className={styles.price}>${props.car?.price}</p>
        </div>
        <div className={styles.field}>
          <p className={styles.title}>Days</p>
          <input
            type="number"
            value={days}
            name="days"
            onChange={(e) => {
              setDays(Number(e.target.value));
              props.changeHandler(e);
            }}
            min={1}
          />
        </div>

        <div className={styles.promo}>
          <input type="text" placeholder="Promo Code" />{" "}
          <button>Apply now</button>
        </div>

        <div className={styles.total}>
          <div className={styles.text}>
            <p className={styles.bold}>Total Rental Price</p>
            <p className={styles.subp}>
              Overall price and includes rental discount
            </p>
          </div>
          <p className={styles.totalP}>
            ${props.car ? props?.car.price * days : "0"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;
