let product = [
    { name: "iPhone", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Laptop", category: "electronics" },
    { name: "Jeans", category: "clothing" }
]
function filterProducts(product,catagory){
    let result = []
    
    for (let i = 0; i < product.length; i++) {
        if(product[i].category == catagory){
            result.push(product[i])
        }        
    }
    return result
}

let filter = filterProducts(product,"electronics")
console.log(filter);
