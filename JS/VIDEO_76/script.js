function getData (){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(455)
        },3000)
    })
}

console.log("loading modules");

console.log("Do Sommething else");

console.log("Load data");

let data =  getData().then((data) =>{
    console.log(data);
    
})


