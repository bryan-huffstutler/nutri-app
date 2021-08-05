import React, {useContext, useState} from 'react'
export const MasterContext = React.createContext();

export default function MasterProvider (props) {
  const initState = {
    recipes: [],
    favRecipe: {}
  }

  const [master, setMasterState] = useState(initState)

  function handleMasterChange(e){
    const {name, value} = e.target
    setMasterState(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  
  return (
    <MasterContext.Provider value = {{...master, handleMasterChange}}>
      {props.children}
    </MasterContext.Provider>
  )
}
