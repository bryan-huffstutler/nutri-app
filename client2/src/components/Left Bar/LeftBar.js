import React from 'react'
import IngredientSearch from './IngredientSearch'
import SearchByName from './SearchByName'
import SearchPreferences from './SearchPreferences'

export default function LeftBar() {
  return (
    <div className='left-bar-content'>
      {/* <IngredientSearch /> */}
      {/* <SearchPreferences /> */}
      <SearchByName />
    </div>
  )
}