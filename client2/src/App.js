import React, { useContext } from 'react'
import './App.css';
import Recipe from './components/recipe'
import { IngredientSearchContext } from './context/ingredientSearchProvider'
import IngredientSearch from './components/ingredientSearch'

export default function App() {
  const { recipes } = useContext(IngredientSearchContext)

  return (
    <div className="App">
      <IngredientSearch />
      {recipes ? recipes.map(rec => <Recipe {...rec} />) : ''}
    </div>
  );
}