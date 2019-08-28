import React from 'react';
import logo from './logo.svg';
import './App.css';
import DynamicMoviesList from './components/dynamic-movies-list';

function App() {
  return (
    <div>
      <h1>Renderizado condicional</h1>
      <DynamicMoviesList></DynamicMoviesList>
    </div>
  );
}

export default App;
