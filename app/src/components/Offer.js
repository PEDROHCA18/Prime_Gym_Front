import React from 'react'

function Offer() {
    return (
        <div id='presentaion'>
            <div className='pr-heading'>
                <h1>Tabelas</h1>
                <p className='details'>A tabela de treino é um documento que organiza e
                 registra informações essenciais para o treinamento, como exercícios, sériese 
                  repetições. Ela ajuda a monitorar o progresso e ajustar o treino conforme necessário,
                   sendo crucial para atletas e treinadores atingirem metas específicas.
                   </p>
                   
                <div className='pr-btns'>
                    <a href='/tabela' className='pr-btn'>Masculina</a>
                </div>
                <div className='pr-btns'>
                    <a href='#' className='pr-btn'>Feminina</a>
                </div>
            </div>
        </div>
    )
}

export default Offer