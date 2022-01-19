const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const recipeSchema = new Schema({
  recipeName: {
    type: String,
    required: true,
    lowercase: true
  },
  // user: {
  //   type: Schema.Types.ObjectId,
  //   required: true,
  //   lowercase: true
  // },
  sourceUrl: {
    type: String,
    required: true,
    lowercase: true
  },
  id: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Recipe", recipeSchema)