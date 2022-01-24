import React, { useState, useContext } from 'react'
import axios from 'axios'
// import { IngredientSearchContext } from './ingredientSearchProvider'
export const NameSearchContext = React.createContext()

export default function NameSearchProvider(props) {
  const initState = {
    recipeName: '',
    nameSearchRecipes: []
  }
  // const { resetIngredientState } = useContext(IngredientSearchContext)
  const [recipeState, setRecipeState] = useState(initState)

  function handleRecipeChange(e) {
    const { name, value } = e.target
    setRecipeState(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleNameSubmit(e) {
    e.preventDefault()
    axios.get(`/api/searchByName/${recipeState.recipeName}`)
      .then(res => {
        setRecipeState(prevInputs => ({
          ...prevInputs,
          nameSearchRecipes: res.data.results
        }))
      })
      .then(res => {
        setRecipeState(prevInputs => ({
          ...prevInputs,
          recipeName: ''
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function resetNameSearchState() {
    setRecipeState(prevInputs => ({
      recipeName: '',
      nameSearchRecipes: []
    }))
  }

  return (
    <NameSearchContext.Provider value={{ ...recipeState, handleRecipeChange, handleNameSubmit, resetNameSearchState }}>
      {props.children}
    </NameSearchContext.Provider>
  )
}