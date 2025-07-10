const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/about/:slug/', (req, res) => {
  res.send(`About us ${req.params.slug}`)
})
// app.get('/contact', (req, res) => {
//   res.send('contact us')
// })
// app.get('/blog', (req, res) => {
//   res.send('blog')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
