import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import PaymentSummary from "../../components/PaymentSummary/PaymentSummary";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import styles from "./Payment.module.scss";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../context/carsContext";
import { Car } from "../../types/Car";
import { AuthContext } from "../../context/authContext";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

type Form = {
  name: string;
  phone: string;
  address: string;
  city: string;
  cardNumber: string;
  cardHolder: string;
  date: string;
  cvc: string;
  days: number;
  price: number;
  carId: string;
  userId: string;
};

const Payment = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | undefined>(undefined);
  const [formData, setFormData] = useState<Form>({} as Form);
  const carsContext = useContext(CarsContext);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async () => {
    try {
      if (car) {
        const uid = uuidv4();
        await setDoc(doc(db, "transactions", uid), {
          ...formData,
          uid: uid,
          price: car?.price * formData.days,
          carId: car?.uid,
          userId: user.user.uid,
        });
        navigate("/cars");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const car = carsContext.cars.find((car) => car.uid === id);
    setCar(car);
  }, [carsContext.cars, id]);
  return (
    <>
      <div style={{ background: "#F6F7F9" }}>
        <FullPageLayout>
          <div className={`${styles.container} container_w`}>
            <PaymentSummary car={car} changeHandler={changeHandler} />
            <PaymentForm
              changeHandler={changeHandler}
              submitHandler={submitHandler}
            />
          </div>
        </FullPageLayout>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <FullPageLayout>
          <Footer />
        </FullPageLayout>
      </div>
    </>
  );
};

export default Payment;
