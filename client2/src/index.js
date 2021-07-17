import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IngredientSearchProvider from './context/ingredientSearchProvider'

ReactDOM.render(
  
  <IngredientSearchProvider>
    <App />
  </IngredientSearchProvider>,
    
  document.getElementById('root')
);