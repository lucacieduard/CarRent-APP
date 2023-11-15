import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Search.module.scss";
import { useContext, useEffect, useState } from "react";
import { CarsContext } from "../../context/carsContext";
import { Car } from "../../types/Car";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Car[]>([] as Car[]);
  const carsContext = useContext(CarsContext);
  const location = useLocation();

  useEffect(() => {
    setSearch("");
  }, [location.pathname]);
  return (
    <div className="search">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
      <input
        type="text"
        className="input"
        placeholder="Search something here..."
        onChange={(e) => {
          setSearch(e.target.value);
          if (e.target.value.length > 1) {
            const results = carsContext.cars.filter((car) =>
              car.carName.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setResults(results);
          }
        }}
        value={search}
      />
      {search.length > 1 && (
        <FontAwesomeIcon
          icon={faX}
          onClick={() => setSearch("")}
          className="deleteInput"
        />
      )}
      <AnimatePresence>
        {search.length > 1 && (
          <motion.div
            className={styles.searchContainer}
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: { duration: 0.2 },
            }}
            exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
          >
            {results.length === 0 ? (
              <div className={styles.noResults}>No results found</div>
            ) : (
              results.map((result) => {
                return (
                  <Link
                    to={`/cars/${result.uid}`}
                    className={styles.result}
                    onClick={() => setSearch("")}
                  >
                    <img src={result.svg} alt={result.carName} />
                    <span className={styles.title}>{result.carName}</span>
                    <span className={styles.resultPrice}>${result.price}</span>
                  </Link>
                );
              })
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
