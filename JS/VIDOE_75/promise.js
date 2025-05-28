let porm1 = new Promise((resolve,reject) =>{
    let a = Math.random()
    if (a < 0.5) {
        reject("NO it cann't be");
    } else{
    setTimeout(() => {
        console.log("yes i am done ");
        resolve("swastik")
    }, 2000);
    } 
})

porm1.then((a) =>{
    console.log(a); 
}).catch((err) => {
    console.log(err);
})
