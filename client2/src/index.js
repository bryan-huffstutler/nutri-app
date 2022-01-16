import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import IngredientSearchProvider from './context/ingredientSearchProvider'
import MasterSearchProvider from './context/masterProvider'
import NameSearchProvider from './context/nameSearchProvider'

ReactDOM.render(
  <MasterSearchProvider>
    
      <IngredientSearchProvider>
        <NameSearchProvider>
          <App />
        </NameSearchProvider>
      </IngredientSearchProvider>
   
    
  </MasterSearchProvider>
  ,

  document.getElementById('root')
);