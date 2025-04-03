import React from 'react';

import Featurebox from './Featurebox';
import figure1 from '@/images2/1.svg';
import figure2 from '@/images2/2.svg';
function Feature() {
    return (
        <div id='features'>
            <h1>TREINOS</h1>
            <div className='a-container'>
            <a href="/treinos/peito"> <Featurebox image={figure1} title="Peito" /></a>
            <a href="/treinos/costa"> <Featurebox image={figure2} title="Costa"/></a>
            <a href="/treinos/biceps">  <Featurebox image={figure1} title="Bicéps" /></a>
            <a href="/treinos/triceps"> <Featurebox image={figure2} title="Tricéps"/></a>
            </div>
            <div className='a-container'>
            <a href="/treinos/ombros"> <Featurebox image={figure1} title="Ombros"/></a>
            <a href="/treinos/gluteos"> <Featurebox image={figure2} title="Glúteos"/></a>
            <a href="/treinos/panturrilhas"> <Featurebox image={figure1} title="Panturrilhas" /></a>
            <a href="/treinos/pernas"> <Featurebox image={figure2} title="Pernas"/></a>
            </div>
            
        </div>
    )
}

export default Feature