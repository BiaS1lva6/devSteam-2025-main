import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Checkout from "./pages/Checkout.jsx";
import { formatarMoeda } from "./utils/formatters.js";
import Perfil from "./pages/Perfil.jsx";
import Cartoes from "./pages/Cartoes.jsx";

import Cadastrar from "./pages/Cadastrar.jsx";

// Contexto global acessível a todas as rotas
export const GlobalContext = createContext(null);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ formatarMoeda }}>
      <BrowserRouter>
        <Routes>
          <Route path="/cartoes" element={<Cartoes />} />
         
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/perfil" element={<Perfil />} />

          <Route path="/cadastrar-se" element={<Cadastrar />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  </React.StrictMode>
);
