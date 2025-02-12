import React, { useState } from "react";
import api from "../services/api";

function RegistroAmbiental() {
  const [pavilhaoId, setPavilhaoId] = useState("");
  const [data, setData] = useState("");
  const [volumeGerado, setVolumeGerado] = useState("");
  const [volumeEscoado, setVolumeEscoado] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const resposta = await api.post("/gestao-ambiental", {
        pavilhao_id: pavilhaoId,
        data,
        volume_gerado: volumeGerado,
        volume_escoado: volumeEscoado,
      });

      setMensagem(resposta.data.message);
      setPavilhaoId("");
      setData("");
      setVolumeGerado("");
      setVolumeEscoado("");
    } catch (error) {
      console.error("Erro ao registrar:", error);
    }
  }

  return (
    <div>
      <h2>Registro Ambiental</h2>
      {mensagem && <p style={{ color: "green" }}>{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pavilhão ID:</label>
          <input type="number" value={pavilhaoId} onChange={(e) => setPavilhaoId(e.target.value)} required />
        </div>
        <div>
          <label>Data:</label>
          <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
        </div>
        <div>
          <label>Volume Gerado (m³):</label>
          <input type="number" value={volumeGerado} onChange={(e) => setVolumeGerado(e.target.value)} required />
        </div>
        <div>
          <label>Volume Escoado (m³):</label>
          <input type="number" value={volumeEscoado} onChange={(e) => setVolumeEscoado(e.target.value)} required />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistroAmbiental;
