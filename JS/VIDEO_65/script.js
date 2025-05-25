let number = prompt("Enter a number")
let fact = 1
if (number == 0) {
    console.log("give some positive number💀");
}else{
for (let i = 1; i <= number; i++) {
    fact *= i;
    console.log(fact);
    
}
}
