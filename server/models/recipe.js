const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    lowercase: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    lowercase: true
  },
  readyInMinutes: {
    type: Number,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  servings: {
    type: Number,
    require: true
  },
  ingredients: {
    type: [],
    required: true
  },
  weightWatcherSmartPoints: {
    type: Number,
    required: true
  },
  instructions: {
    type: [],
    required: true
  },
  image: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("Recipe", recipeSchema)