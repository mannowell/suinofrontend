import React, { useState } from "react";
import api from "../services/api";

function RegistroSaude() {
  const [pavilhaoId, setPavilhaoId] = useState("");
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
  const [dataAplicacao, setDataAplicacao] = useState("");
  const [dosagem, setDosagem] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/saude", {
        pavilhao_id: pavilhaoId,
        tipo,
        nome,
        data_aplicacao: dataAplicacao,
        dosagem,
        motivo,
      });

      setMensagem(resposta.data.message);
      setPavilhaoId("");
      setTipo("");
      setNome("");
      setDataAplicacao("");
      setDosagem("");
      setMotivo("");
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  }

  return (
    <div>
      <h2>Registrar Vacina ou Medicação</h2>
      {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pavilhão ID:</label>
          <input type="number" value={pavilhaoId} onChange={(e) => setPavilhaoId(e.target.value)} required />
        </div>
        <div>
          <label>Tipo (Vacina ou Medicação):</label>
          <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} required />
        </div>
        <div>
          <label>Nome:</label>
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
        </div>
        <div>
          <label>Data de Aplicação:</label>
          <input type="date" value={dataAplicacao} onChange={(e) => setDataAplicacao(e.target.value)} required />
        </div>
        <div>
          <label>Dosagem (ml/kg):</label>
          <input type="number" value={dosagem} onChange={(e) => setDosagem(e.target.value)} required />
        </div>
        <div>
          <label>Motivo:</label>
          <input type="text" value={motivo} onChange={(e) => setMotivo(e.target.value)} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroSaude;
