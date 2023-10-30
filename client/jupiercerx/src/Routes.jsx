import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import App from "./App";
import Produto from "./components/Produto/Produto";
import Loja from "./components/Loja/Loja";
import Sobre from "./components/Sobre/Sobre";
import Contato from "./components/Contato/Contato";
import Envios_devolocoes from "./components/Envios_devolucoes/Envios_devolucoes";
import Politica from "./components/Politica/Politica";
import Login from "./components/Login/Login";


const AppRoutes = () => {
  return (
    <Router>
      <Routes><Route path="/" element={<App/>}></Route></Routes>
      <Routes><Route path="/produto" element={<Produto/>}></Route></Routes>
      <Routes><Route path="/loja" element={<Loja/>}></Route></Routes>
      <Routes><Route path="/sobre" element={<Sobre/>}></Route></Routes>
      <Routes><Route path="/contato" element={<Contato/>}></Route></Routes>
      <Routes><Route path="/envios-e-devolucoes" element={<Envios_devolocoes/>}></Route></Routes>
      <Routes><Route path="/politicas-da-loja" element={<Politica/>}></Route></Routes>
      <Routes><Route path="/Login" element={<Login/>}></Route></Routes>
    </Router>
  );
};

export default AppRoutes;
