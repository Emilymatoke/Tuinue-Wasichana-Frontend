import React from 'react';
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
      </header>
      <Dashboard /> {}
      <Donor donorInfo={donorInfo} /> {}
    </div>
  );
}

export default App;
