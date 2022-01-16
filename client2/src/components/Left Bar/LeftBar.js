import React from 'react'
import IngredientSearch from './IngredientSearch'
import SearchByName from './SearchByName'

export default function LeftBar () {
  return (
    <div>
      <IngredientSearch />
      <SearchByName />
    </div>
  )
}