import React, { useContext } from 'react'
import { SearchContext } from '../../context/searchProdiver'
import SearchPreferences from './SearchPreferences'

export default function SearchByName(props) {
  const { handleStateChange, handleNameSubmit, recipeName } = useContext(SearchContext)

  function resetSelform() {
    let x = document.getElementById("selForm")
    x.value = ""
  }

  return (
    <div>
      <form onSubmit={handleNameSubmit}>
        <SearchPreferences />
        <input
          onChange={handleStateChange}
          name='recipeName'
          value={recipeName}
          type='text'
          placeholder='Enter Recipe Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}