import React, { useContext } from 'react'
import './App.css';
import Recipe from './components/Recipe'
import IngredientSearch from './components/IngredientSearch'
import { MasterContext } from './context/masterProvider'

export default function App() {
  const { searchType } = useContext(MasterContext)

  return (
    <div className="App">
      <IngredientSearch />
    </div>
  );
}