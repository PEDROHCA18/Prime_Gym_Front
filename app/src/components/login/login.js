"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import logo from "@/images2/l.png";
import styles from "@/components/login/loign.module.css";

const Login = () => {
  const router = useRouter(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setLoginError(null);

    const { email, senha } = data;

    try {
      const response = await fetch("https://gymacademy.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, senha }),
      });

      const result = await response.json();

      if (response.ok) {
        const { token } = result;
        localStorage.setItem("token", token);

        router.push("/"); 
      } else {
        setLoginError(result.message || "Falha no login.");
      }
    } catch (error) {
      console.error("Erro ao tentar conectar ao servidor:", error);
      setLoginError("Erro de conexão com o servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.formcontainer}>
        <Image src={logo} width={100} height={100} alt="Logo" className="imagemr" />
        <h2 className={styles.title}>LOGIN ADMIN</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className={styles.input}
            id="user_login"
            autoComplete="off"
            placeholder="Email"
            {...register("email", { required: "Email é obrigatório." })}
          />
          {errors.email && <p className={styles["error-message"]}>{errors.email.message}</p>}

          <input
            type="password"
            className={styles.input}
            id="user_pass"
            autoComplete="off"
            placeholder="Senha"
            {...register("senha", { required: "Senha é obrigatória." })}
          />
          {errors.senha && <p className={styles["error-message"]}>{errors.senha.message}</p>}

          {loginError && <p className={styles["error-message"]}>{loginError}</p>}

          <button type="submit" disabled={isLoading} className={styles.button}>
            {isLoading ? "Carregando..." : "LOGIN"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
