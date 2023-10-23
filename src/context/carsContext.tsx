import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase";
import { Car } from "../types/Car";

export const CarsContext = createContext({} as Context);

type Context = {
  getCars: () => void;
  cars: Car[];
  loading: boolean;
  refresh: () => void;
};

export const CarsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    try {
      setLoading(true);
      const cars: Car[] = [];
      const querySnapshot = await getDocs(collection(db, "cars"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        cars.push(data as Car);
      });
      setCars(cars);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CarsContext.Provider value={{ getCars, cars, loading, refresh: getCars }}>
      {children}
    </CarsContext.Provider>
  );
};
