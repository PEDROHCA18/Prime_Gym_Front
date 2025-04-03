"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import fileDownload from 'js-file-download'; // Importando a biblioteca para download
import "@/components/Css/treinoia.css";

const FitnessForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [tabela, setTabela] = useState(null);
  const [mensagemLesao, setMensagemLesao] = useState("");
  const [imc, setImc] = useState(null);
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(null);
  const [avaliacaoIMC, setAvaliacaoIMC] = useState("");

  const gerarTabelaTreino = (genero, objetivo) => {
    const tabela = {
      homem: {
        ganhar: [
          ["Segunda", "Peito / Triceps", [
            ["Supino Reto", 4, "8-12", "60s"],
            ["Supino Inclinado", 4, "8-12", "60s"],
            ["Supino Declinado", 4, "8-12", "60s"],
            ["Tríceps na Polia", 3, "10-12", "45s"],
            ["Tríceps na Corda", 3, "12-15", "45s"]
          ]],
          ["Terça", "Pernas", [
            ["Agachamento Livre", 4, "8-12", "60s"],
            ["Leg Press", 4, "10-12", "60s"],
            ["Afundo", 3, "12-15", "45s"],
            ["Extensora", 3, "10-12", "45s"],
            ["Panturrilha", 4, "15-20", "30s"]
          ]],
          ["Quarta", "Costas / Bíceps", [
            ["Barra Fixa", 3, "8-10", "60s"],
            ["Remada Curvada", 4, "10-12", "60s"],
            ["Puxada Alta", 3, "12-15", "45s"],
            ["Rosca Direta", 3, "10-12", "45s"],
            ["Rosca Martelo", 3, "10-12", "45s"]
          ]],
          ["Quinta", "Ombros", [
            ["Desenvolvimento com Halteres", 4, "8-12", "60s"],
            ["Elevação Lateral", 3, "10-12", "45s"],
            ["Elevação Frontal", 3, "10-12", "45s"]
          ]],
          ["Sexta", "Pernas", [
            ["Agachamento Frontal", 4, "8-12", "60s"],
            ["Cadeira Extensora", 3, "10-12", "45s"],
            ["Cadeira Flexora", 3, "10-12", "45s"]
          ]]
        ],
        perder: [
          ["Segunda", "Cardio", [
            ["Corrida HIIT", "-", "30 min", "-"],
          ]],
          ["Terça", "Pernas", [
            ["Agachamento", 3, "12-15", "30s"],
            ["Cadeira Flexora", 3, "12-15", "30s"],
          ]],
          ["Quarta", "Treino Funcional", [
            ["Burpees", 3, "15", "30s"],
          ]]
        ],
        manter: [
          ["Segunda", "Peito", [
            ["Supino Inclinado", 3, "10-12", "45s"],
          ]],
          ["Terça", "Pernas", [
            ["Agachamento", 3, "10-12", "45s"],
          ]],
          ["Quarta", "Costas", [
            ["Remada Curvada", 3, "10-12", "45s"],
          ]]
        ]
      },
      mulher: {
        ganhar: [
          ["Segunda", "Glúteos e Pernas", [
            ["Agachamento Livre", 4, "8-12", "60s"],
            ["Leg Press", 4, "10-12", "60s"],
            ["Afundo", 3, "12-15", "45s"],
          ]],
          ["Terça", "Costas e Braços", [
            ["Barra Fixa", 3, "8-10", "60s"],
            ["Remada Curvada", 4, "10-12", "60s"],
          ]]
        ],
        perder: [
          ["Segunda", "Cardio", [
            ["Corrida HIIT", "-", "30 min", "-"],
          ]],
          ["Terça", "Pernas", [
            ["Agachamento", 3, "12-15", "30s"],
          ]]
        ],
        manter: [
          ["Segunda", "Pernas", [
            ["Agachamento", 3, "10-12", "45s"],
          ]],
          ["Terça", "Costas", [
            ["Remada", 3, "10-12", "45s"],
          ]]
        ]
      }
    };

    if (genero.toLowerCase() in tabela && objetivo.toLowerCase() in tabela[genero.toLowerCase()]) {
      return tabela[genero.toLowerCase()][objetivo.toLowerCase()];
    } else {
      return null;
    }
  };

  const calcularIMC = (peso, altura) => {
    const imcValor = peso / (altura * altura);
    return imcValor.toFixed(2);
  };

  const avaliarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade Grau I";
    if (imc >= 35 && imc < 39.9) return "Obesidade Grau II";
    return "Obesidade Grau III (Mórbida)";
  };

  const onSubmit = (data) => {
    const { genero, objetivo, lesao, peso, altura, idade } = data;

    if (lesao === "sim") {
      setMensagemLesao("Procure orientação mais adequada com um personal.");
      setTabela(null);
      setImc(null);
      setAvaliacaoIMC("");
      return;
    }

    const novaTabela = gerarTabelaTreino(genero, objetivo);
    setTabela(novaTabela);
    setNome(data.nome);
    setIdade(idade);
    
    // Calcular o IMC e sua avaliação
    const imcValor = calcularIMC(peso, altura);
    setImc(imcValor);
    setAvaliacaoIMC(avaliarIMC(imcValor));
    setMensagemLesao("");
  };

  const baixarTabela = () => {
    if (!tabela) return;

    // Gerar conteúdo HTML para download
    let conteudo = `
      <html>
      <head>
        <title>Tabela de Treino</title>
        <style>
          body { font-family: Arial, sans-serif; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
          th { background-color: #f4f4f4; }
          h1 { color: #ffb500; }
        </style>
      </head>
      <body>
        <h1>Tabela de Treino para ${nome}</h1>
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Grupo Muscular</th>
              <th>Exercício</th>
              <th>Séries</th>
              <th>Repetições</th>
              <th>Descanso</th>
            </tr>
          </thead>
          <tbody>`;
    
    tabela.forEach(([dia, grupoMuscular, exercicios]) => {
      exercicios.forEach(([exercicio, series, repeticoes, descanso]) => {
        conteudo += `
          <tr>
            <td>${dia}</td>
            <td>${grupoMuscular}</td>
            <td>${exercicio}</td>
            <td>${series}</td>
            <td>${repeticoes}</td>
            <td>${descanso}</td>
          </tr>`;
      });
    });

    conteudo += `
          </tbody>
        </table>
      </body>
      </html>`;

    // Baixar o arquivo HTML
    const blob = new Blob([conteudo], { type: 'text/html' });
    fileDownload(blob, 'tabela_treino.html');
  };

  return (
    <div className="section">
      <div className="formcontainer">
        <h2 className="title">Treino Personalizado</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label className="label">Nome:</label>
            <input
              className="input"
              type="text"
              placeholder="Nome"
              {...register("nome", { required: "Nome é obrigatório." })}
            />
            {errors.nome && <p className="error-message">{errors.nome.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Idade:</label>
            <input
              className="input"
              type="number"
              placeholder="Idade"
              {...register("idade", { required: "Idade é obrigatória." })}
            />
            {errors.idade && <p className="error-message">{errors.idade.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Peso (kg):</label>
            <input
              className="input"
              type="number"
              placeholder="Peso (kg)"
              {...register("peso", { required: "Peso é obrigatório." })}
            />
            {errors.peso && <p className="error-message">{errors.peso.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Altura (m):</label>
            <input
              className="input"
              placeholder="Altura (m) Ex 1.80"
              {...register("altura", { required: "Altura é obrigatória." })}
            />
            {errors.altura && <p className="error-message">{errors.altura.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Nível:</label>
            <select className="select" {...register("nivel", { required: "Nível é obrigatório." })}>
              <option value="">Selecione seu nível</option>
              <option value="iniciantes">Iniciantes</option>
            </select>
            {errors.nivel && <p className="error-message">{errors.nivel.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Gênero:</label>
            <select className="select" {...register("genero", { required: "Gênero é obrigatório." })}>
              <option value="">Selecione seu gênero</option>
              <option value="homem">Homem</option>
              <option value="mulher">Mulher</option>
            </select>
            {errors.genero && <p className="error-message">{errors.genero.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Objetivo:</label>
            <select className="select" {...register("objetivo", { required: "Objetivo é obrigatório." })}>
              <option value="">Selecione seu objetivo</option>
              <option value="ganhar">Ganhar kg</option>
              <option value="perder">Perder kg</option>
              <option value="manter">Manter kg</option>
            </select>
            {errors.objetivo && <p className="error-message">{errors.objetivo.message}</p>}
          </div>

          <div className="form-group">
            <label className="label">Tem lesão?</label>
            <select className="select" {...register("lesao", { required: "Lesão é obrigatória." })}>
              <option value="">Selecione</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
            {errors.lesao && <p className="error-message">{errors.lesao.message}</p>}
          </div>

          <button type="submit" className="button">Gerar</button>
        </form>

        {mensagemLesao && <p className="error-message">{mensagemLesao}</p>}
        {tabela && (
          <div className="exercises">
            <h3>Tabela de Treino:</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Dia</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Grupo Muscular</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Exercício</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Séries</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Repetições</th>
                    <th style={{ border: '1px solid #ccc', padding: '8px' }}>Descanso</th>
                  </tr>
                </thead>
                <tbody>
                  {tabela.map(([dia, grupoMuscular, exercicios]) => (
                    <tr key={dia}>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{dia}</td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>{grupoMuscular}</td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                        {exercicios.map(([exercicio]) => (
                          <div key={exercicio}>{exercicio}</div>
                        ))}
                      </td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                        {exercicios.map(([, series]) => (
                          <div key={series}>{series}</div>
                        ))}
                      </td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                        {exercicios.map(([, , repeticoes]) => (
                          <div key={repeticoes}>{repeticoes}</div>
                        ))}
                      </td>
                      <td style={{ border: '1px solid #ccc', padding: '8px' }}>
                        {exercicios.map(([, , , descanso]) => (
                          <div key={descanso}>{descanso}</div>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button className="button" onClick={baixarTabela}>Baixar Tabela</button>
          </div>
        )}

        {imc && (
          <div className="imccolor" style={{ textAlign: 'center', color: 'white' }}>
            <h3>Olá, {nome}!</h3>
            <p>Você tem {idade} anos.</p>
            <p>Seu IMC é: <strong>{imc}</strong></p>
            <p>Avaliação: {avaliacaoIMC}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FitnessForm;