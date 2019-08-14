import React from 'react';

import './index.css';

export default function SocialImg(props) {
    const { link, img, title } = props;
    return (
        <a href={link} target='_blank' rel="noopener noreferrer">
            <img className='img-fluid social-img' src={img} alt={title} />
        </a>
    );
}
