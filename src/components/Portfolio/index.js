import React from 'react';
import Project from '../../objects/Project';

import Pah from '../../img/pah.PNG';
import Hat from '../../img/hat.PNG';
import Reload from '../../img/reload.PNG';

import './index.css';

export default function Portfolio() {
    return (
        <div className='portfolio'>
            <div className="container">
                <h1>Portfolio</h1>
                <Project title='Reload.inc' link='https://reload.co' img={Reload} />
                <Project title='PAH - Plataforma de Análise Highthroughput' link='http://pah.bahia.fiocruz.br/' img={Pah} />
                <Project title='HAT - Hepatitis Analisis Tool' link='http://pah.bahia.fiocruz.br/hat' img={Hat} islast={true} />
            </div>
        </div>
    );
}
