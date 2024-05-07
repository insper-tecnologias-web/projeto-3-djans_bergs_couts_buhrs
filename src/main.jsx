import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import JogosFav from './components/JogosFav/index.jsx';
import Buscador from './components/Buscador/index.jsx';
import './index.css';
import CorpoTelaUm from './components/CorpoTelaUm/index.jsx';
import Cadastro from './components/Cadastro/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/favoritos',
    element: <JogosFav />,
  },
  {
    path: '/buscador',
    element: <Buscador />,
  },
  {
    path: '/principal',
    element: <CorpoTelaUm />,
  },
  {
    path: '/cadastro',
    element: <Cadastro />,
  },
]);

// Somente use ReactDOM.createRoot() sem ReactDOM.render() para criar a raiz de renderização
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
