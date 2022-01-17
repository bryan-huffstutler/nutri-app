const express = require('express')
const nameSearchRouter = express.Router()
const axios = require('axios')
const { response } = require('express')

// 3rd party API SETUP
// var axios = require("axios").default;

// var options = {
//   method: 'GET',
//   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
//   params: {
//     query: 'burger',
//     diet: 'vegetarian',
//     excludeIngredients: 'coconut',
//     intolerances: 'egg, gluten',
//     number: '10',
//     offset: '0',
//     type: 'main course'
//   },
//   headers: {
//     'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
//     'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

//Get by NAME
nameSearchRouter.get('/:name/:diet', async (req, res, next) => {
  const name = req.params.name
  const diet = req.params.diet
  if (!name) {
    const error = new Error('You must provide a name')
    res.status(500)
    return next(error)
  }
  var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: name,
      diet: diet,
      number: '10'
    },
    headers: {
      'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  //var set to save res.data inside of to send to client
  var data;

  //async to await response from 3rd party api
  async function getItems() {
    await axios.request(options)
      .then(res => {
        data = res.data //setting data to be the response from 3rd party api
      })
      .catch(err => console.log(err));
  }
  await getItems() //awaits response so var data is set
  res.status(200)
  res.send(data) //sends data back to client

})

nameSearchRouter.get('/:name', async (req, res, next) => {
  const name = req.params.name

  if (!name) {
    const error = new Error('You must provide a name')
    res.status(500)
    return next(error)
  }
  var options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
    params: {
      query: name,
      number: '10'
    },
    headers: {
      'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
      'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };

  //var set to save res.data inside of to send to client
  var data;

  //async to await response from 3rd party api
  async function getItems() {
    await axios.request(options)
      .then(res => {
        data = res.data //setting data to be the response from 3rd party api
      })
      .catch(err => console.log(err));
  }
  await getItems() //awaits response so var data is set
  res.status(200)
  res.send(data) //sends data back to client

})
module.exports = nameSearchRouter