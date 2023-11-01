import React from "react";
import styles from "./PaymentStep.module.scss";

type Props = {
  title: string;
  subTitle: string;
  step: number;
  children: React.ReactNode;
};

const PaymentStep = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.subtitle}>{props.subTitle}</div>
        </div>
        <span>Step {props.step} of 3</span>
      </div>
      {props.children}
    </div>
  );
};

export default PaymentStep;
