import React from 'react'
import Image from 'next/image'
function Featurebox(props) {
    return (
        <div className='a-box'>
            <div class='a-b-img'>
                <Image src ={props.image} alt=''/>
            </div>
            <div className='a-b-text'>
                <h2>{props.title}</h2>
                <p>Gif e Instruções de treinos detalhadas</p>
             
            </div>
            
        </div>
    )
}

export default Featurebox