import React, { useState, useContext } from 'react'
import { MasterContext } from '../../context/masterProvider'
import AuthForm from './AuthForm'

export default function Auth() {
  const initInputs = { username: "", password: "" }

  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg, resetAuthErr } = useContext(MasterContext)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e) {
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e) {
    e.preventDefault()
    login(inputs)
  }

  function toggleForm() {
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return (
    <div className="auth-container">
      <div className='auth-form-container'>
        <h1>Nutri-App</h1>
        {!toggle ?
          <>
            <AuthForm
              handleChange={handleChange}
              handleSubmit={handleLogin}
              inputs={inputs}
              btnText="Login"
              errMsg={errMsg}
            />
            <button className='button' onClick={() => toggleForm()}>Not a member?</button>
          </>
          :
          <>
            <AuthForm
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign Up"
              errMsg={errMsg}
            />
            <button className='button' onClick={() => toggleForm()}>Already a member?</button>
          </>
        }
      </div>
    </div>
  )
}