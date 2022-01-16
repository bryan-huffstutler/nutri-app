import React, {useContext} from 'react'
import { IngredientSearchContext } from '../context/ingredientSearchProvider'
import Recipe from './Recipe'

export default function RecipeList(props){
  const {ingRecipes} = useContext(IngredientSearchContext)
  console.log(ingRecipes)
  return (
    <div>
      {ingRecipes.map(x => {
        return <Recipe image = {x.image} title = {x.title}/>
      })
        
      }
    </div>
  )
}