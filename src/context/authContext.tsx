import { createContext, useEffect, useState } from "react";
import { User } from "../types/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../components/Loading/Loading";

export const AuthContext = createContext({} as Context);

type Context = {
  user: User | undefined;
  addUser: (user: User) => void;
  loading: boolean;
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  const addUser = (user: User) => {
    setUser(user);
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userInfo = await getDoc(doc(db, "users", user.uid));
        const userD = userInfo.data();
        if (userD?.email) {
          setUser(userD as User);
        }
      } else {
        setUser(undefined);
      }
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ user, addUser, loading }}>
      {!loading ? (
        children
      ) : (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loading />
        </div>
      )}
    </AuthContext.Provider>
  );
};
