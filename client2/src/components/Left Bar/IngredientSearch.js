import React, { useContext } from 'react'
import { SearchContext } from '../../context/searchProdiver'

export default function IngredientSearch(props) {
  const { handleStateChange, handleIngredientSubmit, ingredients } = useContext(SearchContext)

  return (
    <div>
      <form onSubmit={handleIngredientSubmit}>
        <input
          onChange={handleStateChange}
          name='ingredients'
          value={ingredients}
          type='text'
          placeholder='Enter Ingredients' />
        <button>Submit</button>
      </form>
    </div>
  )
}