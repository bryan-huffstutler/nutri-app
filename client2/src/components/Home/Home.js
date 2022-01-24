import React from 'react';
import LeftBar from '../Left Bar/LeftBar';
import RecipeList from '../RecipeList';
import RightBar from '../Right Bar/RightBar';
import Joke from './Joke';

export default function Home () {
  return (
    <div className='home-container'>
      <div className='left-view'>
        <h1>Recipe Searcher</h1>
        <LeftBar />
      </div>

      <div className='main-view'>
        <Joke />
        <RecipeList />
      </div>

      <div className='right-view'>
        <RightBar />
      </div>
    </div>
  )
};