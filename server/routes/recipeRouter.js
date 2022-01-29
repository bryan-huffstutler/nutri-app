const express = require('express')
const recipeRouter = express.Router()
const Recipe = require('../models/recipe')
const axios = require('axios')

//Get All by User
recipeRouter.get('/user/:userId', (req, res, next) => {
  Recipe.find({user: req.params.userId}, (err, recipes) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(recipes) 
  })  
})

//Get Recipe by Id
recipeRouter.get('/:recipeId', (req, res, next) => {
  Recipe.findOne({_id: req.params.recipeId}, (err, recipe) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(recipe)
  })
})

//Post Recipe
recipeRouter.post('/', (req, res, next) => {
  req.body.user = req.user._id
  const newRecipe = new Recipe(req.body)
  newRecipe.save((err, savedRecipe) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedRecipe)
  })
})

//Delete Recipe from DB
recipeRouter.delete('/delete/:recipeId', (req, res, next) => {
  Recipe.findOneAndDelete(
    {_id: req.params.recipeId},
    (err, deletedItem)=>{
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedItem} from the DB.`)
    }
  )
})

//Get Recipe
recipeRouter.get('/getfromsite/:site', async (req, res, next) => {
  const site = req.params.site
  // console.log(req.params.site)

  var data;
  async function getRecipe(){
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/extract',
      params: {url: site},
      headers: {
        'x-rapidapi-key': 'f1165055a3msh7132362fd8d5c00p1db19djsn65002ad70538',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    await axios.get(options)
      .then(res => {
        data = res.data
      })
      .catch(err => console.log(err))
  }
  
  await getRecipe()
  res.status(200)
  res.send(data)
 
})

module.exports = recipeRouter