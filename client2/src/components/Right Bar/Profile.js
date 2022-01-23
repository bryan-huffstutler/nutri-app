import React, { useContext } from 'react'
import { MasterContext } from '../../context/masterProvider'
import Favorites from './Favorites'
import SavedRecipes from './SavedRecipes'

export default function Profile() {
  const { user, logout } = useContext(MasterContext)

  return (
    <div>
      <h1>Profile</h1>
      <h3>Hello @{user.username}!</h3>
      <Favorites />
      <SavedRecipes />
      <button onClick={logout}>Logout</button>
    </div>
  )
}