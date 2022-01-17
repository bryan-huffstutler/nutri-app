import React, {useContext} from 'react'
import { SearchContext } from '../context/searchProdiver'
import NameRecipes from './NameRecipes'

export default function RecipeList(props){
  const {nameSearchRecipes} = useContext(SearchContext)
  
  return (
    <div>
      {nameSearchRecipes ? <NameRecipes /> : ""}
    </div>
  )
}