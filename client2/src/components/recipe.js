import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import RecipePopup from './RecipePopup'
import axios from 'axios'

export default function Recipe(props) {
  const initState = {
    fav: false,
    added: false,
    title: "",
    readyIn: "",
    summary: "",
    image: "",
    instructions: ""
  }
  const [recState, setRecState] = useState(initState)

  function handleCheck(e) {
    if (e.target.checked) {
      let newRecipe = {
        recipeName: props.title,
        sourceUrl: props.sourceUrl,
        id: props.id
      }
      axios.post('/recipes', newRecipe)
        .then(res => {
          console.log(`Added ${newRecipe} to the DB`)
        })
      setRecState(prevRecState => ({
        ...prevRecState,
        fav: true
      }))
    }
  }

  useEffect(async () => {
    await axios.get(`/recipes/getfromsite/${props.sourceUrl}`)
      .then(res => console.log(res))
  }, [])

  return (
    <div>
      {/* <img src = {props.image}/> */}

      <h4>{props.title}</h4>
      <h5>See Recipe</h5>
      {/* <a target="blank" href={props.sourceUrl}>See Recipe</a> */}

      {recState.fav ? "" : <span><label>Save For Later: </label><input type='checkbox' onChange={handleCheck} /></span>}

      <FontAwesomeIcon icon={faHeart} />
    </div>
  )
}