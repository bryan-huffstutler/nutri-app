import React, { useContext } from 'react'
import { SearchContext } from "../context/searchProvider"
import Recipe from './Recipe'

export default function NameRecipes(props) {
  const { nameSearchRecipes } = useContext(SearchContext)
  
  return (
    <div>
      {nameSearchRecipes.map(x => {
        return <Recipe key={x.id} id={x.id} image={x.image} title={x.title} sourceUrl={x.sourceUrl} />
      })}
    </div>
  )
}