import React, { useContext } from 'react'
import { IngredientSearchContext } from '../context/ingredientSearchProvider'
import Recipe from './Recipe'

export default function IngRecipes (props) {
  const {ingRecipes} = useContext(IngredientSearchContext)

  return (
    <div>
      {ingRecipes.map(x => {
        return <Recipe key = {x.id} image = {x.image} title = {x.title} sourceUrl={x.sourceUrl}/>
      })}
    </div>
  )
}