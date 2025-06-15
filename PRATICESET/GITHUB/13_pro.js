let product = [
    {name: "shope", quantities: "5ps", price: "30" },
    {name: "shampoo", quantities: "1L", price: "450" },
    {name: "biscute", quantities: "1pa", price: "30" },
    {name: "oil", quantities: "1L", price: "300" },
    {name: "Rice", quantities: "1kg", price: "45" }
    
]

function calculateTotal (product){
    let total = 0 ;
    
    product.forEach(item => {
        let quantitynumber =  parseFloat(item.quantities)
        let prices = parseFloat(item.price)

        total += quantitynumber*prices
    });
    return total
}
let totalCost = calculateTotal(product)
console.log("Total Cost:",totalCost);
