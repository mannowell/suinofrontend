import React, { useState, useEffect } from "react";
import api from "../services/api";
import RegistroSaude from "../components/RegistroSaude";

function Saude() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    async function fetchRegistros() {
      try {
        const resposta = await api.get("/saude");
        setRegistros(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar registros:", error);
      }
    }
    fetchRegistros();
  }, []);

  return (
    <div>
      <h1>Gestão de Saúde</h1>
      <RegistroSaude />
      <h2>Histórico de Vacinas e Medicações</h2>
      <ul>
        {registros.map((registro) => (
          <li key={registro.id}>
            <strong>Pavilhão {registro.pavilhao_id}</strong> - {registro.tipo}: {registro.nome}  
            (Aplicado em: {registro.data_aplicacao} | Dosagem: {registro.dosagem} ml/kg | Motivo: {registro.motivo})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Saude;
