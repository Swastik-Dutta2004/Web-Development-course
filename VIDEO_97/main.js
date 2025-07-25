const express = require('express')
const app = express()
const mongoose = require('mongoose');
await mongoose.connect('mongodb://127.0.0.1:27017/conmpany');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');})

app.get('/Generator', (req, res) => {
    res.render('index');})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
