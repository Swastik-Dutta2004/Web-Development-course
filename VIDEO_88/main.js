const express = require('express')
const app = express()
const port = 30005
           
app.use(express.static('public'))

app.get('/:slug', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`hello ${req.params.slug}`)
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('contact us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
