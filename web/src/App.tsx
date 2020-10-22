import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css';

import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>

        <main>
          <h1>Bring happiness to the world</h1>
          <p>Visit orphanages and change many children's day..</p>
        </main>

        <div className="div location">
          <strong>Itajubá</strong>
          <span>Minas Gerais</span>
        </div>

        <a href="" className="enter-app">
          >
        </a>
      </div>
    </div>
  );
}

export default App;
