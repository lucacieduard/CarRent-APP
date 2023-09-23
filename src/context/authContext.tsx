import { createContext, useEffect, useState } from "react";
import { User } from "../types/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext({} as Context);

type Context = {
  user: User;
  addUser: (user: User) => void;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState({} as User);

  const addUser = (user: User) => {
    setUser(user);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userInfo = await getDoc(doc(db, "users", user.uid));
        setUser(userInfo.data() as User);
      } else {
        setUser({} as User);
      }
    });

    return () => unsub();
  }, []);
  return (
    <AuthContext.Provider value={{ user, addUser }}>
      {children}
    </AuthContext.Provider>
  );
};
