const express = require('express')
const app = express()
const morgan = require('morgan')
const expressJwt = require('express-jwt')

//Middleware
app.use(express.json());
app.use(morgan('dev'));

//Routes
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/user', require('./routes/userRouter.js'))

//Error handler
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "Unauthorized Error"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

//Server Initiation
app.listen(9000, () => {console.log('Server is Running on Port: 9000')})