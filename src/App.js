import React, { useState } from 'react';
import CharityPage from './components/Charity';
import Footer from './components/Footer';
import LoginModal from './components/Login';
import './App.css'; 


function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLoginOpen = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginModalOpen(false);
    setLoginError('');
  };

  const handleLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      // Simulate login process
      if (username === 'user' && password === 'password') {
        resolve();
      } else {
        setLoginError('Invalid username or password');
        reject(new Error('Invalid username or password'));
      }
    });
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Tuinue Wasichana</h1>
        <button onClick={handleLoginOpen} className="btn btn-secondary">Login</button>
      </header>
      <main>
        <CharityPage />
      </main>
      <Footer />
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={handleLoginClose} 
        onLogin={handleLogin} 
        loginError={loginError} 
      />
    </div>
  );
}

export default App;

