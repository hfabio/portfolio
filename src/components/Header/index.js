import React from 'react';

import './index.css';

export default function Header() {
    return (

        <div>
            <ul className='header'>
                <li><a href='foo'>Home</a></li>
                <li className='secondary'><a href='#about-me'>About me</a></li>
                <li className='secondary'><a href='#skills'>Skills</a></li>
                <li className='secondary'><a href='#portfolio'>Portfolio</a></li>
                <li className='secondary'><a href='#contacts'>Contacts</a></li>
            </ul>
            <div className="line"></div>
        </div>

    );
}
