const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  let siteName = "Adidas"
  let SiteSearch = "Search product"
  res.sendFile("templates/index.html",{root:__dirname})
})

app.get('/blog/:slug', (req, res) => {
  let blogName = "Adidas how its createrd"
  let blogSeach = "Waht they sell"
  res.sendFile("templates/index.html",{root:__dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
