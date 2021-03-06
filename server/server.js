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
  // 'mongodb://localhost:27017/nutri-app',
  'mongodb+srv://bhuff8404:vectorkill581@nutri-app.zd4bf.mongodb.net/nutri-app',
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
app.use('/auth', require('./routes/authRouter.js'))
app.use('/ingSearch', require('./routes/ingSearchRouter.js'))
app.use('/searchByName', require('./routes/nameSearchRouter.js'))
app.use('/api/recipes', require('./routes/recipeRouter.js'))


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