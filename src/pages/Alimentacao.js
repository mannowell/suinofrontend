import React, { useEffect, useState } from "react";
import api from "../services/api";
import AlertaEstoque from "../components/AlertaEstoque";


function Alimentacao() {
  const [pavilhoes, setPavilhoes] = useState([]);
  const [historico, setHistorico] = useState([]);
  const [consumo, setConsumo] = useState({ pavilhao_id: "", tipo_racao: "", quantidade_consumo: "" });

  useEffect(() => {
    carregarPavilhoes();
    carregarHistorico();
  }, []);

  async function carregarPavilhoes() {
    try {
      const resposta = await api.get("/pavilhoes");
      setPavilhoes(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar pavilhões:", error);
    }
  }

  async function carregarHistorico() {
    try {
      const resposta = await api.get("/alimentacao");
      setHistorico(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar histórico de alimentação:", error);
    }
  }

  async function registrarConsumo(event) {
    event.preventDefault();
    if (!consumo.pavilhao_id || !consumo.tipo_racao || !consumo.quantidade_consumo) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      await api.post("/alimentacao", {
        pavilhao_id: consumo.pavilhao_id,
        tipo_racao: consumo.tipo_racao,
        quantidade_consumo: parseFloat(consumo.quantidade_consumo),
      });

      setConsumo({ pavilhao_id: "", tipo_racao: "", quantidade_consumo: "" });
      carregarHistorico();
    } catch (error) {
      console.error("Erro ao registrar consumo:", error);
    }
  }

  return (
    <div>
      <h1>Gestão de Alimentação</h1>
      <AlertaEstoque />
      {/* Formulário de Consumo */}
      <form onSubmit={registrarConsumo}>
        <select
          value={consumo.pavilhao_id}
          onChange={(e) => setConsumo({ ...consumo, pavilhao_id: e.target.value })}
        >
          <option value="">Selecione o pavilhão</option>
          {pavilhoes.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nome}
            </option>
          ))}
        </select>

        <select
          value={consumo.tipo_racao}
          onChange={(e) => setConsumo({ ...consumo, tipo_racao: e.target.value })}
        >
          <option value="">Selecione o tipo de ração</option>
          <option value="inicial">Inicial</option>
          <option value="crescimento">Crescimento</option>
          <option value="finalização">Finalização</option>
          <option value="medicada">Medicada</option>
        </select>

        <input
          type="number"
          placeholder="Quantidade (kg)"
          value={consumo.quantidade_consumo}
          onChange={(e) => setConsumo({ ...consumo, quantidade_consumo: e.target.value })}
        />

        <button type="submit">Registrar Consumo</button>
      </form>

      {/* Histórico de Consumo */}
      <h2>Histórico de Consumo</h2>
      <ul>
        {historico.map((item) => (
          <li key={item.id}>
            Pavilhão {item.pavilhao_id} - {item.tipo_racao} - {item.quantidade_consumo} kg
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alimentacao;
