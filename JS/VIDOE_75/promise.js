let porm1 = new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log("yes i am done");
        resolve("swastik")
    },2000)
})

porm1.then((a) =>{
    console.log(a);
    
})
