let pro1 = new Promise ((resolve,reject) => {
    let a = Math.random()
        if (a<0.5) {
           reject("It cannot supports");
           console.log(a);

        } else{
        setTimeout(() => {
            console.log("yes It done");
            resolve("swastik")
        },2000)
    }
})

pro1.then((arg) => {
    console.log(arg);  
}).catch((err) =>{
    console.log(err);
    
})
