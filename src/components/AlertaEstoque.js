import React, { useState, useEffect } from "react";
import api from "../services/api";

function AlertaEstoque() {
  const [alerta, setAlerta] = useState("");

  useEffect(() => {
    verificarEstoque();
  }, []);

  async function verificarEstoque() {
    try {
      const resposta = await api.get("/estoque");
      const pavilhoesComAlerta = resposta.data.filter((p) => p.quantidade_atual < 2400);

      if (pavilhoesComAlerta.length > 0) {
        setAlerta(`🚨 Atenção: Pavilhão ${pavilhoesComAlerta[0].pavilhao_id} está com baixo nível de ração!`);
      } else {
        setAlerta("");
      }
    } catch (error) {
      console.error("Erro ao verificar estoque:", error);
    }
  }

  return (
    <div>
      {alerta && <div style={{ color: "red", fontWeight: "bold" }}>{alerta}</div>}
    </div>
  );
}

export default AlertaEstoque;
