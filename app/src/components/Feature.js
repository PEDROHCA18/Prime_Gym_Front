import React from 'react';

import Featurebox from './Featurebox';
import figure1 from '@/images2/1.svg';
import figure2 from '@/images2/2.svg';
function Feature() {
    return (
        <div id='features'>
            <h1>TREINOS</h1>
            <div className='a-container'>
            <a href="/treinos/Peito"> <Featurebox image={figure1} title="Peito" /></a>
            <a href="/treinos/Costa"> <Featurebox image={figure2} title="Costa"/></a>
            <a href="/treinos/Biceps">  <Featurebox image={figure1} title="Bicéps" /></a>
            <a href="/treinos/Triceps"> <Featurebox image={figure2} title="Tricéps"/></a>
            </div>
            <div className='a-container'>
            <a href="/treinos/Ombros"> <Featurebox image={figure1} title="Ombros"/></a>
            <a href="/treinos/Gluteos"> <Featurebox image={figure2} title="Glúteos"/></a>
            <a href="/treinos/Panturrilhas"> <Featurebox image={figure1} title="Panturrilhas" /></a>
            <a href="/treinos/Pernas"> <Featurebox image={figure2} title="Pernas"/></a>
            </div>
            
        </div>
    )
}

export default Feature