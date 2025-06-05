let pro1 = new Promise ((resolve,reject) => {
    let a = Math.random()
        if (a<0.5) {
           reject("It cannot supports ");
           console.log(a);

        } else{
        setTimeout(() => {
            console.log("yes It done");
            resolve("swastik")
        },2000)
    }
})

let pro2 = new Promise ((resolve,reject) => {
    let a = Math.random()
        if (a<0.5) {
           reject("It cannot supports 2");
           console.log(a);

        } else{
        setTimeout(() => {
            console.log("yes It done 2");
            resolve("swastik 2")
        },2000)
    }
})

let pro3 = Promise.all([pro1,pro2])
    pro3.then((arg) => {
        console.log(arg);  
    }).catch((err) =>{
        console.log(err);
        
    })
