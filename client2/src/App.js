import React, { useContext } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import RecipeList from './components/RecipeList'
import LeftBar from './components/Left Bar/LeftBar';
import { MasterContext } from './context/masterProvider'
import RightBar from './components/Right Bar/RightBar';
import Protected from './components/Home/Protected';
import Home from './components/Home/Home'
import Auth from './components/Home/Auth'
import ErrorPage from './components/ErrorPage'


export default function App() {
  const { token } = useContext(MasterContext)

  return (
    <div className="App"> 

      <Routes>
        <Route exact path='/'
          element={
            <Protected
              auth={token}
              comp={<Home />}
            />}
        />

        <Route path='/skipped' 
        element={<Home />}/>

        <Route path='*' element={<ErrorPage />} />
      </Routes>





    </div>
  );
}