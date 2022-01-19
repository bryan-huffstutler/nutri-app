const express = require('express')
const recipeRouter = express.Router()
const Recipe = require('../models/recipe')

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
  // req.body.user = req.user._id
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
recipeRouter.delete('/:recipeId', (req, res, next) => {
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

module.exports = recipeRouter