const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/employee");
mongoose.connect('mongodb://127.0.0.1:27017/conmpany');
const port = 3000

app.set('view engine', 'ejs');
const getRand = (arr)=>{
    let rno = Math.floor(Math.random() *(arr.length -1))
    return arr[rno]
}

app.get('/', (req, res) => {
    res.render('index');})

app.get('/Generator',  async (req, res) => {

    await Employee.deleteMany({})

    let randNames = ["Dev","sudip","kaushik","arnab","shiva","sandip","sujay",]
    let randLang = ["c++","c","java","JavaScript","Python"]
    let randCity = ["kolkata","mumbai","channia","Delhi"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRand(randNames),
            salary: Math.floor(Math.random()*260000),
            city: getRand(randCity),
            language: getRand(randLang),
            isManager: Math.random() > 0.5 ? true:false 
        })  
        
        console.log(e);
        
    }
    res.render('index');})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
