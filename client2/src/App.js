import React, { useContext } from 'react'
import './App.css';
import RecipeList from './components/RecipeList'
import IngredientSearch from './components/IngredientSearch'
import { MasterContext } from './context/masterProvider'
import { IngredientSearchContext } from './context/ingredientSearchProvider';

export default function App() {
  const { searchType } = useContext(MasterContext)
  const {ingRecipes} = useContext(IngredientSearchContext)

  return (
    <div className="App">
      <IngredientSearch />
      {ingRecipes ? <RecipeList /> : ""}
    </div>
  );
}