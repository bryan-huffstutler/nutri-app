const express = require('express')
const app = express()
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const mongoose = require('mongoose')
require('dotenv').config()

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Connection to MongoDB
mongoose.connect(
  'mongodb://localhost:27017/nutri-app',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
);

//Routes
app.use('/api', expressJwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/user', require('./routes/userRouter.js'))
app.use('/api/ingSearch', require('./routes/ingSearchRouter.js'))
app.use('/searchByName', require('./routes/nameSearchRouter.js'))
app.use('/recipes', require('./routes/recipeRouter.js'))

//Error handler
app.use((err, req, res, next) => {
  console.log(err)
  if (err.name === "Unauthorized Error") {
    res.status(err.status)
  }
  return res.send({ errMsg: err.message })
})

//Server Initiation
app.listen(9000, () => { console.log('Server is Running on Port: 9000') })