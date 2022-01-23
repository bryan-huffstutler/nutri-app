import React from 'react';
import LeftBar from '../Left Bar/LeftBar';
import RecipeList from '../RecipeList';
import RightBar from '../Right Bar/RightBar';

export default function Home () {
  return (
    <div className='home-container'>
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
  )
};