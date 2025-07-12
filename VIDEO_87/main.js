const { error } = require("console");
const fs = require("fs")

console.log("starting");

fs.writeFile("swa.txt","Swastik is the goat", ()=>{
    console.log("done");
    fs.readFile("swa2.txt",(error,data) =>{
        console.log(error,data.toString());
    })
})

fs.appendFile("swa.txt"," and Fucking good boy", (e,d)=>{
    console.log(d);
    
})

console.log("ending");




