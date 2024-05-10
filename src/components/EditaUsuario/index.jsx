import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import AppBarFavBusca from "../AppBarFAvBusca/index.jsx";
import { useNavigate } from 'react-router-dom';

const EditUserInfo = () => {
  const[isSaved, setIsSaved] = useState(false);
  const[isDeleted, setIsDeleted] = useState(false);  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
    setIsSaved(true);
   

    axios.post('http://127.0.0.1:8000/api/infos/', {"username":name,"password":password,"email":email},config)
      .then(response => {
        console.log('Atualização realizada com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao atualizar usuário:', error);
      });
  
  };

  const handleDelete = () => {

    setIsDeleted(true);
    axios.delete('http://127.0.0.1:8000/api/infos/', config)
      .then(response => {
        console.log('Atualização realizada com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao atualizar usuário:', error);
      });
  
  };

  if (isSaved) {
    return navigate('/principal');
  }
  if (isDeleted) {
    return navigate('/');
  }

  return (
  
    <>
    <AppBarFavBusca/>
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
      <button className='button_save_user' onClick={handleSave}>Save</button>
      <button className='button_delete_user' onClick={handleDelete}>Delete</button>
    </div>
    </>
    
  );
};

export default EditUserInfo;
