const express = require('express')
const ingSearchRouter = express.Router()
const axios = require('axios')

//Set up third party API call
// var options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
//   params: {
//     ingredients: ingredientState.ingredients.replace(/\s+/g, ''), //Remove spaces from ingredients for api call to function correctly
//     number: '5', //Number of results
//     ignorePantry: 'true',
//     ranking: '1'
//   },
//   headers: {//Required for api call
//     'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
//     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// }

//Get by Ingredients
//Async to await response from 3rd party API before sending results to client
ingSearchRouter.get('/:ingredients', async (req, res, next) => {
  const ingredients = req.params.ingredients
  if (!ingredients) {
    const error = new Error('You must provide ingredients')
    res.status(500)
    return next(error)
  }
  var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients',
    params: {
      ingredients: ingredients.replace(/\s+/g, ''), //Remove spaces from ingredients for api call to function correctly
      number: '5', //Number of results
      ignorePantry: 'true',
      ranking: '1'
    },
    headers: {//Required for api call
      'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  }
  //var set to save res.data inside of to send to client
  var data;
  //async to await response from 3rd party api
  async function getThem () {
    await axios.request(options)
    .then(res => {
      data = res.data //setting data to be the response from 3rd party api
    })
    .catch(err => console.log(err))
  }
  await getThem() //awaits response so var data is set
  res.status(200)
  res.send(data) //sends data back to client
})

module.exports = ingSearchRouter