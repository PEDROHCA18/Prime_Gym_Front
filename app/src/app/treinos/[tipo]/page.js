"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import figure1 from "/pedro/gym_prime/app/src/images2/retocombarra.gif";

async function pegarTreinos(tipo) {
  try {
    const res = await fetch(`https://gym-academy-1.vercel.app/exercicios-por-treino/${tipo}`, {
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
  const [temToken, setTemToken] = useState(false);

  useEffect(() => {
    async function fetchTreinos() {
      const dadosTreinos = await pegarTreinos(params.tipo);
      setTreinos(dadosTreinos);
    }
  
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      setTemToken(!!token); // Converte para booleano
    }
  
    fetchTreinos();
  }, [params.tipo]);
  

  return (
    <div>
      <Navbar />
      <div id="main">
        <div className="pr-heading">
          <h2>COMECE AGORA</h2>
          <h1>
            <span>CRESÇA</span> SEMPRE
          </h1>
          <p className="details">
            Construa seu corpo e condicionamento físico com toque profissional
          </p>
        </div>
      </div>

      <section className="container-fluid" id="informacoes">
        {treinos.length > 0 ? (
          <>
            <h1 className="h1-principal-branco" id="treino">
              {params.tipo}
            </h1>
            <div className="row">
              {treinos.map((treino, index) => (
                <div className="col-md-4 col-sm-6 col-12" key={index}>
                  <div className="card">
                    <div className="divisao">
                      <h2 className="nometreino">{treino.nome}</h2>
                      <Image src={figure1} alt={treino.nome} className="imagemr" />
                      <h3 className="ex">Como executar:</h3>
                      <p className="parad">{treino.comoExecutar}</p>

                      {temToken && (
                        <div className="button-group">
                          <button className="btn btn-edit">Editar</button>
                          <button className="btn btn-delete">Deletar</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="no-treino">Nenhum treino encontrado para esta categoria.</p>
        )}
      </section>

      <div id="contact" style={{ marginTop: "20%" }}>
        <h1>CONTATOS</h1>
        <form>
          <input type="text" placeholder="Seu Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Seu Comentário..." />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}
