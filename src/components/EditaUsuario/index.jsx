import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';

const EditUserInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const config = {
    headers: {
      Authorization: `token ${localStorage.getItem("token")}`,
    },
  };

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/infos/', config);
        setName(response.data.username);
        setEmail(response.data.email);
        
      } catch (error) {
        console.error('There was an error!', error);
      }
    }
    getUserInfo();
  }, []);
  

  const handleSave = () => {
   

    axios.post('http://127.0.0.1:8000/api/infos/', {"username":name,"password":password,"email":email},config)
      .then(response => {
        console.log('Atualização realizada com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao atualizar usuário:', error);
      });
  };

  return (
    <div className="edit-user-info">
      <h2>Edit User Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditUserInfo;
