import React from 'react';
import Image from 'next/image';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <Image src="/images/about.png" alt="" width={500} height={500}/>
            </div>
            <div className='about-text'>
                <h1>Sobre a Plataforma</h1>
                <p>A plataforma para iniciantes na musculação oferece tabelas de treinos, 
                    acompanhadas por gifs explicativos, com o objetivo de proporcionar uma experiência visual
                     e informativa. Essa abordagem visa atender às necessidades dos iniciantes, facilitando 
                    a compreensão dos exercícios, enquanto fornece instruções detalhadas para promover uma prática segura e eficaz.</p>
                   
            </div>
            
            
        </div>
    )
}

export default About