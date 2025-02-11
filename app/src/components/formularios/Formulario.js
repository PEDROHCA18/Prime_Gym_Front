"use client"
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '@/images2/l.png';

const Formulario = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [tiposTreino, setTiposTreino] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTreinos = async () => {
      try {
        const response = await fetch('https://gym-academy-1.vercel.app/treinos');
        const data = await response.json();
        setTiposTreino(data);
      } catch (error) {
        console.error('Erro ao buscar os tipos de treino:', error);
      }
    };
    fetchTreinos();
  }, []);

  const onSubmit = async (data) => {
    const formData = {
      nome: data.nome,
      comoExexutar: data.comoExecutar, 
      treino: data.treino
    };

    try {
      const token = localStorage.getItem("token")
      const response = await fetch('https://gym-academy-1.vercel.app/salvar-exercicio', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao salvar o exercício');
      }

      alert('Exercício salvo com sucesso!');
      router.push('/'); 

    } catch (error) {
      console.error(error);
      alert('Erro ao salvar o exercício. Tente novamente.');
    }
  };

  return (
    <div className="form-container">
      <Image src={logo} width={100} height={100} alt="sobre" className="imagemr" />
      <h2>Formulário de Treino</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nome">Nome do Treino</label>
          <input {...register('nome', { required: 'Este campo é obrigatório' })} id="nome" />
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>
        
        <div className="form-group">
          <label htmlFor="treino">Tipo de Treino</label>
          <select {...register('treino', { required: 'Este campo é obrigatório' })} id="treino">
            <option value="">Selecione o tipo de treino</option>
            {tiposTreino.map((treino) => (
              <option key={treino.id} value={treino.id}>{treino.nome}</option>
            ))}
          </select>
          {errors.tipoTreino && <p className="error-message">{errors.tipoTreino.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="comoExecutar">Como Executar</label>
          <textarea {...register('comoExecutar', { required: 'Este campo é obrigatório' })} id="comoExecutar" />
          {errors.comoExecutar && <p className="error-message">{errors.comoExecutar.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 2px solid #ffb500;
          border-radius: 10px;
          background-color: black;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }

        h2 {
          color: #ffb500;
          text-align: center;
        }

        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color: #ffb500;
        }

        input,
        textarea,
        select,
        button {
          width: 100%;
          padding: 8px;
          margin-bottom: 10px;
          box-sizing: border-box;
        }

        .error-message {
          color: red;
          margin-top: 5px;
        }

        button {
          background-color: #ffb500;
          color: white;
          padding: 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Formulario;
