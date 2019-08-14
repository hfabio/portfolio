import React from 'react';

import './index.css';

export default function Project(props) {
    const { title, link, img, islast = false } = props;
    return (
        <div className={(islast) ? 'project-container -last' : 'project-container'}>
            <img className='img-fluid img-thumbnail w-100' src={img} alt='imagem do projeto' />
            <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
        </div>
    );
}
