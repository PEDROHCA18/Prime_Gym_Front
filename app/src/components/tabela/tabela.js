"use client"
import "@/components/tabela/tabela.css"
import Header from '../Header';
import Contect from '../Contect';
import React,{useState} from 'react'
import Image from 'next/image';
import logo from '@/images2/l.png';
import {Link} from 'react-scroll';

    
const Tabela = () => {
  const[nav,setnav] = useState(false);
  const changeBackground =() =>{
      if (window.scrollY >= 50){
          setnav(true);
      }
      else{
          setnav(false);
      }
  }
  window.addEventListener('scroll',changeBackground);

  
  return (
    <div>
    <nav className={nav ?"nav active":"nav"}>
    <a href="/" smooth={true} duration={1000} className ='logo'>
        <Image src={logo} alt=""/>
    </a>
    <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
          <span className='nav-icon'></span>
      </label>
      <ul className="menu">
          <li><Link to="main" smooth={true} duration={1000}>Home</Link></li>
          <li><Link to="tabelam" smooth={true} duration={1000}>Tabelas</Link></li>
          <li><Link to="contact" smooth={true} duration={1000}>Contatos</Link></li>
      </ul>

</nav>

    <div></div>
 
      <Header />
      <div>
      
      
      

      <section id="tabelam">
        <h1 className="h1-principal-branco">Tabela Masculina</h1>
      </section>

      <div className="tabelacor">
      <h3 className='nomeTreino'>Segunda</h3>
          <h3>Peito e Tríceps</h3>
        <table>
          <tr>
            <th>Exercício</th>
            <th>Séries</th>
            <th>Repetições</th>
          </tr>
          <tr>
            <td>Supino reto com barra</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Supino inclinado com barra</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Crucifixo na máquina</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Tríceps apoiado no banco</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Tríceps na polia alta com barra reta</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Tríceps na polia alta com corda</td>
            <td>3</td>
            <td>10</td>
          </tr>
        </table>
      </div>

      <div className="tabelacor">
      <h3 className='nomeTreino'>Terça</h3>
          <h3>Costa e Bíceps</h3>
        <table>
          <tr>
            <th>Exercício</th>
            <th>Séries</th>
            <th>Repetições</th>
          </tr>
          <tr>
            <td>Puxada com barra no purlley</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Puxada pela frente com triângulo no purlley</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Remada na máquina de cabos</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Rosca bíceps direta com barra</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Rosca bíceps martelo em pé com halteres</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Rosca bíceps no cabo usando a corda</td>
            <td>3</td>
            <td>10</td>
          </tr>
        </table>
      </div>

      <div className="tabelacor">
      <h3 className='nomeTreino'>Quarta</h3>
          <h3>Pernas</h3>
        <table>
          <tr>
            <th>Exercício</th>
            <th>Séries</th>
            <th>Repetições</th>
          </tr>
          <tr>
            <td>Agachamento</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Extensora</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Leg press</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Flexora deitada</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Cadeira abdutora</td>
            <td>4</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Panturrilhas</td>
            <td>4</td>
            <td>10</td>
          </tr>
        </table>
      </div>

      <div className="tabelacor">
      <h3 className='nomeTreino'>Quinta</h3>
          <h3>Peito e tríceps/ombros</h3>
        <table>
          <tr>
            <th>Exercício</th>
            <th>Séries</th>
            <th>Repetições</th>
          </tr>
          <tr>
            <td>Supino reto com barra</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Supino inclinado com barra</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Crucifixo na máquina</td>
            <td>3</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Tríceps apoiado no banco</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Tríceps na polia alta com barra reta</td>
            <td>4</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Tríceps na polia alta com corda</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Elevação lateral com halteres</td>
            <td>4</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Elevação frontal com halteres</td>
            <td>4</td>
            <td>10</td>
          </tr>
        </table>
      </div>

      <div className="tabelacor">
      <h3 className='nomeTreino'>Sexta</h3>
          <h3>Costa e Bíceps/Antebraços</h3>
        <table>
          <tr>
            <th>Exercício</th>
            <th>Séries</th>
            <th>Repetições</th>
          </tr>
          <tr>
            <td>Puxada com barra no purlley</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Puxada pela frente com triângulo no purlley</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Remada na máquina de cabos</td>
            <td>4</td>
            <td>12</td>
          </tr>
          <tr>
            <td>Rosca bíceps direta com barra W</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Rosca bíceps unilateral com halteres</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Rosca bíceps martelo em pé com halteres</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Rosca de Punhos</td>
            <td>3</td>
            <td>10</td>
          </tr>
          <tr>
            <td>Rosca inversa</td>
            <td>3</td>
            <td>10</td>
          </tr>
        </table>
      </div>
</div>

      <Contect/>
    </div>
  );
};

export default Tabela;
