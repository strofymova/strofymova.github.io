import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>Александра Трофимова</h1>
          <p>
            <b>Цели:</b> приобрести упорядоченные знания о react, frontend разработке в целом
          </p>
          <p>
            <b>Технологии:</b> fullstack (GWT), spring boot - backend
          </p>
          <p>
            <b>Опыт:</b> занимаюсь разработкой медицинской информационной системы, в том числе личного кабинета пациента
          </p>
        </p>
      </header>
    </div>
  );
}

export default App;
