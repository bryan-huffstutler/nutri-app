import React, { useState} from 'react'
import axios from 'axios'
export const IngredientSearchContext = React.createContext()

export default function IngredientSearchProvider (props) {
  const initState = {
    ingredients: '',
    toggleDisplay: false,
    recipes: []
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
    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
      params: {
        ingredients: ingredientState.ingredients,
        number: '5',
        ignorePantry: 'true',
        ranking: '1'
      },
      headers: {
        'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    }
    axios.request(options)
    .then(res => setIngredientState(prevInputs => ({
      ...prevInputs,
      recipes: res.data
    })))
    .then(setIngredientState(prevInputs => ({
      ...prevInputs,
      toggleDisplay: !ingredientState.toggleDisplay
    })))
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <IngredientSearchProvider value = {{...ingredientState, handleIngredientChange, handleIngredientSubmit}}>
      {props.children}
    </IngredientSearchProvider>
  )
}