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
        perder:  [
          ["Segunda", "Peito / Tríceps + Cardio", [
            ["Supino Reto", 4, "10-12", "45s"],
            ["Supino Inclinado com Halteres", 4, "10-12", "45s"],
            ["Crucifixo com Halteres", 3, "12-15", "30s"],
            ["Tríceps Corda na Polia", 3, "12-15", "30s"],
            ["Mergulho entre Bancos", 3, "12-15", "30s"],
            ["Esteira (corrida leve)", 1, "20 min", "-"]
          ]],
          ["Terça", "Pernas + Cardio", [
            ["Agachamento Livre", 4, "10-12", "45s"],
            ["Afundo com Halteres", 3, "12-15", "30s"],
            ["Leg Press", 3, "12-15", "30s"],
            ["Extensora", 3, "12-15", "30s"],
            ["Panturrilha no Smith", 4, "15-20", "30s"],
            ["Esteira (subida rápida)", 1, "15 min", "-"]
          ]],
          ["Quarta", "Costas / Bíceps + Cardio", [
            ["Remada Curvada", 4, "10-12", "45s"],
            ["Puxada Frontal", 3, "12-15", "30s"],
            ["Levantamento Terra", 3, "10-12", "45s"],
            ["Rosca Direta", 3, "12-15", "30s"],
            ["Rosca Alternada", 3, "12-15", "30s"],
            ["Esteira (corrida leve)", 1, "20 min", "-"]
          ]],
          ["Quinta", "Ombros / Abdômen", [
            ["Desenvolvimento Militar", 4, "10-12", "45s"],
            ["Elevação Lateral", 3, "12-15", "30s"],
            ["Elevação Frontal", 3, "12-15", "30s"],
            ["Face Pull", 3, "12-15", "30s"],
            ["Prancha Abdominal", 3, "40s", "30s"],
            ["Abdominal Bicicleta", 3, "20 repetições", "30s"]
          ]],
          ["Sexta", "Peito", [
            ["Supino Inclinado", 3, "15", "30s"],
            ["Supino Reto", 3, "12-15", "30s"],
            ["Flexões de Braço", 3, "15-20", "30s"],
            ["Peck Deck", 3, "20", "30s"],
            ["Corrida Intervalada na Esteira", 1, "20 min (1min rápido / 1min leve)", "-"]
          ]]
        ],
        manter: [
          ["Segunda-feira", "Peito / Panturrilhas", [
            ["Crucifixo Reto (Máquina ou Cabo)", 3, "12-15", "45s"],
            ["Supino Inclinado com Halteres", 3, "10-15", "60s"],
            ["Supino Máquina (Preferência Inclinado)", 3, "10-12", "60s"],
            ["Supino Reto (Barra Guiada ou Halteres)", 3, "10-15", "60s"],
            ["Cross Over", 4, "15", "45s"],
            ["Paralela", 4, "Falha", "60s"],
            ["Panturrilhas (Máquina a Escolha)", 6, "20", "30s"]
          ]],
          ["Terça-feira", "Costas / Abdômen", [
            ["Remada Curvada com Barra", 4, "8-12", "60s"],
            ["Remada com Halteres", 3, "12", "45s"],
            ["Puxador Frente", 4, "10-15", "60s"],
            ["Remada Máquina", 3, "12", "45s"],
            ["Remada Baixa Cabo", 3, "12", "45s"],
            ["Pullover", 4, "15", "45s"],
            ["Abdominal Infra", 3, "15", "30s"],
            ["Prancha", 3, "30-40s", "30s"]
          ]],
        
          ["Quarta-feira", "Pernas", [
            ["Cadeira Extensora", 4, "20", "45s"],
            ["Agachamento Livre", 3, "8-15", "60s"],
            ["Leg Press", 4, "15", "60s"],
            ["Cadeira Flexora Deitada", 3, "15", "45s"],
            ["Cadeira Flexora Sentada", 3, "12-15", "45s"],
            ["Stiff", 3, "12", "45s"],
            ["Panturrilhas (Máquina a Escolha)", 6, "20", "30s"]
          ]],
        
          ["Quinta-feira", "Ombros / Abdômen", [
            ["Elevação Lateral no Cabo", 3, "15", "45s"],
            ["Elevação Lateral com Halteres", 3, "15", "45s"],
            ["Desenvolvimento Máquina", 4, "8-15", "60s"],
            ["Elevação Lateral na Máquina", 3, "15", "45s"],
            ["Elevação Frontal com Halteres", 3, "12", "45s"],
            ["Crucifixo Invertido (Cabo ou Máquina)", 4, "12", "45s"],
            ["Panturrilhas (Máquina a Escolha)", 6, "20", "30s"],
            ["Abdominal Supra", 3, "15", "30s"]
          ]],
        
          ["Sexta-feira", "Braços / Cardio", [
            ["Rosca Direta no Cabo", 4, "12", "45s"],
            ["Rosca Direta com Halteres", 4, "10-12", "45s"],
            ["Rosca Scott", 4, "10-12", "45s"],
            ["Extensão de Tríceps no Cabo", 4, "15", "45s"],
            ["Extensão de Tríceps na Máquina", 4, "15", "45s"],
            ["Supinado ou Paralela Máquina", 4, "10-15", "60s"],
            ["Esteira (Corrida leve)", 20, "min", "-"]
          ]]
        ]
      },
      mulher: {
        ganhar: [
          ["Segunda-feira", "Pernas e Glúteos", [
            ["Agachamento Livre", 3, "12-15", "60s"],
            ["Leg Press 45°", 3, "12-15", "60s"],
            ["Afundo com Halteres", 3, "12", "45s"],
            ["Glúteo no Smith", 3, "12-15", "45s"],
            ["Cadeira Extensora", 3, "15", "45s"],
            ["Panturrilhas em Pé", 3, "15-20", "30s"]
          ]],
        
          ["Terça-feira", "Costas e Bíceps", [
            ["Puxador Frente", 3, "12-15", "45s"],
            ["Remada Curvada", 3, "10-12", "45s"],
            ["Remada Unilateral com Halter", 3, "10-12", "45s"],
            ["Rosca Direta com Halteres", 3, "10-12", "45s"],
            ["Rosca Martelo", 3, "10-12", "45s"],
            ["Abdominal Supra", 3, "15", "30s"]
          ]],
        
          ["Quarta-feira", "Panturrilhas e Abdominais", [
            ["Panturrilhas em Pé", 4, "15-20", "30s"],
            ["Panturrilhas Sentado", 4, "15-20", "30s"],
            ["Elevação de Panturrilha no Leg Press", 3, "15-20", "30s"],
            ["Abdominal Infra", 3, "15-20", "30s"],
            ["Prancha", 3, "30s", "30s"],
            ["Abdominal Oblíquo", 3, "15", "30s"]
          ]],
        
          ["Quinta-feira", "Ombros e Tríceps", [
            ["Desenvolvimento com Halteres", 3, "12-15", "45s"],
            ["Elevação Lateral", 3, "12-15", "45s"],
            ["Elevação Frontal", 3, "12-15", "45s"],
            ["Tríceps Corda no Pulley", 3, "12-15", "45s"],
            ["Tríceps Francês com Halteres", 3, "12-15", "45s"],
            ["Prancha", 3, "30s", "30s"]
          ]],
        
          ["Sexta-feira", "Pernas e Glúteos", [
            ["Agachamento no Smith", 3, "12-15", "60s"],
            ["Passada com Halteres", 3, "12", "45s"],
            ["Elevação Pélvica (Hip Thrust)", 3, "12-15", "60s"],
            ["Cadeira Flexora", 3, "12-15", "45s"],
            ["Panturrilhas Sentado", 3, "15-20", "30s"],
            ["Abdução na Máquina", 3, "15-20", "30s"]
          ]]
        ],
        perder: [
          ["Segunda-feira", "Pernas, Glúteos e Cardio", [
            ["Agachamento Livre", 3, "12-15", "60s"],
            ["Leg Press 45°", 3, "12-15", "60s"],
            ["Afundo com Halteres", 3, "12", "45s"],
            ["Glúteo no Smith", 3, "12-15", "45s"],
            ["Cadeira Extensora", 3, "15", "45s"],
            ["Panturrilhas em Pé", 3, "15-20", "30s"],
            ["🚴‍♀️ Cardio: Bicicleta Ergométrica", "15 min", "-", "-"]
          ]],
        
          ["Terça-feira", "Costas, Bíceps e Cardio", [
            ["Puxador Frente", 3, "12-15", "45s"],
            ["Remada Curvada", 3, "10-12", "45s"],
            ["Remada Unilateral com Halter", 3, "10-12", "45s"],
            ["Rosca Direta com Halteres", 3, "10-12", "45s"],
            ["Rosca Martelo", 3, "10-12", "45s"],
            ["Abdominal Supra", 3, "15", "30s"],
            ["🏃‍♀️ Cardio: Corrida Leve", "15 min", "-", "-"]
          ]],
        
          ["Quarta-feira", "Panturrilhas, Abdominais e Cardio", [
            ["Panturrilhas em Pé", 4, "15-20", "30s"],
            ["Panturrilhas Sentado", 4, "15-20", "30s"],
            ["Elevação de Panturrilha no Leg Press", 3, "15-20", "30s"],
            ["Abdominal Infra", 3, "15-20", "30s"],
            ["Prancha", 3, "30s", "30s"],
            ["Abdominal Oblíquo", 3, "15", "30s"],
            ["🚶‍♀️ Cardio: Caminhada Rápida", "20 min", "-", "-"]
          ]],
        
          ["Quinta-feira", "Ombros, Tríceps e Cardio", [
            ["Desenvolvimento com Halteres", 3, "12-15", "45s"],
            ["Elevação Lateral", 3, "12-15", "45s"],
            ["Elevação Frontal", 3, "12-15", "45s"],
            ["Tríceps Corda no Pulley", 3, "12-15", "45s"],
            ["Tríceps Francês com Halteres", 3, "12-15", "45s"],
            ["Prancha", 3, "30s", "30s"],
            ["🚴‍♀️ Cardio: Subir escadas ou Bike", "15 min", "-", "-"]
          ]],
        
          ["Sexta-feira", "Pernas, Glúteos e Cardio", [
            ["Agachamento no Smith", 3, "12-15", "60s"],
            ["Passada com Halteres", 3, "12", "45s"],
            ["Elevação Pélvica (Hip Thrust)", 3, "12-15", "60s"],
            ["Cadeira Flexora", 3, "12-15", "45s"],
            ["Panturrilhas Sentado", 3, "15-20", "30s"],
            ["Abdução na Máquina", 3, "15-20", "30s"],
            ["🏃‍♀️ Cardio: Corrida Intervalada", "15 min", "-", "-"]
          ]]
        ],
        manter: [
          ["Segunda-feira", "Pernas e Glúteos", [
            ["Agachamento Livre", 3, "10-12", "60s"],
            ["Leg Press 45°", 3, "12", "60s"],
            ["Afundo com Halteres", 3, "12", "45s"],
            ["Cadeira Extensora", 3, "15", "45s"],
            ["Elevação Pélvica (Hip Thrust)", 3, "12", "60s"],
            ["Panturrilhas em Pé", 3, "15-20", "30s"]
          ]],
        
          ["Terça-feira", "Costas e Bíceps", [
            ["Puxador Frente", 3, "12", "45s"],
            ["Remada Curvada", 3, "10-12", "45s"],
            ["Remada Unilateral com Halter", 3, "10-12", "45s"],
            ["Rosca Direta com Halteres", 3, "10-12", "45s"],
            ["Rosca Martelo", 3, "10-12", "45s"]
          ]],
        
          ["Quarta-feira", "Panturrilhas e Abdominais", [
            ["Panturrilhas em Pé", 4, "15-20", "30s"],
            ["Panturrilhas Sentado", 4, "15-20", "30s"],
            ["Elevação de Panturrilha no Leg Press", 3, "15-20", "30s"],
            ["Abdominal Supra", 3, "15", "30s"],
            ["Prancha", 3, "30s", "30s"],
            ["Abdominal Oblíquo", 3, "15", "30s"]
          ]],
        
          ["Quinta-feira", "Ombros e Tríceps", [
            ["Desenvolvimento com Halteres", 3, "12", "45s"],
            ["Elevação Lateral", 3, "12", "45s"],
            ["Elevação Frontal", 3, "12", "45s"],
            ["Tríceps Corda no Pulley", 3, "12", "45s"],
            ["Tríceps Francês com Halteres", 3, "12", "45s"]
          ]],
        
          ["Sexta-feira", "Pernas e Glúteos", [
            ["Agachamento no Smith", 3, "12", "60s"],
            ["Passada com Halteres", 3, "12", "45s"],
            ["Elevação Pélvica (Hip Thrust)", 3, "12", "60s"],
            ["Cadeira Flexora", 3, "12", "45s"],
            ["Abdução na Máquina", 3, "15", "30s"],
            ["Panturrilhas Sentado", 3, "15", "30s"]
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