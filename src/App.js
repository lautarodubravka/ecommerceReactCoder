import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Green Craving" />
    </div>
  );
}

export default App;
