import React, { useState, useEffect } from "react";
import api from "../services/api";
import SolicitacaoManutencao from "../components/SolicitacaoManutencao";

function GestaoManutencao() {
  const [manutencoes, setManutencoes] = useState([]);

  useEffect(() => {
    async function fetchManutencoes() {
      try {
        const resposta = await api.get("/manutencoes");
        setManutencoes(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar manutenções:", error);
      }
    }
    fetchManutencoes();
  }, []);

  async function atualizarStatus(id, novoStatus) {
    try {
      await api.put(`/manutencoes/${id}`, { status: novoStatus });
      setManutencoes(manutencoes.map(m => (m.id === id ? { ...m, status: novoStatus } : m)));
    } catch (error) {
      console.error("Erro ao atualizar manutenção:", error);
    }
  }

  return (
    <div>
      <h1>Gestão de Manutenções</h1>
      <SolicitacaoManutencao />
      <h2>Lista de Manutenções</h2>
      <ul>
        {manutencoes.map((manutencao) => (
          <li key={manutencao.id}>
            <strong>Pavilhão {manutencao.pavilhao_id}</strong> - {manutencao.tipo}  
            (Status: {manutencao.status})  
            {manutencao.status === "pendente" && (
              <button onClick={() => atualizarStatus(manutencao.id, "concluída")}>Marcar como Concluída</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GestaoManutencao;
