import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MasterSearchProvider from './context/masterProvider'
import SearchProvider from './context/searchProdiver'

ReactDOM.render(
  <MasterSearchProvider>

    <SearchProvider>
      <App />
    </SearchProvider>


  </MasterSearchProvider>
  ,

  document.getElementById('root')
);