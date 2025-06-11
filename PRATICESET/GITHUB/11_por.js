let product = [
    { name: "iPhone", category: "electronics" },
    { name: "Shirt", category: "clothing" },
    { name: "Laptop", category: "electronics" },
    { name: "Jeans", category: "clothing" }
]

function filterProducts(product,category){
    let result = []

    for (let i = 0; i < product.length; i++) {
        if(product[i].category == category){
            result.push(product[i])
        }
    }
    return result
}

let filtered = filterProducts(product,"electronics")

console.log(filtered);
