import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ProponentProvider } from "./context/ProponentContext";
import { AdminProvider } from "./context/AdminContext";
import { ChakraProvider } from "@chakra-ui/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TenderForm from "./pages/TenderForm";
// import AuthLayout from "./components/dashboard/layouts/Auth";

// import AdminLayout from "./components/dashboard/layouts/Admin";
// import RTLLayout from "./components/dashboard/layouts/RTL";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProponentProvider>
      <AdminProvider>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/tender" element={<TenderForm />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </AdminProvider>
    </ProponentProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
