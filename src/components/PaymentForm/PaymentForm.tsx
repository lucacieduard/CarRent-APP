import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "./Input";
import styles from "./PatmentForm.module.scss";
import PaymentMethod from "./PaymentMethod";
import PaymentStep from "./PaymentStep";
import { faBitcoinSign, faShield } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  return (
    <div className={styles.container}>
      <PaymentStep
        title="Payment"
        subTitle="Please enter your billing info"
        step={1}
      >
        <div className={styles.form}>
          <Input type="text" placeholder="Your name" title="Name" />
          <Input type="text" placeholder="Address" title="Address" />
          <Input type="text" placeholder="Phone number" title="Phone Number" />
          <Input type="text" placeholder="Town or city" title="Town/City" />
        </div>
      </PaymentStep>
      <PaymentStep
        title="Payment Method"
        subTitle="Please enter your payment method"
        step={2}
      >
        <div className={styles.payments}>
          <PaymentMethod
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 576 512"
              >
                <path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z" />
              </svg>
            }
            title="Credit Card"
            checked={paymentMethod === "credit-card"}
            setPayment={() => setPaymentMethod("credit-card")}
          />
          <PaymentMethod
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
              >
                <path d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z" />
              </svg>
            }
            title="Paypal"
            checked={paymentMethod === "paypal"}
            setPayment={() => setPaymentMethod("paypal")}
          />
          <PaymentMethod
            icon={<FontAwesomeIcon icon={faBitcoinSign} />}
            title="Bitcoin"
            checked={paymentMethod === "bitcoin"}
            setPayment={() => setPaymentMethod("bitcoin")}
          />
        </div>
      </PaymentStep>
      <PaymentStep
        title="Confirmation"
        subTitle="We are getting to the end. Just few clicks and your rental is ready!"
        step={3}
      >
        <div className={styles.confirm}>
          <div className={styles.field}>
            <input type="checkbox" />
            <p>
              I agree with sending an Marketing and newsletter emails. No spam,
              promissed!
            </p>
          </div>
          <div className={styles.field}>
            <input type="checkbox" />
            <p>I agree with our terms and conditions and privacy policy!</p>
          </div>
          <button className="button">Rental now</button>
          <FontAwesomeIcon icon={faShield} className={styles.icon} />
          <h2 className={styles.bold}>All your data are safe</h2>
          <p className={styles.text}>
            We are using the most advanced security to provide you the best
            experience ever.
          </p>
        </div>
      </PaymentStep>
    </div>
  );
};

export default PaymentForm;
