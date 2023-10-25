import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext.tsx";
import { CarsContextProvider } from "./context/carsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CarsContextProvider>
          <App />
        </CarsContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
