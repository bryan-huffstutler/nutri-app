import React, { useState, useEffect } from 'react'

export default function Joke() {
  const [joke, setJoke] = useState('')
  const [toggle, setToggle] = useState(false)

  async function getJoke() {
    var axios = require("axios").default;

    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/jokes/random',
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538'
      }
    };

    await axios.request(options).then(function (response) {
      console.log(response.data.text)
      setJoke(prev => ({
        ...prev,
        joke: response.data.text
      }))
    }).catch(function (error) {
      console.error(error);
    });
  }

  function toggleView () {
    setToggle(prev => ({
      ...prev,
      toggle: !toggle.toggle
    }))
  }
  useEffect(async () => await getJoke(), [])

  return (
    <div className='joke-container'>
      <button onClick={toggleView}>Joke of the Day</button>
      {toggle.toggle ? <div><h2>Joke of the Day:</h2>
      <p>{joke.joke ? joke.joke : ''}</p></div> : ''}
      
    </div>
  )
}
