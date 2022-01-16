import React, {useContext} from 'react'
import { NameSearchContext } from "../context/nameSearchProvider"
import Recipe from './Recipe'

export default function NameRecipes(props) {
  const {nameSearchRecipes} = useContext(NameSearchContext)
  
  return (
    <div>
      {nameSearchRecipes.map(x => {
        return <Recipe key = {x.id} image = {x.image} title = {x.title} sourceUrl={x.sourceUrl}/>
      })}
    </div>
  )
}