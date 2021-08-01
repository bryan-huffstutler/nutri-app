import React, { useState} from 'react'
import axios from 'axios'
export const IngredientSearchContext = React.createContext()

export default function IngredientSearchProvider (props) {
  const initState = {
    ingredients: '',
    ingRecipes: []
  }

  const [ingredientState, setIngredientState] = useState(initState)

  function handleIngredientChange(e){
    const {name, value} = e.target
    setIngredientState(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleIngredientSubmit(e){
    e.preventDefault()
    axios.get(`/ingSearch/${ingredientState.ingredients}`)
    .then(res => {
      setIngredientState(prevInputs => ({
        ...prevInputs,
        ingRecipes: res.data
      }))
      console.log(res.data)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <IngredientSearchContext.Provider value = {{...ingredientState, handleIngredientChange, handleIngredientSubmit}}>
      {props.children}
    </IngredientSearchContext.Provider> 
  )
}