import React, { useContext } from 'react'
import { MasterContext } from '../../context/masterProvider'
import {useNavigate} from 'react-router-dom'

import SavedRecipes from './SavedRecipes'

export default function Profile() {
  const { user, token, logout } = useContext(MasterContext)
  const navigate = useNavigate()

  function loginAfterSkip () {
    navigate("/")
  }

  if (user && token) {
    return (
      <div>
        <h1>Profile</h1>
        <h3>Hello @{user.username}!</h3>
        <button onClick={logout}>Logout</button>
        <SavedRecipes />
      </div>
    )
  } else {
    return (
      <div>
        <h2>You are not Logged In.</h2>
        <h2>You can still search for recipes...</h2>
        <h2>If you were to login, You could save recipes for later.</h2>
        <h2>The app would then utilize MongoDB to save your recipes, associate them with your username, and allow you to manage them.</h2>
        <button onClick={loginAfterSkip}>Login</button>
      </div>
    )
  }

}