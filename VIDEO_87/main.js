
const { error } = require("console");
const fs = require("fs");
console.log("starting");

fs.writeFile("swastik.txt", "swa is a good boy",() => {
    console.log("done writing");
    fs.readFile("swastik.txt",(error,data) => {
        console.log(error,data.toString());
    })
    fs.appendFile("swastik.txt", "swastikdutttasckehkolsoi", (e, d) => {
        console.log(d);
        
    })
});


console.log("ending");
