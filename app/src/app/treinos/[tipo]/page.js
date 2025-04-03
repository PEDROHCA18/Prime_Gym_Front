"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

async function pegarTreinos(tipo) {
  try {
    const res = await fetch(`https://gymacademy.onrender.com/exercicios-por-treino/${tipo}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Erro ao buscar os treinos");
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default function Treino({ params }) {
  const [treinos, setTreinos] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    async function fetchTreinos() {
      const dadosTreinos = await pegarTreinos(params.tipo);
      setTreinos(dadosTreinos);
    }
    fetchTreinos();
  }, [params.tipo]);

  const treinosFiltrados = treinos.filter(treino =>
    treino.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div id="main">
        <div className="pr-heading">
          <h2>COMECE AGORA</h2>
          <h1><span>CRESÇA</span> SEMPRE</h1>
          <p className="details">Construa seu corpo e condicionamento físico com toque profissional</p>
        </div>
      </div>

      <section className="container-fluid" id="informacoes">
        <h1 className="h1-principal-branco" id="treino">{params.tipo}</h1>
        <input 
          type="text" 
          placeholder="Filtrar pelo nome..." 
          value={filtro} 
          onChange={(e) => setFiltro(e.target.value)} 
          className="filtro-input"
        />
        <div className="row">
          {treinosFiltrados.length > 0 ? (
            treinosFiltrados.map((treino, index) => (
              <div className="col-md-4 col-sm-6 col-12" key={index}>
                <div className="card">
                  <div className="divisao">
                    <h2 className="nometreino">{treino.nome}</h2>
                    <img src={treino.gif || "/"} alt={treino.nome} className="imagemr" />
                    <h3 className="ex">Como executar:</h3>
                    <p className="parad">{treino.comoExexutar}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-treino">Nenhum treino encontrado.</p>
          )}
        </div>
      </section>
    </div>
  );
}