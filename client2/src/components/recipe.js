import React, {useState, useEffect} from 'react'
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
  
  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
    params: `${props.sourceUrl}`,
    headers: {
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538'
    } 
  }
  // const data = await axios.request(options)

  //trying to get useEffect to call the extract recipe api call on each recipe to gain access to the recipe info for a popup
  useEffect(() => {
    (async () => {
      await axios.request(options)
      .then(res => {
        console.log(res)
        setRecState(prevState => ({
          ...prevState,
          title: res.data.title,
          readyIn: res.data.readyInMinutes,
          summary: res.data.summary,
          image: res.data.image,
          instructions: res.data.instructions
        }))
      })
    })()
    
  }, [])
  console.log(recState)
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
  }}

  return (
    <div>
      {/* <img src = {props.image}/> */}

      <h4>{props.title}</h4>
      <h5>See Recipe</h5>
      {/* <a target="blank" href={props.sourceUrl}>See Recipe</a> */}

      {recState.fav ? "": <span><label>Save For Later: </label><input type='checkbox' onChange={handleCheck} /></span>}

      <FontAwesomeIcon icon={faHeart} />
    </div>
  )
}