let prom1 = new Promise((resolve,reject) =>{
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

let prom2 = new Promise((resolve,reject) =>{
    let a = Math.random()
    if (a < 0.5) {
        reject("NO it cann't be 2");
    } else{
    setTimeout(() => {
        console.log("yes i am done 2");
        resolve("swastik 2")
    }, 2000);
    } 
})

let p3 = Promise.reject([prom1,prom2]).then (e => {
    console.log(e);
}).catch(arr => {
    console.log(arr);
    
})