import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './dashboard';
import Donor from './donor'; 

function App() {
  const donorInfo = {
    name: 'Nia Jaime',
    username: 'NiaJ',
    email: 'Niajaime@gmail.com',
    password_hash: '0781289792',
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Dashboard /> {}
      <Donor donorInfo={donorInfo} /> {}
    </div>
  );
}

export default App;
