import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import JogosFav from './components/JogosFav/index.jsx';
import Buscador from './components/Buscador/index.jsx';
import './index.css';

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
]);

// Somente use ReactDOM.createRoot() sem ReactDOM.render() para criar a raiz de renderização
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
