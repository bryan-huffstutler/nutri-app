import React, { useContext } from 'react'
import './App.css';
import RecipeList from './components/RecipeList'
import LeftBar from './components/Left Bar/LeftBar';
import { MasterContext } from './context/masterProvider'
import { IngredientSearchContext } from './context/ingredientSearchProvider';

export default function App() {
  const { searchType } = useContext(MasterContext)
  const {ingRecipes} = useContext(IngredientSearchContext)

  return (
    <div className="App">
      
      <div>
        <h1>Recipe Searcher</h1>
        <LeftBar />
      </div>
      
      <div>
        <RecipeList />
      </div>

      <div>

      </div>
    </div>
  );
}