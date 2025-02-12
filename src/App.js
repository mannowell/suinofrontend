import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Pavilhoes from "./pages/Pavilhoes";
import Saude from "./pages/Saude";
import GestaoAmbiental from "./pages/GestaoAmbiental";
import GestaoManutencao from "./pages/GestaoManutencao";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pavilhoes" element={<Pavilhoes />} />
        <Route path="/saude" element={<Saude />} />
        <Route path="/gestao-ambiental" element={<GestaoAmbiental />} />
        <Route path="/gestao-manutencao" element={<GestaoManutencao />} />
      </Routes>
    </Router>
  );
}

export default App;
