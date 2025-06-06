let a = prompt("Enter the number")

let b = prompt("Enter the number")
if (isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

try {
    console.log(sum*x);
} catch (error) {
    console.log("this is unexpected");
    
}
