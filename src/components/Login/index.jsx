import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import CorpoTelaUm from '../CorpoTelaUm/index.jsx';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');
 


  

  const handleLogin = () => {
    // Limpa o estado de erro
    setError('');

    //Envio para o backend o usuario e senha para verificação
    axios.post(' http://127.0.0.1:8000/api/users/', { username, password })
        .then(response => {
            // handle successful login
            console.log('Login successful');
            setIsLoggedIn(true); // Define o estado de login como verdadeiro
        })
        .catch(error => {
            // handle login error
            console.error('Login failed:', error);
            setError('Dados inválidos'); // Define a mensagem de erro
        });
  };

  const handleSignup = () => {
    // Aqui você pode redirecionar para a página de cadastro
    console.log('Redirecionar para a página de cadastro');
  };

  // Redireciona para a próxima página se o login for bem-sucedido
  if (isLoggedIn) {
    return <CorpoTelaUm />;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error">{error}</p>} {/* Exibe a mensagem de erro */}
      <div className="form-group">
        <label htmlFor="username">Usuário</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Entrar</button>
      <p>Não tem uma conta? <Link to="/cadastro">Crie aqui</Link>.</p>
    </div>
  );
};

export default Login;
