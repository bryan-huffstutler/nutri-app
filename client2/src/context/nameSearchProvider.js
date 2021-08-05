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

  return (
    <NameSearchContext.Provider value = {{}}>
      {props.children}
    </NameSearchContext.Provider>
  )
}