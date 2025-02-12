import React, { useState } from "react";
import api from "../services/api";

function SolicitacaoManutencao() {
  const [pavilhaoId, setPavilhaoId] = useState("");
  const [dataSolicitacao, setDataSolicitacao] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/manutencoes", {
        pavilhao_id: pavilhaoId,
        data_solicitacao: dataSolicitacao,
        tipo,
        descricao,
      });

      setMensagem(resposta.data.message);
      setPavilhaoId("");
      setDataSolicitacao("");
      setTipo("");
      setDescricao("");
    } catch (error) {
      console.error("Erro ao registrar manutenção:", error);
    }
  }

  return (
    <div>
      <h2>Solicitar Manutenção</h2>
      {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pavilhão ID:</label>
          <input type="number" value={pavilhaoId} onChange={(e) => setPavilhaoId(e.target.value)} required />
        </div>
        <div>
          <label>Data:</label>
          <input type="date" value={dataSolicitacao} onChange={(e) => setDataSolicitacao(e.target.value)} required />
        </div>
        <div>
          <label>Tipo:</label>
          <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        </div>
        <button type="submit">Solicitar</button>
      </form>
    </div>
  );
}

export default SolicitacaoManutencao;
