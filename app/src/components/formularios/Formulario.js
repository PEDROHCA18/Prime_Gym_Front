"use client"
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import logo from '@/images2/l.png';
const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <Image
      src={logo}
        width={100}
        height={100}
        alt="sobre"
        className="imagemr"
      />
      <h2>Formulário de Treino</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
        
          {errors.nomeTreino && (
            <p className="error-message">{errors.nomeTreino.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="tipoTreino">Tipo de Treino</label>
          <select
            {...register('tipoTreino', {
              required: 'Este campo é obrigatório',
            })}
            id="tipoTreino"
          >
            <option value="">Selecione o tipo de treino</option>
            <option value="peito">Peito</option>
            <option value="costa">Costa</option>
            <option value="perna">Perna</option>
            <option value="perna">Bicéps</option>
            <option value="perna">Tricéps</option>
            <option value="perna">Ombros</option>
            <option value="perna">Glúteos</option>
            <option value="perna">Panturrilhas</option>
          </select>
          <label htmlFor="nomeTreino">Nome do Treino</label>
          <textarea
            {...register('descricaoTreino', {
              required: 'Este campo é obrigatório',
            })}
            id="descricaoTreino"
          />
          {errors.descricaoTreino && (
            <p className="error-message">{errors.descricaoTreino.message}</p>
          )}
          {errors.tipoTreino && (
            <p className="error-message">{errors.tipoTreino.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="imagemTreino">Escolha uma Imagem</label>
          <input
            {...register('imagemTreino', {
              required: 'Este campo é obrigatório',
            })}
            type="file"
            id="imagemTreino"
            accept="image/*"
          />
          {errors.imagemTreino && (
            <p className="error-message">{errors.imagemTreino.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="descricaoTreino">Descrição do Treino</label>
          <textarea
            {...register('descricaoTreino', {
              required: 'Este campo é obrigatório',
            })}
            id="descricaoTreino"
          />
          {errors.descricaoTreino && (
            <p className="error-message">{errors.descricaoTreino.message}</p>
          )}
        </div>

        <button type="submit">Enviar</button>
      </form>

      <style jsx>{`
        .form-container {
          max-width: 400px;
          margin: auto;
          padding: 20px;
          border: 2px solid  #ffb500;
          border-radius: 10px;
          background-color: black;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
   
        }

        h2 {
          color:  #ffb500;
          text-align: center;
        }

        .form-group {
          width: 100%;
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 5px;
          color:  #ffb500;
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
          background-color:  #ffb500;
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
