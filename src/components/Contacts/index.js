import React from 'react';
import SocialImg from '../../objects/SocialImg';

import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/ig.png';
import Facebook from '../../img/facebook.png';
import Skype from '../../img/skype.png';
import Twitter from '../../img/twitter.png';

import './index.css';

export default function Contacts() {
    return (
        <div className='contacts'>
            <h1>Contacts</h1>
            <span>Want to know more or just chat?</span>
            <br />
            <span>You are welcome!</span>
            <h2><span className='badge badge-pill badge-dark'>Send message</span></h2>
            <div className="social">
                <SocialImg title='GitHub - hFabio' link='https://github.com/hfabio' img={Github} />
                <SocialImg title='LinkedIn - Helton Fábio' link='https://www.linkedin.com/in/heltonfabio/' img={LinkedIn} />
                <SocialImg title='Instagram - Helton Fábio' link='https://www.instagram.com/fabiohelton/' img={Instagram} />
                <SocialImg title='Facebook - Helton Fábio' link='https://www.facebook.com/heltonfabio/' img={Facebook} />
                <SocialImg title='Skype - Helton Fábio' link='skype:fabiohelton?call' img={Skype} />
                <SocialImg title='Twitter - Helton Fábio' link='https://www.twitter.com/eofabin/' img={Twitter} />
            </div>
            <span className='seeya'>See you there, buddy.</span>
        </div>
    );
}
