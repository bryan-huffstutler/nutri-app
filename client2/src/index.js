import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MasterSearchProvider from './context/masterProvider';
import SearchProvider from './context/searchProvider';

ReactDOM.render(
  <BrowserRouter>
    <MasterSearchProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </MasterSearchProvider>
  </BrowserRouter>,
  document.getElementById('root')
);