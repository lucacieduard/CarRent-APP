import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase";

export const TransactionsContext = createContext({} as Context);

type Context = {
  getTransactions: () => void;
  transactions: [];
  loading: boolean;
  refresh: () => void;
};

export const TransactionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<[]>([]);
  const [loading, setLoading] = useState(false);

  const getTransactions = async () => {
    try {
      setLoading(true);
      const transactionsD: [] = [];
      const querySnapshot = await getDocs(collection(db, "transactions"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        transactionsD.push(data);
      });
      setTransactions(transactionsD);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TransactionsContext.Provider
      value={{
        getTransactions,
        transactions,
        loading,
        refresh: getTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
