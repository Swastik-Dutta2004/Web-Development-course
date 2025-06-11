async function brewCoffee (arr) {
    let order =  await Promise.all(
        arr.map(coffee =>{
            return new Promise(resolve =>{
                let delay = Math.floor(Math.random()*3000)+1000
                let min = Math.floor(delay/60)
                setTimeout(() => {
                    resolve(`Your ${coffee} has taken it will served within ${min} min`)
                }, delay);
            })
        })
    )
     return order
}

brewCoffee(["Ristretto","Espresso","Latte","Black Coffee"]).then(Orders => {
    console.log(Orders);
    
})
