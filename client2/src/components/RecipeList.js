import React, {useContext} from 'react'
import { IngredientSearchContext } from '../context/ingredientSearchProvider'
import { NameSearchContext } from '../context/nameSearchProvider'
import IngRecipes from './IngRecipes'
import NameRecipes from './NameRecipes'

export default function RecipeList(props){
  
  const {ingRecipes} = useContext(IngredientSearchContext)
  const {nameSearchRecipes} = useContext(NameSearchContext)

  return (
    <div>
      {ingRecipes ? <IngRecipes /> : ""}
      {nameSearchRecipes ? <NameRecipes /> : ""}
    </div>
  )
}