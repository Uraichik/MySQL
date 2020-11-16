const express = require('express')
const app = express()
const port = 3000

app.get('/', function (request, response) {
  response.send('Hello Test')
})

app.get('/error', function (request, response) {
  response.status(404).send('NotFound')
})

app.get('/user/Zack', function (req, res) {
  res.send('name: Zack , age: 34 , car: BMW')
})

app.get('/user', function (request, response) {
  response.send(' name: Tom, age: 22 , car: ford')
})

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
})

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
})

app.listen(3000)

module.exports.app = app
