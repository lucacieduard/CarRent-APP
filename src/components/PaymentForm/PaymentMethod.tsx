import styles from "./PaymentMethod.module.scss";
import Input from "./Input";

type Props = {
  title: string;
  checked: boolean;
  icon: React.ReactNode;
  setPayment: () => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PaymentMethod = (props: Props) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.header}
        onClick={() => props.setPayment()}
        style={props.checked ? {} : { cursor: "pointer" }}
      >
        <p className={styles.title}>
          <input type="radio" checked={props.checked} />
          {props.title}
        </p>
        {props.icon}
      </div>
      {props.checked && (
        <div className={styles.inputs}>
          <Input
            type="text"
            title="Card Number"
            placeholder="Card number"
            bg={true}
            name="cardNumber"
            changeHandler={props.changeHandler}

          />
          <Input
            type="text"
            title="Card Holder"
            placeholder="Card holder"
            bg={true}
            name="cardHolder"
            changeHandler={props.changeHandler}

          />
          <Input
            type="date"
            title="Expiration Date"
            placeholder="Expiration date"
            bg={true}
            name="date"
            changeHandler={props.changeHandler}

          />
          <Input
            type="text"
            title="CVC"
            placeholder="CVC"
            bg={true}
            name="cvc"
            changeHandler={props.changeHandler}

          />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;
