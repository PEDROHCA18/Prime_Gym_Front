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

async function deletarExercicio(id) {
  try {
    const res = await fetch(`https://gymacademy.onrender.com/deletar-exercicio/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (!res.ok) {
      throw new Error('Erro ao deletar o exercício');
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    alert("Erro ao deletar o exercício.");
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

  const handleDeletar = (id) => {
    if (window.confirm("Você tem certeza que deseja deletar este exercício?")) {
      deletarExercicio(id).then(() => {
        // Após o sucesso, atualize a lista de treinos
        setTreinos(treinos.filter(treino => treino.id !== id));
      });
    }
  };

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
                      <img src={treino.gif || "/"} alt={treino.nome} className="imagemr" />
                      <h3 className="ex">Como executar:</h3>
                      <p className="parad">{treino.comoExexutar}</p>

                      {temToken && (
                        <div className="button-group">
                          <Link href={`/alterar-exercicio/${treino.id}`} className="btn btn-edit">Editar</Link>
                          <button
                            className="btn btn-delete"
                            onClick={() => handleDeletar(treino.id)} // Chama a função para deletar o treino
                          >
                            Deletar
                          </button>
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
