import { Navigate } from "react-router-dom"
import React, { useContext } from 'react'
import Auth from './Auth'

function Protected(props) {
  
  return props.auth ? props.comp : <Auth/>

}

export default Protected