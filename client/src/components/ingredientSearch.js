import React, {useContext} from 'react'
import { IngredientSearchContext } from '../context/ingredientSearchProvider'

export default function IngredientSearch (props) {
  const [handleIngredientChange, handleIngredientSubmit, ingredientState] = useContext(IngredientSearchContext)

  return (
    <div>
      <form onSubmit={handleIngredientSubmit}>
        <input onChange={handleIngredientChange} name='ingredients' value={ingredientState.ingredients} type='text' placeholder='Enter Ingredients'/>
        <button>Submit</button>
      </form>
    </div>
  )
}