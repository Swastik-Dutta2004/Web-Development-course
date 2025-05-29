console.log("i am done");

let prom1 = new Promise ((resolve, reject) => {
    setTimeout(() =>{
        console.log("yes all is ok");
        resolve("swastik")
    },2000)
})

prom1.then((a) => {
    console.log(a); 
    
})

console.log("that it for today");
