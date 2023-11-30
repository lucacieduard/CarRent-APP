import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cars from "./pages/Cars/Cars";
import CarPage from "./pages/Car/CarPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import AddCar from "./pages/AddCar/AddCar";
import AdminCars from "./pages/AdminCars/AdminCars";
import AdminTransactions from "./pages/AdminTransactions/AdminTransactions";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import { useContext, useEffect } from "react";
import { CarsContext } from "./context/carsContext";
import { UsersContext } from "./context/usersContext";
import Payment from "./pages/Payment/Payment";
import { TransactionsContext } from "./context/transactionsContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  // TODO protect routes 16m
  //TODO Loading sistem

  const location = useLocation();
  const carsContext = useContext(CarsContext);
  const usersContext = useContext(UsersContext);
  const transactionsContext = useContext(TransactionsContext);
  useEffect(() => {
    usersContext.getUsers();
    carsContext.getCars();
    transactionsContext.getTransactions();
  }, []);
  return (
    <div className="app">
      <NavBar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cars">
            <Route index element={<Cars />} />
            <Route path=":id" element={<CarPage />} />
          </Route>
          <Route
            path="/payment/:id"
            element={
              <ProtectedRoute>
                <Payment />
              </ProtectedRoute>
            }
          />
          <Route path="admin">
            <Route
              path="add"
              element={
                <ProtectedRoute>
                  <AddCar />
                </ProtectedRoute>
              }
            />
            <Route
              index
              element={
                <ProtectedRoute>
                  <AdminCars />
                </ProtectedRoute>
              }
            />
            <Route
              path="transactions"
              element={
                <ProtectedRoute>
                  <AdminTransactions />
                </ProtectedRoute>
              }
            />
            <Route
              path="users"
              element={
                <ProtectedRoute>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>{" "}
      </AnimatePresence>
    </div>
  );
}

export default App;
