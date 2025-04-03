import React from 'react';

import Featurebox from './Featurebox';
import figure1 from '@/images2/1.svg';
import figure2 from '@/images2/2.svg';
function Feature() {
    return (
        <div id='features'>
            <h1>TREINOS</h1>
            <div className='a-container'>
                <Featurebox image={figure1} title="Peito" />
                <Featurebox image={figure2} title="Costa"/>
                <Featurebox image={figure1} title="Bicéps" />
                <Featurebox image={figure2} title="Tricéps"/>
            </div>
            <div className='a-container'>
                <Featurebox image={figure1} title="Ombros"/>
                <Featurebox image={figure2} title="Glúteos"/>
                <Featurebox image={figure1} title="Panturrilhas" />
                <Featurebox image={figure2} title="Pernas"/>
            </div>
            
        </div>
    )
}

export default Feature