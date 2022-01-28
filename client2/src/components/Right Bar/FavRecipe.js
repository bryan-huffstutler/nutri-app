import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import axios from 'axios'

export default function FavRecipe(props) {

  const [isOpen, setIsOpen] = useState(false)

  const userAxios = axios.create()
  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  function toggleModal() {
    setIsOpen(!isOpen)
  }

  function getRec() {
    props.getRecipes()
  }

  function deleteRecipe() {
    userAxios.delete(`/api/recipes/delete/${props.id}`)
      .then(
        getRec()
      )
      .catch(err => console.log(err))
  }

  return (
    <div className='fav-recipe'>

      <img src={props.image} />
      <h4>{props.recipeName}</h4>
      <button onClick={toggleModal}>See Recipe</button>
      <button onClick={deleteRecipe}>Delete</button>
      {isOpen ?
        <Modal
          toggleOpen={toggleModal}
        >
          <div><h2>{props.title}</h2></div>
          <div><h4>Summary</h4></div>
          Ready In: {props.readyIn} minutes <br />
          Serves: {props.serves} <br />
          Weight Watcher Points: {props.points}<br />
          <h4>Ingredients:</h4> {props.ingredients.map(x => {
            return <div>{x}</div>
          })}
          <div><h4>Instructions</h4></div>
          {props.instructions.map(x => { return x.step + " " })}
        </Modal> : ""}
    </div>
  )
}
