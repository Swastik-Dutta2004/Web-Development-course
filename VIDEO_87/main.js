const fs = require("fs")

console.log("starting");
// fs.writeFileSync("swastik.txt","swa is a good boy")
fs.writeFile("swastik.tx2","swa is a good boy", () =>{
    console.log("done");
    
})
console.log("ending");
