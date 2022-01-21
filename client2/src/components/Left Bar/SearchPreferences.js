import React, { useContext } from 'react'
import { SearchContext } from '../../context/searchProvider'

export default function SearchPreferences(props) {
  const { handleStateChange } = useContext(SearchContext)

  return (
    <div>

      <label>Diet: </label>
      <select id='selForm' defaultValue="" name="diet" onChange={handleStateChange}>
        <option value="">None</option>
        <option value="pescetarian">Pescetarian</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
      </select>

    </div>
  )
}