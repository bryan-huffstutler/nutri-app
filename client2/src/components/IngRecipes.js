import React, { useContext } from 'react'
import { SearchContext } from '../context/searchProdiver'
import Recipe from './Recipe'

export default function IngRecipes(props) {
  const { ingRecipes } = useContext(SearchContext)

  return (
    <div>
      {ingRecipes.map(x => {
        return <Recipe key={x.id} image={x.image} title={x.title} sourceUrl={x.sourceUrl} />
      })}
    </div>
  )
}