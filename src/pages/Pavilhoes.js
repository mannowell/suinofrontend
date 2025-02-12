import React, { useEffect, useState } from "react";
import api from "../services/api";

function Pavilhoes() {
  const [pavilhoes, setPavilhoes] = useState([]);
  const [novoPavilhao, setNovoPavilhao] = useState({ nome: "", qtd_suinos: "" });
  const [editando, setEditando] = useState(null); // Armazena o ID do pavilhão sendo editado

  useEffect(() => {
    carregarPavilhoes();
  }, []);

  async function carregarPavilhoes() {
    try {
      const resposta = await api.get("/pavilhoes");
      setPavilhoes(resposta.data);
    } catch (error) {
      console.error("Erro ao buscar pavilhões:", error);
    }
  }

  async function adicionarOuEditarPavilhao(event) {
    event.preventDefault();
    if (!novoPavilhao.nome || !novoPavilhao.qtd_suinos) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      if (editando) {
        // Atualizar pavilhão existente
        await api.put(`/pavilhoes/${editando}`, {
          nome: novoPavilhao.nome,
          qtd_suinos: parseInt(novoPavilhao.qtd_suinos),
        });

        setPavilhoes(
          pavilhoes.map((p) =>
            p.id === editando ? { ...p, nome: novoPavilhao.nome, qtd_suinos: novoPavilhao.qtd_suinos } : p
          )
        );
        setEditando(null); // Sai do modo de edição
      } else {
        // Criar novo pavilhão
        const resposta = await api.post("/pavilhoes", {
          nome: novoPavilhao.nome,
          qtd_suinos: parseInt(novoPavilhao.qtd_suinos),
        });

        setPavilhoes([...pavilhoes, resposta.data]);
      }

      setNovoPavilhao({ nome: "", qtd_suinos: "" });
    } catch (error) {
      console.error("Erro ao salvar pavilhão:", error);
    }
  }

  async function excluirPavilhao(id) {
    if (window.confirm("Tem certeza que deseja excluir este pavilhão?")) {
      try {
        await api.delete(`/pavilhoes/${id}`);
        setPavilhoes(pavilhoes.filter((p) => p.id !== id));
      } catch (error) {
        console.error("Erro ao excluir pavilhão:", error);
      }
    }
  }

  function iniciarEdicao(pavilhao) {
    setNovoPavilhao({ nome: pavilhao.nome, qtd_suinos: pavilhao.qtd_suinos });
    setEditando(pavilhao.id);
  }

  return (
    <div>
      <h1>Pavilhões</h1>

      {/* Formulário para adicionar/editar pavilhão */}
      <form onSubmit={adicionarOuEditarPavilhao}>
        <input
          type="text"
          placeholder="Nome do Pavilhão"
          value={novoPavilhao.nome}
          onChange={(e) => setNovoPavilhao({ ...novoPavilhao, nome: e.target.value })}
        />
        <input
          type="number"
          placeholder="Quantidade de suínos"
          value={novoPavilhao.qtd_suinos}
          onChange={(e) => setNovoPavilhao({ ...novoPavilhao, qtd_suinos: e.target.value })}
        />
        <button type="submit">{editando ? "Atualizar" : "Adicionar"}</button>
        {editando && <button onClick={() => setEditando(null)}>Cancelar</button>}
      </form>

      {/* Lista de Pavilhões */}
      <ul>
        {pavilhoes.map((pavilhao) => (
          <li key={pavilhao.id}>
            {pavilhao.nome} - {pavilhao.qtd_suinos} suínos
            <button onClick={() => iniciarEdicao(pavilhao)}>✏️ Editar</button>
            <button onClick={() => excluirPavilhao(pavilhao.id)}>🗑️ Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pavilhoes;
