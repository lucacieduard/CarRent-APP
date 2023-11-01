import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cars from "./pages/Cars/Cars";
import CarPage from "./pages/Car/CarPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import DashBoard from "./pages/Admin/DashBoard";
import AddCar from "./pages/AddCar/AddCar";
import AdminCars from "./pages/AdminCars/AdminCars";
import AdminTransactions from "./pages/AdminTransactions/AdminTransactions";
import AdminUsers from "./pages/AdminUsers/AdminUsers";
import { useContext, useEffect } from "react";
import { CarsContext } from "./context/carsContext";
import { UsersContext } from "./context/usersContext";
import Payment from "./pages/Payment/Payment";
function App() {
  // TODO protect routes 16m
  //TODO Loading sistem

  const carsContext = useContext(CarsContext);
  const usersContext = useContext(UsersContext);
  useEffect(() => {
    usersContext.getUsers();
    carsContext.getCars();
  }, []);
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cars">
          <Route index element={<Cars />} />
          <Route path=":id" element={<CarPage />} />
        </Route>
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="admin">
          <Route index element={<DashBoard />} />
          <Route path="add" element={<AddCar />} />
          <Route path="cars" element={<AdminCars />} />
          <Route path="transactions" element={<AdminTransactions />} />
          <Route path="users" element={<AdminUsers />} />
        </Route>
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
