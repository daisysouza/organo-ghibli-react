import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//O React.StrictMode vai fazer renderizações adicionais no compnentes-durante o desenvolvimento-por conta dessa feauture.
//Primeiro arquivo que será executado, ponto de entrada que vai chamar os outros em cascata (bootstrap da aplicação)
//React.SctricMode - uma espécie de ajuda do react com mensagens de erro amigáveis (mostradas no console do navegador)


