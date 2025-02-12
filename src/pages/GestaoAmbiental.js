import React, { useState, useEffect } from "react";
import api from "../services/api";
import RegistroAmbiental from "../components/RegistroAmbiental";

function GestaoAmbiental() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    async function fetchRegistros() {
      try {
        const resposta = await api.get("/gestao-ambiental");
        setRegistros(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar registros:", error);
      }
    }
    fetchRegistros();
  }, []);

  return (
    <div>
      <h1>Gestão Ambiental</h1>
      <RegistroAmbiental />
      <h2>Histórico de Dejetos</h2>
      <ul>
        {registros.map((registro) => (
          <li key={registro.id}>
            <strong>Pavilhão {registro.pavilhao_id}</strong> - Data: {registro.data}  
            (Gerado: {registro.volume_gerado} m³ | Escoado: {registro.volume_escoado} m³)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GestaoAmbiental;
