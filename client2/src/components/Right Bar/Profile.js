import React, { useContext } from 'react'
import { MasterContext } from '../../context/masterProvider'

import SavedRecipes from './SavedRecipes'

export default function Profile() {
  const { user, logout } = useContext(MasterContext)

  return (
    <div>
      <h1>Profile</h1>
      <h3>Hello @{user.username}!</h3>
      <button onClick={logout}>Logout</button>
      <SavedRecipes />
    </div>
  )
}