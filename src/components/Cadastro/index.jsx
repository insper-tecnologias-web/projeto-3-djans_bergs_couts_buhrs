import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import App from "../../../src/App.jsx";
import AppBar from "../AppBar/index.jsx"

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isCadstar, setIsCadastrar] = useState(false);

  const handleSignup = () => {
    // Limpa o estado de erro
    setError('');

    // Envio para o backend os dados do usuário para cadastro
    axios.post('http://127.0.0.1:8000/api/users/', { username, password, email })
      .then(response => {
        // handle successful signup
        setIsCadastrar(true); // Define o estado de cadastro como verdadeiro
        console.log('Cadastro realizado com sucesso:', response.data);
      })
      .catch(error => {
        // handle signup error
        console.error('Erro ao cadastrar usuário:', error);
        setError('Erro ao cadastrar usuário. Por favor, tente novamente.'); // Define a mensagem de erro
      });
  };
  if (isCadstar) {
    return <App />;
  }
  return (
 
    <>
      <AppBar/>
      <div className="signup-container">
        <h2 className='cadastro-label'>Cadastro de Usuário</h2>
        {error && <p className="error">{error}</p>} {/* Exibe a mensagem de erro */}
        <div className="form-group">
          <label htmlFor="username">Nome de Usuário</label>
          <input
            className="input"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="button is-primary" onClick={handleSignup}>Cadastrar</button>
      </div>
    </>
  );
    
    
    
};

export default Signup;
