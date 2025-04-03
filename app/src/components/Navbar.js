"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/images2/l.png";
import { Link } from "react-scroll";
import { useRouter } from "next/navigation"; // Para redirecionamento

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar se o usuário está logado
  const router = useRouter(); // Hook para redirecionamento

  // Verifica se há um token armazenado ao carregar a página
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Se houver token, define como true
  }, []);

  // Muda o fundo do navbar ao rolar a página
  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNav(true);
      } else {
        setNav(false);
      }
    };

    window.addEventListener("scroll", changeBackground);

    // Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // Função para logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token
    setIsLoggedIn(false); // Atualiza o estado para remover o botão "Sair"
    router.push("/login"); // Redireciona para a tela de login
  };

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="main" smooth={true} duration={1000} className="logo">
        <Image src={logo} alt="" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          
          <Link to="main" smooth={true} duration={1000}>
            Home
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration={1000}>
            Treinos
          </Link>
        </li>
        <li>
          <Link to="presentaion" smooth={true} duration={1000}>
            Tabelas
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={1000}>
            Sobre
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={1000}>
            Contatos
          </Link>
        </li>
        {isLoggedIn && (
          <li className="sair" onClick={handleLogout}>
            <span>Sair</span>
          </li>
        )}
      </ul>
    </nav>
  );
}
