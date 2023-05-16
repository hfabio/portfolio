import React from 'react';
import ImgBanner from '../../img/banner.jpg';

import './index.css';

export default function FirstInfo() {
    return (
        <div className='firstInfo'>
            <ul>
                <li className='first'>Helton Fábio</li>
                <li className='second'>Developer | Bioinformatician 27 years old, Salvador</li>
                <li className='third'><span className='-first'>PT-BR</span> | ENG</li>
            </ul>
            <img className='img-fluid w-100 banner' src={ImgBanner} alt="Helton Fábio" />
        </div>
    );
}
