import { BrowserRouter as Router, Routes, Route } from "react-router-domgitl";
import React from "react";
import App from "./App";
import Produto from "./components/Produto/Produto";
import Loja from "./components/Loja/Loja";
import Sobre from "./components/Sobre/Sobre";
import Contato from "./components/Contato/Contato";

const AppRoutes = () => {
  return (
    <Router>
      <Routes><Route path="/" element={<App/>}></Route></Routes>
      <Routes><Route path="/produto" element={<Produto/>}></Route></Routes>
      <Routes><Route path="/loja" element={<Loja/>}></Route></Routes>
      <Routes><Route path="/sobre" element={<Sobre/>}></Route></Routes>
      <Routes><Route path="/contato" element={<Contato/>}></Route></Routes>
    </Router>
  );
};

export default AppRoutes;
