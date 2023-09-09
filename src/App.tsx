import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Cars from "./pages/Cars/Cars";
import CarPage from "./pages/Car/CarPage";
function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="cars">
          <Route index element={<Cars />} />
          <Route path=":id" element={<CarPage />} />
        </Route>
        <Route path="*" element={<h1>Not found!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
