function placeOrder (order) {
    return new Promise(resolve => {
        let delay = Math.floor(Math.random()*4000)+1000
        console.log(delay);
        
        setTimeout(() => {
            resolve("your order "+order+ "has been placed")
        }, delay);
    })
}
placeOrder("iPhone 17 Pro Max").then(msg => {
    console.log(msg)
}).catch(error => {
    console.log(error);
    
})
