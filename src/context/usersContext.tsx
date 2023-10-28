import { collection, getDocs } from "firebase/firestore";
import { createContext, useState } from "react";
import { db } from "../firebase";
import { User } from "../types/Auth";

export const UsersContext = createContext({} as Context);

type Context = {
  getUsers: () => void;
  users: User[];
  loading: boolean;
  refresh: () => void;
};

export const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const users: User[] = [];
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);
        users.push(data as User);
      });
      setUsers(users);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UsersContext.Provider
      value={{ getUsers, users, loading, refresh: getUsers }}
    >
      {children}
    </UsersContext.Provider>
  );
};
