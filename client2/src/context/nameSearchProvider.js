import React, {useState} from 'react'
import axios from 'axios'
export const NameSearchContext = React.createContext()

export default function NameSearchProvider (props) {
  const initState = {
    recipeName = ''
  }

  const [recipeState, setRecipeState] = useState(initState)

  function handleRecipeChange(e){
    const {name, value} = e.target
    setRecipeState(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleNameSubmit(e){
    e.preventDefault()
    axios.get(`/ingSearch/${ingredientState.ingredients}`)
    .then(res => {
      setRecipeState(prevInputs => ({
        ...prevInputs,
        recipeName: res.data
      }))
      console.log(res.data)
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <NameSearchContext.Provider value = {{...recipeState, handleRecipeChange}}>
      {props.children}
    </NameSearchContext.Provider>
  )
}