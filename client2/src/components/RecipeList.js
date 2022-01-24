import React, { useContext } from 'react'
import { SearchContext } from '../context/searchProvider'
import NameRecipes from './NameRecipes'

export default function RecipeList(props) {
  const { nameSearchRecipes } = useContext(SearchContext)

  return (
    <div>
      {nameSearchRecipes ? <NameRecipes /> : ""}
    </div>
  )
}