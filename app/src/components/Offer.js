"use client";
import React, { useState, useEffect } from 'react';

function Offer() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [imc, setImc] = useState(null);

    const handleCalculateIMC = (e) => {
        e.preventDefault();
        if (weight && height) {
            const heightInMeters = height / 100; // Convert height to meters
            const calculatedImc = weight / (heightInMeters * heightInMeters);
            setImc(calculatedImc);
        }
    };

    useEffect(() => {
        if (imc !== null) {
            const categoryPath = getImcCategory();
            window.location.href = categoryPath;
        }
    }, [imc]);

    const getImcCategory = () => {
        if (imc < 18.5) {
            return '/tabelaabaixo';
        } else if (imc < 25) {
            return '/peso-normal';
        } else if (imc < 30) {
            return '/sobrepeso';
        } else {
            return '/tabelaobesidade';
        }
    };

    return (
        <div id='presentaion'>
            <div className='pr-heading'>
                <h1 >Tabelas</h1>
                <p className='details' style={{color:'white'}}>
                    A tabela de treino é um documento que organiza e
                    registra informações essenciais para o treinamento, como exercícios, séries e
                    repetições. Ela ajuda a monitorar o progresso e ajustar o treino conforme necessário,
                    sendo crucial para atletas e treinadores atingirem metas específicas.
                </p>

                <form onSubmit={handleCalculateIMC} className='imc-form'>
                  
                    
                   
                
                    
                    
                    <a href='/treinoia' className='pr-btn4'>TABELA PERSONALIZADA</a>
                
               
                    
                
                </form>

              

              
            </div>
            
        </div>
        
    );
}


export default Offer;
