import React from 'react';
import Card from '../../objects/Card';

import './index.css';

export default function Skills() {
    return (
        <div className='skills'>
            <h1>Skills</h1>
            <span>I program in such languages as</span>
            <div className="cards">
                <Card title='Javascript' stars='4' />
                <Card title='Java' stars='5' />
                <Card title='Php' stars='3' />
                <Card title='Python' stars='4' />
            </div>
        </div>
    );
}
