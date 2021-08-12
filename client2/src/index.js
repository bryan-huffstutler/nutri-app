import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IngredientSearchProvider from './context/ingredientSearchProvider'
import MasterSearchProvider from './context/masterProvider'

ReactDOM.render(
  <MasterSearchProvider>
    <IngredientSearchProvider>
      <App />
    </IngredientSearchProvider>
  </MasterSearchProvider>
  ,

  document.getElementById('root')
);