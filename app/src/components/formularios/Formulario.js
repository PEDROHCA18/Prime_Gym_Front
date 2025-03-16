"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/images2/l.png";
import "@/components/Css/form.css";

const Formulario = ({ id }) => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const [tiposTreino, setTiposTreino] = useState([]);
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchTreinos = async () => {
      try {
        const response = await fetch("https://gymacademy.onrender.com/treinos");
        const data = await response.json();
        setTiposTreino(data);
      } catch (error) {
        console.error("Erro ao buscar os tipos de treino:", error);
      }
    };
    fetchTreinos();
  }, []);

  useEffect(() => {
    const fetchExercicio = async () => {
      try {
        const response = await fetch(`https://gymacademy.onrender.com/exercicios/${id}`);
        const data = await response.json();
  
        setValue("nome", data.nome || "");
        setValue("comoExexutar", data.comoExexutar || ""); 
        setValue("treino", data.treino || "");
  
        if (data.gif) {
          setPreview(data.gif); 
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do exercício:", error);
      }
    };
  
    if (id) fetchExercicio();
  }, [id, setValue]);
  
  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setImagem(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImagem(null);
    setPreview(null);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("nome", data.nome);
    formData.append("comoExexutar", data.comoExexutar); 
    formData.append("treino", data.treino);
    
    if (imagem) {
      formData.append("image", imagem);
    }

    try {
      const token = localStorage.getItem("token");

      const url = id 
        ? `https://gymacademy.onrender.com/alterar-exercicio/${id}` 
        : `https://gymacademy.onrender.com/salvar-exercicio`;

      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar/alterar o exercício");
      }

      alert(id ? "Exercício alterado com sucesso!" : "Exercício salvo com sucesso!");
      router.push("/");
    } catch (error) {
      console.error(error);
      alert("Erro ao processar o exercício. Tente novamente.");
    }
  };
  
  return (
    <div className="form-container">
      <Image src={logo} width={100} height={100} alt="logo" className="imagemr" />
      <h2>Formulário de Treino</h2>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="nome">Nome do Treino</label>
          <input {...register("nome", { required: "Este campo é obrigatório" })} id="nome" />
          {errors.nome && <p className="error-message">{errors.nome.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="treino">Tipo de Treino</label>
          <select {...register("treino", { required: "Este campo é obrigatório" })} id="treino">
            <option value="">Selecione o tipo de treino</option>
            {tiposTreino.map((treino) => (
              <option key={treino.id} value={treino.id}>
                {treino.nome}
              </option>
            ))}
          </select>
          {errors.treino && <p className="error-message">{errors.treino.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="comoExecutar">Como Executar</label>
          <textarea {...register("comoExexutar", { required: "Este campo é obrigatório" })} id="comoExecutar" />
          {errors.comoExexutar && <p className="error-message">{errors.comoExexutar.message}</p>}
        </div>

        <div className="form-group">
          <label>Imagem do Exercício</label>
          {preview ? (
            <div className="image-preview-container">
              <img src={preview} alt="Preview" className="image-preview" />
              <button type="button" onClick={removeImage} className="remove-image-btn">
                Remover
              </button>
            </div>
          ) : (
            <input type="file" accept="image/*" onChange={handleImageChange} />
          )}
          
        </div>

        <button type="submit">{id ? "Alterar" : "Enviar"}</button>
      </form>
      
    </div>
  );
};
  
export default Formulario;
