import React, { useContext } from 'react'
import {NameSearchContext} from '../../context/nameSearchProvider'

export default function SearchByName(props) {
  const { handleRecipeChange, handleNameSubmit, recipeName } = useContext(NameSearchContext)

  return (
    <div>
      <form onSubmit={handleNameSubmit}>
        <input 
          onChange={handleRecipeChange} 
          name='recipeName' 
          value={recipeName} 
          type='text' 
          placeholder='Enter Recipe Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}