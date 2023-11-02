import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext.tsx";
import { CarsContextProvider } from "./context/carsContext.tsx";
import { UsersProvider } from "./context/usersContext.tsx";
import { TransactionsContextProvider } from "./context/transactionsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <UsersProvider>
          <CarsContextProvider>
            <TransactionsContextProvider>
              <App />
            </TransactionsContextProvider>
          </CarsContextProvider>
        </UsersProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
