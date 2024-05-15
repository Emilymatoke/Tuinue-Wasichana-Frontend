import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function LoginModal({ isOpen, onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Login</button>
          <button type="button" onClick={onClose}>
            Cancel
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '500px',
    width: '100%',
  },
};

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogin = (username, password) => {
    console.log('Logged in with:', { username, password });
  };

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Login</button>
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;
