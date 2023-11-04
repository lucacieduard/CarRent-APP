import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase";
import { Transaction } from "../types/Transaction";

export const TransactionsContext = createContext({} as Context);

type Context = {
  getTransactions: () => void;
  transactions: Transaction[];
  loading: boolean;
  refresh: () => void;
};

export const TransactionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(
    [] as Transaction[]
  );
  const [loading, setLoading] = useState(false);

  const getTransactions = async () => {
    try {
      setLoading(true);
      const transactionsD: Transaction[] = [];
      const querySnapshot = await getDocs(collection(db, "transactions"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        transactionsD.push(data as Transaction);
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
