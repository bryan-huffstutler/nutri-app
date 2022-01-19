import React, { useContext } from 'react'
import './App.css';
import RecipeList from './components/RecipeList'
import LeftBar from './components/Left Bar/LeftBar';
import { MasterContext } from './context/masterProvider'
import RightBar from './components/Right Bar/RightBar';

export default function App() {
  const { searchType } = useContext(MasterContext)
  

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
        <RightBar />
      </div>
    </div>
  );
}