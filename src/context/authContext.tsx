import { createContext, useEffect, useState } from "react";
import { User } from "../types/Auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Loading from "../components/Loading/Loading";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    if (location.pathname.includes("login")) {
      if (location.search.includes("redirect") && user?.email) {
        navigate("/admin");
      } else if (location.search.includes("car") && user?.email) {
        const searchParams = new URLSearchParams(location.search);
        const carId = searchParams.get("car");
        navigate(`/payment/${carId}`);
      } else {
        navigate("/cars");
      }
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, addUser, loading }}>
      <AnimatePresence mode="wait">
        {!loading ? (
          children
        ) : (
          <motion.div
            key="modal"
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            exit={{ y: "-50vh", opacity: 0, background: "transparent" }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>
    </AuthContext.Provider>
  );
};
