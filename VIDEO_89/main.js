const express = require('express')
const { log } = require('util')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("hey it a get request");
  res.send('Hello World get!')
})

app.post('/', (req, res) => {
    console.log("hey it a post request");
  res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("hey it a put request");
  res.send('Hello World put!')
})

app.delete('/', (req, res) => {
    console.log("hey it a delete request");
  res.send('Hello World delete !')
})
app.get("/index", (req, res) => {
    console.log("hey it a index request");
  res.sendFile('template/index.html',{root:__dirname})
})

app.get('/api', (req, res) => {
  res.json({a:1,b:2,c:3,d:4,name: ["swa","dut"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
