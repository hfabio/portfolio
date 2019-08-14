import React from 'react';
import Header from './components/Header';
import FirstInfo from './components/FirstInfo';
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';


function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <FirstInfo />
      </div>
      <div className='about-me-section' id='about-me'>
        <Aboutme />
      </div>
      <div className="container" id='skills'>
        <Skills />
      </div>
      <div className="portfolio-section" id='portfolio'>
        <Portfolio />
      </div>
      <div className="container" id='contacts'>
        <Contacts />
      </div>
    </div>
  );
}

export default App;
