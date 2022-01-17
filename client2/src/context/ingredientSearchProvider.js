import React, { useState, useContext } from 'react'
import axios from 'axios'
import { NameSearchContext } from './nameSearchProvider'
import resetState from './masterProvider'
export const IngredientSearchContext = React.createContext()

export default function IngredientSearchProvider(props) {
  const initState = {
    ingredients: '',
    ingRecipes: []
  }

  const [ingredientState, setIngredientState] = useState(initState)

  function handleIngredientChange(e) {
    const { name, value } = e.target
    setIngredientState(prevInputs => ({
      ...prevInputs,
      [name]: value
    })) 
  }

  function handleIngredientSubmit(e) {
    e.preventDefault()
    axios.get(`/ingSearch/${ingredientState.ingredients}`)
      .then(res => {
        setIngredientState(prevInputs => ({
          ...prevInputs,
          ingRecipes: res.data
        }))
      })
      .then(res => {
        setIngredientState(prevInputs => ({
          ...prevInputs,
          ingredients: ''
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function resetIngSearchState() {
    setIngredientState(prevInputs => ({
      ingredients: '',
      ingRecipes: []
    }))
  }

  return (
    <IngredientSearchContext.Provider value={{ ...ingredientState, handleIngredientChange, handleIngredientSubmit, resetIngSearchState }}>
      {props.children}
    </IngredientSearchContext.Provider>
  )
}