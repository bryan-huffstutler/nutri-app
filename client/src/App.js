import React, {useState, useContext} from 'react'
import './App.css';
import Recipe from './components/recipe'
import { IngredientSearchContext } from './context/ingredientSearchProvider';
import IngredientSearch from './components/ingredientSearch';

export default function App() {
  const [ingredientState] = useContext(IngredientSearchContext)

  return (
    <div className="App">
      <IngredientSearch />
      {ingredientState.toggleDisplay ? ingredientState.recipes.map(rec => <Recipe {...rec} />) : ''}
    </div>
  );
}