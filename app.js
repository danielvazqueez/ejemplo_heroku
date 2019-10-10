const express = require('express')
const app = express()

const path = require('path')

const publicDir = path.join(__dirname, 'public')

app.use(express.static(publicDir))

app.listen(3000, function() {
  console.log('Up and running')
})

app.get('', function(req, res) {
  res.send('hola mundo')
})

app.get('/about', function(req, res) {
  res.send('<h1>Un about muy interesante</h1>')
})

app.get('/contact', function(req, res) {
  res.send('Contact me ;)')
})

app.get('/misc', function(req, res) {
  res.json({
    dia: 'jueves',
    descripcion: 'casi viernes'
  })
})

app.get('*', function(req, res) {
  res.send('Oops!')
})