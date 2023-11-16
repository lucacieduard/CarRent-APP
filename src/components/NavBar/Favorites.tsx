import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import styles from "./Favorites.module.scss";
import { CarsContext } from "../../context/carsContext";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const { cars } = useContext(CarsContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (visible) {
      setVisible(false);
    }
  }, [location]);

  return (
    <>
      <span className="icon" onClick={() => setVisible((prev) => !prev)}>
        <FontAwesomeIcon icon={faHeart} className="faicon" />
        {user && user.favoriteCars.length > 0 && (
          <span className={styles.count}>{user.favoriteCars.length}</span>
        )}
      </span>
      <AnimatePresence>
        {visible && (
          <motion.div
            className={styles.container}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,

              transition: { duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
          >
            {user && user?.favoriteCars.length > 0 ? (
              user.favoriteCars.map((uid) => {
                const car = cars.find((car) => car.uid === uid);
                return (
                  <Link to={`/cars/${car?.uid}`} className={styles.carItem}>
                    <img className={styles.img} src={car?.svg} />
                    <p className={styles.title}>{car?.carName}</p>
                    <p className={styles.price}> ${car?.price}</p>
                  </Link>
                );
              })
            ) : (
              <p className={styles.error}>No favorites!</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Favorites;
