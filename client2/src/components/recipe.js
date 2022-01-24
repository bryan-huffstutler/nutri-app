import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Modal from './Modal/Modal'

export default function Recipe(props) {
  const initState = {
    fav: false,
    added: false,
    title: "",
    readyIn: 0,
    summary: "",
    image: "",
    serves: 0,
    instructions: [],
    points: 0,
    ingredients: [],
    isOpen: false
  }
  const [recState, setRecState] = useState(initState)

  const userAxios = axios.create()

  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
  })

  function handleCheck(e) {
    if (e.target.checked) {
      let newRecipe = {
        recipeName: props.title,
        id: props.id,
        readyInMinutes: recState.readyIn,
        servings: recState.serves,
        ingredients: recState.ingredients,
        weightWatcherSmartPoints: recState.points,
        instructions: recState.instructions,
        image: recState.image
      }
      userAxios.post('/api/recipes', newRecipe)
        .then(res => {
          console.log(`Added ${newRecipe} to the DB`)
        })
      setRecState(prevRecState => ({
        ...prevRecState,
        fav: true
      }))
    }
  }

  function toggleModal() {
    setRecState(prevState => ({
      ...prevState,
      isOpen: !recState.isOpen
    }))
  }

  useEffect(async () => {
    var options = {
      method: 'GET',
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${props.id}/information`,
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538'
      }
    };
    await axios.request(options)
      .then(res => {
        console.log(res)
        res.data.extendedIngredients.map(x => {
          setRecState(prevState => ({
            ...prevState,
            ingredients: [...prevState.ingredients, x.original]
          }))
        })
        setRecState(prevState => ({
          ...prevState,
          summary: res.data.summary,
          instructions: res.data.analyzedInstructions[0].steps,
          image: res.data.image,
          readyIn: res.data.readyInMinutes,
          serves: res.data.servings,
          points: res.data.weightWatcherSmartPoints
        }))
      })
  }, [])

  return (
    <div className='single-recipe'>
      {/* <img src = {props.image}/> */}
      {/* {console.log(recState.instructions)} */}
      <img src={recState.image} />
      <h4>{props.title}</h4>
      <button onClick={toggleModal}>See Recipe</button>

      {recState.instructions && recState.isOpen ?
        <Modal toggleOpen={toggleModal}>

          <div><h2>{props.title}</h2></div>
          <div><h4>Summary</h4></div>
          Ready In: {recState.readyIn} minutes <br />
          Serves: {recState.serves} <br />
          Weight Watcher Points: {recState.points}<br />
          <h4>Ingredients:</h4> {recState.ingredients.map(x => {
            return <div>{x}</div>
          })}
          <div><h4>Instructions</h4></div>
          {recState.instructions.map(x => { return x.step + " " })}

        </Modal> : ""}

      <br />

      {recState.fav ? "" : <span><label>Save For Later: </label><input type='checkbox' onChange={handleCheck} /></span>}

      {recState.fav ? <FontAwesomeIcon icon={faHeart} /> : ""}
    </div>
  )
}