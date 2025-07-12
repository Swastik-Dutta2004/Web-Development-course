const { error } = require("console");
const fs = require("fs")

console.log("starting");

fs.writeFile("swa.txt","the goat", ()=>{
    console.log("done");
    fs.readFile("swa.txt",(error,data) =>{
        console.log(error,data.toString());
    })
})

console.log("ending");




