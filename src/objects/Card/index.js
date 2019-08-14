import React from 'react';
import Javascript from '../../img/javascript.png';
import Java from '../../img/java.png';
import Php from '../../img/php.png';
import Python from '../../img/python.png';
import StarFull from '../../img/star-full.png';
import StarEmpty from '../../img/star-empty.png';


import './index.css';

export default function Card(props) {
    const { title, stars } = props;

    function getImg() {
        switch (title) {
            case 'Javascript':
                return Javascript;
            case 'Java':
                return Java;
            case 'Php':
                return Php;
            case 'Python':
                return Python;
            default:
                return Javascript;
        }
    }

    function getStar(num) {
        if (num <= stars) {
            return StarFull;
        } else {
            return StarEmpty;
        }
    }

    return (
        <div className='card' style={{ width: '18rem' }}>
            <img src={getImg()} className='img-fluid' style={{ maxWidth: '90px', maxHeight: '90px', alignSelf: 'center', marginTop: '30px' }} alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="stars">
                    <img src={getStar(1)} alt="" />
                    <img src={getStar(2)} alt="" />
                    <img src={getStar(3)} alt="" />
                    <img src={getStar(4)} alt="" />
                    <img src={getStar(5)} alt="" />
                </div>
            </div>
        </div>
    );
}
