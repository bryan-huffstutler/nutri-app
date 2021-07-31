import { checkPropTypes } from 'prop-types';
import React, {useContext, useState} from 'react'
export const MasterContext = React.createContext();

export default function MasterProvider (props) {
  const initState = {
    recipes: [],
    favRecipe: {}
  }

  
  return (
    <MasterContext.Provider value = {{...master}}>
      {props.children}
    </MasterContext.Provider>
  )
}
